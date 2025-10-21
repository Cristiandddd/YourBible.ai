"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookHeart } from "lucide-react"
import { getSpiritualProgress, type JournalEntry } from "@/lib/spiritual-journey"

interface JournalScreenProps {
  onBack: () => void
}

export function JournalScreen({ onBack }: JournalScreenProps) {
  const [entries, setEntries] = useState<JournalEntry[]>([])

  useEffect(() => {
    const progress = getSpiritualProgress()
    setEntries(progress.journalEntries.reverse()) // Más recientes primero
  }, [])

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card p-4">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Diario Espiritual</h1>
            <p className="text-sm text-muted-foreground">Tus reflexiones y conversaciones importantes</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl space-y-4 p-6">
        {entries.length === 0 ? (
          <Card className="p-12 text-center">
            <BookHeart className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Tu diario está vacío</h3>
            <p className="text-sm text-muted-foreground">
              Las conversaciones importantes se guardarán automáticamente aquí
            </p>
          </Card>
        ) : (
          entries.map((entry) => (
            <Card key={entry.id} className="p-6">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 font-semibold">{entry.topic}</h3>
                  <p className="text-sm text-muted-foreground">{formatDate(entry.date)}</p>
                </div>
              </div>
              <p className="text-pretty leading-relaxed text-muted-foreground">{entry.reflection}</p>
              {entry.conversationSummary && (
                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm italic text-muted-foreground">{entry.conversationSummary}</p>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
