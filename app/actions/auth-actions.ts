"use server"

import { sql } from "@/lib/db"
import { createSession, deleteSession } from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function signup(email: string, password: string, username: string) {
  // Changed parameter name from name to username
  try {
    // Validate input
    if (!email || !password || !username) {
      // Changed from name to username
      return { success: false, error: "All fields are required" }
    }

    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters" }
    }

    // Check if user already exists
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email.toLowerCase()}
    `

    if (existingUser.length > 0) {
      return { success: false, error: "An account with this email already exists" }
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Create user
    const result = await sql`
      INSERT INTO users (email, username, password_hash, onboarding_completed)
      VALUES (${email.toLowerCase()}, ${username}, ${passwordHash}, false)
      RETURNING id, email, username
    `

    const user = result[0]

    // Create user progress record
    await sql`
      INSERT INTO user_progress (user_id)
      VALUES (${user.id})
    `

    // Create session
    await createSession(user.id)

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username, // Changed from name to username
      },
    }
  } catch (error) {
    console.error("[v0] Signup error:", error)
    return { success: false, error: "Failed to create account. Please try again." }
  }
}

export async function login(email: string, password: string) {
  try {
    // Validate input
    if (!email || !password) {
      return { success: false, error: "Email and password are required" }
    }

    // Find user
    const result = await sql`
      SELECT id, email, username, password_hash, onboarding_completed
      FROM users
      WHERE email = ${email.toLowerCase()}
    `

    if (result.length === 0) {
      return { success: false, error: "Invalid email or password" }
    }

    const user = result[0]

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash)

    if (!isValidPassword) {
      return { success: false, error: "Invalid email or password" }
    }

    // Create session
    await createSession(user.id)

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username, // Changed from name to username
        onboardingCompleted: user.onboarding_completed,
      },
    }
  } catch (error) {
    console.error("[v0] Login error:", error)
    return { success: false, error: "Failed to log in. Please try again." }
  }
}

export async function logout() {
  try {
    await deleteSession()
    return { success: true }
  } catch (error) {
    console.error("[v0] Logout error:", error)
    return { success: false, error: "Failed to log out" }
  }
}

export async function getCurrentUser() {
  try {
    const { getCurrentUserId } = await import("@/lib/auth")
    const userId = await getCurrentUserId()

    if (!userId) {
      return null
    }

    const result = await sql`
      SELECT id, email, username, onboarding_completed
      FROM users
      WHERE id = ${userId}
    `

    if (result.length === 0) {
      return null
    }

    return result[0]
  } catch (error) {
    console.error("[v0] Get current user error:", error)
    return null
  }
}

export async function completeOnboarding(
  userId: string,
  data: {
    faithStage: string
    currentNeeds: string
    bringsHere: string
  },
) {
  try {
    await sql`
      UPDATE users
      SET 
        faith_stage = ${data.faithStage},
        current_needs = ${data.currentNeeds},
        brings_here = ${data.bringsHere},
        onboarding_completed = true
      WHERE id = ${userId}
    `

    return { success: true }
  } catch (error) {
    console.error("[v0] Complete onboarding error:", error)
    return { success: false, error: "Failed to complete onboarding" }
  }
}

export async function updateUserProfile(
  userId: string,
  data: {
    username: string
    faithStage: string
    currentNeeds: string
    bringsHere: string
  },
) {
  try {
    await sql`
      UPDATE users
      SET 
        username = ${data.username},
        faith_stage = ${data.faithStage},
        current_needs = ${data.currentNeeds},
        brings_here = ${data.bringsHere}
      WHERE id = ${userId}
    `

    return { success: true }
  } catch (error) {
    console.error("[v0] Update profile error:", error)
    return { success: false, error: "Failed to update profile" }
  }
}
