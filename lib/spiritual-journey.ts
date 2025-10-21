/**
 * Spiritual Journey System
 * Manages content, progress, and tracking of the user's faith journey
 */

export interface DailyReflection {
  id: string
  religion: string
  title: string
  description: string
  scripture?: string
  questions: string[]
  estimatedMinutes: number
}

export interface LearningTopic {
  id: string
  religion: string
  category: string // "fundamentals", "living-faith", "deepening"
  title: string
  description: string
  subtopics: string[]
  completed: boolean
  startedAt?: number
  completedAt?: number
}

export interface SpiritualProgress {
  userId: string
  daysActive: number // Renamed from daysOfPractice - cumulative count of days with activity
  lastPracticeDate: string // YYYY-MM-DD
  dailyActivity: {
    date: string // YYYY-MM-DD
    lessonsCompleted: number
    chaptersRead: number
    reflectionsCompleted: number
  }
  topicsExplored: string[] // IDs of explored topics
  topicsCompleted: string[] // IDs of completed topics
  reflectionsCompleted: string[] // IDs of completed reflections (cumulative)
  chaptersRead: string[] // IDs of chapters read (cumulative)
  chatSessions: number // Total chat sessions
  journalEntries: JournalEntry[]
  habits: SpiritualHabits
  createdAt: number
  lastUpdated: number
}

export interface JournalEntry {
  id: string
  date: number
  topic: string
  reflection: string
  conversationSummary?: string
}

export interface SpiritualHabits {
  prayer: number // consecutive days
  reading: number // consecutive days
  reflection: number // consecutive days
  lastPrayerDate?: string
  lastReadingDate?: string
  lastReflectionDate?: string
}

// ============================================
// RELIGIOUS CONTENT
// ============================================

export const DAILY_REFLECTIONS: Record<string, DailyReflection[]> = {
  cristianismo: [
    {
      id: "cr-1",
      religion: "cristianismo",
      title: "Love That Transforms",
      description: "Reflect on how God's love can transform your life and relationships",
      scripture: "1 Corinthians 13:4-7",
      questions: ["How have you experienced God's love in your life?", "How can you show more love to someone today?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-2",
      religion: "cristianismo",
      title: "Peace in the Storm",
      description: "Discover how to find inner peace even in difficult times",
      scripture: "Philippians 4:6-7",
      questions: ["What situation is causing you anxiety today?", "How can you surrender that worry to God?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-3",
      religion: "cristianismo",
      title: "Forgiveness That Frees",
      description: "Explore the healing power of forgiveness in your life",
      scripture: "Matthew 6:14-15",
      questions: ["How can I practice forgiveness?", "What does true forgiveness look like?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-4",
      religion: "cristianismo",
      title: "Walking in Faith",
      description: "Learn to trust God even when you cannot see the path ahead",
      scripture: "Hebrews 11:1",
      questions: ["What does it mean to walk by faith?", "How can I strengthen my faith today?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-5",
      religion: "cristianismo",
      title: "The Power of Prayer",
      description: "Discover how prayer connects you with God's heart",
      scripture: "Matthew 6:9-13",
      questions: ["How can I improve my prayer life?", "What should I pray about today?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-6",
      religion: "cristianismo",
      title: "Serving Others",
      description: "Reflect on how serving others reflects Christ's love",
      scripture: "Mark 10:45",
      questions: ["How can I serve others today?", "What does servant leadership mean?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-7",
      religion: "cristianismo",
      title: "God's Faithfulness",
      description: "Remember how God has been faithful in your journey",
      scripture: "Lamentations 3:22-23",
      questions: ["How has God been faithful to me?", "What promises of God can I hold onto?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-8",
      religion: "cristianismo",
      title: "Living with Purpose",
      description: "Discover God's purpose for your life",
      scripture: "Jeremiah 29:11",
      questions: ["What is God's purpose for my life?", "How can I live purposefully today?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-9",
      religion: "cristianismo",
      title: "Gratitude and Joy",
      description: "Cultivate a heart of gratitude in all circumstances",
      scripture: "1 Thessalonians 5:16-18",
      questions: ["What am I grateful for today?", "How can gratitude change my perspective?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-10",
      religion: "cristianismo",
      title: "Trusting God's Timing",
      description: "Learn to wait on God's perfect timing",
      scripture: "Ecclesiastes 3:1",
      questions: ["How can I trust God's timing?", "What am I waiting for from God?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-11",
      religion: "cristianismo",
      title: "The Joy of Salvation",
      description: "Celebrate the gift of salvation and new life in Christ",
      scripture: "Psalm 51:12",
      questions: ["What does salvation mean to me?", "How can I share this joy with others?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-12",
      religion: "cristianismo",
      title: "Overcoming Fear",
      description: "Find courage in God's presence and promises",
      scripture: "2 Timothy 1:7",
      questions: ["What fears am I facing?", "How can God's strength help me overcome fear?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-13",
      religion: "cristianismo",
      title: "The Fruit of the Spirit",
      description: "Reflect on how the Holy Spirit produces fruit in your life",
      scripture: "Galatians 5:22-23",
      questions: ["Which fruit of the Spirit do I need most?", "How can I cultivate spiritual fruit?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-14",
      religion: "cristianismo",
      title: "Wisdom from Above",
      description: "Seek God's wisdom for daily decisions",
      scripture: "James 1:5",
      questions: ["What decision do I need wisdom for?", "How can I discern God's will?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-15",
      religion: "cristianismo",
      title: "Compassion for Others",
      description: "Develop a heart of compassion like Christ",
      scripture: "Colossians 3:12",
      questions: ["Who needs my compassion today?", "How can I show Christ's compassion?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-16",
      religion: "cristianismo",
      title: "The Power of Words",
      description: "Understand how your words can build up or tear down",
      scripture: "Proverbs 18:21",
      questions: ["How can I use my words to encourage?", "What should I speak over my life?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-17",
      religion: "cristianismo",
      title: "Patience in Trials",
      description: "Learn to persevere through difficult seasons",
      scripture: "James 1:2-4",
      questions: ["What trial am I facing?", "How can this trial strengthen my faith?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-18",
      religion: "cristianismo",
      title: "God's Provision",
      description: "Trust in God's faithful provision for all your needs",
      scripture: "Philippians 4:19",
      questions: ["What do I need from God today?", "How has God provided for me in the past?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-19",
      religion: "cristianismo",
      title: "Humility Before God",
      description: "Embrace humility as a path to spiritual growth",
      scripture: "James 4:10",
      questions: ["What does humility look like in my life?", "How can I humble myself before God?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-20",
      religion: "cristianismo",
      title: "The Great Commission",
      description: "Reflect on your role in sharing the Gospel",
      scripture: "Matthew 28:19-20",
      questions: ["How can I share my faith?", "Who can I tell about Jesus?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-21",
      religion: "cristianismo",
      title: "Contentment in Christ",
      description: "Find satisfaction in Christ alone",
      scripture: "Philippians 4:11-13",
      questions: ["What am I seeking contentment in?", "How can Christ satisfy my deepest needs?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-22",
      religion: "cristianismo",
      title: "The Armor of God",
      description: "Prepare for spiritual battles with God's armor",
      scripture: "Ephesians 6:10-18",
      questions: ["What spiritual battles am I facing?", "How can I put on God's armor daily?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-23",
      religion: "cristianismo",
      title: "Renewing Your Mind",
      description: "Transform your thinking through God's Word",
      scripture: "Romans 12:2",
      questions: ["What thoughts need to change?", "How can Scripture renew my mind?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-24",
      religion: "cristianismo",
      title: "The Good Shepherd",
      description: "Rest in the care and guidance of Jesus, your Shepherd",
      scripture: "Psalm 23",
      questions: ["How is Jesus shepherding me?", "What does it mean to follow the Good Shepherd?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-25",
      religion: "cristianismo",
      title: "Unity in the Body",
      description: "Celebrate and pursue unity among believers",
      scripture: "Ephesians 4:3",
      questions: ["How can I promote unity?", "What divides believers and how can I bridge it?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-26",
      religion: "cristianismo",
      title: "Eternal Perspective",
      description: "Set your mind on things above, not earthly things",
      scripture: "Colossians 3:2",
      questions: ["What eternal matters should I focus on?", "How can I live with heaven in mind?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-27",
      religion: "cristianismo",
      title: "The Cross of Christ",
      description: "Meditate on the sacrifice and victory of the cross",
      scripture: "1 Corinthians 1:18",
      questions: ["What does the cross mean to me?", "How does the cross change everything?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-28",
      religion: "cristianismo",
      title: "Spiritual Disciplines",
      description: "Develop habits that draw you closer to God",
      scripture: "1 Timothy 4:7-8",
      questions: ["What spiritual disciplines should I practice?", "How can I be more disciplined in my faith?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-29",
      religion: "cristianismo",
      title: "God's Grace",
      description: "Marvel at the unmerited favor of God",
      scripture: "Ephesians 2:8-9",
      questions: ["What does grace mean to me?", "How can I extend grace to others?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-30",
      religion: "cristianismo",
      title: "The Resurrection Power",
      description: "Experience the same power that raised Christ from the dead",
      scripture: "Ephesians 1:19-20",
      questions: ["How can resurrection power work in my life?", "What needs to be resurrected in me?"],
      estimatedMinutes: 5,
    },
  ],
  catolicismo: [
    {
      id: "cat-1",
      religion: "catolicismo",
      title: "The Grace of the Sacraments",
      description: "Reflect on how the sacraments strengthen your spiritual life",
      scripture: "John 6:54-56",
      questions: [
        "When was the last time you received the Eucharist?",
        "How do you prepare spiritually to receive it?",
      ],
      estimatedMinutes: 5,
    },
    {
      id: "cat-2",
      religion: "catolicismo",
      title: "Mary, Mother of Mercy",
      description: "Meditate on Mary's role in your faith journey",
      scripture: "Luke 1:46-55",
      questions: ["How does Mary help you in your spiritual life?", "What can you learn from her example of faith?"],
      estimatedMinutes: 5,
    },
  ],
  islam: [
    {
      id: "isl-1",
      religion: "islam",
      title: "Allah's Mercy",
      description: "Reflect on the infinite mercy and compassion of Allah",
      scripture: "Quran 39:53",
      questions: ["How have you experienced Allah's mercy?", "How can you show mercy to others today?"],
      estimatedMinutes: 5,
    },
  ],
  judaismo: [
    {
      id: "jud-1",
      religion: "judaismo",
      title: "Tikkun Olam - Repairing the World",
      description: "Reflect on your responsibility to make the world a better place",
      scripture: "Deuteronomy 16:20",
      questions: [
        "What action can you take today to repair the world?",
        "How can you practice justice in your daily life?",
      ],
      estimatedMinutes: 5,
    },
  ],
  budismo: [
    {
      id: "bud-1",
      religion: "budismo",
      title: "The Practice of Compassion",
      description: "Meditate on how to cultivate compassion for yourself and others",
      questions: ["How can you be more compassionate with yourself?", "What does universal compassion mean to you?"],
      estimatedMinutes: 5,
    },
  ],
}

export const LEARNING_PATHS: Record<string, LearningTopic[]> = {
  cristianismo: [
    // Fundamentals
    {
      id: "cr-fund-1",
      religion: "cristianismo",
      category: "fundamentals",
      title: "The Nature of God",
      description: "Understand who God is and how He reveals Himself to humanity",
      subtopics: ["The Trinity", "God's Attributes", "God as Father"],
      completed: false,
    },
    {
      id: "cr-fund-2",
      religion: "cristianismo",
      category: "fundamentals",
      title: "The Message of Jesus",
      description: "Explore the central teachings of Jesus Christ",
      subtopics: ["The Kingdom of God", "The Sermon on the Mount", "The Beatitudes"],
      completed: false,
    },
    {
      id: "cr-fund-3",
      religion: "cristianismo",
      category: "fundamentals",
      title: "The Holy Spirit",
      description: "Discover the role of the Holy Spirit in the believer's life",
      subtopics: ["Gifts of the Spirit", "Fruit of the Spirit", "Divine Guidance"],
      completed: false,
    },
    // Living Faith
    {
      id: "cr-vida-1",
      religion: "cristianismo",
      category: "living-faith",
      title: "Prayer",
      description: "Learn different ways to communicate with God",
      subtopics: ["The Lord's Prayer", "Contemplative Prayer", "Intercession"],
      completed: false,
    },
    {
      id: "cr-vida-2",
      religion: "cristianismo",
      category: "living-faith",
      title: "Forgiveness",
      description: "Understand and practice Christian forgiveness",
      subtopics: ["Forgiving Others", "Receiving Forgiveness", "Reconciliation"],
      completed: false,
    },
    {
      id: "cr-vida-3",
      religion: "cristianismo",
      category: "living-faith",
      title: "Service",
      description: "Discover how to serve others as Jesus did",
      subtopics: ["Love for Neighbor", "Social Justice", "Generosity"],
      completed: false,
    },
    // Deepening
    {
      id: "cr-prof-1",
      religion: "cristianismo",
      category: "deepening",
      title: "The Parables",
      description: "Explore the deep meaning of Jesus' parables",
      subtopics: ["The Prodigal Son", "The Good Samaritan", "The Sower"],
      completed: false,
    },
    {
      id: "cr-prof-2",
      religion: "cristianismo",
      category: "deepening",
      title: "The Prophets",
      description: "Understand the message of the Old Testament prophets",
      subtopics: ["Isaiah", "Jeremiah", "The Minor Prophets"],
      completed: false,
    },
  ],
  catolicismo: [
    {
      id: "cat-fund-1",
      religion: "catolicismo",
      category: "fundamentals",
      title: "The Sacraments",
      description: "Understand the seven sacraments of the Church",
      subtopics: ["Baptism", "Eucharist", "Confirmation", "Reconciliation"],
      completed: false,
    },
    {
      id: "cat-vida-1",
      religion: "catolicismo",
      category: "living-faith",
      title: "Liturgical Life",
      description: "Explore the liturgical year and celebrations",
      subtopics: ["Advent", "Lent", "Easter", "Ordinary Time"],
      completed: false,
    },
  ],
  islam: [
    {
      id: "isl-fund-1",
      religion: "islam",
      category: "fundamentals",
      title: "The Five Pillars",
      description: "Understand the foundations of Islamic practice",
      subtopics: ["Shahada", "Salat", "Zakat", "Sawm", "Hajj"],
      completed: false,
    },
  ],
  judaismo: [
    {
      id: "jud-fund-1",
      religion: "judaismo",
      category: "fundamentals",
      title: "The Torah",
      description: "Explore the fundamental teachings of the Torah",
      subtopics: ["The Five Books", "The Mitzvot", "Interpretation"],
      completed: false,
    },
  ],
  budismo: [
    {
      id: "bud-fund-1",
      religion: "budismo",
      category: "fundamentals",
      title: "The Four Noble Truths",
      description: "Understand the fundamental truths of Buddhism",
      subtopics: ["Suffering", "Origin", "Cessation", "The Path"],
      completed: false,
    },
  ],
}

// ============================================
// PROGRESS FUNCTIONS
// ============================================

export function getSpiritualProgress(): SpiritualProgress {
  if (typeof window === "undefined") {
    // Return default progress for SSR
    return {
      userId: "user",
      daysActive: 0,
      lastPracticeDate: "",
      dailyActivity: {
        date: new Date().toISOString().split("T")[0],
        lessonsCompleted: 0,
        chaptersRead: 0,
        reflectionsCompleted: 0,
      },
      topicsExplored: [],
      topicsCompleted: [],
      reflectionsCompleted: [],
      chaptersRead: [],
      chatSessions: 0,
      journalEntries: [],
      habits: {
        prayer: 0,
        reading: 0,
        reflection: 0,
      },
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    }
  }

  const saved = localStorage.getItem("spiritualProgress")
  if (saved) {
    const progress = JSON.parse(saved)

    if (progress.daysOfPractice !== undefined && progress.daysActive === undefined) {
      progress.daysActive = progress.daysOfPractice
      delete progress.daysOfPractice
    }

    if (!progress.dailyActivity) {
      progress.dailyActivity = {
        date: new Date().toISOString().split("T")[0],
        lessonsCompleted: 0,
        chaptersRead: 0,
        reflectionsCompleted: 0,
      }
    }

    if (!progress.chaptersRead) progress.chaptersRead = []
    if (progress.chatSessions === undefined) progress.chatSessions = 0

    checkAndResetDailyCounters(progress)

    return progress
  }

  // Create initial progress
  const initialProgress: SpiritualProgress = {
    userId: localStorage.getItem("userName") || "user",
    daysActive: 0,
    lastPracticeDate: "",
    dailyActivity: {
      date: new Date().toISOString().split("T")[0],
      lessonsCompleted: 0,
      chaptersRead: 0,
      reflectionsCompleted: 0,
    },
    topicsExplored: [],
    topicsCompleted: [],
    reflectionsCompleted: [],
    chaptersRead: [],
    chatSessions: 0,
    journalEntries: [],
    habits: {
      prayer: 0,
      reading: 0,
      reflection: 0,
    },
    createdAt: Date.now(),
    lastUpdated: Date.now(),
  }

  saveSpiritualProgress(initialProgress)
  return initialProgress
}

export function saveSpiritualProgress(progress: SpiritualProgress): void {
  if (typeof window === "undefined") return
  progress.lastUpdated = Date.now()
  localStorage.setItem("spiritualProgress", JSON.stringify(progress))
}

function checkAndResetDailyCounters(progress: SpiritualProgress): void {
  const today = new Date().toISOString().split("T")[0]

  if (progress.dailyActivity.date !== today) {
    // It's a new day!
    const hadActivityYesterday =
      progress.dailyActivity.lessonsCompleted > 0 ||
      progress.dailyActivity.chaptersRead > 0 ||
      progress.dailyActivity.reflectionsCompleted > 0

    // If there was activity yesterday, increment daysActive
    if (hadActivityYesterday && progress.lastPracticeDate !== today) {
      progress.daysActive += 1
      progress.lastPracticeDate = today
    }

    // Reset daily counters
    progress.dailyActivity = {
      date: today,
      lessonsCompleted: 0,
      chaptersRead: 0,
      reflectionsCompleted: 0,
    }

    saveSpiritualProgress(progress)
  }
}

export function completeReflection(reflectionId: string): void {
  const progress = getSpiritualProgress()

  if (!progress.reflectionsCompleted.includes(reflectionId)) {
    progress.reflectionsCompleted.push(reflectionId)
    progress.dailyActivity.reflectionsCompleted += 1 // Increment daily counter
    saveSpiritualProgress(progress)
  }
}

export function startTopic(topicId: string): void {
  const progress = getSpiritualProgress()

  if (!progress.topicsExplored.includes(topicId)) {
    progress.topicsExplored.push(topicId)
    saveSpiritualProgress(progress)
  }
}

export function completeTopic(topicId: string): void {
  const progress = getSpiritualProgress()

  if (!progress.topicsCompleted.includes(topicId)) {
    progress.topicsCompleted.push(topicId)
    saveSpiritualProgress(progress)
  }
}

export function addJournalEntry(entry: Omit<JournalEntry, "id">): void {
  const progress = getSpiritualProgress()
  const newEntry: JournalEntry = {
    ...entry,
    id: `journal-${Date.now()}`,
  }

  progress.journalEntries.push(newEntry)
  saveSpiritualProgress(progress)
}

export function getDailyReflection(religion: string): DailyReflection | null {
  const reflections = DAILY_REFLECTIONS[religion] || DAILY_REFLECTIONS.cristianismo

  if (reflections.length === 0) return null

  // Use random selection for variety
  const randomIndex = Math.floor(Math.random() * reflections.length)

  return reflections[randomIndex]
}

export function getLearningPath(religion: string): LearningTopic[] {
  const topics = LEARNING_PATHS[religion] || LEARNING_PATHS.cristianismo
  const progress = getSpiritualProgress()

  // Mark topics as completed based on progress
  return topics.map((topic) => ({
    ...topic,
    completed: progress.topicsCompleted.includes(topic.id),
  }))
}

export function getTopicsByCategory(religion: string, category: string): LearningTopic[] {
  const allTopics = getLearningPath(religion)
  return allTopics.filter((t) => t.category === category)
}

export function trackChapterRead(bookId: string, chapter: number): void {
  const progress = getSpiritualProgress()
  const chapterId = `${bookId}-${chapter}`

  if (!progress.chaptersRead.includes(chapterId)) {
    progress.chaptersRead.push(chapterId)
    progress.dailyActivity.chaptersRead += 1 // Increment daily counter
    saveSpiritualProgress(progress)
  }
}

export function trackChatSession(): void {
  const progress = getSpiritualProgress()
  progress.chatSessions += 1
  saveSpiritualProgress(progress)
}

export function trackLessonCompletion(): void {
  const progress = getSpiritualProgress()
  progress.dailyActivity.lessonsCompleted += 1
  saveSpiritualProgress(progress)
}
