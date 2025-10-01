import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/appSidebar"


const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="h-screen flex-1 transition-all duration-200 ease-in-out overflow-hidden">
              <SidebarTrigger className="ml-1.5" />
              {children}
            </main>
          </SidebarProvider>
        </Providers>
      </body>
    </html >
  )
}
