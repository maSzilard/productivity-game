"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LinkIcon } from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [productivityGoal, setProductivityGoal] = useState(8)
  const [apiKey, setApiKey] = useState("••••••••••••••••")

  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Tabs defaultValue="connections" className="mb-6">
          <TabsList>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="connections" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>RescueTime Connection</CardTitle>
                <CardDescription>Connect your RescueTime account to track productivity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">RescueTime</p>
                      <p className="text-sm text-muted-foreground">Connected</p>
                    </div>
                  </div>
                  <Button variant="outline">Disconnect</Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex gap-2">
                    <Input id="api-key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} type="password" />
                    <Button variant="outline">Reveal</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Your API key is used to sync data from RescueTime</p>
                </div>

                <div className="space-y-2">
                  <Label>Sync Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sync-daily" className="cursor-pointer">
                        Daily Sync
                      </Label>
                      <Switch id="sync-daily" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sync-realtime" className="cursor-pointer">
                        Real-time Updates
                      </Label>
                      <Switch id="sync-realtime" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sync-historical" className="cursor-pointer">
                        Import Historical Data
                      </Label>
                      <Switch id="sync-historical" />
                    </div>
                  </div>
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
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
                        <p className="text-sm text-muted-foreground">
                          Get reminded during extended unproductive periods
                        </p>
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
          </TabsContent>

          <TabsContent value="goals" className="mt-6">
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
          </TabsContent>

          <TabsContent value="appearance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Options</CardTitle>
                <CardDescription>Customize the appearance of your productivity app</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Color Theme</Label>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode" className="cursor-pointer">
                      Dark Mode
                    </Label>
                    <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="flex gap-2">
                    {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500"].map((color) => (
                      <button
                        key={color}
                        className={`h-8 w-8 rounded-full ${color} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                        aria-label={`Select ${color.replace("bg-", "").replace("-500", "")} theme`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Dashboard Layout</Label>
                  <Select defaultValue="grid">
                    <SelectTrigger>
                      <SelectValue placeholder="Select dashboard layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid Layout</SelectItem>
                      <SelectItem value="compact">Compact Layout</SelectItem>
                      <SelectItem value="focus">Focus Mode</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Chart Style</Label>
                  <Select defaultValue="filled">
                    <SelectTrigger>
                      <SelectValue placeholder="Select chart style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="filled">Filled</SelectItem>
                      <SelectItem value="line">Line Only</SelectItem>
                      <SelectItem value="gradient">Gradient</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button>Apply Theme</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

