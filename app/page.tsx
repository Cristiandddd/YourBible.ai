"use client"

import { useState, useEffect } from "react"
import { LoginScreen } from "@/components/auth/login-screen"
import { SignupScreen } from "@/components/auth/signup-screen"
import { ProfileQuestionsScreen } from "@/components/onboarding/profile-questions-screen"
import { ExplanationScreen } from "@/components/onboarding/explanation-screen"
import { HomeScreen } from "@/components/home/home-screen"
import { ChatScreen } from "@/components/chat/chat-screen"
import { JournalScreen } from "@/components/journey/journal-screen"
import { LessonsScreen } from "@/components/lessons/lessons-screen"
import { LessonInteractive } from "@/components/lessons/lesson-interactive"
import { BibleReaderScreen } from "@/components/bible/bible-reader-screen"
import { BibleChatScreen } from "@/components/bible/bible-chat-screen"
import { BibleBookSelectionScreen } from "@/components/bible/bible-book-selection-screen"
import { ProfileScreen } from "@/components/profile/profile-screen"
import type { Lesson } from "@/lib/lessons-system"
import { getNextLesson } from "@/lib/lessons-system"
import { getCurrentUser } from "@/app/actions/auth-actions"
import { logout } from "@/app/actions/auth-actions"

type Screen =
  | "login"
  | "signup"
  | "profile-questions"
  | "explanation"
  | "home"
  | "chat"
  | "journal"
  | "lessons"
  | "lesson-interactive"
  | "bible-book-selection"
  | "bible-reader"
  | "bible-chat"
  | "profile"

export default function Page() {
  const [screen, setScreen] = useState<Screen>("login")
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [selectedBibleBook, setSelectedBibleBook] = useState<any>(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const user = await getCurrentUser()
    if (user) {
      setCurrentUser(user)
      // If user hasn't completed onboarding, show profile questions
      if (!user.onboarding_completed) {
        setScreen("profile-questions")
      } else {
        setScreen("home")
      }
    } else {
      setScreen("login")
    }
    setIsLoading(false)
  }

  const handleLoginSuccess = (user: any) => {
    setCurrentUser(user)
    if (user.onboardingCompleted) {
      setScreen("home")
    } else {
      setScreen("profile-questions")
    }
  }

  const handleSignupSuccess = (user: any) => {
    setCurrentUser(user)
    setScreen("profile-questions")
  }

  const handleProfileComplete = () => {
    setScreen("explanation")
  }

  const handleStartLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson)
    setScreen("lesson-interactive")
  }

  const handleLessonComplete = () => {
    if (currentLesson) {
      const nextLesson = getNextLesson(currentLesson.id)
      if (nextLesson) {
        setCurrentLesson(nextLesson)
      } else {
        setCurrentLesson(null)
        setScreen("lessons")
      }
    } else {
      setCurrentLesson(null)
      setScreen("lessons")
    }
  }

  const handleLessonExit = () => {
    setCurrentLesson(null)
    setScreen("home")
  }

  const handleNavigateToBible = () => {
    setScreen("bible-book-selection")
  }

  const handleSelectBibleBook = (book: any) => {
    setSelectedBibleBook(book)
    setScreen("bible-reader")
  }

  const handleLogout = async () => {
    await logout()
    setCurrentUser(null)
    setScreen("login")
  }

  const handleViewProfile = () => {
    setScreen("profile")
  }

  const handleProfileUpdate = async () => {
    // Refresh user data after profile update
    const user = await getCurrentUser()
    if (user) {
      setCurrentUser(user)
    }
    setScreen("home")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {screen === "login" && (
        <LoginScreen onLoginSuccess={handleLoginSuccess} onSwitchToSignup={() => setScreen("signup")} />
      )}
      {screen === "signup" && (
        <SignupScreen onSignupSuccess={handleSignupSuccess} onSwitchToLogin={() => setScreen("login")} />
      )}

      {screen === "profile-questions" && currentUser && (
        <ProfileQuestionsScreen
          userName={currentUser.name}
          userId={currentUser.id}
          onComplete={handleProfileComplete}
        />
      )}
      {screen === "explanation" && <ExplanationScreen onContinue={() => setScreen("home")} />}

      {/* Home screen */}
      {screen === "home" && currentUser && (
        <HomeScreen
          userName={currentUser.username}
          userEmail={currentUser.email}
          onNavigateToChat={() => setScreen("chat")}
          onNavigateToLessons={() => setScreen("lessons")}
          onNavigateToBible={handleNavigateToBible}
          onViewProfile={handleViewProfile}
          onLogout={handleLogout}
        />
      )}

      {/* Chat screen */}
      {screen === "chat" && currentUser && (
        <ChatScreen userName={currentUser.username} onBack={() => setScreen("home")} />
      )}

      {/* Journal screen */}
      {screen === "journal" && <JournalScreen onBack={() => setScreen("home")} />}

      {/* Lessons screen */}
      {screen === "lessons" && <LessonsScreen onStartLesson={handleStartLesson} onBack={() => setScreen("home")} />}

      {/* Lesson interactive screen */}
      {screen === "lesson-interactive" && currentLesson && (
        <LessonInteractive
          key={currentLesson.id}
          lesson={currentLesson}
          onComplete={handleLessonComplete}
          onExit={handleLessonExit}
        />
      )}

      {/* Bible book selection screen */}
      {screen === "bible-book-selection" && (
        <BibleBookSelectionScreen onSelectBook={handleSelectBibleBook} onBack={() => setScreen("home")} />
      )}

      {/* Bible reader screen */}
      {screen === "bible-reader" && (
        <BibleReaderScreen
          onBack={() => setScreen("bible-book-selection")}
          onConsult={() => setScreen("bible-chat")}
          initialBook={selectedBibleBook}
        />
      )}

      {/* Bible chat screen */}
      {screen === "bible-chat" && <BibleChatScreen onBack={() => setScreen("bible-reader")} />}

      {/* Profile screen */}
      {screen === "profile" && currentUser && (
        <ProfileScreen user={currentUser} onBack={() => setScreen("home")} onUpdate={handleProfileUpdate} />
      )}
    </div>
  )
}
