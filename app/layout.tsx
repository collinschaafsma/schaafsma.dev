import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const outfitSans = localFont({
  src: "./fonts/Outfit.woff2",
  variable: "--font-outfit-sans",
  weight: "100 600",
})

export const metadata: Metadata = {
  title: "Collin Schaafsma",
  description: "Collin Schaafsma's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfitSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
