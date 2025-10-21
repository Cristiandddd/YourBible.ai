"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, HelpCircle, ArrowRight, CheckCircle2, Sparkles, Loader2, Send, ChevronLeft, X } from "lucide-react"
import {
  completeLesson,
  getLessonProgress,
  saveLessonProgress,
  startLesson,
  type Lesson,
  type DialogueStep,
} from "@/lib/lessons-system"
import { explainLessonConcept, evaluateApplicationAnswer } from "@/app/actions/chat-actions"

interface LessonInteractiveProps {
  lesson: Lesson
  onComplete: () => void
  onExit: () => void
}

export function LessonInteractive({ lesson, onComplete, onExit }: LessonInteractiveProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [showHelp, setShowHelp] = useState(false)
  const [aiExplanation, setAiExplanation] = useState<string>("")
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [textAnswers, setTextAnswers] = useState<Record<string, string>>({})
  const [aiFeedback, setAiFeedback] = useState<Record<string, string>>({})
  const [isSubmittingAnswer, setIsSubmittingAnswer] = useState(false)

  useEffect(() => {
    startLesson(lesson.id)
  }, [lesson.id])

  const allSteps: DialogueStep[] = [
    lesson.content.introduction,
    ...lesson.content.teaching,
    lesson.content.application,
    lesson.content.reflection,
  ]

  const currentStep = allSteps[currentStepIndex]
  const progress = ((currentStepIndex + 1) / allSteps.length) * 100
  const isLastStep = currentStepIndex === allSteps.length - 1
  const isOpenEnded =
    (currentStep.type === "application" || currentStep.type === "reflection") &&
    (!currentStep.options || currentStep.options.length === 0)

  const isFirstQuestion = currentStepIndex === 0 && currentStep.type === "question"

  const handleOptionSelect = (optionId: string) => {
    if (selectedOptions[currentStep.id]) return

    setSelectedOptions({
      ...selectedOptions,
      [currentStep.id]: optionId,
    })

    const lessonProgress = getLessonProgress()
    if (lessonProgress.lessonStates[lesson.id]) {
      lessonProgress.lessonStates[lesson.id].responses[currentStep.id] = optionId
      saveLessonProgress(lessonProgress)
    }
  }

  const handleSubmitTextAnswer = async () => {
    const answer = textAnswers[currentStep.id]
    if (!answer || answer.trim().length === 0) return

    setIsSubmittingAnswer(true)
    setAiFeedback({ ...aiFeedback, [currentStep.id]: "" })

    const result = await evaluateApplicationAnswer(currentStep.text, answer)

    setIsSubmittingAnswer(false)
    if (result.success) {
      setAiFeedback({ ...aiFeedback, [currentStep.id]: result.feedback })

      const lessonProgress = getLessonProgress()
      if (lessonProgress.lessonStates[lesson.id]) {
        lessonProgress.lessonStates[lesson.id].responses[currentStep.id] = answer
        saveLessonProgress(lessonProgress)
      }
    } else {
      setAiFeedback({ ...aiFeedback, [currentStep.id]: result.feedback })
    }
  }

  const handleNext = () => {
    if (isLastStep) {
      completeLesson(lesson.id)
      setIsComplete(true)
    } else {
      setCurrentStepIndex(currentStepIndex + 1)
      setShowHelp(false)
      setAiExplanation("")
    }
  }

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
      setShowHelp(false)
      setAiExplanation("")
    }
  }

  const handleGetExplanation = async () => {
    setShowHelp(true)
    setIsLoadingExplanation(true)
    setAiExplanation("")

    const result = await explainLessonConcept(currentStep.text)

    setIsLoadingExplanation(false)
    if (result.success) {
      setAiExplanation(result.explanation)
    } else {
      setAiExplanation("I'm having trouble explaining this right now. Please try again.")
    }
  }

  const selectedOption = currentStep.options?.find((opt) => opt.id === selectedOptions[currentStep.id])
  const hasReceivedFeedback = aiFeedback[currentStep.id] && aiFeedback[currentStep.id].length > 0

  if (isComplete) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <Card className="w-full max-w-md overflow-hidden border-2">
          <div className="bg-gradient-to-br from-green-500/10 via-primary/5 to-accent/10 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Lesson Completed</h2>
            <p className="mb-6 text-muted-foreground">You have successfully completed: {lesson.title}</p>
            <div className="space-y-2">
              <Button onClick={onComplete} className="w-full">
                Continue learning
              </Button>
              <Button onClick={onExit} variant="outline" className="w-full bg-transparent">
                Back to home
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h1 className="text-lg font-semibold">{lesson.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              {currentStepIndex > 0 && (
                <Button variant="ghost" size="icon" onClick={handleBack}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={onExit}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <Progress value={progress} className="h-1.5" />
          <p className="mt-2 text-xs text-muted-foreground">
            Step {currentStepIndex + 1} of {allSteps.length}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl space-y-6 p-6">
        {/* AI Avatar */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <Card className="flex-1 p-4">
            {currentStep.type === "scripture" && currentStep.scripture && (
              <div className="mb-3 rounded-lg bg-muted/50 p-3">
                <p className="text-sm italic text-muted-foreground">{currentStep.scripture}</p>
              </div>
            )}
            <p className="leading-relaxed">{currentStep.text}</p>
          </Card>
        </div>

        {isOpenEnded && !hasReceivedFeedback && (
          <div className="space-y-3">
            <Textarea
              placeholder="Type your answer here..."
              value={textAnswers[currentStep.id] || ""}
              onChange={(e) => setTextAnswers({ ...textAnswers, [currentStep.id]: e.target.value })}
              className="min-h-32 resize-none"
              disabled={isSubmittingAnswer}
            />
            <Button
              onClick={handleSubmitTextAnswer}
              disabled={
                !textAnswers[currentStep.id] || textAnswers[currentStep.id].trim().length === 0 || isSubmittingAnswer
              }
              className="w-full"
            >
              {isSubmittingAnswer ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Thinking...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Answer
                </>
              )}
            </Button>
          </div>
        )}

        {/* Options */}
        {currentStep.options && currentStep.options.length > 0 && (
          <div className="space-y-3">
            {currentStep.options.map((option) => {
              const isSelected = selectedOptions[currentStep.id] === option.id
              const hasSelectedOption = selectedOptions[currentStep.id] !== undefined
              const isDisabled = hasSelectedOption && !isSelected
              const isCorrectAnswer = option.isCorrect === true
              const borderColor = isFirstQuestion
                ? "border-border"
                : isSelected
                  ? isCorrectAnswer
                    ? "border-green-500"
                    : "border-orange-500"
                  : isDisabled
                    ? "border-border"
                    : "border-border"

              return (
                <button
                  key={option.id}
                  onClick={() => !hasSelectedOption && handleOptionSelect(option.id)}
                  disabled={isDisabled}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all ${borderColor} ${
                    isSelected && !isFirstQuestion
                      ? isCorrectAnswer
                        ? "bg-green-500/5"
                        : "bg-orange-500/5"
                      : isDisabled
                        ? "bg-muted/30 opacity-50 cursor-not-allowed"
                        : "bg-card hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <p className={`font-medium ${isDisabled ? "text-muted-foreground" : ""}`}>{option.text}</p>
                </button>
              )
            })}
          </div>
        )}

        {hasReceivedFeedback && (
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <Card className="flex-1 border-2 border-primary/20 bg-primary/5 p-4">
              <p className="text-sm leading-relaxed">{aiFeedback[currentStep.id]}</p>
            </Card>
          </div>
        )}

        {/* Response from AI */}
        {selectedOption && (
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <Card className="flex-1 p-4">
              <p className="leading-relaxed">{selectedOption.response}</p>
              {selectedOption.isCorrect !== undefined && (
                <div className="mt-2 flex items-center gap-2">
                  {selectedOption.isCorrect ? (
                    <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Correct
                    </span>
                  ) : null}
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Help Button */}
        {currentStep.helpAvailable && !showHelp && (
          <Button variant="outline" size="sm" onClick={handleGetExplanation} className="w-full bg-transparent">
            <HelpCircle className="mr-2 h-4 w-4" />I don't understand, explain more
          </Button>
        )}

        {showHelp && (
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
              <HelpCircle className="h-5 w-5 text-amber-600" />
            </div>
            <Card className="flex-1 border-2 border-amber-500/20 bg-amber-500/5 p-4">
              {isLoadingExplanation ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              ) : (
                <p className="text-sm leading-relaxed">{aiExplanation}</p>
              )}
            </Card>
          </div>
        )}

        {/* Next Button */}
        {(selectedOption || (!currentStep.options && !isOpenEnded) || (isOpenEnded && hasReceivedFeedback)) && (
          <Button onClick={handleNext} className="w-full" size="lg">
            {isLastStep ? "Complete lesson" : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
