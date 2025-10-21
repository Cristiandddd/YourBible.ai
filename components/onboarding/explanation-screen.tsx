"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Target, TrendingUp } from "lucide-react"

interface ExplanationScreenProps {
  onContinue: () => void
}

export function ExplanationScreen({ onContinue }: ExplanationScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h2 className="mb-3 text-balance text-center text-3xl font-bold">Here's how your journey works</h2>

        <p className="mb-8 text-pretty text-center text-muted-foreground leading-relaxed">
          Three powerful ways to grow in your faith every day
        </p>

        <div className="mb-8 space-y-4">
          <Card className="border-2 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Ask me anything</h3>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Questions about the Bible, your faith journey, or when you need guidance. I'm here to listen and help you
              grow
            </p>
          </Card>

          <Card className="border-2 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Interactive Bible lessons</h3>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Engaging lessons through Genesis, Exodus, and more. Learn through questions, reflections, and practical
              applications
            </p>
          </Card>

          <Card className="border-2 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/30">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Read and explore Scripture</h3>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Read all 66 books of the Bible. Select any text and ask questions to understand it better with AI-powered
              insights
            </p>
          </Card>
        </div>

        <Button onClick={onContinue} size="lg" className="w-full rounded-full text-lg font-semibold">
          Got it!
        </Button>
      </div>
    </div>
  )
}
