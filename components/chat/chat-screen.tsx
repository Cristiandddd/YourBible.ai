"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Send, Loader2, Trash2, MoreVertical } from "lucide-react"
import { sendMessageToAI, type Message } from "@/app/actions/chat-actions"
import { getUserProfile, addImportantFact, addTopic } from "@/lib/user-profile"
import { cleanOldMessages, resetChat } from "@/lib/chat-utils"
import {
  completeReflection,
  startTopic,
  trackChatSession,
  type DailyReflection,
  type LearningTopic,
} from "@/lib/spiritual-journey"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ChatScreenProps {
  userName: string
  onBack: () => void
  isBibleChat?: boolean
}

export function ChatScreen({ userName, onBack, isBibleChat = false }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResetDialog, setShowResetDialog] = useState(false)
  const [pendingReflection, setPendingReflection] = useState<DailyReflection | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<LearningTopic | null>(null)
  const [bibleContext, setBibleContext] = useState<any>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const autoQuestionSentRef = useRef(false)
  const sessionTrackedRef = useRef(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_${userName}`)
    const profile = getUserProfile()

    const pendingReflectionData = localStorage.getItem("pendingReflection")
    const selectedTopicData = localStorage.getItem("selectedTopic")
    const autoQuestion = localStorage.getItem("bibleAutoQuestion")
    const bibleContextData = localStorage.getItem("bibleContextForAI")

    if (pendingReflectionData) {
      const reflection: DailyReflection = JSON.parse(pendingReflectionData)
      setPendingReflection(reflection)
      localStorage.removeItem("pendingReflection")
    }

    if (selectedTopicData) {
      const topic: LearningTopic = JSON.parse(selectedTopicData)
      setSelectedTopic(topic)
      startTopic(topic.id)
      localStorage.removeItem("selectedTopic")
    }

    if (bibleContextData) {
      setBibleContext(JSON.parse(bibleContextData))
    }

    if (savedMessages) {
      const parsedMessages = JSON.parse(savedMessages)
      const cleanedMessages = cleanOldMessages(parsedMessages)
      setMessages(cleanedMessages)

      if (cleanedMessages.length !== parsedMessages.length) {
        localStorage.setItem(`chat_${userName}`, JSON.stringify(cleanedMessages))
      }
    } else {
      let welcomeMessage = ""

      if (pendingReflectionData) {
        const reflection: DailyReflection = JSON.parse(pendingReflectionData)
        welcomeMessage = `Hello ${userName}, let's reflect together on "${reflection.title}". ${reflection.description}\n\n${reflection.scripture ? `We can start by meditating on ${reflection.scripture}.\n\n` : ""}${reflection.questions[0]}`
      } else if (selectedTopicData) {
        const topic: LearningTopic = JSON.parse(selectedTopicData)
        welcomeMessage = `Hello ${userName}, let's explore "${topic.title}" together. ${topic.description}\n\nWhat would you like to know about this topic?`
      } else if (profile) {
        welcomeMessage = `Hello ${userName}, it's great to have you here. I see you're interested in ${profile.religion} and want to ${profile.spiritualGoals[0] || "grow spiritually"}. I'm here to accompany you on your journey. How can I help you today?`
      } else {
        welcomeMessage = `Hello ${userName}, it's great to have you here. I'm your spiritual companion and I'm here to accompany you on your faith journey. You can ask me anything about the Bible, share how you're feeling, or just chat. How can I help you today?`
      }

      setMessages([
        {
          role: "assistant",
          content: welcomeMessage,
          timestamp: Date.now(),
        },
      ])
    }

    if (isBibleChat && autoQuestion && !autoQuestionSentRef.current) {
      autoQuestionSentRef.current = true
      setTimeout(() => {
        handleAutoQuestion(autoQuestion)
      }, 500)
    }
  }, [userName, isBibleChat])

  const handleAutoQuestion = async (question: string) => {
    const userMessage: Message = {
      role: "user",
      content: question,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await sendMessageToAI(question, [], userName, bibleContext)

      if (response.success) {
        const aiMessage: Message = {
          role: "assistant",
          content: response.message,
          timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, aiMessage])

        localStorage.removeItem("bibleAutoQuestion")
        localStorage.removeItem("bibleContextForAI")
      } else {
        const errorMessage: Message = {
          role: "assistant",
          content: "Sorry, I had a technical problem. Could you try again?",
          timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("[v0] Error sending auto-question:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const detectAndSaveMemory = (userMessage: string, aiResponse: string) => {
    const importantKeywords = [
      "lost",
      "died",
      "passed away",
      "sick",
      "illness",
      "divorce",
      "separation",
      "job",
      "work",
      "fired",
      "pregnancy",
      "baby",
      "son",
      "daughter",
      "depression",
      "anxiety",
      "fear",
      "loneliness",
      "pain",
    ]

    const lowerMessage = userMessage.toLowerCase()
    const hasImportantInfo = importantKeywords.some((keyword) => lowerMessage.includes(keyword))

    if (hasImportantInfo) {
      const fact = userMessage.length > 100 ? userMessage.substring(0, 100) + "..." : userMessage
      addImportantFact(fact)
    }

    const topics = [
      { keywords: ["forgiveness", "forgive"], topic: "forgiveness" },
      { keywords: ["prayer", "pray"], topic: "prayer" },
      { keywords: ["faith", "believe", "belief"], topic: "faith" },
      { keywords: ["love", "loving"], topic: "love" },
      { keywords: ["hope", "hoping"], topic: "hope" },
      { keywords: ["fear", "afraid", "anxiety"], topic: "fear management" },
      { keywords: ["family", "husband", "wife", "son", "daughter"], topic: "family" },
      { keywords: ["job", "work", "career"], topic: "work" },
    ]

    topics.forEach(({ keywords, topic }) => {
      if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
        addTopic(topic)
      }
    })

    if (pendingReflection && messages.filter((m) => m.role === "user").length >= 2) {
      completeReflection(pendingReflection.id)
      setPendingReflection(null)
    }
  }

  const handleResetChat = () => {
    resetChat(userName)
    const profile = getUserProfile()

    const welcomeMessage = profile
      ? `Hello ${userName}, it's great to have you here again. I'm here to accompany you on your journey. How can I help you today?`
      : `Hello ${userName}, it's great to have you here. How can I help you today?`

    setMessages([
      {
        role: "assistant",
        content: welcomeMessage,
        timestamp: Date.now(),
      },
    ])

    setShowResetDialog(false)
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    if (!sessionTrackedRef.current) {
      trackChatSession()
      sessionTrackedRef.current = true
    }

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input.trim()
    setInput("")
    setIsLoading(true)

    try {
      const response = await sendMessageToAI(currentInput, messages, userName, bibleContext)

      if (response.success) {
        const aiMessage: Message = {
          role: "assistant",
          content: response.message,
          timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, aiMessage])

        detectAndSaveMemory(currentInput, response.message)
      } else {
        const errorMessage: Message = {
          role: "assistant",
          content: "Sorry, I had a technical problem. Could you try again?",
          timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("[v0] Error sending message:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const getQuickSuggestions = () => {
    if (pendingReflection && pendingReflection.questions.length > 1) {
      return pendingReflection.questions.slice(0, 3)
    }

    return [
      "What does it mean to love my neighbor?",
      "How can I find peace in difficult times?",
      "Help me understand forgiveness",
      "What does the Bible say about hope?",
    ]
  }

  const quickSuggestions = getQuickSuggestions()

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <div className="border-b bg-card p-4">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg">🕊️</span>
            </div>
            <div>
              <h2 className="font-semibold">Your Companion</h2>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setShowResetDialog(true)} className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Reset chat
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto max-w-2xl space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <Card
                className={`max-w-[80%] p-4 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card"
                }`}
              >
                <p className="whitespace-pre-wrap text-pretty leading-relaxed">{message.content}</p>
                <p
                  className={`mt-2 text-xs ${
                    message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {new Date(message.timestamp).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </Card>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <Card className="max-w-[80%] bg-card p-4">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p className="text-sm text-muted-foreground">Writing...</p>
                </div>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      {messages.filter((m) => m.role === "user").length === 0 && (
        <div className="border-t bg-card p-4">
          <div className="mx-auto max-w-2xl">
            <p className="mb-2 text-sm text-muted-foreground">Suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent text-xs"
                  onClick={() => setInput(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t bg-card p-4">
        <div className="mx-auto flex max-w-2xl items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Write your message..."
            className="min-h-[44px] max-h-32 flex-1 resize-none rounded-full border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            rows={1}
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="h-11 w-11 shrink-0 rounded-full"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Confirmation Dialog for Chat Reset */}
      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reset chat?</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete all messages from the conversation. Your profile and important memory will remain intact.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleResetChat} className="bg-destructive text-destructive-foreground">
              Yes, reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
