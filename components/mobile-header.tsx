"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import { useAppStore } from "@/store/app-store"

export function MobileHeader() {
  const { toggleMobileMenu, subjectStats } = useAppStore()

  return (
    <div className="border-b border-border bg-card transition-colors duration-300">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="font-semibold w-full flex justify-center items-center text-foreground">JEE Main</h1>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}
