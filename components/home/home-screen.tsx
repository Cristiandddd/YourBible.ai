"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, ChevronRight, GraduationCap, Book } from "lucide-react"
import { getUserProfile } from "@/lib/user-profile"
import { getSpiritualProgress, getDailyReflection, type DailyReflection } from "@/lib/spiritual-journey"
import { getLessonStats } from "@/lib/lessons-system"
import { UserMenu } from "@/components/home/user-menu"

interface HomeScreenProps {
  userName: string
  userEmail: string
  onNavigateToChat: () => void
  onNavigateToJourney?: () => void
  onNavigateToLessons?: () => void
  onNavigateToBible?: () => void
  onViewProfile: () => void
  onLogout: () => void
}

export function HomeScreen({
  userName,
  userEmail,
  onNavigateToChat,
  onNavigateToJourney,
  onNavigateToLessons,
  onNavigateToBible,
  onViewProfile,
  onLogout,
}: HomeScreenProps) {
  const [dailyReflection, setDailyReflection] = useState<DailyReflection | null>(null)
  const [progress, setProgress] = useState<ReturnType<typeof getSpiritualProgress> | null>(null)
  const [lessonStats, setLessonStats] = useState({ totalLessons: 0, completedLessons: 0, totalTimeSpent: 0 })

  useEffect(() => {
    const userProfile = getUserProfile()
    if (!userProfile) return

    const reflection = getDailyReflection(userProfile.religion)
    setDailyReflection(reflection)

    const userProgress = getSpiritualProgress()
    setProgress(userProgress)

    const stats = getLessonStats(userProfile.religion)
    setLessonStats(stats)
  }, [])

  const handleStartReflection = () => {
    if (dailyReflection) {
      localStorage.setItem("pendingReflection", JSON.stringify(dailyReflection))
      onNavigateToChat()
    }
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <div>
            <h1 className="mb-1 text-2xl font-bold">Welcome, {userName}</h1>
            <p className="text-sm text-muted-foreground">Your spiritual journey continues</p>
          </div>
          <UserMenu userName={userName} userEmail={userEmail} onViewProfile={onViewProfile} onLogout={onLogout} />
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-6 p-6">
        {dailyReflection && (
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Today's Reflection</span>
                  </div>
                  <h3 className="mb-1 text-balance text-xl font-bold">{dailyReflection.title}</h3>
                  {dailyReflection.scripture && (
                    <p className="text-sm font-medium text-muted-foreground">{dailyReflection.scripture}</p>
                  )}
                </div>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">{dailyReflection.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{dailyReflection.estimatedMinutes} minutes</span>
                <Button onClick={handleStartReflection} className="rounded-full font-semibold">
                  Start Reflection
                </Button>
              </div>
            </div>
          </Card>
        )}

        {progress && (
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Your Journey</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-primary">{progress.daysActive}</div>
                <div className="text-xs text-muted-foreground">Days active</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-primary">{progress.dailyActivity.lessonsCompleted}</div>
                <div className="text-xs text-muted-foreground">Lessons today</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-primary">{progress.dailyActivity.chaptersRead}</div>
                <div className="text-xs text-muted-foreground">Chapters today</div>
              </div>
            </div>
          </Card>
        )}

        {onNavigateToLessons && (
          <Card className="overflow-hidden border-2 border-accent/20">
            <button className="w-full p-6 text-left transition-colors hover:bg-muted/50" onClick={onNavigateToLessons}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <GraduationCap className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Spiritual School</h3>
                  <p className="mb-2 text-sm text-muted-foreground">Interactive and structured lessons</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      {lessonStats.completedLessons} of {lessonStats.totalLessons} lessons
                    </span>
                    <span>{Math.round(lessonStats.totalTimeSpent / 60)}h dedicated</span>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground" />
              </div>
            </button>
          </Card>
        )}

        {onNavigateToBible && (
          <Card className="overflow-hidden border-2 border-accent/20">
            <button className="w-full p-6 text-left transition-colors hover:bg-muted/50" onClick={onNavigateToBible}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Book className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Read the Bible</h3>
                  <p className="text-sm text-muted-foreground">Explore the Scriptures</p>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground" />
              </div>
            </button>
          </Card>
        )}

        <Card className="overflow-hidden border-2">
          <button className="w-full p-6 text-left transition-colors hover:bg-muted/50" onClick={onNavigateToChat}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold">Chat</h3>
                <p className="text-sm text-muted-foreground">Share your thoughts and questions</p>
              </div>
            </div>
          </button>
        </Card>
      </div>
    </div>
  )
}
