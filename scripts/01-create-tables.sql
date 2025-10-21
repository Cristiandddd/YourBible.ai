-- Enable UUID extension for PostgreSQL
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  faith_stage TEXT, -- 'exploring', 'new_believer', 'growing', 'mature'
  current_needs TEXT, -- 'understanding_basics', 'deeper_study', 'life_application', 'spiritual_growth'
  brings_here TEXT -- free text response
);

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  current_lesson_id TEXT,
  current_lesson_step INTEGER DEFAULT 0,
  days_active INTEGER DEFAULT 0,
  last_active_date DATE,
  lessons_completed_today INTEGER DEFAULT 0,
  chapters_read_today INTEGER DEFAULT 0,
  total_lessons_completed INTEGER DEFAULT 0,
  total_chapters_read INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create lesson_completions table
CREATE TABLE IF NOT EXISTS lesson_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  score INTEGER DEFAULT 0
);

-- Create lesson_answers table
CREATE TABLE IF NOT EXISTS lesson_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  question_text TEXT NOT NULL,
  selected_option TEXT NOT NULL,
  is_correct BOOLEAN,
  answered_at TIMESTAMP DEFAULT NOW()
);

-- Create reflections table
CREATE TABLE IF NOT EXISTS reflections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  reflection_type TEXT NOT NULL, -- 'application' or 'reflection'
  question_text TEXT NOT NULL,
  user_response TEXT NOT NULL,
  ai_feedback TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create chat_history table
CREATE TABLE IF NOT EXISTS chat_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  role TEXT NOT NULL, -- 'user' or 'assistant'
  context_type TEXT, -- 'general', 'bible_chat', 'lesson'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_completions_user_id ON lesson_completions(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_answers_user_id ON lesson_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_reflections_user_id ON reflections(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_user_id ON chat_history(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_created_at ON chat_history(created_at);
