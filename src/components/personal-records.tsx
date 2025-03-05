"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar, Flame, Clock } from "lucide-react"

// Sample data for personal records
const records = [
  {
    title: "Best Day",
    value: "8.5 hours",
    date: "March 15, 2023",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Best Week",
    value: "42 hours",
    date: "Feb 12-18, 2023",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    title: "Longest Streak",
    value: "14 days",
    date: "Jan 5-19, 2023",
    icon: Flame,
    color: "text-orange-500",
  },
  {
    title: "Longest Focus Session",
    value: "3.5 hours",
    date: "April 2, 2023",
    icon: Clock,
    color: "text-green-500",
  },
]

export function PersonalRecords() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {records.map((record) => (
        <Card key={record.title} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className={`mb-2 rounded-full p-3 ${record.color} bg-muted`}>
                <record.icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium">{record.title}</h3>
              <p className="text-2xl font-bold">{record.value}</p>
              <p className="text-sm text-muted-foreground">{record.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

