import './globals.css'
import type React from "react"
import ClientLayout from '../components/client-layout'

export const metadata = {
  generator: 'v0.dev',
  title: 'Productivity Game',
  description: 'Track your productivity with game elements'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
