export const DAYS_TO_KEEP_MESSAGES = 30

export function cleanOldMessages(messages: Array<{ timestamp: number; role: string; content: string }>) {
  const thirtyDaysAgo = Date.now() - DAYS_TO_KEEP_MESSAGES * 24 * 60 * 60 * 1000

  return messages.filter((message) => message.timestamp > thirtyDaysAgo)
}

export function resetChat(userName: string) {
  if (typeof window === "undefined") return
  localStorage.removeItem(`chat_${userName}`)
}

export function getMessageCount(messages: Array<{ timestamp: number }>) {
  const thirtyDaysAgo = Date.now() - DAYS_TO_KEEP_MESSAGES * 24 * 60 * 60 * 1000
  const recentMessages = messages.filter((msg) => msg.timestamp > thirtyDaysAgo)

  return {
    total: messages.length,
    recent: recentMessages.length,
    old: messages.length - recentMessages.length,
  }
}
