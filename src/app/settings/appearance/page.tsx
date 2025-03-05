"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppearancePage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Appearance</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
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
      </div>
    </div>
  )
}

