"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"
import { getBibleChapter, getBibleBook, type BibleChapter, type BibleBook } from "@/lib/bible-api"
import { saveBibleContext, saveReadingPosition, getReadingPosition } from "@/lib/bible-context"
import { trackChapterRead } from "@/lib/spiritual-journey"
import { BookSelector } from "./book-selector"
import { SelectionPopup } from "./selection-popup"

interface BibleReaderScreenProps {
  onBack: () => void
  onConsult: () => void
  initialBook?: BibleBook
}

export function BibleReaderScreen({ onBack, onConsult, initialBook }: BibleReaderScreenProps) {
  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null)
  const [chapter, setChapter] = useState(1)
  const [chapterData, setChapterData] = useState<BibleChapter | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showBookSelector, setShowBookSelector] = useState(false)
  const [selectedText, setSelectedText] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (initialBook) {
      setSelectedBook(initialBook)
      setChapter(1)
    } else {
      const position = getReadingPosition()
      if (position) {
        const book = getBibleBook(position.bookId)
        if (book) {
          setSelectedBook(book)
          setChapter(position.chapter)
        }
      } else {
        const genesis = getBibleBook("genesis")
        if (genesis) {
          setSelectedBook(genesis)
          setChapter(1)
        }
      }
    }
  }, [initialBook])

  // Load capítulo cuando cambia el libro o capítulo
  useEffect(() => {
    if (selectedBook) {
      loadChapter(selectedBook.id, chapter)
      saveReadingPosition(selectedBook.id, chapter)
      trackChapterRead(selectedBook.id, chapter)
    }
  }, [selectedBook, chapter])

  const loadChapter = async (bookId: string, chapterNum: number) => {
    setLoading(true)
    setError(null)
    try {
      const data = await getBibleChapter(bookId, chapterNum)
      setChapterData(data)
    } catch (err) {
      setError("Error al cargar el capítulo. Por favor, intenta de nuevo.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleTextSelection = () => {
    const selection = window.getSelection()
    const text = selection?.toString().trim()

    if (text && text.length > 3) {
      const range = selection?.getRangeAt(0)
      const rect = range?.getBoundingClientRect()

      if (rect) {
        setSelectedText(text)
        setPopupPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
        })
        setShowPopup(true)
      }
    } else {
      setShowPopup(false)
    }
  }

  const handleConsult = () => {
    if (!selectedBook || !chapterData) return

    // Guardar contexto para el chat
    saveBibleContext({
      bookId: selectedBook.id,
      bookName: selectedBook.name,
      chapter,
      selectedText,
      selectedVerses: [], // TODO: detectar versículos específicos
      fullContext: chapterData.verses.map((v) => v.text).join(" "),
    })

    setShowPopup(false)
    onConsult()
  }

  const handlePreviousChapter = () => {
    if (chapter > 1) {
      setChapter(chapter - 1)
    }
  }

  const handleNextChapter = () => {
    if (selectedBook && chapter < selectedBook.chapters) {
      setChapter(chapter + 1)
    }
  }

  const handleSelectBook = (book: BibleBook) => {
    setSelectedBook(book)
    setChapter(1)
    setShowBookSelector(false)
  }

  if (showBookSelector) {
    return <BookSelector onSelectBook={handleSelectBook} onBack={() => setShowBookSelector(false)} />
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1 text-center">
            <button
              onClick={() => setShowBookSelector(true)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 transition-colors hover:bg-muted"
            >
              <BookOpen className="h-4 w-4" />
              <span className="font-semibold">
                {selectedBook?.name} {chapter}
              </span>
            </button>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl p-6">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="text-sm text-muted-foreground">Loading chapter...</p>
            </div>
          </div>
        )}

        {error && (
          <Card className="border-destructive/50 bg-destructive/10 p-6">
            <p className="text-center text-destructive">{error}</p>
          </Card>
        )}

        {!loading && !error && chapterData && (
          <div>
            <div className="mb-6">
              <h1 className="mb-2 text-balance text-2xl font-bold">
                {selectedBook?.name} {chapter}
              </h1>
            </div>

            <div className="space-y-4 leading-relaxed" onMouseUp={handleTextSelection} onTouchEnd={handleTextSelection}>
              {chapterData.verses.map((verse) => (
                <p key={verse.verse} className="text-pretty">
                  <span className="mr-2 text-sm font-semibold text-primary">{verse.verse}</span>
                  <span className="select-text">{verse.text}</span>
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <Button variant="outline" onClick={handlePreviousChapter} disabled={chapter === 1}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Chapter {chapter} of {selectedBook?.chapters}
              </span>
              <Button variant="outline" onClick={handleNextChapter} disabled={chapter === selectedBook?.chapters}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Selection Popup */}
      {showPopup && (
        <SelectionPopup
          selectedText={selectedText}
          position={popupPosition}
          onConsult={handleConsult}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}
