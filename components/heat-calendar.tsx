"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Generate sample data for the heat calendar
const generateCalendarData = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Get the first day of the month
  const firstDay = new Date(currentYear, currentMonth, 1)
  const startingDay = firstDay.getDay()

  // Get the number of days in the month
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const daysInMonth = lastDay.getDate()

  const calendarData = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    calendarData.push({ day: null, intensity: 0 })
  }

  // Add cells for each day of the month with random intensity
  for (let i = 1; i <= daysInMonth; i++) {
    // Generate a random intensity between 0 and 100
    const intensity = Math.floor(Math.random() * 101)
    calendarData.push({ day: i, intensity })
  }

  return { days, calendarData }
}

export function HeatCalendar() {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const { days, calendarData } = generateCalendarData()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getIntensityColor = (intensity: number) => {
    if (intensity === 0) return "bg-muted"
    if (intensity < 25) return "bg-green-100"
    if (intensity < 50) return "bg-green-300"
    if (intensity < 75) return "bg-green-500"
    return "bg-green-700"
  }

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          {monthNames[month]} {year}
        </h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {days.map((day) => (
          <div key={day} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}

        {/* Calendar cells */}
        {calendarData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "aspect-square rounded-md flex items-center justify-center",
              item.day ? getIntensityColor(item.intensity) : "bg-transparent",
            )}
          >
            {item.day && (
              <span className={cn("text-sm", item.intensity > 50 ? "text-white" : "text-foreground")}>{item.day}</span>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 text-sm">
        <span>Less</span>
        <div className="h-3 w-3 rounded-sm bg-green-100"></div>
        <div className="h-3 w-3 rounded-sm bg-green-300"></div>
        <div className="h-3 w-3 rounded-sm bg-green-500"></div>
        <div className="h-3 w-3 rounded-sm bg-green-700"></div>
        <span>More</span>
      </div>
    </div>
  )
}

