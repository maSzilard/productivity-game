"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { PersonalRecords } from "@/components/personal-records"

export default function RecordsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Personal Records</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Records</CardTitle>
            <CardDescription>Your best productivity achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <PersonalRecords />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

