import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Steven Nguyen's Portfolio",
  description: "Steven Nguyen's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full ">
      <body
        className={cn(
          "relative h-full font-sans antialiased bg-gray-700",
          inter.className
        )}
      >
        {" "}
        <MaxWidthWrapper>
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </main>
        </MaxWidthWrapper>
      </body>
    </html>
  )
}
