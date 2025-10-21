"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BookOpen, CheckCircle2, Circle } from "lucide-react"
import { getUserProfile } from "@/lib/user-profile"
import { getLearningPath, type LearningTopic } from "@/lib/spiritual-journey"

interface LearningPathScreenProps {
  onBack: () => void
  onSelectTopic: (topic: LearningTopic) => void
}

export function LearningPathScreen({ onBack, onSelectTopic }: LearningPathScreenProps) {
  const [topics, setTopics] = useState<LearningTopic[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("fundamentos")

  useEffect(() => {
    const userProfile = getUserProfile()
    if (!userProfile) return

    const allTopics = getLearningPath(userProfile.religion)
    setTopics(allTopics)
  }, [])

  const categories = [
    { id: "fundamentos", label: "Fundamentos de la Fe", icon: "📖" },
    { id: "vivir-la-fe", label: "Vivir la Fe", icon: "🙏" },
    { id: "profundizando", label: "Profundizando", icon: "✨" },
  ]

  const categoryTopics = topics.filter((t) => t.category === selectedCategory)
  const completedCount = categoryTopics.filter((t) => t.completed).length
  const progressPercent = categoryTopics.length > 0 ? (completedCount / categoryTopics.length) * 100 : 0

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card p-4">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Camino de Aprendizaje</h1>
            <p className="text-sm text-muted-foreground">Explora y profundiza en tu fe</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl space-y-6 p-6">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
              className="flex-shrink-0 rounded-full"
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Progress Card */}
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Progreso en esta categoría</h3>
            <span className="text-sm text-muted-foreground">
              {completedCount} de {categoryTopics.length}
            </span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </Card>

        {/* Topics List */}
        <div className="space-y-3">
          {categoryTopics.map((topic) => (
            <Card key={topic.id} className="overflow-hidden">
              <button
                className="w-full p-5 text-left transition-colors hover:bg-muted/50"
                onClick={() => onSelectTopic(topic)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                    {topic.completed ? (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    ) : (
                      <Circle className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold">{topic.title}</h4>
                    <p className="mb-3 text-sm text-muted-foreground">{topic.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {topic.subtopics.map((subtopic, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {subtopic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <BookOpen className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                </div>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
