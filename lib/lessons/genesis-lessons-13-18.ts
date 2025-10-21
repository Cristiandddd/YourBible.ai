import type { LessonBook } from "./types"

export const GENESIS_LESSONS_13_18: LessonBook = {
  id: "genesis-13-18-perfected",
  religion: "christianity",
  title: "Genesis - The Patriarchs: Abraham",
  description: "From testing to covenant promises",
  icon: "⭐",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-abraham-patriline-perfected",
      bookId: "genesis",
      title: "The Patriarchs: Abraham",
      description: "Testing, covenant, and the birth of the promised son",
      order: 3,
      lessons: [
        {
          id: "lesson-genesis-13-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Abram in Egypt",
          description: "Faith put to the test",
          scripture: "Genesis 12:10-20",
          estimatedMinutes: 16,
          order: 13,
          locked: true,
          content: {
            introduction: {
              id: "intro-13-perfected",
              type: "narration",
              text: "Have you ever had a mountain-top spiritual experience followed immediately by a valley of testing? Just when you thought you had faith figured out, reality hits hard? Today we're witnessing Abram's first major test after his glorious calling. What if this failure actually reveals crucial truths about God's grace and our human weakness?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about Abram's failure",
                  response: "This story shows even spiritual giants stumble, and how God responds.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand this difficult story",
                  response: "Perfect! This passage reveals profound truths about fear, faith, and grace.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this test of faith!",
                  response: "Excellent! Let's discover what happens when God's chosen one fails.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g13-perfected",
                type: "scripture",
                text: "The test begins with a famine in the promised land:",
                scripture:
                  '"Now there was a famine in the land. So Abram went down to Egypt to sojourn there, for the famine was severe in the land." - Genesis 12:10',
              },
              {
                id: "teach-2-g13-perfected",
                type: "question",
                text: "Abram faces famine in the land God promised. Why would God allow this immediate test?",
                options: [
                  {
                    id: "opt-1",
                    text: "To deepen faith beyond initial obedience",
                    response:
                      "CORRECT. The famine tests whether Abram's faith can survive when God's promises seem contradicted by circumstances. Initial obedience must mature into persevering trust. This pattern continues throughout Scripture: God allows difficulties not to destroy faith but to strengthen it, moving believers from emotional commitment to proven character.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To reveal what's really in Abram's heart",
                    response:
                      "TRUE but focuses on diagnosis rather than development. While testing does reveal heart conditions, God's primary purpose is transformational - to build stronger faith through overcoming obstacles.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "To show God's faithfulness despite human failure",
                    response:
                      "VALID but premature. While God will demonstrate faithfulness, the immediate purpose of the test is to develop Abram's character, not just display divine reliability.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g13-perfected",
                type: "narration",
                text: "As Abram approaches Egypt, fear overtakes faith...",
              },
              {
                id: "teach-4-g13-perfected",
                type: "scripture",
                text: "The plan born of fear:",
                scripture:
                  '"When he was about to enter Egypt, he said to Sarai his wife, "I know that you are a woman beautiful in appearance, and when the Egyptians see you, they will say, \'This is his wife,\' and they will kill me, but they will let you live. Say you are my sister, that it may go well with me because of you, and that my life may be spared for your sake."" - Genesis 12:11-13',
              },
              {
                id: "teach-5-g13-perfected",
                type: "question",
                text: "Abram's plan contains a half-truth (she was his half-sister). What's the danger in 'technical' truth?",
                options: [
                  {
                    id: "opt-1",
                    text: "It creates the appearance of truth while being deceptive",
                    response:
                      "CORRECT. Half-truths can be whole lies in their effect and intention. By withholding the full truth about Sarai being his wife, Abram creates a false impression to protect himself at her expense. This demonstrates how technical truthfulness can mask fundamental deception, damaging relationships and misrepresenting reality.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows fear overriding integrity",
                    response:
                      "TRUE but focuses on motivation rather than the deceptive nature of half-truths. While fear certainly drives the decision, the specific danger lies in using partial truth to enable falsehood.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It endangers others to protect self",
                    response:
                      "ACCURATE but describes the consequence rather than the deceptive mechanism. While others are endangered, the fundamental wrong is the deceptive use of partial truth.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g13-perfected",
                type: "narration",
                text: "Exactly what Abram feared comes true, but not as he expected...",
              },
              {
                id: "teach-7-g13-perfected",
                type: "scripture",
                text: "The plan backfires:",
                scripture:
                  '"When Abram entered Egypt, the Egyptians saw that the woman was very beautiful. And when the princes of Pharaoh saw her, they praised her to Pharaoh. And the woman was taken into Pharaoh\'s house." - Genesis 12:14-15',
              },
              {
                id: "teach-8-g13-perfected",
                type: "question",
                text: "Abram's scheme 'works' in getting him safety and wealth, but at what cost?",
                options: [
                  {
                    id: "opt-1",
                    text: "He gains wealth but loses his wife",
                    response:
                      "CORRECT. Abram's 'successful' deception creates his worst nightmare: Sarai taken into Pharaoh's harem. This demonstrates the folly of using sinful means to achieve seemingly good ends. The very thing he sought to protect (his life) is secured at the cost of what mattered most (his wife and God's promise through her).",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He compromises his calling to be a blessing",
                    response:
                      "TRUE but secondary. While his calling is compromised, the immediate tragedy is the potential loss of his wife and the threat to God's promise of offspring.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He endangers the promised offspring",
                    response:
                      "THEOLOGICALLY significant but not the primary cost. While the Messianic line is threatened, the human cost of nearly losing his wife represents the more immediate consequence.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g13-perfected",
                type: "narration",
                text: "But watch how God intervenes to protect His promise...",
              },
              {
                id: "teach-10-g13-perfected",
                type: "scripture",
                text: "God's unexpected rescue:",
                scripture:
                  '"But the LORD afflicted Pharaoh and his house with great plagues because of Sarai, Abram\'s wife." - Genesis 12:17',
              },
              {
                id: "teach-11-g13-perfected",
                type: "question",
                text: "Why does God rescue Abram when this mess is entirely his fault?",
                options: [
                  {
                    id: "opt-1",
                    text: "God remains faithful to His covenant promises",
                    response:
                      "CORRECT. Despite Abram's failure, God protects His covenant purposes. This demonstrates that God's faithfulness doesn't depend on human perfection. His commitment to the covenant He initiated ensures He will rescue His people even from self-inflicted crises. This pattern reveals salvation by grace, not human merit.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He protects the innocent party (Sarai)",
                    response:
                      "TRUE but incomplete. While Sarai is protected, the primary reason is theological: God's commitment to His covenant promises concerning both Abram and the offspring through Sarai.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He demonstrates grace that anticipates repentance",
                    response:
                      "BEAUTIFUL but not the stated reason. While grace is evident, the text emphasizes God's action to protect His promises rather than Abram's repentance.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g13-perfected",
                type: "narration",
                text: "The confrontation reveals an embarrassing truth...",
              },
              {
                id: "teach-13-g13-perfected",
                type: "scripture",
                text: "Pharaoh's rebuke:",
                scripture:
                  '"Then Pharaoh called Abram and said, "What is this you have done to me? Why did you not tell me that she was your wife? Why did you say, \'She is my sister,\' so that I took her for my wife? Now then, here is your wife; take her, and go."" - Genesis 12:18-19',
              },
              {
                id: "teach-14-g13-perfected",
                type: "question",
                text: "A pagan king rebukes God's chosen one. What's the irony here?",
                options: [
                  {
                    id: "opt-1",
                    text: "The unbeliever acts more righteously than the believer",
                    response:
                      "CORRECT. Pharaoh, though a pagan, recognizes the moral failure in Abram's deception and acts with greater integrity. This profound irony shows how sin can make God's people worse witnesses than unbelievers. It demonstrates that common grace can produce moral insight in those outside the covenant, while covenant people can fail to live by their own standards.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Abram's witness is destroyed by his deception",
                    response:
                      "TRUE but describes the consequence rather than the irony. While his witness is damaged, the specific irony is the pagan king's superior moral perception and action.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "God's reputation suffers through His representative's failure",
                    response:
                      "ACCURATE but focuses on God rather than the relational irony. While God's reputation is affected, the striking contrast is between the pagan's righteousness and the believer's failure.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-13-perfected",
                type: "narration",
                text: "PATTERN OF GRACE: This won't be Abram's last failure, nor God's last rescue. The entire biblical story is one of faithful God and faithless people. This pattern finds its ultimate resolution in Jesus - the perfectly faithful one who rescues us from our perpetual failures!",
              },
            ],
            application: {
              id: "app-13-perfected",
              type: "reflection",
              text: "If God blessed Abram with wealth even after his failure in Egypt, does this mean God rewards faithlessness? How do we reconcile God's grace with the real consequences of our choices?",
            },
            reflection: {
              id: "refl-13-perfected",
              type: "reflection",
              text: "Where are you tempted to use 'half-truths' or clever schemes to get out of difficult situations rather than trusting God's protection and provision?",
            },
          },
        },
        {
          id: "lesson-genesis-14-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Abram and Lot",
          description: "Separation and choices",
          scripture: "Genesis 13:1-18",
          estimatedMinutes: 16,
          order: 14,
          locked: true,
          content: {
            introduction: {
              id: "intro-14-perfected",
              type: "narration",
              text: "Have you ever had to make a decision where every option seemed good, but you knew the choice would define your future? Today we're witnessing a family conflict that becomes a character-defining moment. What if how we handle conflict reveals more about our faith than our creeds?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this family conflict",
                  response: "This story reveals profound wisdom for handling relationships and resources.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Abram's generosity",
                  response: "Perfect! This passage shows faith in action through radical generosity.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this defining moment!",
                  response: "Excellent! Let's discover how faith transforms how we handle conflict.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g14-perfected",
                type: "scripture",
                text: "The situation develops from material blessing:",
                scripture:
                  '"Now Abram was very rich in livestock, in silver, and in gold... And Lot, who went with Abram, also had flocks and herds and tents, so that the land could not support both of them dwelling together." - Genesis 13:2, 5-6',
              },
              {
                id: "teach-2-g14-perfected",
                type: "question",
                text: "God's blessing creates practical problems. Why would God allow abundance to cause conflict?",
                options: [
                  {
                    id: "opt-1",
                    text: "Blessings test character as much as hardships do",
                    response:
                      "CORRECT. Prosperity often reveals hidden character flaws that poverty conceals. The conflict over resources tests whether Abram and Lot will handle God's blessings with wisdom and generosity. This demonstrates that spiritual maturity is proved not only in enduring lack but in managing abundance without relational damage.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God uses conflict to direct His purposes",
                    response:
                      "TRUE but focuses on sovereignty rather than character development. While God does use the conflict for His purposes, the primary lesson concerns how blessings test and reveal character.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It forces growth and decision-making",
                    response:
                      "ACCURATE but describes the process rather than the purpose. While growth occurs, the specific purpose is testing character through the challenges of prosperity.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g14-perfected",
                type: "narration",
                text: "The conflict escalates to the point where something must change...",
              },
              {
                id: "teach-4-g14-perfected",
                type: "scripture",
                text: "The relational strain:",
                scripture:
                  "\"And there was strife between the herdsmen of Abram's livestock and the herdsmen of Lot's livestock.\" - Genesis 13:7",
              },
              {
                id: "teach-5-g14-perfected",
                type: "question",
                text: "Notice the conflict is between their employees, not Abram and Lot directly. Why does this matter?",
                options: [
                  {
                    id: "opt-1",
                    text: "Leaders are responsible for their people's conflicts",
                    response:
                      "CORRECT. The strife between herdsmen demonstrates that leaders must address conflicts among their followers before they damage core relationships. Abram recognizes his responsibility to resolve the situation rather than letting subordinate conflicts escalate. This principle of leadership accountability remains crucial for maintaining unity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows how competition damages relationships",
                    response:
                      "TRUE but focuses on the damage rather than leadership responsibility. While competition is damaging, the significant insight is the leaders' obligation to intervene in conflicts among their people.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates the ripple effect of our choices",
                    response:
                      "VALID but doesn't address the leadership dimension. While choices have ripple effects, the specific lesson concerns leaders' responsibility for conflicts within their sphere of influence.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g14-perfected",
                type: "narration",
                text: "Abram, as the elder and wealthier party, has the right to choose first. But watch what he does...",
              },
              {
                id: "teach-7-g14-perfected",
                type: "scripture",
                text: "Abram's radical offer:",
                scripture:
                  '"Then Abram said to Lot, "Let there be no strife between you and me... Is not the whole land before you? Separate yourself from me. If you take the left hand, then I will go to the right, or if you take the right hand, then I will go to the left." - Genesis 13:8-9',
              },
              {
                id: "teach-8-g14-perfected",
                type: "question",
                text: "Abram gives the choice to Lot. What does this reveal about his character?",
                options: [
                  {
                    id: "opt-1",
                    text: "He values relationship over advantage",
                    response:
                      "CORRECT. As the elder and the one to whom God made the promises, Abram had the right to choose first. His generosity demonstrates that preserving family harmony matters more than securing the best land. This Christlike attitude prioritizes others' interests and trusts God to provide regardless of human advantage.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He trusts God rather than his own judgment",
                    response:
                      "TRUE but doesn't capture the relational sacrifice. While trust is involved, the remarkable thing is Abram's willingness to sacrifice his rights for peace.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He demonstrates spiritual maturity",
                    response:
                      "ACCURATE but vague. The specific maturity demonstrated is prioritizing relationships and trusting God's provision over asserting personal rights.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g14-perfected",
                type: "narration",
                text: "Lot makes his choice based on what he can see...",
              },
              {
                id: "teach-10-g14-perfected",
                type: "scripture",
                text: "Lot's worldly wisdom:",
                scripture:
                  '"And Lot lifted up his eyes and saw that the Jordan Valley was well watered everywhere like the garden of the LORD... So Lot chose for himself all the Jordan Valley." - Genesis 13:10-11',
              },
              {
                id: "teach-11-g14-perfected",
                type: "question",
                text: "Lot's choice seems smart economically. What's the potential spiritual danger?",
                options: [
                  {
                    id: "opt-1",
                    text: "He moves toward Sodom, known for wickedness",
                    response:
                      "CORRECT. Lot's economically wise choice leads him toward spiritual compromise. The well-watered plain draws him gradually toward Sodom, a city notorious for sin. This demonstrates the danger of making decisions based solely on material considerations without spiritual discernment. What appears advantageous physically can be disastrous spiritually.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He chooses based on appearance not principle",
                    response:
                      "TRUE but doesn't specify the spiritual consequence. While appearance-based choices are unwise, the specific danger is proximity to corruption and compromise.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He prioritizes provision over presence",
                    response:
                      "BEAUTIFUL but not the primary danger. While he does choose provision over staying with God's chosen, the immediate threat is the wicked influence of Sodom.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g14-perfected",
                type: "narration",
                text: "After Lot departs, God speaks to Abram again...",
              },
              {
                id: "teach-13-g14-perfected",
                type: "scripture",
                text: "God's reaffirmed promise:",
                scripture:
                  '"The LORD said to Abram, after Lot had separated from him, "Lift up your eyes and look... all the land that you see I will give to you and to your offspring forever." - Genesis 13:14-15',
              },
              {
                id: "teach-14-g14-perfected",
                type: "question",
                text: "Why does God wait until after Lot leaves to reaffirm the promise?",
                options: [
                  {
                    id: "opt-1",
                    text: "Abram needed to empty his hands to receive God's gift",
                    response:
                      "CORRECT. God waits until Abram has released his claim to the best land before reaffirming that ALL the land will be his. This demonstrates the spiritual principle that we must often release what we're clutching to receive God's greater gift. Abram's generosity makes room for God's abundant confirmation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God rewards faith-driven generosity",
                    response:
                      "TRUE but focuses on reward rather than the empty-hands principle. While reward is involved, the key insight is that God fills what we empty for His sake.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It confirms Abram made the right choice",
                    response:
                      "ACCURATE but describes the function rather than the principle. While confirmation occurs, the deeper lesson concerns the relationship between surrender and receiving God's blessing.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g14-perfected",
                type: "narration",
                text: "Abram responds with worship, just as he did when he first arrived...",
              },
              {
                id: "teach-16-g14-perfected",
                type: "scripture",
                text: "Abram's worship:",
                scripture:
                  '"So Abram moved his tent and came and settled by the oaks of Mamre, which are at Hebron, and there he built an altar to the LORD." - Genesis 13:18',
              },
              {
                id: "teach-17-g14-perfected",
                type: "question",
                text: "Why does Abram build another altar? What pattern is developing?",
                options: [
                  {
                    id: "opt-1",
                    text: "Worship is his default response to God's faithfulness",
                    response:
                      "CORRECT. Every significant encounter with God leads Abram to worship. This pattern shows that gratitude and worship should be our automatic response to God's faithfulness. The altars create a trail of memorials marking God's progressive revelation and Abram's continuing devotion throughout his journey.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's claiming the land for Yahweh through worship",
                    response:
                      "TRUE but secondary. While the altars do stake a claim, the primary pattern is Abram's consistent worship response to God's appearances and promises.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It maintains his spiritual focus amid material blessing",
                    response:
                      "VALID but doesn't capture the pattern of response. While spiritual focus is maintained, the significant development is the habitual worship response to divine encounters.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-14-perfected",
                type: "narration",
                text: "WISDOM CONFIRMED: Lot's 'smart choice' will soon prove disastrous when Sodom is attacked. Abram's 'foolish generosity' will be rewarded with divine protection and blessing. The way of faith often looks foolish in the moment but proves wise in eternity!",
              },
            ],
            application: {
              id: "app-14-perfected",
              type: "reflection",
              text: "If God blessed Abram's generous choice, does this mean Christians should always let others have the better option? How do we balance wisdom with generosity in practical decisions?",
            },
            reflection: {
              id: "refl-14-perfected",
              type: "reflection",
              text: "Where is God calling you to choose generosity over advantage, trust over control, or relationship over being right in your current conflicts or decisions?",
            },
          },
        },
        {
          id: "lesson-genesis-15-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Abram Rescues Lot",
          description: "Courage and faith",
          scripture: "Genesis 14:1-24",
          estimatedMinutes: 17,
          order: 15,
          locked: true,
          content: {
            introduction: {
              id: "intro-15-perfected",
              type: "narration",
              text: "Have you ever had to rescue someone from a mess they created by their own poor choices? The urge to say 'I told you so' battles with compassion? Today we're witnessing Abram's radical intervention for Lot - a powerful story of courage, faith, and unexpected spiritual encounters. What if this rescue mission reveals the heart of true redemption?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this battle story",
                  response: "This narrative shows faith in action through courage and wisdom.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Melchizedek",
                  response: "Perfect! This mysterious priest-king is one of Scripture's most fascinating figures.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this rescue mission!",
                  response: "Excellent! Let's discover how faith operates in practical warfare.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g15-perfected",
                type: "scripture",
                text: "The story begins with regional warfare:",
                scripture:
                  '"In the days of Amraphel king of Shinar... they made war... against the kings of Sodom, Gomorrah, Admah, Zeboiim, and Bela." - Genesis 14:1-2',
              },
              {
                id: "teach-2-g15-perfected",
                type: "question",
                text: "Why include these detailed names and places? What significance do they have?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes the historical reality of the events",
                    response:
                      "CORRECT. The specific kings and places ground this narrative in actual history, not myth or legend. This demonstrates that God works in real historical contexts with identifiable people and locations. The biblical faith is rooted in space-time reality, showing God's involvement in actual human events rather than abstract spiritual ideas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God at work in world events",
                    response:
                      "TRUE but doesn't capture the historical verification aspect. While God certainly works in world events, the specific names and places provide concrete evidence that this was real history, not just theological storytelling.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It sets the stage for Lot's capture",
                    response:
                      "ACCURATE but focuses on narrative function rather than historical significance. While it sets the stage, the greater importance is establishing the historical reliability of the account.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g15-perfected",
                type: "narration",
                text: "The battle goes badly for Sodom and its allies...",
              },
              {
                id: "teach-4-g15-perfected",
                type: "scripture",
                text: "Lot's capture:",
                scripture:
                  '"They also took Lot, the son of Abram\'s brother, who was dwelling in Sodom, and his possessions, and went away." - Genesis 14:12',
              },
              {
                id: "teach-5-g15-perfected",
                type: "question",
                text: "Lot chose to live in Sodom for its prosperity. Now he loses everything. What spiritual principle is at work?",
                options: [
                  {
                    id: "opt-1",
                    text: "Choices have consequences, even for believers",
                    response:
                      "CORRECT. Lot's decision to pitch his tent toward Sodom for material advantage now results in losing all those possessions and his freedom. This demonstrates that God's grace doesn't remove the natural consequences of poor decisions. While God will rescue Lot, he still experiences the painful outcomes of his choice to compromise with wickedness for prosperity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Worldly security is ultimately unreliable",
                    response:
                      "TRUE but focuses on the possessions rather than the choice-consequence dynamic. While worldly security is unreliable, the specific lesson concerns how Lot's earlier compromise leads directly to his current predicament.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "God uses crises to rescue us from worse fates",
                    response:
                      "VALID but describes God's response rather than the spiritual principle at work. While God does use crises redemptively, the principle demonstrated is the inevitable consequences of compromising choices.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g15-perfected",
                type: "narration",
                text: "News reaches Abram, who responds immediately...",
              },
              {
                id: "teach-7-g15-perfected",
                type: "scripture",
                text: "Abram's military response:",
                scripture:
                  '"When Abram heard that his kinsman had been taken captive, he led forth his trained men, born in his house, 318 of them, and went in pursuit as far as Dan." - Genesis 14:14',
              },
              {
                id: "teach-8-g15-perfected",
                type: "question",
                text: "318 trained men suggests significant household. What does this reveal about Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "He was a powerful chieftain, not just a nomad",
                    response:
                      "CORRECT. The size of Abram's fighting force shows he had become a substantial tribal leader with significant wealth and influence. This demonstrates that God's blessing included military and economic power, not just spiritual promises. Abram's obedience led to practical authority and resources that could be used for God's purposes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He prepared for challenges while trusting God",
                    response:
                      "TRUE but doesn't capture the scale of his leadership. While preparation is evident, the significant revelation is Abram's position as a major tribal chieftain with substantial military capability.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He took responsibility for family despite their choices",
                    response:
                      "ACCURATE but focuses on the rescue motive rather than Abram's status. While responsibility is key, the military force reveals his established leadership position in the region.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g15-perfected",
                type: "narration",
                text: "Abram achieves a stunning military victory against overwhelming odds...",
              },
              {
                id: "teach-10-g15-perfected",
                type: "scripture",
                text: "The victory and recovery:",
                scripture:
                  '"And he divided his forces against them by night, he and his servants, and defeated them and pursued them... Then he brought back all the possessions, and also brought back his kinsman Lot with his possessions, and the women and the people." - Genesis 14:15-16',
              },
              {
                id: "teach-11-g15-perfected",
                type: "question",
                text: "Abram defeats four kings with a small militia. What made this victory possible?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's supernatural assistance in the battle",
                    response:
                      "CORRECT. The victory against overwhelming odds demonstrates divine empowerment rather than military superiority alone. Abram's night attack shows strategic wisdom, but the success against four allied kings points to God's supernatural intervention. This pattern continues throughout Scripture: God often uses the weak to confound the strong to demonstrate that victory comes from Him.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Strategic wisdom combined with courage",
                    response:
                      "TRUE but attributes too much to human factors. While strategy and courage were present, the decisive factor was God's assistance against impossible odds.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Righteous cause strengthening his men",
                    response:
                      "VALID but secondary. While a righteous cause can motivate, the primary explanation for defeating four kings with a militia is divine intervention.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g15-perfected",
                type: "narration",
                text: "On his return, Abram has two very different encounters...",
              },
              {
                id: "teach-13-g15-perfected",
                type: "scripture",
                text: "The king of Sodom's offer:",
                scripture:
                  '"And the king of Sodom said to Abram, "Give me the persons, but take the goods for yourself." - Genesis 14:21',
              },
              {
                id: "teach-14-g15-perfected",
                type: "question",
                text: "Why would Abram refuse this generous offer? What's the danger in accepting?",
                options: [
                  {
                    id: "opt-1",
                    text: "It could make him indebted to a wicked king",
                    response:
                      "CORRECT. Accepting wealth from the king of Sodom could create obligations that compromise Abram's independence and testimony. The association might suggest alliance with wickedness or imply that Sodom contributed to Abram's success. This demonstrates spiritual wisdom: some 'gifts' come with invisible chains that can hinder God's work.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It could allow Sodom to claim credit for his wealth",
                    response:
                      "TRUE but focuses on reputation rather than spiritual compromise. While credit-taking is a concern, the greater danger is relational entanglement with evil.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It might compromise his testimony",
                    response:
                      "ACCURATE but vague. The specific compromise would be the appearance of partnership with wickedness and dependence on ungodly sources rather than God alone.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g15-perfected",
                type: "narration",
                text: "But between the battle and this offer comes a mysterious encounter...",
              },
              {
                id: "teach-16-g15-perfected",
                type: "scripture",
                text: "Melchizedek's blessing:",
                scripture:
                  '"And Melchizedek king of Salem brought out bread and wine. (He was priest of God Most High.) And he blessed him and said, "Blessed be Abram by God Most High, Possessor of heaven and earth." - Genesis 14:18-19',
              },
              {
                id: "teach-17-g15-perfected",
                type: "question",
                text: "Who is this mysterious priest-king who blesses Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "A pre-incarnation appearance of Christ",
                    response:
                      "CORRECT. Many early church fathers saw Melchizedek as a Christophany - a pre-incarnate appearance of Christ. His sudden introduction without genealogy, his royal priesthood, and his blessing of Abram support this view. Hebrews 7 develops this identification, presenting Melchizedek as a type of Christ's eternal priesthood.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "A Canaanite priest who worshiped the true God",
                    response:
                      "POSSIBLE but less likely given the developed typology. While some see him as a historical Canaanite priest, the biblical evidence strongly points to a supernatural figure, especially given the New Testament interpretation.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "A type of Christ as perfect priest-king",
                    response:
                      "TRUE but doesn't address his immediate identity. While he certainly types Christ, the question concerns who he was in this historical encounter.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g15-perfected",
                type: "narration",
                text: "Abram's response to Melchizedek reveals his spiritual priorities...",
              },
              {
                id: "teach-19-g15-perfected",
                type: "scripture",
                text: "Abram's tithe:",
                scripture: '"And Abram gave him a tenth of everything." - Genesis 14:20',
              },
              {
                id: "teach-20-g15-perfected",
                type: "question",
                text: "Why tithe to Melchizedek? What does this act signify?",
                options: [
                  {
                    id: "opt-1",
                    text: "He acknowledges God's ownership of the spoils",
                    response:
                      "CORRECT. The tithe recognizes that the victory and spoils ultimately belong to God, not Abram. By giving a tenth to God's priest, Abram acknowledges divine sovereignty over his success. This establishes the principle that our victories and gains are opportunities to honor God as the true source of blessing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He submits to Melchizedek's priestly authority",
                    response:
                      "TRUE but secondary. While submission is involved, the primary significance is acknowledging God's ownership through the tithe to His representative.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It establishes the principle of firstfruits",
                    response:
                      "VALID but focuses on the practice rather than the heart attitude. While tithing is established, the key insight is Abram's recognition of God's claim on all his gains.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g15-perfected",
                type: "narration",
                text: "Abram's final declaration makes his allegiance clear...",
              },
              {
                id: "teach-22-g15-perfected",
                type: "scripture",
                text: "Abram's testimony:",
                scripture:
                  '"But Abram said to the king of Sodom, "I have lifted my hand to the LORD, God Most High, Possessor of heaven and earth, that I would not take a thread or a sandal strap or anything that is yours, lest you should say, \'I have made Abram rich.\'" - Genesis 14:22-23',
              },
              {
                id: "teach-23-g15-perfected",
                type: "question",
                text: "Why such absolute refusal? What principle is Abram protecting?",
                options: [
                  {
                    id: "opt-1",
                    text: "God alone gets credit for blessing His people",
                    response:
                      "CORRECT. Abram's absolute refusal ensures no one can say human sources enriched him. This protects the testimony that Yahweh alone provides for His people. The principle is crucial: God's reputation depends on His people demonstrating exclusive dependence on Him. Even legitimate gains from questionable sources can compromise this witness.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Complete separation from wicked associations",
                    response:
                      "TRUE but focuses on the separation rather than the testimony. While separation is important, the primary principle is protecting God's exclusive glory as provider.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The testimony to God's faithfulness",
                    response:
                      "ACCURATE but vague. The specific testimony being protected is that God alone is the source of blessing, not human alliances or compromises.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-15-perfected",
                type: "narration",
                text: "MELCHIZEDEK'S SIGNIFICANCE: This mysterious figure becomes incredibly important! Psalm 110 and Hebrews 7 present Jesus as a priest forever in the order of Melchizedek - superior to the Levitical priesthood. Abram's encounter establishes a priesthood that finds its ultimate fulfillment in Christ!",
              },
            ],
            application: {
              id: "app-15-perfected",
              type: "reflection",
              text: "If Abram refused wealth gained through righteous victory to protect his testimony, how should Christians today think about wealth, success, and maintaining a clear witness to God's provision?",
            },
            reflection: {
              id: "refl-15-perfected",
              type: "reflection",
              text: "Where might God be calling you to refuse 'good things' that could compromise your testimony or confuse people about who truly provides and blesses in your life?",
            },
          },
        },
        {
          id: "lesson-genesis-16-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "The Covenant with Abram",
          description: "God's promises",
          scripture: "Genesis 15:1-21",
          estimatedMinutes: 18,
          order: 16,
          locked: true,
          content: {
            introduction: {
              id: "intro-16-perfected",
              type: "narration",
              text: "Have you ever waited so long for a promise that you started wondering if you heard correctly? When the silence feels louder than the original words? Today we're witnessing one of the most intimate encounters in Scripture - where God meets Abram in his doubt and makes an unbreakable covenant. What if this moment reveals how God responds to our deepest questions of 'how' and 'when'?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this covenant",
                  response: "This is the foundational covenant that shapes all of redemption history.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand God's response to doubt",
                  response: "Perfect! This passage shows God's patience with human questioning.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this divine encounter!",
                  response: "Excellent! Let's witness how God confirms His promises.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g16-perfected",
                type: "scripture",
                text: "The chapter opens with God addressing Abram's fear:",
                scripture:
                  '"After these things the word of the LORD came to Abram in a vision: "Fear not, Abram, I am your shield; your reward shall be very great."" - Genesis 15:1',
              },
              {
                id: "teach-2-g16-perfected",
                type: "question",
                text: "Why would Abram be afraid after his great victory? What might he fear?",
                options: [
                  {
                    id: "opt-1",
                    text: "Retaliation from the defeated kings",
                    response:
                      "CORRECT. Military victory often creates fear of future revenge attacks. Having defeated four kings, Abram reasonably worries about retaliation from their allies or surviving forces. This shows that spiritual highs are often followed by vulnerability to fear, and that God's protection remains necessary even after demonstrated victories.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The spiritual implications of his encounters",
                    response:
                      "TRUE but less likely as the primary fear. While the spiritual encounters were weighty, the immediate context suggests concern about practical military consequences.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The ongoing delay of God's promise",
                    response:
                      "VALID but not the stated reason. While the promise remains unfulfilled, God specifically addresses Abram's fear about his personal safety and reward.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g16-perfected",
                type: "narration",
                text: "Abram responds with raw honesty about his deepest disappointment...",
              },
              {
                id: "teach-4-g16-perfected",
                type: "scripture",
                text: "Abram's honest question:",
                scripture:
                  '"But Abram said, "O Lord GOD, what will you give me, for I continue childless, and the heir of my house is Eliezer of Damascus?"" - Genesis 15:2',
              },
              {
                id: "teach-5-g16-perfected",
                type: "question",
                text: "Abram focuses on what he DOESN'T have rather than what God just promised. Why is this so human?",
                options: [
                  {
                    id: "opt-1",
                    text: "Unfulfilled promises can overshadow present blessings",
                    response:
                      "CORRECT. The one missing thing often dominates our perspective, causing us to overlook present blessings and recent victories. Abram's focus on his childlessness despite God's promise of great reward shows how unmet expectations can blind us to current grace. This human tendency requires conscious trust in God's timing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's proposing a human solution to God's promise",
                    response:
                      "TRUE but describes his action rather than the psychological dynamic. While he proposes Eliezer, the deeper issue is how the unfulfilled promise obscures his view of God's faithfulness.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Honest doubt is better than pretended faith",
                    response:
                      "VALID but doesn't address the focus issue. While honesty with God is good, the problem is Abram's narrowed perspective on what he lacks rather than what God has given.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g16-perfected",
                type: "narration",
                text: "God responds not with rebuke but with greater specificity...",
              },
              {
                id: "teach-7-g16-perfected",
                type: "scripture",
                text: "God's specific promise:",
                scripture:
                  '"And behold, the word of the LORD came to him: "This man shall not be your heir; your very own son shall be your heir." And he brought him outside and said, "Look toward heaven, and number the stars, if you are able to number them." Then he said to him, "So shall your offspring be."" - Genesis 15:4-5',
              },
              {
                id: "teach-8-g16-perfected",
                type: "question",
                text: "Why take Abram outside to look at stars? What's significant about this visual aid?",
                options: [
                  {
                    id: "opt-1",
                    text: "It makes an abstract promise concrete and visible",
                    response:
                      "CORRECT. The starry sky transforms the abstract promise of numerous offspring into a tangible, overwhelming visual reality. This demonstrates God's compassion in giving faith tangible supports. The countless stars make the promise both comprehensible and magnificent, helping Abram grasp the scale of God's commitment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It connects Abram's offspring to God's cosmic purposes",
                    response:
                      "TRUE but secondary. While cosmic connections exist, the primary purpose is making the promise visually concrete to strengthen Abram's faith.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's creative power",
                    response:
                      "ACCURATE but doesn't address the specific promise. While creative power is evident, the stars specifically illustrate the number of descendants, not just general power.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g16-perfected",
                type: "narration",
                text: "Then comes one of the most important verses about faith in all Scripture...",
              },
              {
                id: "teach-10-g16-perfected",
                type: "scripture",
                text: "Abram's response of faith:",
                scripture: '"And he believed the LORD, and he counted it to him as righteousness." - Genesis 15:6',
              },
              {
                id: "teach-11-g16-perfected",
                type: "question",
                text: "What does it mean that belief was 'counted as righteousness'?",
                options: [
                  {
                    id: "opt-1",
                    text: "Right standing with God comes through faith, not works",
                    response:
                      "CORRECT. This verse establishes the foundational principle of justification by faith. God declares Abram righteous based on his trust in God's promise, not his moral achievements or religious performance. This becomes the cornerstone of Paul's gospel in Romans and Galatians, showing that righteousness is imputed to believers through faith in God's promises.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God accepts our trust as righteous when we rely on Him",
                    response:
                      "TRUE but risks misunderstanding the nature of imputation. God doesn't consider faith itself as righteousness but counts faith as the means through which Christ's righteousness is received.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It establishes the pattern for all salvation",
                    response:
                      "ACCURATE but focuses on application rather than the meaning. While this does establish the salvation pattern, the specific meaning concerns how God declares sinners righteous.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g16-perfected",
                type: "narration",
                text: "But Abram still has practical questions about HOW this will happen...",
              },
              {
                id: "teach-13-g16-perfected",
                type: "scripture",
                text: "Abram's second question:",
                scripture: '"But he said, "O Lord GOD, how am I to know that I shall possess it?"" - Genesis 15:8',
              },
              {
                id: "teach-14-g16-perfected",
                type: "question",
                text: "Is this question doubt or seeking confirmation? What's the difference?",
                options: [
                  {
                    id: "opt-1",
                    text: "Doubt questions God's ability, faith seeks God's method",
                    response:
                      "CORRECT. Abram believes God CAN fulfill the promise but wants to understand HOW it will happen. This distinction is crucial: doubt challenges God's power or faithfulness, while faith seeks clarification about God's means and timing. Abram's question comes after his belief was counted as righteousness, showing it's a request for understanding, not expression of unbelief.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Genuine faith asks honest questions",
                    response:
                      "TRUE but doesn't define the boundary between faith and doubt. While faith can ask questions, the key is whether the questions challenge God's character or seek to understand His ways.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He's moving from general promise to specific implementation",
                    response:
                      "ACCURATE but describes the progression rather than the faith dynamic. While he is moving to specifics, the significant insight is that this movement demonstrates faith, not doubt.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g16-perfected",
                type: "narration",
                text: "God responds with a dramatic covenant ceremony...",
              },
              {
                id: "teach-16-g16-perfected",
                type: "scripture",
                text: "The covenant ritual:",
                scripture:
                  '"And he said to him, "Bring me a heifer three years old, a female goat three years old, a ram three years old, a turtledove, and a young pigeon." He brought him all these, cut them in half, and laid each half over against the other." - Genesis 15:9-10',
              },
              {
                id: "teach-17-g16-perfected",
                type: "question",
                text: "This was a standard ancient covenant ritual. What did it signify?",
                options: [
                  {
                    id: "opt-1",
                    text: "The parties would walk between pieces, invoking self-curse",
                    response:
                      "CORRECT. In ancient covenants, walking between slaughtered animals symbolized invoking self-malediction: 'May what happened to these animals happen to me if I break this covenant.' This made covenants deadly serious commitments. The ritual graphically represented the consequences of covenant violation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It represented total commitment",
                    response:
                      "TRUE but vague. While commitment is involved, the specific symbolism concerns the curse for breaking the commitment.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It established binding legal relationships",
                    response:
                      "ACCURATE but doesn't capture the self-malediction aspect. While relationships were established, the walking ritual specifically symbolized accepting curse consequences for violation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g16-perfected",
                type: "narration",
                text: "But then something extraordinary happens in the ceremony...",
              },
              {
                id: "teach-19-g16-perfected",
                type: "scripture",
                text: "God's unilateral covenant:",
                scripture:
                  '"When the sun had gone down and it was dark, behold, a smoking fire pot and a flaming torch passed between these pieces. On that day the LORD made a covenant with Abram." - Genesis 15:17-18',
              },
              {
                id: "teach-20-g16-perfected",
                type: "question",
                text: "Only God passes through the pieces. What does this mean?",
                options: [
                  {
                    id: "opt-1",
                    text: "God alone bears the covenant consequences",
                    response:
                      "CORRECT. In this unilateral covenant, God alone takes responsibility for fulfilling the terms and bears the consequences of failure. The smoking fire pot and flaming torch represent God's presence passing through, symbolizing His sole obligation to ensure the covenant's success. This demonstrates grace: God binds Himself to bless despite human failure.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It's a covenant of grace, not mutual obligation",
                    response:
                      "TRUE but describes the nature rather than the symbolism. While it is a grace covenant, the walking through pieces specifically shows God taking sole responsibility.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It points to Christ bearing our curse",
                    response:
                      "BEAUTIFUL typology but not the immediate meaning. While Christ ultimately bears the curse, the immediate significance is God's unilateral commitment to the covenant.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g16-perfected",
                type: "narration",
                text: "God also reveals the difficult path to the promise...",
              },
              {
                id: "teach-22-g16-perfected",
                type: "scripture",
                text: "The prophecy of suffering:",
                scripture:
                  '"Then the LORD said to Abram, "Know for certain that your offspring will be sojourners in a land that is not theirs and will be servants there, and they will be afflicted for four hundred years."" - Genesis 15:13',
              },
              {
                id: "teach-23-g16-perfected",
                type: "question",
                text: "Why reveal the suffering ahead? Wouldn't this discourage Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "It prepares him for the long journey of faith",
                    response:
                      "CORRECT. God honestly prepares Abram for the difficult path ahead, showing that faith includes enduring hardship, not avoiding it. This demonstrates God's integrity in not promising only easy blessings. Knowing about future suffering helps Abram and his descendants persevere when difficulties come, recognizing they're part of God's plan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's sovereignty over future difficulties",
                    response:
                      "TRUE but focuses on sovereignty rather than preparation. While sovereignty is evident, the primary purpose is preparing Abram for what's coming.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It includes the promise of ultimate deliverance",
                    response:
                      "ACCURATE but describes the content rather than the purpose. While deliverance is promised, the revelation of suffering specifically serves to prepare Abram realistically.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-16-perfected",
                type: "narration",
                text: "COVENANT FULFILLMENT: This unconditional covenant becomes the foundation for all God's dealings with Israel and ultimately finds its fulfillment in Christ. Galatians 3 will explain that Christ became the curse for us, fulfilling what God alone passed through in this ceremony!",
              },
            ],
            application: {
              id: "app-16-perfected",
              type: "reflection",
              text: "If God made an unconditional covenant with Abram that depended entirely on God's faithfulness, how does this shape our understanding of salvation? Are we saved by our ability to keep promises or God's?",
            },
            reflection: {
              id: "refl-16-perfected",
              type: "reflection",
              text: "Where is God calling you to trust His promises even when you don't see the 'how' or 'when'? How can you cultivate the kind of faith that God counts as righteousness?",
            },
          },
        },
        {
          id: "lesson-genesis-17-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "The Birth of Ishmael",
          description: "Trying to help God",
          scripture: "Genesis 16:1-16",
          estimatedMinutes: 16,
          order: 17,
          locked: true,
          content: {
            introduction: {
              id: "intro-17-perfected",
              type: "narration",
              text: "Have you ever waited so long for God to act that you decided to 'help Him out'? What starts as good intentions becomes a mess you never anticipated? Today we're witnessing the tragic results of trying to fulfill God's promises through human ingenuity. What if this story reveals why God's timing is as important as His promises?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about the Ishmael story",
                  response: "This passage shows the painful consequences of impatience with God's timing.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Sarai's perspective",
                  response: "Perfect! This story gives us insight into the human struggle with waiting.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this human solution!",
                  response: "Excellent! Let's discover why God's ways are better than our solutions.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g17-perfected",
                type: "scripture",
                text: "The chapter opens with the painful reality of waiting:",
                scripture:
                  '"Now Sarai, Abram\'s wife, had borne him no children. She had a female Egyptian servant whose name was Hagar." - Genesis 16:1',
              },
              {
                id: "teach-2-g17-perfected",
                type: "question",
                text: "Ten years have passed since God's promise. Why does God wait so long?",
                options: [
                  {
                    id: "opt-1",
                    text: "To eliminate any possibility of human explanation",
                    response:
                      "CORRECT. The extended delay ensures that when the promise is fulfilled, no one can attribute it to natural processes or human effort. God waits until Abram and Sarai are biologically beyond childbearing capacity so the miracle is unmistakable. This pattern continues throughout Scripture: God often waits until human impossibility makes His power evident.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To develop character and dependence in Abram",
                    response:
                      "TRUE but secondary. While character development occurs, the primary purpose is ensuring the miracle's divine origin is undeniable.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "To work all things according to His perfect timing",
                    response:
                      "ACCURATE but vague. While God's timing is perfect, the specific purpose in this delay is to eliminate natural explanations for the fulfillment.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g17-perfected",
                type: "narration",
                text: "Sarai proposes a solution that was culturally acceptable but spiritually disastrous...",
              },
              {
                id: "teach-4-g17-perfected",
                type: "scripture",
                text: "Sarai's proposal:",
                scripture:
                  '"And Sarai said to Abram, "Behold now, the LORD has prevented me from bearing children. Go in to my servant; it may be that I shall obtain children by her." And Abram listened to the voice of Sarai." - Genesis 16:2',
              },
              {
                id: "teach-5-g17-perfected",
                type: "question",
                text: "This was legal in their culture. Why was it still wrong?",
                options: [
                  {
                    id: "opt-1",
                    text: "It sought God's ends through human means",
                    response:
                      "CORRECT. Sarai and Abram attempt to fulfill God's promise through culturally acceptable but spiritually compromised means. This demonstrates the danger of using worldly methods to achieve divine purposes. Even when intentions seem good, bypassing God's timing and methods shows lack of faith and often creates greater problems.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It showed lack of trust in God's timing",
                    response:
                      "TRUE but focuses on timing rather than the fundamental error of substituting human solutions for divine action.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It treated Hagar as a means to an end",
                    response:
                      "VALID ethical concern but not the primary spiritual error. While using Hagar was wrong, the greater issue was attempting to accomplish God's work through human ingenuity.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g17-perfected",
                type: "narration",
                text: "The plan 'works' biologically but fails relationally...",
              },
              {
                id: "teach-7-g17-perfected",
                type: "scripture",
                text: "The immediate consequences:",
                scripture:
                  '"And he went in to Hagar, and she conceived. And when she saw that she had conceived, she looked with contempt on her mistress." - Genesis 16:4',
              },
              {
                id: "teach-8-g17-perfected",
                type: "question",
                text: "Why would Hagar despise Sarai? What dynamics does this create?",
                options: [
                  {
                    id: "opt-1",
                    text: "Pregnancy gave Hagar status Sarai lacked",
                    response:
                      "CORRECT. In their culture, childbearing elevated a woman's status and security. Hagar's pregnancy made her valuable in ways Sarai, as a barren woman, was not. This created competition and resentment, demonstrating how human solutions to spiritual problems often create new relational conflicts. The scheme intended to solve one problem generated others.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It created competition instead of solution",
                    response:
                      "TRUE but describes the outcome rather than the cultural dynamics. While competition resulted, the specific cause was the status shift through pregnancy.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrated the folly of the arrangement",
                    response:
                      "ACCURATE but focuses on the lesson rather than the interpersonal dynamics. While folly is evident, the question concerns why Hagar specifically despised Sarai.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g17-perfected",
                type: "narration",
                text: "Sarai responds with blame rather than taking responsibility...",
              },
              {
                id: "teach-10-g17-perfected",
                type: "scripture",
                text: "Sarai's blame game:",
                scripture:
                  '"And Sarai said to Abram, "May the wrong done to me be on you! I gave my servant to your embrace, and when she saw that she had conceived, she looked on me with contempt. May the LORD judge between you and me!"" - Genesis 16:5',
              },
              {
                id: "teach-11-g17-perfected",
                type: "question",
                text: "Sarai blames Abram for following her plan. What does this reveal?",
                options: [
                  {
                    id: "opt-1",
                    text: "We often blame others for consequences we helped create",
                    response:
                      "CORRECT. Sarai's blame-shifting demonstrates how sin distorts perspective and avoids personal responsibility. Despite initiating the scheme, she holds Abram responsible for the negative outcomes. This pattern of blaming others for our own sinful choices begins with Adam and continues as a fundamental human tendency that damages relationships.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Sin damages relationships and creates division",
                    response:
                      "TRUE but focuses on the effect rather than the blame dynamic. While relationships are damaged, the specific revelation is Sarai's refusal to take responsibility.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "She invokes God's judgment on her own scheme",
                    response:
                      "IRONIC but not the primary revelation. While the irony is striking, the key insight is the blame-shifting pattern common to fallen humanity.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g17-perfected",
                type: "narration",
                text: "Abram's response compounds the problem...",
              },
              {
                id: "teach-13-g17-perfected",
                type: "scripture",
                text: "Abram's abdication:",
                scripture:
                  '"But Abram said to Sarai, "Behold, your servant is in your power; do to her as you please." Then Sarai dealt harshly with her, and she fled from her." - Genesis 16:6',
              },
              {
                id: "teach-14-g17-perfected",
                type: "question",
                text: "Abram avoids conflict rather than leading rightly. What's the cost?",
                options: [
                  {
                    id: "opt-1",
                    text: "He enables abuse rather than providing protection",
                    response:
                      "CORRECT. Abram's passive response to Sarai's harsh treatment of Hagar constitutes leadership failure. Rather than confronting the sin and protecting the vulnerable, he abdicates responsibility, allowing abuse to continue. This demonstrates how passive leadership can enable injustice and compound initial sins with further wrongdoing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He fails both women as spiritual head",
                    response:
                      "TRUE but vague. While he fails both, the specific failure is enabling Sarai's abuse and abandoning Hagar to mistreatment.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He compounds one sin with another",
                    response:
                      "ACCURATE but doesn't specify the nature of the additional sin. The compounding sin is specifically leadership abdication that enables abuse.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g17-perfected",
                type: "narration",
                text: "But God meets Hagar in her desperate flight...",
              },
              {
                id: "teach-16-g17-perfected",
                type: "scripture",
                text: "God finds Hagar:",
                scripture:
                  '"The angel of the LORD found her by a spring of water in the wilderness, the spring on the way to Shur." - Genesis 16:7',
              },
              {
                id: "teach-17-g17-perfected",
                type: "question",
                text: "Why does God seek out an Egyptian slave girl? What does this reveal?",
                options: [
                  {
                    id: "opt-1",
                    text: "God cares for the marginalized and oppressed",
                    response:
                      "CORRECT. God's pursuit of Hagar demonstrates His special concern for the vulnerable and exploited. Despite her social insignificance and foreign status, God sees her suffering and intervenes. This reveals God's heart for the oppressed and His commitment to justice for those the world overlooks or mistreats.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He sees our suffering even when others don't",
                    response:
                      "TRUE but focuses on God's awareness rather than His character. While He certainly sees, the greater revelation is His compassionate intervention on behalf of the oppressed.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He has purposes for Ishmael too",
                    response:
                      "VALID but secondary. While Ishmael has a role, the primary revelation is God's care for this marginalized woman in her distress.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g17-perfected",
                type: "narration",
                text: "God gives Hagar promises about her son...",
              },
              {
                id: "teach-19-g17-perfected",
                type: "scripture",
                text: "Ishmael's prophecy:",
                scripture:
                  '"And the angel of the LORD said to her, "Behold, you are pregnant and shall bear a son. You shall call his name Ishmael, because the LORD has listened to your affliction. He shall be a wild donkey of a man, his hand against everyone and everyone\'s hand against him, and he shall dwell over against all his kinsmen."" - Genesis 16:11-12',
              },
              {
                id: "teach-20-g17-perfected",
                type: "question",
                text: "Ishmael means 'God hears.' What's significant about this name?",
                options: [
                  {
                    id: "opt-1",
                    text: "It memorializes God's care in her suffering",
                    response:
                      "CORRECT. The name becomes a permanent testimony that God hears the cries of the afflicted. Every time Hagar says her son's name, she remembers God's faithfulness in her desperation. This demonstrates how God turns our painful experiences into memorials of His grace when we encounter Him in our suffering.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's faithfulness despite human failure",
                    response:
                      "TRUE but focuses on the contrast rather than the memorial aspect. While faithfulness is evident, the specific significance is the named memorial of God's attentive care.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It acknowledges the complexity of the situation",
                    response:
                      "ACCURATE but vague. While complexity exists, the name specifically commemorates God's response to Hagar's affliction.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g17-perfected",
                type: "narration",
                text: "Hagar responds with the first name given to God in Scripture...",
              },
              {
                id: "teach-22-g17-perfected",
                type: "scripture",
                text: "Hagar's testimony:",
                scripture:
                  '"So she called the name of the LORD who spoke to her, "You are a God of seeing," for she said, "Truly here I have seen him who looks after me."" - Genesis 16:13',
              },
              {
                id: "teach-23-g17-perfected",
                type: "question",
                text: "Why is 'God who sees' so significant coming from Hagar?",
                options: [
                  {
                    id: "opt-1",
                    text: "It expresses her experience of God's personal care",
                    response:
                      "CORRECT. Hagar's naming of God as 'the God who sees' represents profound theological insight born from personal experience. An Egyptian slave girl contributes to our understanding of God's character, revealing His attentive care for individuals. This shows that genuine encounter with God leads to fresh revelation of His nature, regardless of one's background or status.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reveals God's character to the oppressed",
                    response:
                      "TRUE but focuses on the recipient rather than the revelation itself. While it comforts the oppressed, the significant development is this new dimension of God's character being revealed.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's self-revelation to outsiders",
                    response:
                      "VALID but secondary. While Hagar is an outsider, the primary significance is the specific revelation of God as the one who sees personal suffering.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-17-perfected",
                type: "narration",
                text: "ISHMAEL'S LEGACY: This moment creates consequences that echo through history. The Arab peoples trace their lineage to Ishmael, and the conflict between Isaac and Ishmael's descendants continues to this day. One moment of impatience creates generational consequences - a sobering lesson about the importance of waiting on God's timing!",
              },
            ],
            application: {
              id: "app-17-perfected",
              type: "reflection",
              text: "If God blessed Ishmael and used this messy situation for good, does this mean God approves of our sinful shortcuts? How do we reconcile God's sovereignty with human responsibility?",
            },
            reflection: {
              id: "refl-17-perfected",
              type: "reflection",
              text: "Where are you tempted to 'help God out' rather than wait for His timing? What areas of your life require patient trust instead of anxious action?",
            },
          },
        },
        {
          id: "lesson-genesis-18-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Circumcision and the Promise",
          description: "Sign of the covenant",
          scripture: "Genesis 17:1-27",
          estimatedMinutes: 17,
          order: 18,
          locked: true,
          content: {
            introduction: {
              id: "intro-18-perfected",
              type: "narration",
              text: "Have you ever made such a significant commitment that you created a permanent reminder? A mark that said 'I belong to this person or purpose forever'? Today we're witnessing God establishing circumcision as the sign of His eternal covenant. What if this ancient practice reveals profound truths about identity, belonging, and the cost of covenant relationship?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about circumcision's meaning",
                  response: "This sign carries deep theological significance about covenant identity.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the name changes",
                  response: "Perfect! The names Abraham and Sarah reveal God's transformative power.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this covenant sign!",
                  response: "Excellent! Let's discover what it means to be marked as God's people.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g18-perfected",
                type: "scripture",
                text: "God appears to Abram after 13 years of silence:",
                scripture:
                  '"When Abram was ninety-nine years old the LORD appeared to Abram and said to him, "I am God Almighty; walk before me, and be blameless." - Genesis 17:1',
              },
              {
                id: "teach-2-g18-perfected",
                type: "question",
                text: "Why break 13 years of silence now? And why start with 'God Almighty'?",
                options: [
                  {
                    id: "opt-1",
                    text: "The time for fulfillment is approaching",
                    response:
                      "CORRECT. The 13-year silence ends as God prepares to act decisively in fulfilling His promise. The timing shows that God's apparent silence doesn't mean His absence or forgetfulness. 'El Shaddai' (God Almighty) emphasizes God's supreme power to accomplish what He promises, especially significant after the Ishmael detour demonstrated human inability.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "El Shaddai emphasizes God's power to fulfill",
                    response:
                      "TRUE but doesn't address the timing question. While the name emphasizes power, the 13-year silence specifically prepares for the imminent fulfillment.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It calls for renewed commitment after failure",
                    response:
                      "VALID but secondary. While commitment is renewed, the primary significance is the transition to fulfillment timing after the failed human attempt.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g18-perfected",
                type: "narration",
                text: "God begins by changing Abram's identity...",
              },
              {
                id: "teach-4-g18-perfected",
                type: "scripture",
                text: "The name change:",
                scripture:
                  '"No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations." - Genesis 17:5',
              },
              {
                id: "teach-5-g18-perfected",
                type: "question",
                text: "Abram means 'exalted father' but Abraham means 'father of multitudes.' Why change it?",
                options: [
                  {
                    id: "opt-1",
                    text: "The new name reflects God's promise, not current reality",
                    response:
                      "CORRECT. God gives Abraham a name that declares his destiny before it becomes reality. This demonstrates how God often calls things that are not as though they are, creating identity that aligns with His promises rather than present circumstances. The new name becomes a constant reminder of God's commitment to fulfill what He has promised.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes his new covenant identity",
                    response:
                      "TRUE but focuses on identity rather than the faith principle. While identity is established, the significant dynamic is God naming according to promise rather than reality.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It's an act of sovereign grace and calling",
                    response:
                      "ACCURATE but vague. While grace is involved, the specific significance is the promise-based naming that requires faith in what God will do.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g18-perfected",
                type: "narration",
                text: "God also changes Sarai's name, elevating her role...",
              },
              {
                id: "teach-7-g18-perfected",
                type: "scripture",
                text: "Sarai becomes Sarah:",
                scripture:
                  '"And God said to Abraham, "As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name. I will bless her, and moreover, I will give you a son by her." - Genesis 17:15-16',
              },
              {
                id: "teach-8-g18-perfected",
                type: "question",
                text: "Both names mean 'princess,' but the change is significant. Why?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes her as covenant partner, not bystander",
                    response:
                      "CORRECT. The name change from Sarai to Sarah signifies her elevation from Abram's wife to covenant participant in her own right. She is not merely the biological means but an essential partner in God's redemptive plan. This demonstrates God's commitment to include women fully in His covenant purposes and honors her role in the promise.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reaffirms her dignity after the Hagar incident",
                    response:
                      "TRUE but focuses on restoration rather than covenant partnership. While dignity is restored, the greater significance is her established role in the covenant.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It confirms her as mother of nations",
                    response:
                      "ACCURATE but describes the result rather than the significance of the name change itself. While she becomes mother of nations, the name change specifically establishes her covenant partnership.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g18-perfected",
                type: "narration",
                text: "Abraham's response reveals his continued struggle to believe...",
              },
              {
                id: "teach-10-g18-perfected",
                type: "scripture",
                text: "Abraham's laughter:",
                scripture:
                  '"Then Abraham fell on his face and laughed and said to himself, "Shall a child be born to a man who is a hundred years old? Shall Sarah, who is ninety years old, bear a child?"" - Genesis 17:17',
              },
              {
                id: "teach-11-g18-perfected",
                type: "question",
                text: "Is Abraham's laughter doubt or overwhelmed joy? How can we tell?",
                options: [
                  {
                    id: "opt-1",
                    text: "It seems like amazed disbelief at God's audacity",
                    response:
                      "CORRECT. Abraham's laughter appears to be astonished disbelief at the incredible nature of God's promise. At 100 years old with a 90-year-old wife, the promise seems biologically impossible. His suggestion of Ismael as an alternative shows he hasn't fully grasped that God means Sarah specifically. This represents faith struggling with overwhelming physical reality.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's grappling with the physical reality",
                    response:
                      "TRUE but doesn't characterize the laughter. While he grapples with reality, the laughter specifically suggests amazed disbelief.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He suggests Ishmael as God's plan B",
                    response:
                      "ACCURATE but describes his response rather than the nature of his laughter. While suggesting Ishmael shows misunderstanding, the laughter itself indicates astonished reaction.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g18-perfected",
                type: "narration",
                text: "God insists on His specific promise and establishes the covenant sign...",
              },
              {
                id: "teach-13-g18-perfected",
                type: "scripture",
                text: "The covenant sign:",
                scripture:
                  '"This is my covenant, which you shall keep, between me and you and your offspring after you: Every male among you shall be circumcised." - Genesis 17:10',
              },
              {
                id: "teach-14-g18-perfected",
                type: "question",
                text: "Why choose circumcision as the sign? What does it represent?",
                options: [
                  {
                    id: "opt-1",
                    text: "It signifies cutting away fleshly dependence",
                    response:
                      "CORRECT. Circumcision represents the removal of fleshly confidence and reliance on human ability. As the organ of reproduction, its circumcision signifies that the promised offspring will come through God's power, not human effort. This physical sign constantly reminds covenant members that God's promises are fulfilled by His power, not human capability.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It marks the organ of reproduction",
                    response:
                      "TRUE but describes the location rather than the symbolism. While it marks reproduction, the deeper meaning concerns reliance on God rather than human ability for the promised offspring.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It's a permanent, intimate identity marker",
                    response:
                      "ACCURATE but focuses on the practical aspect rather than the theological symbolism. While it is permanent and intimate, the specific symbolism concerns cutting away fleshly trust.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g18-perfected",
                type: "narration",
                text: "The requirement extends to all Abraham's household...",
              },
              {
                id: "teach-16-g18-perfected",
                type: "scripture",
                text: "Universal application:",
                scripture:
                  '"He who is eight days old among you shall be circumcised. Every male throughout your generations, whether born in your house or bought with your money from any foreigner... So shall my covenant be in your flesh an everlasting covenant." - Genesis 17:12-13',
              },
              {
                id: "teach-17-g18-perfected",
                type: "question",
                text: "Why include slaves and foreigners? What does this communicate?",
                options: [
                  {
                    id: "opt-1",
                    text: "Covenant membership isn't based on ethnicity alone",
                    response:
                      "CORRECT. The inclusion of purchased slaves and foreigners demonstrates that covenant relationship with God transcends ethnic boundaries. What matters is belonging to Abraham's household, not biological descent. This establishes the principle that God's people are defined by covenant relationship rather than racial identity, anticipating the inclusion of Gentiles in the New Covenant.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It creates a visible covenant community",
                    response:
                      "TRUE but focuses on the community rather than the inclusive principle. While community is created, the significant insight is the non-ethnic basis for inclusion.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates Abraham's leadership responsibility",
                    response:
                      "VALID but secondary. While leadership is involved, the primary revelation is the inclusive nature of covenant membership.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g18-perfected",
                type: "narration",
                text: "Abraham immediately obeys, demonstrating his faith...",
              },
              {
                id: "teach-19-g18-perfected",
                type: "scripture",
                text: "Immediate obedience:",
                scripture:
                  '"Then Abraham took Ishmael his son and all those born in his house or bought with his money, every male among the men of Abraham\'s house, and he circumcised the flesh of their foreskins that very day, as God had said to him." - Genesis 17:23',
              },
              {
                id: "teach-20-g18-perfected",
                type: "question",
                text: "Why emphasize 'that very day'? What's significant about immediate obedience?",
                options: [
                  {
                    id: "opt-1",
                    text: "Delayed obedience is disobedience",
                    response:
                      "CORRECT. Abraham's immediate compliance demonstrates the genuineness of his faith and the seriousness with which he takes God's command. Delaying obedience often indicates reservation or resistance. The prompt action shows Abraham's complete acceptance of God's terms without negotiation or hesitation, modeling the proper response to divine revelation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates full acceptance of God's terms",
                    response:
                      "TRUE but describes the attitude rather than the obedience principle. While acceptance is evident, the specific lesson concerns the importance of immediate rather than delayed obedience.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows leadership by example",
                    response:
                      "ACCURATE but secondary. While leadership is demonstrated, the primary significance is the immediate response to God's command.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g18-perfected",
                type: "narration",
                text: "At 99 years old, Abraham embraces the sign himself...",
              },
              {
                id: "teach-22-g18-perfected",
                type: "scripture",
                text: "Abraham's personal commitment:",
                scripture:
                  '"Abraham was ninety-nine years old when he was circumcised in the flesh of his foreskin." - Genesis 17:24',
              },
              {
                id: "teach-23-g18-perfected",
                type: "question",
                text: "Why mention Abraham's age? What does this highlight?",
                options: [
                  {
                    id: "opt-1",
                    text: "The costliness of obedience at his age",
                    response:
                      "CORRECT. At 99 years old, circumcision represented significant physical risk and discomfort. Abraham's willingness to undergo this procedure demonstrates remarkable faith and commitment. His advanced age makes the obedience more costly and therefore more significant, showing that following God sometimes requires painful steps regardless of our life stage.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "His personal participation in the covenant",
                    response:
                      "TRUE but doesn't capture the cost element. While participation is evident, the specific significance is the sacrifice involved given his age.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The faith required to believe future promises",
                    response:
                      "VALID but focuses on the promises rather than the obedience. While faith is required, the age specifically highlights the cost of the obedient action itself.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-18-perfected",
                type: "narration",
                text: "CIRCUMCISION FULFILLED: This physical sign points toward a greater spiritual reality! Deuteronomy will call for 'circumcision of the heart,' and Paul will explain that true circumcision is spiritual, not physical. Ultimately, Christ accomplishes what circumcision symbolized - cutting away our sinful nature and giving us new hearts through faith!",
              },
            ],
            application: {
              id: "app-18-perfected",
              type: "reflection",
              text: "If physical circumcision is no longer required for Christians (Acts 15), what is the equivalent 'sign of the covenant' for New Testament believers? How do we visibly demonstrate our covenant relationship with God today?",
            },
            reflection: {
              id: "refl-18-perfected",
              type: "reflection",
              text: "What 'flesh' needs to be cut away in your life for God's promises to flourish? Where is God calling you to immediate obedience, even when it's costly or doesn't make sense from a human perspective?",
            },
          },
        },
      ],
    },
  ],
}
