import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import { Suspense } from "react"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata = {
  title: "Prajan Gowtham - Portfolio",
  description:
    "Official portfolio of Prajan Gowtham, Full Stack Developer and Computer Science Engineer",
  verification: {
    google: "YixObLykn7tYDA27NPk9ybj3rNWCevcuZG5kqleoH58",
  },
  alternates: {
    canonical: "https://prajan-gowtham-portfolio.vercel.app/",
  },
};


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
