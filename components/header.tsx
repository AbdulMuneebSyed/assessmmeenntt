"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Atom, Flask, MathOperations } from "phosphor-react"
import { useAppStore } from "@/store/app-store"

export function Header() {
  const { selectedSubject } = useAppStore()

  return (
    <div className="border-b border-border bg-card transition-colors duration-300">
      <div className="flex items-center justify-between p-6">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-6 h-6 rounded-sm flex justify-center items-center transition-colors duration-300 ${
                selectedSubject === "Physics"
                  ? "bg-orange-500"
                  : selectedSubject === "Chemistry"
                    ? "bg-green-500"
                    : "bg-blue-500"
              }`}
            >
              {selectedSubject === "Physics" ? (
                <Atom size={16} color="#e6e6e6" weight="bold" />
              ) : selectedSubject === "Chemistry" ? (
                <Flask size={16} color="#e6e6e6" weight="bold" />
              ) : (
                <MathOperations size={16} color="#e6e6e6" weight="bold" />
              )}
            </div>
            <h1 className="text-xl font-semibold text-foreground transition-colors duration-300">
              {selectedSubject} PYQs
            </h1>
          </div>
          <span className="text-sm text-muted-foreground transition-colors duration-300">
            Chapter-wise Collection of {selectedSubject} PYQs
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
