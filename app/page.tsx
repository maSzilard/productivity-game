"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ArrowUpRight, ArrowDownRight, Flame, Trophy, TrendingUp, Clock, Calendar, Bell } from "lucide-react"
import { CircularProgressIndicator } from "@/components/circular-progress"
import { ActivityTimeline } from "@/components/activity-timeline"
import { useRescueTime } from "@/hooks/use-rescuetime"

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours}h ${minutes}m`
}

function getDateRangeText(period: "today" | "week" | "month") {
  const today = new Date()
  const startDate = new Date()

  switch (period) {
    case "today":
      return today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    case "week":
      // Calculate last Monday
      const day = today.getDay()
      const diff = today.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
      startDate.setDate(diff)
      return `${startDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })} - ${today.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })}`
    case "month":
      startDate.setMonth(today.getMonth() - 1)
      return `${startDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      })} - ${today.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      })}`
  }
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"today" | "week" | "month">("today")
  const { data, loading, error } = useRescueTime(activeTab)

  const productivePercentage = data ? (data.productive / data.total) * 100 : 0
  const dateRangeText = getDateRangeText(activeTab)

  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">{dateRangeText}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-medium">
                {loading ? "Loading..." : data ? `${data.streak.currentStreak} Day Streak` : "0 Day Streak"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">
                {loading ? "Loading..." : data ? `Best: ${data.streak.bestStreak} days` : "Best: 0 days"}
              </span>
            </div>
            <Button size="sm">Check In</Button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Tabs defaultValue="today" className="mb-6" onValueChange={(value) => setActiveTab(value as "today" | "week" | "month")}>
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Productive Hours</CardDescription>
              <CardTitle className="text-2xl">
                {loading ? "Loading..." : data ? formatTime(data.productive) : "0h 0m"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">{productivePercentage.toFixed(1)}%</span>
                <span className="ml-1">of total time</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Neutral Hours</CardDescription>
              <CardTitle className="text-2xl">
                {loading ? "Loading..." : data ? formatTime(data.neutral) : "0h 0m"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4 text-yellow-500" />
                <span className="text-yellow-500 font-medium">
                  {data ? ((data.neutral / data.total) * 100).toFixed(1) : "0"}%
                </span>
                <span className="ml-1">of total time</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Distracting Hours</CardDescription>
              <CardTitle className="text-2xl">
                {loading ? "Loading..." : data ? formatTime(data.distracting) : "0h 0m"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                <span className="text-red-500 font-medium">
                  {data ? ((data.distracting / data.total) * 100).toFixed(1) : "0"}%
                </span>
                <span className="ml-1">of total time</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Time</CardDescription>
              <CardTitle className="text-2xl">
                {loading ? "Loading..." : data ? formatTime(data.total) : "0h 0m"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="mr-1 h-4 w-4 text-blue-500" />
                <span>Tracked time</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Your productivity periods throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityTimeline />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Productivity</CardTitle>
              <CardDescription>
                {loading ? "Loading..." : data ? `${formatTime(data.productive)} of ${formatTime(data.total)} goal` : "0h 0m of 0h 0m goal"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <CircularProgressIndicator value={productivePercentage} size={180} strokeWidth={12} />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {loading ? "Loading..." : data ? `${formatTime(data.total - data.productive)} left to reach your goal` : "0h 0m left to reach your goal"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Challenges</CardTitle>
              <CardDescription>Active challenges with deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">5 Day Streak</span>
                    <span className="text-sm text-muted-foreground">3/5 days</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">10 Hour Focus</span>
                    <span className="text-sm text-muted-foreground">7.5/10 hours</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">No Distractions</span>
                    <span className="text-sm text-muted-foreground">2/3 days</span>
                  </div>
                  <Progress value={66} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Latest badges and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">5 Day Streak</p>
                    <p className="text-sm text-muted-foreground">Maintained productivity for 5 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Deep Focus</p>
                    <p className="text-sm text-muted-foreground">2 hours of uninterrupted work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Weekly Goal</p>
                    <p className="text-sm text-muted-foreground">Completed 30 hours of productive time</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Reminders</CardTitle>
              <CardDescription>Scheduled productivity sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Today&apos;s Reminders</p>
                    <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Project Deadline</p>
                    <p className="text-sm text-muted-foreground">Tomorrow, 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Weekly Review</p>
                    <p className="text-sm text-muted-foreground">Friday, 3:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Personal Records</CardTitle>
              <CardDescription>Your best performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loading ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : data ? (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium">Best Streak</span>
                      </div>
                      <span className="text-2xl font-bold">{data.records.bestStreak} days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium">Most Productive Day</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold">
                          {formatTime(data.records.mostProductiveDay.productive)}
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {new Date(data.records.mostProductiveDay.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">Daily Average</span>
                      </div>
                      <span className="text-2xl font-bold">
                        {data.records.averageProductiveHours.toFixed(1)}h
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-500" />
                        <span className="text-sm font-medium">Productive Days</span>
                      </div>
                      <span className="text-2xl font-bold">
                        {data.records.productiveDays}/{data.records.totalDays}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground">
                    No records available
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

