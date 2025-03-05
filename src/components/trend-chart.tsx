"use client"

import { Line } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, CartesianGrid, XAxis, YAxis } from "recharts"

// Generate sample data for the trend chart
const generateTrendData = () => {
  const data = []

  // Generate data for the last 7 days
  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    // Generate random productivity hours between 2 and 8
    const productiveHours = Math.random() * 6 + 2

    // Format the date as a string (e.g., "Mon 12")
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    })

    data.push({
      date: formattedDate,
      hours: Number.parseFloat(productiveHours.toFixed(1)),
    })
  }

  return data
}

const trendData = generateTrendData()

export function TrendChart() {
  return (
    <ChartContainer
      config={{
        hours: {
          label: "Productive Hours",
          color: "hsl(var(--chart-1))",
        },
      }}
    >
      <LineChart data={trendData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="hours"
          stroke="var(--color-hours)"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ChartContainer>
  )
}

