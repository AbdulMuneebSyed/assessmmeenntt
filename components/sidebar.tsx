"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Atom, Flask, MathOperations } from "phosphor-react"
import Image from "next/image"
import { useAppStore } from "@/store/app-store"
import logo from "@/public/logo.png"
const subjects = [
  {
    name: "Physics",
    icon: <Atom size={16} color="#e6e6e6" />,
    color: "bg-orange-500",
  },
  {
    name: "Chemistry",
    icon: <Flask size={16} color="#e6e6e6" weight="bold" />,
    color: "bg-green-500",
  },
  {
    name: "Mathematics",
    icon: <MathOperations size={16} color="#e6e6e6" />,
    color: "bg-blue-500",
  },
]

export function Sidebar() {
  const { selectedSubject, isMobileMenuOpen, setSelectedSubject, setIsMobileMenuOpen } = useAppStore()

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-50 transform transition-all duration-300 ease-in-out",
          "lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col justify-center w-full items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <Image src={logo} alt="Logo" width={24} height={24} />
                <span className="font-semibold text-foreground">JEE Main</span>
              </div>
              <p className="text-sm text-muted-foreground transition-colors duration-300">
                2025 - 2019 | 173 Papers | 15825 Qs
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Subject Navigation */}
          <div className="space-y-2">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => handleSubjectChange(subject.name)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground transform hover:scale-[1.02]",
                  selectedSubject === subject.name
                    ? "bg-gray-900 text-white shadow-sm hover:bg-gray-900 hover:text-white transform hover:scale-[1.02]"
                    : "text-muted-foreground",
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-sm flex justify-center items-center transition-transform duration-200",
                    subject.color,
                  )}
                >
                  {subject.icon}
                </div>
                <span className="font-medium"> {subject.name} PYQs</span>
                <span className="ml-auto text-xs transition-transform duration-200 group-hover:translate-x-1">›</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
