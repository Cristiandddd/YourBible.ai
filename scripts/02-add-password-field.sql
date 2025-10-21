-- Add password_hash field to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- Make email required for authentication
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
