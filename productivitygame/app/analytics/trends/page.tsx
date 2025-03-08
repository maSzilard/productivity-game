"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { HeatCalendar } from "@/components/heat-calendar"
import { TrendChart } from "@/components/trend-chart"

export default function TrendsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Trends</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <div className="grid gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Productivity</CardTitle>
              <CardDescription>Heat map showing productivity intensity by day</CardDescription>
            </CardHeader>
            <CardContent>
              <HeatCalendar />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Productivity Trends</CardTitle>
              <CardDescription>Weekly and monthly patterns</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <TrendChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

