"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface WelcomeScreenProps {
  onContinue: () => void
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <Sparkles className="h-12 w-12 text-primary" />
      </div>

      <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight">Hello, I'm your spiritual companion</h1>

      <p className="mb-12 max-w-md text-pretty text-lg text-muted-foreground leading-relaxed">
        I'm here to walk with you in your faith, answer your questions, and grow together every day
      </p>

      <div className="relative mb-12 h-64 w-full max-w-sm">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <img
            src="/peaceful-dove-with-olive-branch-spiritual-illustra.jpg"
            alt="Spiritual companion"
            className="h-48 w-48 object-contain"
          />
        </div>
      </div>

      <Button onClick={onContinue} size="lg" className="w-full max-w-sm rounded-full text-lg font-semibold">
        Begin my journey
      </Button>
    </div>
  )
}
