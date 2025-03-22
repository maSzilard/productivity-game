import { useState, useEffect } from 'react'

interface RescueTimeData {
  productive: number
  neutral: number
  distracting: number
  total: number
  streak: {
    currentStreak: number
    bestStreak: number
    totalDays: number
    productiveDays: number
  }
  records: {
    mostProductiveDay: {
      date: string
      productive: number
      neutral: number
      distracting: number
    }
    averageProductiveHours: number
    totalDays: number
    productiveDays: number
    bestStreak: number
  }
}

export function useRescueTime(period: 'today' | 'week' | 'month') {
  const [data, setData] = useState<RescueTimeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(`/api/rescuetime?period=${period}`)
        if (!response.ok) {
          throw new Error('Failed to fetch RescueTime data')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [period])

  return { data, loading, error }
} 