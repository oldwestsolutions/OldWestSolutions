import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Old West Solutions - Enterprise IT Services',
  description: 'Professional IT services and solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

