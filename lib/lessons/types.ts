/**
 * Tipos para el Sistema de Lecciones
 */

export interface LessonBook {
  id: string
  religion: string
  title: string
  description: string
  icon: string
  testament?: "antiguo" | "nuevo" | "old" | "new"
  category?: string
  sections: LessonSection[]
}

export interface LessonSection {
  id: string
  bookId: string
  title: string
  description: string
  lessons: Lesson[]
  order: number
}

export interface Lesson {
  id: string
  sectionId: string
  title: string
  description: string
  scripture?: string
  estimatedMinutes: number
  order: number
  locked: boolean
  content: LessonContent
}

export interface LessonContent {
  introduction: DialogueStep
  teaching: DialogueStep[]
  application: DialogueStep
  reflection: DialogueStep
}

export interface DialogueStep {
  id: string
  type: "narration" | "question" | "reflection" | "scripture"
  text: string
  scripture?: string
  options?: DialogueOption[]
  helpAvailable?: boolean
}

export interface DialogueOption {
  id: string
  text: string
  response: string
  followUp?: string
  isCorrect?: boolean
}

export interface LessonProgress {
  userId: string
  completedLessons: string[]
  currentLesson?: string
  lessonStates: Record<string, LessonState>
  totalTimeSpent: number
  lastUpdated: number
}

export interface LessonState {
  lessonId: string
  startedAt: number
  completedAt?: number
  currentStepId: string
  responses: Record<string, string>
  helpUsed: string[]
  timeSpent: number
}
