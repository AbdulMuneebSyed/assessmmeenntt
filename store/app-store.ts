import { create } from "zustand"
import subjectsData from "@/data/subjects-data.json"

interface Chapter {
  subject: string
  chapter: string
  class: string
  unit: string
  yearWiseQuestionCount: Record<string, number>
  questionSolved: number
  status: string
  isWeakChapter: boolean
}

interface AppState {
  // State
  selectedSubject: string
  selectedClass: string
  selectedUnit: string
  showNotStarted: boolean
  showWeakChapters: boolean
  isMobileMenuOpen: boolean

  // Computed values
  filteredChapters: Chapter[]
  subjectStats: {
    totalPapers: number
    totalQuestions: number
    year: string
  }
  availableUnits: string[]

  // Actions
  setSelectedSubject: (subject: string) => void
  setSelectedClass: (classValue: string) => void
  setSelectedUnit: (unit: string) => void
  setShowNotStarted: (show: boolean) => void
  setShowWeakChapters: (show: boolean) => void
  setIsMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void

  // Internal methods
  updateComputedValues: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  // Initial state
  selectedSubject: "Physics",
  selectedClass: "all",
  selectedUnit: "all",
  showNotStarted: false,
  showWeakChapters: false,
  isMobileMenuOpen: false,

  // Initial computed values
  filteredChapters: [],
  subjectStats: {
    totalPapers: 173,
    totalQuestions: 0,
    year: "2025 - 2019",
  },
  availableUnits: [],

  // Actions
  setSelectedSubject: (subject: string) => {
    set({ selectedSubject: subject })
    get().updateComputedValues()
  },

  setSelectedClass: (classValue: string) => {
    set({ selectedClass: classValue })
    get().updateComputedValues()
  },

  setSelectedUnit: (unit: string) => {
    set({ selectedUnit: unit })
    get().updateComputedValues()
  },

  setShowNotStarted: (show: boolean) => {
    set({ showNotStarted: show })
    get().updateComputedValues()
  },

  setShowWeakChapters: (show: boolean) => {
    set({ showWeakChapters: show })
    get().updateComputedValues()
  },

  setIsMobileMenuOpen: (open: boolean) => {
    set({ isMobileMenuOpen: open })
  },

  toggleMobileMenu: () => {
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }))
  },

  // Update computed values
  updateComputedValues: () => {
    const state = get()

    // Calculate filtered chapters
    const filteredChapters = subjectsData.filter((chapter) => {
      if (chapter.subject !== state.selectedSubject) return false
      if (state.selectedClass !== "all" && chapter.class !== state.selectedClass) return false
      if (state.selectedUnit !== "all" && chapter.unit !== state.selectedUnit) return false
      if (state.showNotStarted && chapter.status !== "Not Started") return false
      if (state.showWeakChapters && !chapter.isWeakChapter) return false
      return true
    })

    // Calculate subject stats
    const subjectChapters = subjectsData.filter((chapter) => chapter.subject === state.selectedSubject)
    const totalQuestions = subjectChapters.reduce((sum, chapter) => {
      return sum + Object.values(chapter.yearWiseQuestionCount).reduce((a: number, b: number) => a + b, 0)
    }, 0)

    const subjectStats = {
      totalPapers: 173,
      totalQuestions,
      year: "2025 - 2019",
    }

    // Calculate available units
    const units = new Set(
      subjectsData.filter((chapter) => chapter.subject === state.selectedSubject).map((chapter) => chapter.unit),
    )
    const availableUnits = Array.from(units)

    set({
      filteredChapters,
      subjectStats,
      availableUnits,
    })
  },
}))

// Initialize computed values
useAppStore.getState().updateComputedValues()
