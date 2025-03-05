"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { LevelSystem } from "@/components/level-system"

export default function LevelsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Levels</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <LevelSystem />
      </div>
    </div>
  )
}

