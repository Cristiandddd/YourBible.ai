import postgres from "postgres"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

export const sql = postgres(process.env.DATABASE_URL, {
  ssl: "require",
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
})

// User functions
export async function createUser(data: {
  email?: string
  username?: string
  faithStage?: string
  currentNeeds?: string
  bringsHere?: string
}) {
  const result = await sql`
    INSERT INTO users (email, username, faith_stage, current_needs, brings_here, onboarding_completed)
    VALUES (${data.email || null}, ${data.username || null}, ${data.faithStage || null}, 
            ${data.currentNeeds || null}, ${data.bringsHere || null}, true)
    RETURNING *
  `
  return result[0]
}

export async function getUserById(userId: string) {
  const result = await sql`
    SELECT * FROM users WHERE id = ${userId}
  `
  return result[0]
}

export async function getUserByEmail(email: string) {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `
  return result[0]
}

// User progress functions
export async function getUserProgress(userId: string) {
  const result = await sql`
    SELECT * FROM user_progress WHERE user_id = ${userId}
  `
  return result[0]
}

export async function createUserProgress(userId: string) {
  const result = await sql`
    INSERT INTO user_progress (user_id)
    VALUES (${userId})
    RETURNING *
  `
  return result[0]
}

export async function updateUserProgress(
  userId: string,
  data: {
    currentLessonId?: string
    currentLessonStep?: number
    lessonsCompletedToday?: number
    chaptersReadToday?: number
    totalLessonsCompleted?: number
    totalChaptersRead?: number
  },
) {
  const today = new Date().toISOString().split("T")[0]

  // Get current progress
  const currentProgress = await getUserProgress(userId)

  // Check if it's a new day
  const isNewDay = !currentProgress?.last_active_date || currentProgress.last_active_date !== today

  // Calculate new values
  const daysActive = isNewDay ? (currentProgress?.days_active || 0) + 1 : currentProgress?.days_active || 0

  const lessonsToday = isNewDay ? 0 : currentProgress?.lessons_completed_today || 0
  const chaptersToday = isNewDay ? 0 : currentProgress?.chapters_read_today || 0

  const result = await sql`
    UPDATE user_progress
    SET 
      current_lesson_id = COALESCE(${data.currentLessonId || null}, current_lesson_id),
      current_lesson_step = COALESCE(${data.currentLessonStep ?? null}, current_lesson_step),
      days_active = ${daysActive},
      last_active_date = ${today},
      lessons_completed_today = ${data.lessonsCompletedToday !== undefined ? lessonsToday + data.lessonsCompletedToday : lessonsToday},
      chapters_read_today = ${data.chaptersReadToday !== undefined ? chaptersToday + data.chaptersReadToday : chaptersToday},
      total_lessons_completed = COALESCE(${data.totalLessonsCompleted !== undefined ? (currentProgress?.total_lessons_completed || 0) + data.totalLessonsCompleted : null}, total_lessons_completed),
      total_chapters_read = COALESCE(${data.totalChaptersRead !== undefined ? (currentProgress?.total_chapters_read || 0) + data.totalChaptersRead : null}, total_chapters_read),
      updated_at = NOW()
    WHERE user_id = ${userId}
    RETURNING *
  `
  return result[0]
}

// Lesson completion functions
export async function saveLessonCompletion(userId: string, lessonId: string, score: number) {
  const result = await sql`
    INSERT INTO lesson_completions (user_id, lesson_id, score)
    VALUES (${userId}, ${lessonId}, ${score})
    RETURNING *
  `

  // Update user progress
  await updateUserProgress(userId, {
    totalLessonsCompleted: 1,
    lessonsCompletedToday: 1,
  })

  return result[0]
}

export async function getLessonCompletions(userId: string) {
  const result = await sql`
    SELECT * FROM lesson_completions 
    WHERE user_id = ${userId}
    ORDER BY completed_at DESC
  `
  return result
}

export async function isLessonCompleted(userId: string, lessonId: string) {
  const result = await sql`
    SELECT COUNT(*) as count FROM lesson_completions
    WHERE user_id = ${userId} AND lesson_id = ${lessonId}
  `
  return result[0].count > 0
}

// Lesson answer functions
export async function saveLessonAnswer(
  userId: string,
  lessonId: string,
  questionText: string,
  selectedOption: string,
  isCorrect: boolean,
) {
  const result = await sql`
    INSERT INTO lesson_answers (user_id, lesson_id, question_text, selected_option, is_correct)
    VALUES (${userId}, ${lessonId}, ${questionText}, ${selectedOption}, ${isCorrect})
    RETURNING *
  `
  return result[0]
}

export async function getLessonAnswers(userId: string, lessonId: string) {
  const result = await sql`
    SELECT * FROM lesson_answers
    WHERE user_id = ${userId} AND lesson_id = ${lessonId}
    ORDER BY answered_at ASC
  `
  return result
}

// Reflection functions
export async function saveReflection(
  userId: string,
  lessonId: string,
  reflectionType: "application" | "reflection",
  questionText: string,
  userResponse: string,
  aiFeedback?: string,
) {
  const result = await sql`
    INSERT INTO reflections (user_id, lesson_id, reflection_type, question_text, user_response, ai_feedback)
    VALUES (${userId}, ${lessonId}, ${reflectionType}, ${questionText}, ${userResponse}, ${aiFeedback || null})
    RETURNING *
  `
  return result[0]
}

export async function getReflections(userId: string, lessonId?: string) {
  if (lessonId) {
    const result = await sql`
      SELECT * FROM reflections
      WHERE user_id = ${userId} AND lesson_id = ${lessonId}
      ORDER BY created_at DESC
    `
    return result
  } else {
    const result = await sql`
      SELECT * FROM reflections
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `
    return result
  }
}

// Chat history functions
export async function saveChatMessage(
  userId: string,
  message: string,
  role: "user" | "assistant",
  contextType?: string,
) {
  const result = await sql`
    INSERT INTO chat_history (user_id, message, role, context_type)
    VALUES (${userId}, ${message}, ${role}, ${contextType || null})
    RETURNING *
  `
  return result[0]
}

export async function getChatHistory(userId: string, limit = 50) {
  const result = await sql`
    SELECT * FROM chat_history
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
    LIMIT ${limit}
  `
  return result.reverse()
}

export async function clearOldChatHistory(userId: string, daysToKeep = 7) {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)

  await sql`
    DELETE FROM chat_history
    WHERE user_id = ${userId} AND created_at < ${cutoffDate.toISOString()}
  `
}
