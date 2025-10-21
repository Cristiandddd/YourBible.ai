// Utilidades para manejar el contexto de lectura bíblica

export interface BibleReadingContext {
  bookId: string
  bookName: string
  chapter: number
  selectedText: string
  selectedVerses: number[]
  fullContext: string
}

export function saveBibleContext(context: BibleReadingContext): void {
  if (typeof window === "undefined") return
  localStorage.setItem("bibleReadingContext", JSON.stringify(context))
}

export function getBibleContext(): BibleReadingContext | null {
  if (typeof window === "undefined") return null
  const saved = localStorage.getItem("bibleReadingContext")
  return saved ? JSON.parse(saved) : null
}

export function clearBibleContext(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("bibleReadingContext")
}

export function saveReadingPosition(bookId: string, chapter: number): void {
  if (typeof window === "undefined") return
  localStorage.setItem("lastReadingPosition", JSON.stringify({ bookId, chapter }))
}

export function getReadingPosition(): { bookId: string; chapter: number } | null {
  if (typeof window === "undefined") return null
  const saved = localStorage.getItem("lastReadingPosition")
  return saved ? JSON.parse(saved) : { bookId: "genesis", chapter: 1 }
}
