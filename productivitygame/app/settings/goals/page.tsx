"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function GoalsPage() {
  const [productivityGoal, setProductivityGoal] = useState(8)

  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Goals</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Goals Configuration</CardTitle>
            <CardDescription>Set your productivity targets and goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Daily Productivity Goal (hours)</Label>
                <span className="font-medium">{productivityGoal} hours</span>
              </div>
              <Slider
                defaultValue={[8]}
                max={12}
                min={1}
                step={0.5}
                value={[productivityGoal]}
                onValueChange={(value) => setProductivityGoal(value[0])}
              />
            </div>

            <div className="space-y-2">
              <Label>Weekly Target Days</Label>
              <div className="flex gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <Button
                    key={day}
                    variant={day === "Sat" || day === "Sun" ? "outline" : "default"}
                    className="flex-1"
                    size="sm"
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Focus Categories</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="category-work" className="cursor-pointer">
                    Work
                  </Label>
                  <Switch id="category-work" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="category-study" className="cursor-pointer">
                    Study
                  </Label>
                  <Switch id="category-study" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="category-creative" className="cursor-pointer">
                    Creative Work
                  </Label>
                  <Switch id="category-creative" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="category-reading" className="cursor-pointer">
                    Reading
                  </Label>
                  <Switch id="category-reading" />
                </div>
              </div>
            </div>

            <Button>Save Goals</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

