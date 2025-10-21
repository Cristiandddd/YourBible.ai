"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Sparkles, Eye, EyeOff } from "lucide-react"
import { login } from "@/app/actions/auth-actions"

interface LoginScreenProps {
  onLoginSuccess: (user: any) => void
  onSwitchToSignup: () => void
}

export function LoginScreen({ onLoginSuccess, onSwitchToSignup }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const result = await login(email, password)

    if (result.success && result.user) {
      onLoginSuccess(result.user)
    } else {
      setError(result.error || "Failed to log in")
    }

    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="w-full max-w-md">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">Continue your spiritual journey</p>
        </div>

        {/* Login Form */}
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="h-12 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </Button>
          </form>
        </Card>

        {/* Switch to Signup */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button onClick={onSwitchToSignup} className="text-primary font-semibold hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
