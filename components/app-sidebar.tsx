"use client"

import { useState } from "react"
import { LayoutDashboard, BarChart2, Trophy, Settings, ChevronDown, Flame, Zap } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function AppSidebar() {
  const pathname = usePathname()
  const [openAnalytics, setOpenAnalytics] = useState(false)
  const [openAchievements, setOpenAchievements] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <Zap className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Productive</h1>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Streak: 7 days</span>
            </div>
            <span className="text-sm font-medium">Level 12</span>
          </div>
          <Progress value={65} className="h-2" />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">650 XP</span>
            <span className="text-xs text-muted-foreground">1000 XP</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/"}>
              <Link href="/">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible open={openAnalytics} onOpenChange={setOpenAnalytics} className="w-full">
            <SidebarMenuItem>
              <div className="flex w-full">
                <Link href="/analytics" className="flex-1">
                  <SidebarMenuButton isActive={pathname?.startsWith("/analytics")}>
                    <BarChart2 className="h-4 w-4" />
                    <span>Analytics</span>
                  </SidebarMenuButton>
                </Link>
                <CollapsibleTrigger asChild>
                  <button className="px-2 flex items-center justify-center">
                    <ChevronDown className={`h-4 w-4 transition-transform ${openAnalytics ? "rotate-180" : ""}`} />
                  </button>
                </CollapsibleTrigger>
              </div>
            </SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/analytics/trends"}>
                    <Link href="/analytics/trends">Trends</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/analytics/categories"}>
                    <Link href="/analytics/categories">Categories</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/analytics/records"}>
                    <Link href="/analytics/records">Records</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={openAchievements} onOpenChange={setOpenAchievements} className="w-full">
            <SidebarMenuItem>
              <div className="flex w-full">
                <Link href="/achievements" className="flex-1">
                  <SidebarMenuButton isActive={pathname?.startsWith("/achievements")}>
                    <Trophy className="h-4 w-4" />
                    <span>Achievements</span>
                  </SidebarMenuButton>
                </Link>
                <CollapsibleTrigger asChild>
                  <button className="px-2 flex items-center justify-center">
                    <ChevronDown className={`h-4 w-4 transition-transform ${openAchievements ? "rotate-180" : ""}`} />
                  </button>
                </CollapsibleTrigger>
              </div>
            </SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/achievements/badges"}>
                    <Link href="/achievements/badges">Badges</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/achievements/challenges"}>
                    <Link href="/achievements/challenges">Challenges</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/achievements/levels"}>
                    <Link href="/achievements/levels">Levels</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={openSettings} onOpenChange={setOpenSettings} className="w-full">
            <SidebarMenuItem>
              <div className="flex w-full">
                <Link href="/settings" className="flex-1">
                  <SidebarMenuButton isActive={pathname?.startsWith("/settings")}>
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </Link>
                <CollapsibleTrigger asChild>
                  <button className="px-2 flex items-center justify-center">
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSettings ? "rotate-180" : ""}`} />
                  </button>
                </CollapsibleTrigger>
              </div>
            </SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/settings/connections"}>
                    <Link href="/settings/connections">
                      <span>Connections</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/settings/notifications"}>
                    <Link href="/settings/notifications">
                      <span>Notifications</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/settings/goals"}>
                    <Link href="/settings/goals">
                      <span>Goals</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild isActive={pathname === "/settings/appearance"}>
                    <Link href="/settings/appearance">
                      <span>Appearance</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

