"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Sample level data
const currentLevel = 12
const currentXP = 650
const xpForNextLevel = 1000
const totalLevels = 50

// Generate level milestones
const levelMilestones = [
  {
    level: 5,
    title: "Productivity Novice",
    description: "You've started your productivity journey",
    reward: "Unlocked daily streaks",
    achieved: true,
  },
  {
    level: 10,
    title: "Productivity Apprentice",
    description: "You're building consistent habits",
    reward: "Unlocked weekly challenges",
    achieved: true,
  },
  {
    level: 15,
    title: "Productivity Adept",
    description: "Your productivity is becoming a lifestyle",
    reward: "Unlocked custom goals",
    achieved: false,
  },
  {
    level: 25,
    title: "Productivity Expert",
    description: "You've mastered the art of focus",
    reward: "Unlocked advanced analytics",
    achieved: false,
  },
  {
    level: 40,
    title: "Productivity Master",
    description: "You're in the top tier of productive people",
    reward: "Unlocked exclusive badges",
    achieved: false,
  },
  {
    level: 50,
    title: "Productivity Legend",
    description: "You've reached the pinnacle of productivity",
    reward: "Unlocked all features",
    achieved: false,
  },
]

export function LevelSystem() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Level Progress</CardTitle>
          <CardDescription>
            Level {currentLevel} - {currentXP}/{xpForNextLevel} XP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={(currentXP / xpForNextLevel) * 100} className="h-4" />

            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-sm font-medium">Current Level</p>
                <p className="text-2xl font-bold">{currentLevel}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">XP to Next Level</p>
                <p className="text-2xl font-bold">{xpForNextLevel - currentXP}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Max Level</p>
                <p className="text-2xl font-bold">{totalLevels}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {levelMilestones.map((milestone) => (
          <Card key={milestone.level} className={milestone.achieved ? "border-primary" : ""}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Level {milestone.level}</CardTitle>
                <Badge variant={milestone.achieved ? "default" : "outline"}>
                  {milestone.achieved ? "Achieved" : "Locked"}
                </Badge>
              </div>
              <CardDescription>{milestone.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{milestone.description}</p>
              <p className="text-sm font-medium">
                Reward: <span className="text-primary">{milestone.reward}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

