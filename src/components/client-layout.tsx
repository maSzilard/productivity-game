"use client"

import React, { useState } from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import AppSidebar from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // In a real app, we would get this from cookies on the server
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider defaultOpen={sidebarOpen}>
        <div className="flex h-screen overflow-hidden bg-background">
          <AppSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <Toaster />
      </SidebarProvider>
    </ThemeProvider>
  )
} 