"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { BIBLE_BOOKS, type BibleBook } from "@/lib/bible-api"

interface BookSelectorProps {
  onSelectBook: (book: BibleBook) => void
  onBack: () => void
}

export function BookSelector({ onSelectBook, onBack }: BookSelectorProps) {
  const oldTestamentBooks = BIBLE_BOOKS.filter((b) => b.testament === "old")
  const newTestamentBooks = BIBLE_BOOKS.filter((b) => b.testament === "new")

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-4 p-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Select Book</h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-8 p-6">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-primary">Old Testament</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {oldTestamentBooks.map((book) => (
              <Card
                key={book.id}
                className="cursor-pointer transition-colors hover:bg-muted"
                onClick={() => onSelectBook(book)}
              >
                <div className="p-4">
                  <h3 className="mb-1 font-semibold">{book.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {book.chapters} {book.chapters === 1 ? "chapter" : "chapters"}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-primary">New Testament</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {newTestamentBooks.map((book) => (
              <Card
                key={book.id}
                className="cursor-pointer transition-colors hover:bg-muted"
                onClick={() => onSelectBook(book)}
              >
                <div className="p-4">
                  <h3 className="mb-1 font-semibold">{book.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {book.chapters} {book.chapters === 1 ? "chapter" : "chapters"}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
