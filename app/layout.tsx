import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import { Suspense } from "react"
import { Toaster } from "sonner"; // 👈 use sonner instead of react-hot-toast
import "./globals.css"

export const metadata: Metadata = {
  title: "Prajan Gowtham - Portfolio",
  description: "B.Tech Computer Science Engineering | AI/ML Enthusiast | Full Stack Developer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/placeholder-logo.png" type="image/jpeg" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Toaster position="top-right" richColors /> {/* ✅ Sonner toaster */}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
