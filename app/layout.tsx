import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "I-WAY 아마추어축구단",
  description: "한국외국어대학교 글로벌스포츠산업학부 소속 아마추어 축구단",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'