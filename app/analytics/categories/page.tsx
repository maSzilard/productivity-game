"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { CategoryBreakdown } from "@/components/category-breakdown"

export default function CategoriesPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-2xl font-bold">Categories</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>Time spent by category</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <CategoryBreakdown />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

