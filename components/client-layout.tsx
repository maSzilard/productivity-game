"use client"

import React, { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In a real app, we would get this from cookies on the server
  const [sidebarOpen] = useState(true)

  return (
    <SidebarProvider defaultOpen={sidebarOpen}>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  )
} 