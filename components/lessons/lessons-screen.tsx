"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Lock, CheckCircle2, Clock, ChevronRight, Trophy, ChevronLeft } from "lucide-react"
import { getUserProfile } from "@/lib/user-profile"
import { Button } from "@/components/ui/button"
import {
  getLessonBooks,
  getLessonProgress,
  getLessonStats,
  isLessonUnlocked,
  type LessonBook,
  type Lesson,
} from "@/lib/lessons-system"

interface LessonsScreenProps {
  onStartLesson: (lesson: Lesson) => void
  onBack?: () => void
}

export function LessonsScreen({ onStartLesson, onBack }: LessonsScreenProps) {
  const [books, setBooks] = useState<LessonBook[]>([])
  const [stats, setStats] = useState({ totalLessons: 0, completedLessons: 0, totalTimeSpent: 0, currentStreak: 0 })
  const [expandedBook, setExpandedBook] = useState<string | null>(null)

  useEffect(() => {
    const profile = getUserProfile()
    if (!profile) return

    const lessonBooks = getLessonBooks(profile.religion)
    setBooks(lessonBooks)

    const lessonStats = getLessonStats(profile.religion)
    setStats(lessonStats)

    // if (lessonBooks.length > 0) {
    //   setExpandedBook(lessonBooks[0].id)
    // }
  }, [])

  const progress = getLessonProgress()
  const progressPercentage = stats.totalLessons > 0 ? (stats.completedLessons / stats.totalLessons) * 100 : 0

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {onBack && (
                <Button variant="ghost" size="icon" onClick={onBack}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              )}
              <div>
                <h1 className="mb-1 text-2xl font-bold">Spiritual School</h1>
                <p className="text-sm text-muted-foreground">Learn interactively and deeply</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-6 p-6">
        {/* Stats Card */}
        <Card className="overflow-hidden border-2">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Your Progress</h3>
            </div>

            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Lessons completed</span>
                <span className="font-semibold">
                  {stats.completedLessons} of {stats.totalLessons}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary">{Math.round(stats.totalTimeSpent / 60)}h</div>
                <div className="text-xs text-muted-foreground">Time spent</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{stats.completedLessons}</div>
                <div className="text-xs text-muted-foreground">Lessons completed</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Books List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Available Content</h3>

          {books.map((book) => {
            const isExpanded = expandedBook === book.id
            const bookLessons = book.sections.flatMap((s) => s.lessons)
            const completedInBook = bookLessons.filter((l) => progress.completedLessons.includes(l.id)).length
            const bookProgress = bookLessons.length > 0 ? (completedInBook / bookLessons.length) * 100 : 0

            return (
              <Card key={book.id} className="overflow-hidden">
                <button
                  className="w-full p-4 text-left transition-colors hover:bg-muted/50"
                  onClick={() => setExpandedBook(isExpanded ? null : book.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                      {book.icon}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h4 className="font-semibold">{book.title}</h4>
                        {book.testament && (
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                            {book.testament === "antiguo" ? "AT" : "NT"}
                          </span>
                        )}
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">{book.description}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={bookProgress} className="h-1.5 flex-1" />
                        <span className="text-xs text-muted-foreground">
                          {completedInBook}/{bookLessons.length}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t bg-muted/20 p-4">
                    {book.sections.map((section) => (
                      <div key={section.id} className="mb-4 last:mb-0">
                        <h5 className="mb-2 text-sm font-semibold text-muted-foreground">{section.title}</h5>
                        <div className="space-y-2">
                          {section.lessons.map((lesson) => {
                            const isCompleted = progress.completedLessons.includes(lesson.id)
                            const isUnlocked = isLessonUnlocked(lesson.id)
                            const isCurrent = progress.currentLesson === lesson.id

                            return (
                              <Card
                                key={lesson.id}
                                className={`overflow-hidden transition-all ${
                                  isCurrent ? "border-2 border-primary" : ""
                                } ${!isUnlocked ? "opacity-60" : ""}`}
                              >
                                <button
                                  className="w-full p-3 text-left transition-colors hover:bg-muted/50 disabled:cursor-not-allowed"
                                  onClick={() => isUnlocked && onStartLesson(lesson)}
                                  disabled={!isUnlocked}
                                >
                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                                        isCompleted ? "bg-green-500/10" : isUnlocked ? "bg-primary/10" : "bg-muted"
                                      }`}
                                    >
                                      {isCompleted ? (
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                      ) : isUnlocked ? (
                                        <BookOpen className="h-4 w-4 text-primary" />
                                      ) : (
                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <div className="mb-0.5 flex items-center gap-2">
                                        <h6 className="font-medium">{lesson.title}</h6>
                                      </div>
                                      <p className="mb-1 text-xs text-muted-foreground">{lesson.description}</p>
                                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                          <Clock className="h-3 w-3" />
                                          {lesson.estimatedMinutes} min
                                        </span>
                                        {lesson.scripture && <span>{lesson.scripture}</span>}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </Card>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
