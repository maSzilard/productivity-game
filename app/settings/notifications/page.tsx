"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Configure how and when you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Notification Types</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notify-streaks" className="cursor-pointer">
                      Streak Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Get notified about your productivity streaks</p>
                  </div>
                  <Switch id="notify-streaks" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notify-achievements" className="cursor-pointer">
                      Achievement Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Get notified when you unlock achievements</p>
                  </div>
                  <Switch id="notify-achievements" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notify-summary" className="cursor-pointer">
                      Daily Summary
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive a daily summary of your productivity</p>
                  </div>
                  <Switch id="notify-summary" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notify-idle" className="cursor-pointer">
                      Idle Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">Get reminded during extended unproductive periods</p>
                  </div>
                  <Switch id="notify-idle" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Notification Time</Label>
              <Select defaultValue="evening">
                <SelectTrigger>
                  <SelectValue placeholder="Select time for daily summary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8:00 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (1:00 PM)</SelectItem>
                  <SelectItem value="evening">Evening (6:00 PM)</SelectItem>
                  <SelectItem value="night">Night (10:00 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

