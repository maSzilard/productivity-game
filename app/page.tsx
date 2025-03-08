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

export default function Dashboard() {
  const setActiveTab = useState("today")[1]

  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-medium">7 Day Streak</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">1,250 Points</span>
            </div>
            <Button size="sm">Check In</Button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Tabs defaultValue="today" className="mb-6">
          <TabsList>
            <TabsTrigger value="today" onClick={() => setActiveTab("today")}>
              Today
            </TabsTrigger>
            <TabsTrigger value="week" onClick={() => setActiveTab("week")}>
              This Week
            </TabsTrigger>
            <TabsTrigger value="month" onClick={() => setActiveTab("month")}>
              This Month
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Productive Hours</CardDescription>
              <CardTitle className="text-2xl">5.2 / 8</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">12%</span>
                <span className="ml-1">vs yesterday</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Focus Score</CardDescription>
              <CardTitle className="text-2xl">78/100</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                <span className="text-red-500 font-medium">5%</span>
                <span className="ml-1">vs last week</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Achievements</CardDescription>
              <CardTitle className="text-2xl">3 New</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Trophy className="mr-1 h-4 w-4 text-yellow-500" />
                <span>12 total this month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Improvement</CardDescription>
              <CardTitle className="text-2xl">+15%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                <span>vs 30 day average</span>
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
              <CardDescription>5.2 hours of 8 hour goal</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <CircularProgressIndicator value={65} size={180} strokeWidth={12} />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">2.8 hours left to reach your goal</p>
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
        </div>
      </div>
    </div>
  )
}

