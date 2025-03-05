"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Clock, Calendar, Target, Zap, Award, TrendingUp, Lock } from "lucide-react"

// Sample badges data
const badges = [
  {
    id: 1,
    title: "Productivity Pioneer",
    description: "First week of consistent productivity",
    icon: Flame,
    unlocked: true,
    date: "March 10, 2023",
  },
  {
    id: 2,
    title: "Focus Champion",
    description: "Achieved 20 hours of deep focus in a week",
    icon: Target,
    unlocked: true,
    date: "April 5, 2023",
  },
  {
    id: 3,
    title: "Streak Master",
    description: "Maintained a 14-day productivity streak",
    icon: Flame,
    unlocked: false,
    progress: 50,
  },
  {
    id: 4,
    title: "Early Riser",
    description: "Started work before 7 AM for 10 days",
    icon: Clock,
    unlocked: false,
    progress: 30,
  },
  {
    id: 5,
    title: "Weekend Warrior",
    description: "Productive on weekends for a month",
    icon: Calendar,
    unlocked: true,
    date: "February 28, 2023",
  },
  {
    id: 6,
    title: "Distraction Slayer",
    description: "Zero distractions for a full week",
    icon: Zap,
    unlocked: false,
    progress: 15,
  },
  {
    id: 7,
    title: "Goal Crusher",
    description: "Exceeded daily goals for 30 days",
    icon: TrendingUp,
    unlocked: false,
    progress: 70,
  },
  {
    id: 8,
    title: "Productivity Legend",
    description: "Reached level 25",
    icon: Award,
    unlocked: false,
    progress: 48,
  },
]

export function BadgesGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {badges.map((badge) => (
        <Card key={badge.id} className={!badge.unlocked ? "opacity-70" : ""}>
          <CardHeader className="text-center pb-2">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-2">
              {badge.unlocked ? (
                <badge.icon className="h-8 w-8 text-primary" />
              ) : (
                <Lock className="h-8 w-8 text-muted-foreground" />
              )}
            </div>
            <CardTitle>{badge.title}</CardTitle>
            <CardDescription>{badge.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {badge.unlocked ? (
              <p className="text-sm text-muted-foreground">Unlocked on {badge.date}</p>
            ) : (
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{badge.progress}% progress</p>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${badge.progress}%` }}></div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

