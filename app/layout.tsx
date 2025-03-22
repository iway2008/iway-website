import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

const inter = Inter({ subsets: ["latin"] })
const orbitron = localFont({
  src: '../public/fonts/Orbitron-VariableFont_wght.ttf',
  variable: '--font-orbitron'
})
const esamanru = localFont({
  src: [
    {
      path: '../public/fonts/esamanru OTF Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/esamanru OTF Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/esamanru OTF Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-esamanru'
})

export const metadata: Metadata = {
  title: "I-WAY 아마추어축구단 | JUST IN OUR WAY",
  description: "한국 축구의 내일을 키우는 아마추어 축구단입니다.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-dark-iway-emblem-white-Yd9Ij9Yd9Ij9.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-iway-emblem-white-Yd9Ij9Yd9Ij9.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://iway-football.vercel.app/",
    title: "I-WAY 아마추어축구단 | JUST IN OUR WAY",
    description: "한국 축구의 내일을 키우는 아마추어 축구단입니다.",
    siteName: "I-WAY 아마추어축구단",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image-iway-football-club-Yd9Ij9Yd9Ij9.jpg",
        width: 1200,
        height: 630,
        alt: "I-WAY 아마추어축구단",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I-WAY 아마추어축구단",
    description: "한국 축구의 내일을 키우는 아마추어 축구단입니다.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image-iway-football-club-Yd9Ij9Yd9Ij9.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${orbitron.variable} ${esamanru.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  )
}

