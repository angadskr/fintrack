import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FinTrack',
  description: 'Personal Finance Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
