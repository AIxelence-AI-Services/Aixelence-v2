import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "AIxelence - Intelligent AI Solutions",
  description:
    "Advanced AI solutions including intelligent chatbots, RAG systems, workflow automation, and specialized industry AI.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="yt8uV77vbXWvfuI7eM1hPChxXQe9RHkXoMd4YwpfA2o" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
