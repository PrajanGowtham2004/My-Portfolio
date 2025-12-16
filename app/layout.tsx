import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import { Suspense } from "react"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prajan Gowtham - Portfolio",
  description:
    "B.Tech Computer Science Engineering | AI/ML Enthusiast | Full Stack Developer",
  generator: "v0.app",
  verification: {
    google: "YixObLykn7tYDA27NPk9ybj3rNWCevcuZG5kqleoH58",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/-flag.jpeg" type="image/jpeg" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Toaster position="top-right" richColors />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
