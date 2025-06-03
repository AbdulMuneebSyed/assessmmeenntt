"use client"

import { cn } from "@/lib/utils"
import { useAppStore } from "@/store/app-store"
import { Atom, MathOperations, Flask } from "phosphor-react";

const subjects = [
  {
    name: "Physics",
    color: "bg-orange-500",
    shortName: "Physics",
    icon: <Atom size={16} color="#e6e6e6" />,
  },
  {
    name: "Chemistry",
    color: "bg-green-500",
    shortName: "Chemistry",
    icon: <Flask size={16} color="#e6e6e6" weight="bold" />,
  },
  {
    name: "Mathematics",
    color: "bg-blue-500",
    shortName: "Math",
    icon: <MathOperations size={16} color="#e6e6e6" />,
  },
];

export function MobileSubjectTabs() {
  const { selectedSubject, setSelectedSubject } = useAppStore()

  return (
    <div className="bg-card border-b border-border">
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex justify-around min-w-max w-full py-3 gap-1">
          {subjects.map((subject) => (
            <button
              key={subject.name}
              onClick={() => setSelectedSubject(subject.name)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                selectedSubject === subject.name
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
              )}
            >
              <div className={cn("w-6 h-6 rounded-sm flex justify-center items-center", subject.color)} >
                {subject.icon}
              </div>
              <span>{subject.shortName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
