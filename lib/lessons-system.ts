import type { LessonBook, LessonProgress, Lesson } from "./lessons/types"
import { GENESIS_LESSONS_1_6 } from "./lessons/genesis-lessons-1-6"
import { GENESIS_LESSONS_7_12 } from "./lessons/genesis-lessons-7-12"
import { trackLessonCompletion } from "./spiritual-journey" // Import tracking function
import { GENESIS_LESSONS_13_18 } from "./lessons/genesis-lessons-13-18"

export type {
  LessonBook,
  LessonSection,
  Lesson,
  LessonContent,
  DialogueStep,
  DialogueOption,
  LessonProgress,
  LessonState,
} from "./lessons/types"

const GENESIS_COMPLETE: LessonBook = {
  id: "genesis",
  title: "Genesis - The Foundation",
  description: "From Creation to Abraham's Call",
  testament: "old",
  order: 1,
  sections: [...GENESIS_LESSONS_1_6.sections, ...GENESIS_LESSONS_7_12.sections, ...GENESIS_LESSONS_13_18.sections],
}

// Contenido de lecciones organizado por religión
export const LESSON_BOOKS: Record<string, LessonBook[]> = {
  cristianismo: [GENESIS_COMPLETE],
  christianity: [GENESIS_COMPLETE],
}

// Funciones de progreso
export function getLessonProgress(): LessonProgress {
  if (typeof window === "undefined") {
    // Return default progress for SSR
    return {
      userId: "user",
      completedLessons: [],
      lessonStates: {},
      totalTimeSpent: 0,
      lastUpdated: Date.now(),
    }
  }

  const saved = localStorage.getItem("lessonProgress")
  if (saved) {
    return JSON.parse(saved)
  }

  const initial: LessonProgress = {
    userId: localStorage.getItem("userName") || "user",
    completedLessons: [],
    lessonStates: {},
    totalTimeSpent: 0,
    lastUpdated: Date.now(),
  }

  saveLessonProgress(initial)
  return initial
}

export function saveLessonProgress(progress: LessonProgress): void {
  if (typeof window === "undefined") return
  progress.lastUpdated = Date.now()
  localStorage.setItem("lessonProgress", JSON.stringify(progress))
}

export function startLesson(lessonId: string): void {
  const progress = getLessonProgress()

  if (!progress.lessonStates[lessonId]) {
    progress.lessonStates[lessonId] = {
      lessonId,
      startedAt: Date.now(),
      currentStepId: "intro-1",
      responses: {},
      helpUsed: [],
      timeSpent: 0,
    }
    progress.currentLesson = lessonId
    saveLessonProgress(progress)
  }
}

export function completeLesson(lessonId: string): void {
  const progress = getLessonProgress()

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)

    if (progress.lessonStates[lessonId]) {
      progress.lessonStates[lessonId].completedAt = Date.now()
    }

    trackLessonCompletion() // Track lesson completion for daily stats

    saveLessonProgress(progress)
  }
}

function getAllLessonsInOrder(book: LessonBook) {
  const allLessons = book.sections.flatMap((section) => section.lessons)
  return allLessons.sort((a, b) => a.order - b.order)
}

export function isLessonUnlocked(lessonId: string): boolean {
  const progress = getLessonProgress()
  const allBooks = Object.values(LESSON_BOOKS).flat()

  for (const book of allBooks) {
    const allLessons = getAllLessonsInOrder(book)
    const lesson = allLessons.find((l) => l.id === lessonId)

    if (lesson) {
      if (lesson.order === 1) return true

      const prevLesson = allLessons.find((l) => l.order === lesson.order - 1)
      if (prevLesson) {
        return progress.completedLessons.includes(prevLesson.id)
      }
    }
  }

  return false
}

export function getNextLesson(currentLessonId: string): Lesson | null {
  const allBooks = Object.values(LESSON_BOOKS).flat()

  for (const book of allBooks) {
    const allLessons = getAllLessonsInOrder(book)
    const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId)

    if (currentIndex !== -1 && currentIndex + 1 < allLessons.length) {
      const nextLesson = allLessons[currentIndex + 1]
      // Check if next lesson is unlocked
      if (isLessonUnlocked(nextLesson.id)) {
        return nextLesson
      }
    }
  }

  return null
}

export function getLessonBooks(religion: string): LessonBook[] {
  return LESSON_BOOKS[religion] || LESSON_BOOKS.cristianismo
}

export function getLessonStats(religion: string): {
  totalLessons: number
  completedLessons: number
  totalTimeSpent: number
} {
  const progress = getLessonProgress()
  const books = getLessonBooks(religion)

  const totalLessons = books.reduce((sum, book) => {
    return sum + book.sections.reduce((sectionSum, section) => sectionSum + section.lessons.length, 0)
  }, 0)

  return {
    totalLessons,
    completedLessons: progress.completedLessons.length,
    totalTimeSpent: progress.totalTimeSpent,
  }
}
