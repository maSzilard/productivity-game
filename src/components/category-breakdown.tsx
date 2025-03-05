"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

// Sample data for the category breakdown
const categoryData = [
  { name: "Productive", value: 65, color: "#22c55e" },
  { name: "Neutral", value: 25, color: "#60a5fa" },
  { name: "Distracting", value: 10, color: "#f87171" },
]

export function CategoryBreakdown() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" align="center" layout="horizontal" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

