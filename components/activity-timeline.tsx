"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

// Sample data for the timeline
const timelineData = [
  { hour: "8 AM", productive: 45, neutral: 15, distracted: 0 },
  { hour: "9 AM", productive: 55, neutral: 5, distracted: 0 },
  { hour: "10 AM", productive: 40, neutral: 10, distracted: 10 },
  { hour: "11 AM", productive: 30, neutral: 15, distracted: 15 },
  { hour: "12 PM", productive: 10, neutral: 40, distracted: 10 },
  { hour: "1 PM", productive: 5, neutral: 50, distracted: 5 },
  { hour: "2 PM", productive: 50, neutral: 10, distracted: 0 },
  { hour: "3 PM", productive: 45, neutral: 10, distracted: 5 },
  { hour: "4 PM", productive: 35, neutral: 15, distracted: 10 },
  { hour: "5 PM", productive: 30, neutral: 20, distracted: 10 },
]

export function ActivityTimeline() {
  const [hoveredHour, setHoveredHour] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span>Productive</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-400"></div>
          <span>Neutral</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <span>Distracted</span>
        </div>
      </div>

      <div className="relative h-20">
        {/* Time labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
          {timelineData.map((item) => (
            <div key={item.hour} className="text-center">
              {item.hour}
            </div>
          ))}
        </div>

        {/* Timeline bars */}
        <div className="absolute top-0 left-0 right-0 flex h-14 items-end justify-between gap-1">
          {timelineData.map((item) => (
            <div
              key={item.hour}
              className="flex flex-1 flex-col-reverse h-full"
              onMouseEnter={() => setHoveredHour(item.hour)}
              onMouseLeave={() => setHoveredHour(null)}
            >
              {/* Distracted */}
              {item.distracted > 0 && (
                <div className="w-full bg-red-400 rounded-t-sm" style={{ height: `${item.distracted}%` }}></div>
              )}

              {/* Neutral */}
              {item.neutral > 0 && <div className="w-full bg-blue-400" style={{ height: `${item.neutral}%` }}></div>}

              {/* Productive */}
              {item.productive > 0 && (
                <div className="w-full bg-green-500 rounded-t-sm" style={{ height: `${item.productive}%` }}></div>
              )}

              {/* Hover tooltip */}
              {hoveredHour === item.hour && (
                <div className="absolute bottom-full mb-2 -translate-x-1/2 transform">
                  <Card className="p-2 text-xs">
                    <p className="font-medium">{item.hour}</p>
                    <p className="text-green-500">Productive: {item.productive}%</p>
                    <p className="text-blue-400">Neutral: {item.neutral}%</p>
                    <p className="text-red-400">Distracted: {item.distracted}%</p>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

