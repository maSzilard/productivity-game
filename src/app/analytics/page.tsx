"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { HeatCalendar } from "@/components/heat-calendar"
import { TrendChart } from "@/components/trend-chart"
import { CategoryBreakdown } from "@/components/category-breakdown"
import { PersonalRecords } from "@/components/personal-records"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Analytics</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Tabs defaultValue="trends" className="mb-6">
          <TabsList>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="mt-6">
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

            <div className="grid gap-6 md:grid-cols-2">
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
          </TabsContent>

          <TabsContent value="categories" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
                <CardDescription>Time spent by category</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <CategoryBreakdown />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="records" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Records</CardTitle>
                <CardDescription>Your best productivity achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <PersonalRecords />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

