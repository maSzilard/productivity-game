import { NextResponse } from 'next/server'

interface DailyData {
  date: string
  productive: number
  neutral: number
  distracting: number
}

interface TotalTime {
  productive: number
  neutral: number
  distracting: number
}

function getDateRange(period: string) {
  const today = new Date()
  let startDate = new Date()

  switch (period) {
    case 'today':
      return {
        start: today.toISOString().split('T')[0],
        end: today.toISOString().split('T')[0]
      }
    case 'week':
      // Calculate last Monday
      const day = today.getDay()
      const diff = today.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
      startDate.setDate(diff)
      return {
        start: startDate.toISOString().split('T')[0],
        end: today.toISOString().split('T')[0]
      }
    case 'month':
      // Set to first day of current month
      startDate.setDate(1)
      return {
        start: startDate.toISOString().split('T')[0],
        end: today.toISOString().split('T')[0]
      }
    default:
      return {
        start: today.toISOString().split('T')[0],
        end: today.toISOString().split('T')[0]
      }
  }
}

function calculateStreak(dailyData: DailyData[]) {
  let currentStreak = 0
  let bestStreak = 0
  let tempStreak = 0

  // Sort data by date in ascending order
  const sortedData = dailyData.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  sortedData.forEach(day => {
    const isProductive = day.productive > day.distracting
    if (isProductive) {
      tempStreak++
      currentStreak = tempStreak
      bestStreak = Math.max(bestStreak, tempStreak)
    } else {
      tempStreak = 0
    }
  })

  return {
    currentStreak,
    bestStreak,
    totalDays: sortedData.length,
    productiveDays: sortedData.filter(day => day.productive > day.distracting).length
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get('period') || 'today'
  const apiKey = process.env.RESCUETIME_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const { start, end } = getDateRange(period)
  const API_URL = `https://www.rescuetime.com/anapi/data?key=${apiKey}&perspective=rank&restrict_kind=productivity&restrict_begin=${start}&restrict_end=${end}&format=json`

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    // Group time by productivity level and date
    const dailyData = data.rows.reduce((acc: DailyData[], row: any[]) => {
      const date = row[0]
      const seconds = row[1]
      const productivityLevel = row[3]

      const existingDay = acc.find(d => d.date === date)
      if (existingDay) {
        if (productivityLevel >= 1) {
          existingDay.productive += seconds
        } else if (productivityLevel === 0) {
          existingDay.neutral += seconds
        } else {
          existingDay.distracting += seconds
        }
      } else {
        acc.push({
          date,
          productive: productivityLevel >= 1 ? seconds : 0,
          neutral: productivityLevel === 0 ? seconds : 0,
          distracting: productivityLevel < 0 ? seconds : 0
        })
      }
      return acc
    }, [])

    // Calculate total time for the period
    const totalTime = dailyData.reduce((acc: TotalTime, day: DailyData) => ({
      productive: acc.productive + day.productive,
      neutral: acc.neutral + day.neutral,
      distracting: acc.distracting + day.distracting
    }), { productive: 0, neutral: 0, distracting: 0 })

    // Calculate streak and records
    const streak = calculateStreak(dailyData)

    // Calculate monthly records
    const records = {
      mostProductiveDay: dailyData.reduce((max, day) => 
        day.productive > max.productive ? day : max
      , { date: '', productive: 0, neutral: 0, distracting: 0 }),
      averageProductiveHours: dailyData.reduce((sum, day) => sum + day.productive, 0) / (dailyData.length || 1) / 3600,
      totalDays: dailyData.length,
      productiveDays: streak.productiveDays,
      bestStreak: streak.bestStreak
    }

    return NextResponse.json({
      ...totalTime,
      total: totalTime.productive + totalTime.neutral + totalTime.distracting,
      streak,
      records
    })
  } catch (error) {
    console.error('Error fetching RescueTime data:', error)
    return NextResponse.json({ error: 'Failed to fetch RescueTime data' }, { status: 500 })
  }
} 