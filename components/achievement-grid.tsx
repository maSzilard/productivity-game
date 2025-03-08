"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Flame, Clock, Calendar, Target, Zap, Award, TrendingUp, CheckCircle } from "lucide-react"

// Sample achievements data
const achievements = [
  {
    id: 1,
    title: "Early Bird",
    description: "Start work before 8 AM for 5 days",
    icon: Clock,
    progress: 100,
    completed: true,
    type: "Habit",
    xp: 100,
  },
  {
    id: 2,
    title: "Focus Master",
    description: "Complete 10 hours of deep work in a day",
    icon: Target,
    progress: 80,
    completed: false,
    type: "Milestone",
    xp: 200,
  },
  {
    id: 3,
    title: "Streak Warrior",
    description: "Maintain a 7-day productivity streak",
    icon: Flame,
    progress: 100,
    completed: true,
    type: "Consistency",
    xp: 150,
  },
  {
    id: 4,
    title: "Weekend Warrior",
    description: "Be productive for 4 hours on a weekend",
    icon: Calendar,
    progress: 50,
    completed: false,
    type: "Explorer",
    xp: 100,
  },
  {
    id: 5,
    title: "Productivity Ninja",
    description: "Zero distractions for 3 consecutive days",
    icon: Zap,
    progress: 33,
    completed: false,
    type: "Habit",
    xp: 250,
  },
  {
    id: 6,
    title: "Overachiever",
    description: "Exceed your daily goal by 50% for 3 days",
    icon: TrendingUp,
    progress: 66,
    completed: false,
    type: "Milestone",
    xp: 200,
  },
  {
    id: 7,
    title: "Night Owl",
    description: "3 hours of productive work after 8 PM",
    icon: Clock,
    progress: 100,
    completed: true,
    type: "Explorer",
    xp: 100,
  },
  {
    id: 8,
    title: "Marathon Worker",
    description: "Work productively for 8 hours straight",
    icon: Award,
    progress: 25,
    completed: false,
    type: "Milestone",
    xp: 300,
  },
]

export function AchievementGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className={achievement.completed ? "border-primary" : ""}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                <achievement.icon className="h-5 w-5 text-primary" />
              </div>
              <Badge variant={achievement.completed ? "default" : "outline"}>{achievement.type}</Badge>
            </div>
            <CardTitle className="mt-2">{achievement.title}</CardTitle>
            <CardDescription>{achievement.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">{achievement.progress}% complete</span>
              {achievement.completed && <CheckCircle className="h-4 w-4 text-primary" />}
            </div>
            <Progress value={achievement.progress} className="h-2" />
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              {achievement.completed ? `Earned ${achievement.xp} XP` : `Worth ${achievement.xp} XP`}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

