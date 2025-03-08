"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AchievementGrid } from "@/components/achievement-grid"
import { LevelSystem } from "@/components/level-system"
import { BadgesGallery } from "@/components/badges-gallery"
import { ChallengesList } from "@/components/challenges-list"

export default function AchievementsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Achievements</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Tabs defaultValue="achievements" className="mb-6">
          <TabsList>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="levels">Levels</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="mt-6">
            <AchievementGrid />
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <BadgesGallery />
          </TabsContent>

          <TabsContent value="levels" className="mt-6">
            <LevelSystem />
          </TabsContent>

          <TabsContent value="challenges" className="mt-6">
            <ChallengesList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

