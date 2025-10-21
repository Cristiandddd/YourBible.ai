"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X } from "lucide-react"
import { useEffect, useRef } from "react"

interface SelectionPopupProps {
  selectedText: string
  position: { x: number; y: number }
  onConsult: () => void
  onClose: () => void
}

export function SelectionPopup({ selectedText, position, onConsult, onClose }: SelectionPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  return (
    <div
      ref={popupRef}
      className="fixed z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -100%)",
      }}
    >
      <Card className="border-2 border-primary/20 bg-background shadow-lg">
        <div className="flex items-center gap-2 p-3">
          <Button size="sm" onClick={onConsult} className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Consult
          </Button>
          <Button size="sm" variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
