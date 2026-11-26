import type { Metadata } from "next"
import localFont from "next/font/local"
import { Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils"

const manrope = localFont({
  src: "../public/fonts/manrope-latin.woff2",
  variable: "--font-sans",
  weight: "200 800",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "NAEPL | N Gandhi Advance Engineering Pvt. Ltd. | Precision Engineering",
  description:
    "ISO 9001:2015 certified manufacturer of precision engineered components, stainless steel cable ties, cable cleats, link boxes, CNC machined parts, and sheet metal press components.",
  icons: {
    icon: "/assets/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", manrope.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero_slides/slide_1_precision_cutting.webp"
          type="image/webp"
        />
      </head>
      <body
        suppressHydrationWarning
        className="w-full min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-clip"
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-x-clip">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
