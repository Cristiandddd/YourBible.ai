"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Loader2 } from "lucide-react"
import { updateUserProfile } from "@/app/actions/auth-actions"

interface ProfileScreenProps {
  user: {
    id: string
    email: string
    username: string
    faith_stage?: string
    current_needs?: string
    brings_here?: string
  }
  onBack: () => void
  onUpdate: () => void
}

export function ProfileScreen({ user, onBack, onUpdate }: ProfileScreenProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    username: user.username || "",
    faithStage: user.faith_stage || "",
    currentNeeds: user.current_needs || "",
    bringsHere: user.brings_here || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await updateUserProfile(user.id, formData)

    if (result.success) {
      onUpdate()
    } else {
      setError(result.error || "Failed to update profile")
    }

    setIsLoading(false)
  }

  const faithStageOptions = [
    { value: "exploring", label: "Exploring Faith" },
    { value: "new_believer", label: "New Believer" },
    { value: "growing", label: "Growing in Faith" },
    { value: "mature", label: "Mature Believer" },
  ]

  const currentNeedsOptions = [
    { value: "understanding_basics", label: "Understanding the Basics" },
    { value: "deeper_study", label: "Deeper Bible Study" },
    { value: "life_application", label: "Applying Faith to Life" },
    { value: "spiritual_growth", label: "Spiritual Growth" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto flex max-w-2xl items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-sm text-muted-foreground">Manage your account information</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl space-y-6 p-6">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email (read-only) */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user.email} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground">Email cannot be changed</p>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Faith Stage */}
            <div className="space-y-2">
              <Label htmlFor="faithStage">Where are you in your faith journey?</Label>
              <select
                id="faithStage"
                value={formData.faithStage}
                onChange={(e) => setFormData({ ...formData, faithStage: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select an option</option>
                {faithStageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Needs */}
            <div className="space-y-2">
              <Label htmlFor="currentNeeds">What are you looking for right now?</Label>
              <select
                id="currentNeeds"
                value={formData.currentNeeds}
                onChange={(e) => setFormData({ ...formData, currentNeeds: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select an option</option>
                {currentNeedsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* What brings you here */}
            <div className="space-y-2">
              <Label htmlFor="bringsHere">What brings you here today?</Label>
              <Textarea
                id="bringsHere"
                value={formData.bringsHere}
                onChange={(e) => setFormData({ ...formData, bringsHere: e.target.value })}
                placeholder="Share what brought you to this app..."
                rows={4}
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
