"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, BookOpen } from "lucide-react"
import { getBibleContext, type BibleReadingContext } from "@/lib/bible-context"
import { ChatScreen } from "@/components/chat/chat-screen"
import { getUserProfile } from "@/lib/user-profile"

interface BibleChatScreenProps {
  onBack: () => void
}

export function BibleChatScreen({ onBack }: BibleChatScreenProps) {
  const [context, setContext] = useState<BibleReadingContext | null>(null)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const profile = getUserProfile()
    if (profile) {
      setUserName(profile.name)
    }

    const bibleContext = getBibleContext()
    if (bibleContext) {
      setContext(bibleContext)

      const autoQuestion = `What does "${bibleContext.selectedText}" mean in ${bibleContext.bookName} ${bibleContext.chapter}?`
      localStorage.setItem("bibleAutoQuestion", autoQuestion)
      localStorage.setItem("bibleContextForAI", JSON.stringify(bibleContext))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Context Card */}
      {context && (
        <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">Asking about:</span>
                  <span className="text-sm text-muted-foreground">
                    {context.bookName} {context.chapter}
                  </span>
                </div>
                <p className="text-sm font-medium">"{context.selectedText}"</p>
              </div>
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Interface */}
      <ChatScreen userName={userName} onBack={onBack} isBibleChat={true} />
    </div>
  )
}
