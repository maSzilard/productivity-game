"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Target, Zap } from "lucide-react"

// Sample challenges data
const challenges = [
  {
    id: 1,
    title: "5-Day Streak",
    description: "Maintain productivity for 5 consecutive days",
    icon: Calendar,
    progress: 60,
    daysLeft: 2,
    xp: 150,
    active: true,
  },
  {
    id: 2,
    title: "Deep Focus",
    description: "Complete 10 hours of deep work this week",
    icon: Target,
    progress: 70,
    daysLeft: 3,
    xp: 200,
    active: true,
  },
  {
    id: 3,
    title: "Early Riser",
    description: "Start work before 8 AM for 7 days",
    icon: Clock,
    progress: 43,
    daysLeft: 4,
    xp: 175,
    active: true,
  },
  {
    id: 4,
    title: "No Distractions",
    description: "Zero distractions for 3 consecutive days",
    icon: Zap,
    progress: 33,
    daysLeft: 2,
    xp: 250,
    active: true,
  },
  {
    id: 5,
    title: "Weekend Warrior",
    description: "Be productive for 4 hours on a weekend",
    icon: Calendar,
    progress: 0,
    daysLeft: 5,
    xp: 100,
    active: false,
  },
  {
    id: 6,
    title: "Night Owl",
    description: "3 hours of productive work after 8 PM",
    icon: Clock,
    progress: 0,
    daysLeft: 7,
    xp: 125,
    active: false,
  },
]

export function ChallengesList() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Active Challenges</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {challenges
            .filter((c) => c.active)
            .map((challenge) => (
              <Card key={challenge.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                        <challenge.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </div>
                    </div>
                    <Badge>{challenge.daysLeft} days left</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{challenge.progress}% complete</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Worth {challenge.xp} XP</div>
                  <Button variant="outline" size="sm">
                    Abandon
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Available Challenges</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {challenges
            .filter((c) => !c.active)
            .map((challenge) => (
              <Card key={challenge.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                        <challenge.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{challenge.daysLeft} days</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Complete this challenge to earn {challenge.xp} XP
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Accept Challenge</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

