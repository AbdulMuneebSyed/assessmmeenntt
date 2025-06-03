"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ChapterList } from "@/components/chapter-list"
import { MobileHeader } from "@/components/mobile-header"
import { MobileSubjectTabs } from "@/components/mobile-subject-tabs"
import { useAppStore } from "@/store/app-store"

export default function Home() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppStore()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background transition-colors duration-300 w-screen max-w-screen overflow-clip">
        {/* Mobile Header */}
        <div className="lg:hidden">
          <MobileHeader />
          <MobileSubjectTabs />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 lg:ml-64">
            {/* Desktop Header */}
            <div className="hidden lg:block">
              <Header />
            </div>

            {/* Filters and Chapter List */}
            <div className="p-4 lg:p-6">
              <ChapterList />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
