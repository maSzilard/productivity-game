"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LinkIcon } from "lucide-react"

export default function ConnectionsPage() {
  const [apiKey, setApiKey] = useState("••••••••••••••••")

  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Connections</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
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
      </div>
    </div>
  )
}

