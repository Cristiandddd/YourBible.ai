import type { LessonBook } from "./types"

export const GENESIS_LESSONS_1_6: LessonBook = {
  id: "genesis-1-6-perfected",
  religion: "christianity",
  title: "Genesis - The Foundation",
  description: "From Creation to the Flood",
  icon: "🌍",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-creation-perfected",
      bookId: "genesis",
      title: "The Creation Account",
      description: "God's foundational work with future connections",
      order: 1,
      lessons: [
        {
          id: "lesson-genesis-1-perfected",
          sectionId: "genesis-creation-perfected",
          title: "The Creation of the World",
          description: "God brings order from chaos",
          scripture: "Genesis 1:1-2:3",
          estimatedMinutes: 16,
          order: 1,
          locked: false,
          content: {
            introduction: {
              id: "intro-1-perfected",
              type: "narration",
              text: "Have you ever stood in complete darkness? That moment before the first spark of light appears? Today we're going back to the ultimate 'before' moment - where everything began. What if I told you the first words of the Bible reveal not just how the world started, but why you matter in it?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to explore the beginning",
                  response:
                    "Excellent! Let's discover together how the foundation of everything shapes our understanding of God and ourselves.",
                },
                {
                  id: "opt-2",
                  text: "I've read Genesis before",
                  response:
                    "Wonderful! Even familiar ground can yield new treasures when we look closely. Let's see what fresh insights await.",
                },
                {
                  id: "opt-3",
                  text: "I'm curious about the creation story",
                  response:
                    "Perfect! You're about to encounter one of the most profound and beautiful accounts ever written.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-perfected",
                type: "scripture",
                text: "Let's start with the most famous opening in literature:",
                scripture: '"In the beginning, God created the heavens and the earth." - Genesis 1:1',
              },
              {
                id: "teach-2-perfected",
                type: "question",
                text: "Many people wonder: Why doesn't the Bible say when God was created?",
                options: [
                  {
                    id: "opt-1",
                    text: "God has no beginning - He's eternal",
                    response:
                      "CORRECT. The Bible assumes God's eternal nature rather than explaining it. He simply IS - the self-existent One who depends on nothing outside Himself. This foundational truth distinguishes the Creator from all creation, which has a beginning. God's eternity is not something to be proven but accepted as the necessary precondition for everything else that exists.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Some truths are too profound for words",
                    response:
                      "NOT QUITE. While God's nature is indeed profound, the Bible is clear and specific about His eternal existence. The issue isn't that it's too deep for words, but that God's self-existence is presented as axiomatic - the starting point that makes everything else meaningful. Scripture repeatedly affirms 'from everlasting to everlasting, you are God' (Psalm 90:2).",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It distinguishes God from creation",
                    response:
                      "IMPORTANT but secondary. While this is true, the primary reason is more fundamental: God's eternal nature defines reality itself. Everything else is contingent and dependent; only God is necessary and self-sufficient. The distinction flows FROM His eternal nature rather than being the reason for the silence about His origin.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-perfected",
                type: "narration",
                text: "Now let's look at the scene God steps into:",
              },
              {
                id: "teach-4-perfected",
                type: "scripture",
                text: "The initial condition of creation:",
                scripture:
                  '"The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters." - Genesis 1:2',
              },
              {
                id: "teach-5-perfected",
                type: "question",
                text: "The Spirit 'hovering' - this word is used elsewhere for a bird caring for its young. What might this suggest about God's relationship to creation?",
                options: [
                  {
                    id: "opt-1",
                    text: "God is intimately involved from the start",
                    response:
                      "CORRECT. The imagery of hovering conveys attentive, protective presence. Even in the chaos and formlessness, God wasn't distant but intimately engaged with His creation. Like a mother bird watching over her nest, God's Spirit was actively involved, preparing to bring forth life and order. This shows creation wasn't a mechanical act but a personal, caring work.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Creation is cherished, not just made",
                    response:
                      "PARTIALLY CORRECT but misses the active dimension. While God does cherish creation, the hovering specifically emphasizes His active, preparatory involvement. The focus is on what God is DOING in the chaos - not just how He feels about it. The cherishing becomes evident as He speaks order and beauty into existence.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "There's purpose in the chaos",
                    response:
                      "TRUE but incomplete. The hovering does suggest purposeful engagement with the chaos, but the primary revelation is about God's personal, caring presence. The purpose emerges FROM His active involvement rather than being inherent in the chaos itself.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-perfected",
                type: "narration",
                text: "Now watch how God brings order through a beautiful, repeated pattern over six days...",
              },
              {
                id: "teach-7-perfected",
                type: "scripture",
                text: "The rhythm of creation:",
                scripture:
                  '"And God said, "Let there be light," and there was light. And God saw that the light was good." - Genesis 1:3-4',
              },
              {
                id: "teach-8-perfected",
                type: "question",
                text: "God speaks creation into existence. What does this tell us about His power and authority?",
                options: [
                  {
                    id: "opt-1",
                    text: "His word has creative power",
                    response:
                      "CORRECT. God's speech is inherently powerful and effective. He doesn't build or craft using existing materials - His word itself brings reality into being. This demonstrates absolute sovereignty where mere declaration accomplishes His will. As Hebrews 11:3 confirms, the universe was created by God's command, showing His word is the ultimate creative force.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He establishes the power of words",
                    response:
                      "SECONDARY application. While words do matter, this focuses on human application rather than divine revelation. The primary truth is about God's unique creative authority, not establishing a general principle about language. Human words have derivative power; God's words have inherent creative power.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It connects to Jesus as the Word",
                    response:
                      "IMPORTANT connection but not the primary meaning here. John 1 does identify Jesus as the Word through whom all things were made, but in Genesis 1, the focus is on God's sovereign creative power through His spoken word. The Christological connection is valid but represents later revelation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-perfected",
                type: "narration",
                text: "Let's notice the pattern that develops - separation, filling, and declaration of goodness...",
              },
              {
                id: "teach-10-perfected",
                type: "scripture",
                text: "The creation of humanity:",
                scripture:
                  '"Then God said, "Let us make man in our image, after our likeness." So God created man in his own image, in the image of God he created him; male and female he created them." - Genesis 1:26-27',
              },
              {
                id: "teach-11-perfected",
                type: "question",
                text: "'Let US make man in OUR image.' This plural language has fascinated readers for millennia. What might it suggest?",
                options: [
                  {
                    id: "opt-1",
                    text: "A hint of the Trinity",
                    response:
                      "CORRECT. Many Christian theologians see this as an early glimpse of the triune God - Father, Son, and Spirit working together in creation. The plural language suggests divine deliberation within the Godhead, consistent with the New Testament revelation that all three persons were involved in creation (John 1:3, Colossians 1:16). This doesn't mean ancient readers understood the Trinity fully, but the language prepares for this later revelation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The majesty and complexity of God",
                    response:
                      "TRUE but inadequate. While God is indeed majestic and complex, the specific plural language ('us/our') suggests interpersonal relationship rather than just complexity. The biblical emphasis is on God's relational nature within Himself, not merely His incomprehensible majesty.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "A heavenly council",
                    response:
                      "LESS LIKELY interpretation. While God does consult heavenly beings elsewhere, humanity is created specifically in GOD'S image, not that of angelic beings. The consistent biblical testimony is that God alone creates humanity, making the heavenly council interpretation less compelling than the Trinitarian reading.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-perfected",
                type: "narration",
                text: "Now let's consider what being 'image bearers' actually means for us...",
              },
              {
                id: "teach-13-perfected",
                type: "scripture",
                text: "Our purpose as image-bearers:",
                scripture:
                  '"And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth."" - Genesis 1:28',
              },
              {
                id: "teach-14-perfected",
                type: "question",
                text: "Based on what we've seen, what does being God's 'image' involve?",
                options: [
                  {
                    id: "opt-1",
                    text: "Representing God's character",
                    response:
                      "FOUNDATIONAL but incomplete. Representing God's character is crucial, but the image involves more - it includes functional representation and relational capacity. Ancient kings placed images of themselves to represent their authority in distant territories; similarly, we represent God's rule and character in creation.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-2",
                    text: "Creative stewardship of creation",
                    response:
                      "CORRECT. This captures the functional aspect of the image. As God's image-bearers, we're called to 'subdue' and 'have dominion' - not as destructive tyrants but as wise stewards who cultivate and care for creation as God would. This reflects God's own creative, ordering work and represents His loving rule over what He made.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Relational capacity like God's",
                    response:
                      "IMPORTANT dimension but not the primary meaning here. While we reflect God's relational nature, the creation account emphasizes our functional role as stewards. Our relational capacity flows FROM being God's image, but the initial commission focuses on our responsibility toward creation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-perfected",
                type: "narration",
                text: "Finally, God does something remarkable - He rests...",
              },
              {
                id: "teach-16-perfected",
                type: "scripture",
                text: "The seventh day:",
                scripture:
                  '"And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy." - Genesis 2:2-3',
              },
              {
                id: "teach-17-perfected",
                type: "question",
                text: "Why would an all-powerful God need to 'rest'? What's really happening here?",
                options: [
                  {
                    id: "opt-1",
                    text: "He's modeling a rhythm for us",
                    response:
                      "CORRECT. God establishes a pattern of work and rest that reflects His wisdom for human flourishing. The Sabbath principle isn't about God's need but about His design for creation. By resting, God sanctifies time itself and shows that productivity isn't humanity's ultimate purpose - relationship with Him is central.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's enjoying His completed work",
                    response:
                      "PARTIALLY TRUE but misses the purposeful aspect. While God certainly delighted in His creation, the rest primarily signifies completion and perfection rather than mere enjoyment. It's the rest of satisfaction that declares 'it is finished' - nothing needs to be added or improved.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He's declaring creation 'complete'",
                    response:
                      "ACCURATE but secondary. The completion is indeed signaled by the rest, but the greater significance is the establishment of a pattern for human life. The Sabbath becomes a creation ordinance, built into the very fabric of reality for humanity's benefit and God's glory.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-1-perfected",
                type: "narration",
                text: "FASCINATING PREVIEW: John's Gospel begins with the exact same words - 'In the beginning' - but reveals something astonishing about who was there with God from the start. We'll explore this profound connection when we reach the New Testament!",
              },
            ],
            application: {
              id: "app-1-perfected",
              type: "reflection",
              text: "If God created everything 'very good,' why is there so much suffering and evil in the world? Does this mean creation is flawed or something went wrong?",
            },
            reflection: {
              id: "refl-1-perfected",
              type: "reflection",
              text: "You are made in God's image with inherent dignity and purpose. How does this truth change how you view yourself and treat others this week?",
            },
          },
        },
        {
          id: "lesson-genesis-2-perfected",
          sectionId: "genesis-creation-perfected",
          title: "The Creation of Man and Woman",
          description: "The crown of creation",
          scripture: "Genesis 2:4-25",
          estimatedMinutes: 15,
          order: 2,
          locked: true,
          content: {
            introduction: {
              id: "intro-2-perfected",
              type: "narration",
              text: "Have you ever received a gift so personal, so perfectly suited to you, it felt like the giver knew you better than you know yourself? Today we're looking at the most personal act of creation - the crafting of humanity. What if the details of how God made us reveal why we matter so deeply to Him?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about humanity's special creation",
                  response:
                    "Wonderful! You're about to discover some of the most intimate details of God's creative work.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand our purpose better",
                  response: "Perfect! This passage reveals not just how we were made, but why we were made.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore!",
                  response: "Excellent! Let's dive into what makes human creation unique in all of God's work.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g2-perfected",
                type: "scripture",
                text: "Notice how this account focuses specifically on humanity's creation:",
                scripture:
                  '"then the LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature." - Genesis 2:7',
              },
              {
                id: "teach-2-g2-perfected",
                type: "question",
                text: "Many people ask: If we're made from dust, does that mean we're not special? What does being 'dust + God's breath' actually mean for our value?",
                options: [
                  {
                    id: "opt-1",
                    text: "Our value comes from God's breath, not our dust",
                    response:
                      "CORRECT. The dust represents our humble origin and mortality, but God's breath gives us infinite worth. This combination shows we're both finite creatures and divine image-bearers. Our dignity doesn't come from our physical composition but from God's personal investment - His very breath making us living souls. This establishes human value as derived from God's action, not our inherent properties.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "We're both humble and exalted",
                    response:
                      "TRUE but doesn't capture the source of value. While we are indeed both humble (dust) and exalted (God's breath), the key insight is that our worth comes entirely from God's gracious act. The dust keeps us dependent; God's breath makes us valuable. The combination shows grace - God elevating the lowly.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows we need God to truly live",
                    response:
                      "IMPORTANT application but secondary. While we do need God for spiritual life, the primary point is about human identity and value. The breath of life makes us living beings with inherent dignity, not just dependent creatures. Our need for God is real, but the text emphasizes what God HAS given, not what we lack.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g2-perfected",
                type: "narration",
                text: "Now watch what happens when God places Adam in the garden...",
              },
              {
                id: "teach-4-g2-perfected",
                type: "scripture",
                text: "Humanity's first responsibility:",
                scripture:
                  '"The LORD God took the man and put him in the garden of Eden to work it and keep it." - Genesis 2:15',
              },
              {
                id: "teach-5-g2-perfected",
                type: "question",
                text: "Work is part of paradise? What does this tell us about God's design for humanity?",
                options: [
                  {
                    id: "opt-1",
                    text: "Work is inherently good, not a curse",
                    response:
                      "PARTIALLY CORRECT but incomplete. Work itself is indeed part of God's good design, but this answer doesn't capture the full purpose. Work becomes toil after the fall, but meaningful labor existed in perfection.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-2",
                    text: "We're designed for purpose and contribution",
                    response:
                      "CORRECT. This gets to the heart of God's design! Even in paradise, humans needed meaningful work and responsibility. 'Working and keeping' the garden wasn't about survival but about fulfilling our created purpose - to actively partner with God in cultivating and caring for His creation. This reflects our identity as God's image-bearers called to purposeful contribution.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "We're stewards, not owners",
                    response:
                      "IMPORTANT but secondary. While Adam was indeed a steward who 'kept' what belonged to God, this answer focuses on the 'what' rather than the 'why.' The primary revelation is that work fulfills our human need for purpose and reflects our identity as God's cooperative partners in creation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g2-perfected",
                type: "narration",
                text: "But then God makes a surprising observation...",
              },
              {
                id: "teach-7-g2-perfected",
                type: "scripture",
                text: "The first 'not good' in creation:",
                scripture:
                  '"Then the LORD God said, "It is not good that the man should be alone; I will make him a helper fit for him."" - Genesis 2:18',
              },
              {
                id: "teach-8-g2-perfected",
                type: "question",
                text: "After repeatedly calling creation 'good,' God says something is 'not good.' Why is solitude incompatible with God's design?",
                options: [
                  {
                    id: "opt-1",
                    text: "We're made for relationship",
                    response:
                      "CORRECT. As image-bearers of a relational God, we reflect His nature through community. The Trinity exists in eternal relationship, so solitude contradicts God's fundamental character expressed in humanity. Relationship isn't an add-on to human nature but essential to it. We image God not just as individuals but in our capacity for communion.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Completeness requires complementarity",
                    response:
                      "TRUE for marriage but too narrow. While male-female complementarity is important, the 'not good' applies to human solitude in general, not just the absence of marriage. Humans need various relationships - with God, with others - to flourish as God intended.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Isolation contradicts God's nature",
                    response:
                      "ACCURATE but focuses on God rather than human design. While isolation does contradict God's relational nature, the primary point is about human need. God declares solitude 'not good' for the human's sake, highlighting that relationship is essential for human flourishing, not just inconsistent with divine character.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g2-perfected",
                type: "narration",
                text: "Watch how God solves this problem in the most dramatic way...",
              },
              {
                id: "teach-10-g2-perfected",
                type: "scripture",
                text: "The creation of woman:",
                scripture:
                  '"So the LORD God caused a deep sleep to fall upon the man, and while he slept took one of his ribs and closed up its place with flesh. And the rib that the LORD God had taken from the man he made into a woman and brought her to the man." - Genesis 2:21-22',
              },
              {
                id: "teach-11-g2-perfected",
                type: "question",
                text: "Why create woman from man's rib rather than from dust like Adam?",
                options: [
                  {
                    id: "opt-1",
                    text: "To show essential unity and equality",
                    response:
                      "CORRECT. Woman shares the same substance as man, establishing their fundamental equality as image-bearers. She isn't made from inferior material or as a separate creation, but from man's very being. This demonstrates they share the same nature, dignity, and value before God. Their unity precedes their distinction.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To demonstrate intimate connection",
                    response:
                      "TRUE but secondary. While the rib suggests closeness and protection, the primary significance is ontological - they share the same essential nature. The intimacy flows FROM their fundamental equality and unity, not the other way around.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "To establish marriage as reunification",
                    response:
                      "BEAUTIFUL application but not the primary reason. While marriage does involve becoming 'one flesh' again, the creation from rib first establishes their original unity. The reunification in marriage presupposes the unity demonstrated in her creation from his side.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g2-perfected",
                type: "scripture",
                text: "Adam's poetic response:",
                scripture:
                  '"Then the man said, "This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man."" - Genesis 2:23',
              },
              {
                id: "teach-13-g2-perfected",
                type: "narration",
                text: "This is the first recorded human speech - and it's poetry celebrating relationship!",
              },
              {
                id: "teach-preview-2-perfected",
                type: "narration",
                text: "COMING ATTRACTION: This intimate picture of God forming humanity will find its ultimate expression when Jesus - called the 'last Adam' - restores what the first Adam lost. Paul develops this amazing contrast in 1 Corinthians 15!",
              },
            ],
            application: {
              id: "app-2-perfected",
              type: "reflection",
              text: "Some people argue that being made from 'dust' means humans aren't special. How does being both dust and God's breath actually give us unique value and humility?",
            },
            reflection: {
              id: "refl-2-perfected",
              type: "reflection",
              text: "God said it's 'not good' for humans to be alone. How can you intentionally build life-giving relationships that reflect God's design for community?",
            },
          },
        },
        {
          id: "lesson-genesis-3-perfected",
          sectionId: "genesis-creation-perfected",
          title: "The Fall into Sin",
          description: "Disobedience and its consequences",
          scripture: "Genesis 3:1-24",
          estimatedMinutes: 17,
          order: 3,
          locked: true,
          content: {
            introduction: {
              id: "intro-3-perfected",
              type: "narration",
              text: "Have you ever experienced that moment when a single choice changes everything? The point of no return? Today we're witnessing humanity's ultimate turning point - the moment perfection was lost. What if understanding this ancient story helps us recognize the same patterns in our own lives?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to understand the fall",
                  response: "This is a crucial story that explains so much about our world and ourselves.",
                },
                {
                  id: "opt-2",
                  text: "I've wondered why there's suffering",
                  response: "This passage provides the biblical answer to that profound question.",
                },
                {
                  id: "opt-3",
                  text: "Let's explore what went wrong",
                  response: "Perfect! Understanding the problem is the first step to appreciating the solution.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g3-perfected",
                type: "scripture",
                text: "The story begins with a subtle distortion:",
                scripture:
                  '"He said to the woman, \\"Did God actually say, \'You shall not eat of any tree in the garden\'?\\" - Genesis 3:1',
              },
              {
                id: "teach-2-g3-perfected",
                type: "question",
                text: "Many people ask: Why would God put the forbidden tree in the garden anyway? Was He setting them up to fail?",
                options: [
                  {
                    id: "opt-1",
                    text: "Love requires free choice",
                    response:
                      "CORRECT. You've identified the fundamental purpose! God created humans for genuine relationship, and authentic love cannot be forced or programmed. By placing the tree of knowledge of good and evil, God gave Adam and Eve a tangible reference point for their obedience and trust. This wasn't a 'setup for failure' but the necessary condition for their love and loyalty to be voluntary and meaningful. Without the possibility of disobedience, obedience would lack moral value. The tree defined the relationship: God as loving authority, humanity responding in faith and submission.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He wanted to test their ability to resist temptation",
                    response:
                      "NOT QUITE. While testing occurred, this perspective misses the primary purpose. God, in His omniscience, knew humanity's limitations. The command's main goal was to define the relationship's terms: God as the Lord who provides and sets boundaries, and humans as His creatures called to live in dependence and trust. The tree symbolized that trust relationship, not primarily a test of willpower or self-sufficiency.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It was necessary for the knowledge of good and evil to exist",
                    response:
                      "INCORRECT. This reverses God's original intention. The 'knowledge of good and evil' that Adam and Eve gained through disobedience was a distorted, sinful consequence of the fall, not the creation's purpose. God declared His creation 'very good' and intended humans to know good through relationship with Him, trusting His word to define what is good. The tree served as the one boundary in a world of abundance, reminding them that true wisdom begins with fearing the Lord, not moral autonomy.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g3-perfected",
                type: "narration",
                text: "Watch how Eve responds - and subtly changes God's command herself...",
              },
              {
                id: "teach-4-g3-perfected",
                type: "scripture",
                text: "Eve's modified version:",
                scripture:
                  "\"And the woman said to the serpent, 'We may eat of the fruit of the trees in the garden, but God said, 'You shall not eat of the fruit of the tree that is in the midst of the garden, neither shall you touch it, lest you die.'' - Genesis 3:2-3",
              },
              {
                id: "teach-5-g3-perfected",
                type: "question",
                text: "Eve adds 'neither shall you touch it' - something God never said. Why is this dangerous?",
                options: [
                  {
                    id: "opt-1",
                    text: "It makes God seem more restrictive than He is",
                    response:
                      "CORRECT. Adding to God's commands distorts His character and makes Him appear unreasonable. When we amplify God's restrictions beyond what He actually said, we misrepresent His goodness and create unnecessary barriers to relationship. This legalistic tendency often precedes outright disobedience, as it plants seeds of resentment toward God's boundaries.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows she's already doubting God's goodness",
                    response:
                      "TRUE but not the primary danger. The added restriction does suggest developing suspicion, but the immediate problem is the misrepresentation of God's character. By making God seem more harsh than He actually is, she creates distance in the relationship before the serpent even speaks.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates the slippery slope of compromise",
                    response:
                      "VALID observation but focuses on process rather than consequence. The slippery slope is real, but the fundamental danger is theological - misrepresenting who God is. Every distortion of God's character makes disobedience more likely.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g3-perfected",
                type: "narration",
                text: "Now the serpent moves from questioning to outright contradiction...",
              },
              {
                id: "teach-7-g3-perfected",
                type: "scripture",
                text: "The direct lie:",
                scripture:
                  "\"But the serpent said to the woman, 'You will not surely die. For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil.' - Genesis 3:4-5",
              },
              {
                id: "teach-8-g3-perfected",
                type: "question",
                text: "The serpent promises they'll 'be like God.' What's the irony here?",
                options: [
                  {
                    id: "opt-1",
                    text: "They're already made in God's image",
                    response:
                      "CORRECT. The tragic irony is that they were already like God - created in His image to represent His rule. The serpent offered what they already possessed, making them sacrifice their true godlikeness (righteous rule through obedience) for a counterfeit version (autonomous knowledge through disobedience). They lost the likeness they had while chasing a phantom.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "True godlikeness comes through obedience",
                    response:
                      "IMPORTANT truth but not the central irony. While obedience would have led to greater Christlikeness, the immediate irony is that they already possessed what was being offered. The serpent's lie was particularly deceptive because it contained just enough truth to be plausible.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The promise contains a twisted truth",
                    response:
                      "ACCURATE but misses the profound irony. Their eyes were opened, but to shame and brokenness rather than divine glory. However, the deeper irony is that the desired godlikeness was already theirs by creation - they were trading reality for illusion.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g3-perfected",
                type: "narration",
                text: "The moment of decision arrives...",
              },
              {
                id: "teach-10-g3-perfected",
                type: "scripture",
                text: "The three-fold temptation:",
                scripture:
                  '"So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate, and she also gave some to her husband who was with her, and he ate." - Genesis 3:6',
              },
              {
                id: "teach-11-g3-perfected",
                type: "question",
                text: "John later identifies these three temptations. What do they represent?",
                options: [
                  {
                    id: "opt-1",
                    text: "The lust of the flesh",
                    response:
                      "CORRECT for 'good for food.' This represents physical desires overriding spiritual obedience. When our bodily appetites dictate our choices rather than God's word, we've succumbed to the lust of the flesh. It's the temptation to prioritize immediate physical satisfaction over eternal spiritual reality.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The lust of the eyes",
                    response:
                      "CORRECT for 'delight to the eyes.' This represents being drawn by appearance over substance. When something looks appealing regardless of God's evaluation, we're tempted by visual attraction rather than spiritual discernment. It's choosing based on external appearance rather than God's declared truth.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The pride of life",
                    response:
                      "CORRECT for 'desired to make one wise.' This represents wanting autonomy from God - the pride of self-sufficiency and independent knowledge. It's the temptation to be our own authority, making decisions based on our judgment rather than God's revealed will.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g3-perfected",
                type: "narration",
                text: "Immediately, everything changes...",
              },
              {
                id: "teach-13-g3-perfected",
                type: "scripture",
                text: "The immediate consequences:",
                scripture:
                  '"Then the eyes of both were opened, and they knew that they were naked. And they sewed fig leaves together and made themselves loincloths." - Genesis 3:7',
              },
              {
                id: "teach-14-g3-perfected",
                type: "question",
                text: "Why does sin immediately produce shame?",
                options: [
                  {
                    id: "opt-1",
                    text: "Shame is the appropriate response to broken relationship",
                    response:
                      "CORRECT. Shame signals the rupture in their primary relationships - with God, with each other, and with themselves. Their openness and transparency are replaced by hiding and covering. Shame is the emotional and spiritual consequence of violating their created purpose as image-bearers living in truthful relationship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "They've become aware of their vulnerability",
                    response:
                      "TRUE but secondary. While they do feel exposed and unsafe, this is a consequence rather than the cause. The shame comes from their moral failure, not merely their physical nakedness. The vulnerability they feel reflects their new spiritual condition, not just physical awareness.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Their self-perception has been distorted",
                    response:
                      "ACCURATE but focuses on effect rather than cause. Their self-perception is indeed distorted, but the shame originates from their actual moral condition before God, not just psychological perception. The distortion is real because the relationship rupture is real.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g3-perfected",
                type: "narration",
                text: "But notice what happens when God comes looking...",
              },
              {
                id: "teach-16-g3-perfected",
                type: "scripture",
                text: "God's pursuit:",
                scripture: '"But the LORD God called to the man and said to him, \\"Where are you?\\" - Genesis 3:9',
              },
              {
                id: "teach-17-g3-perfected",
                type: "question",
                text: "God asks 'Where are you?' What does this reveal about His character?",
                options: [
                  {
                    id: "opt-1",
                    text: "He seeks the lost",
                    response:
                      "CORRECT. Despite their sin, God takes the initiative to seek them out. This reveals His gracious character as the seeking God who pursues broken relationships. Rather than waiting for them to come to Him, He comes to them, demonstrating that salvation begins with God's initiative, not human repentance.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He gives opportunity for confession",
                    response:
                      "TRUE but doesn't capture the full significance. While the question does invite confession, it primarily reveals God's heart to restore rather than condemn. His seeking them shows that judgment is His 'strange work' while redemption reflects His fundamental character.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He knows where they are but wants them to acknowledge it",
                    response:
                      "ACCURATE but focuses on pedagogy rather than character. God certainly knows their location, but the question reveals more about His desire for relationship than His teaching method. It shows He wants them to recognize their condition so restoration can begin.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g3-perfected",
                type: "narration",
                text: "The consequences unfold, but watch for the glimmer of hope...",
              },
              {
                id: "teach-19-g3-perfected",
                type: "scripture",
                text: "The first gospel promise:",
                scripture:
                  '"I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel." - Genesis 3:15',
              },
              {
                id: "teach-20-g3-perfected",
                type: "question",
                text: "This is called the 'protoevangelium' - first gospel. What makes it so significant?",
                options: [
                  {
                    id: "opt-1",
                    text: "It promises a Savior who will defeat Satan",
                    response:
                      "CORRECT. This is the first announcement of redemption! The 'offspring' who will crush the serpent's head points ultimately to Christ's victory over Satan through His death and resurrection. Even in judgment, God provides hope and reveals His plan to undo what sin has done through a coming Deliverer.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's plan for redemption begins immediately",
                    response:
                      "IMPORTANT but secondary. While redemption does begin here, the greater significance is the specific promise of a victorious offspring. The immediacy shows God's grace, but the content shows His sovereign plan to accomplish salvation through a particular person.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It reveals the cost of salvation",
                    response:
                      "TRUE but incomplete. The 'bruised heel' does hint at the suffering the Savior would endure, but the primary significance is the victory promised. The cost is real, but the emphasis is on the certain defeat of evil through the offspring.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-3-perfected",
                type: "narration",
                text: "FUTURE REVELATION: This first sin affects every one of us in ways we'll explore throughout Scripture. Paul will later explain in Romans how Adam's disobedience made us all sinners, while Christ's obedience offers us righteousness. This is just the beginning of the story!",
              },
            ],
            application: {
              id: "app-3-perfected",
              type: "reflection",
              text: "If someone genuinely repents before God but still has to face consequences for what they did, does that mean God hasn't truly forgiven them?",
            },
            reflection: {
              id: "refl-3-perfected",
              type: "reflection",
              text: "God came looking for Adam and Eve in their shame. How have you experienced God seeking you out in your moments of failure or hiding?",
            },
          },
        },
        {
          id: "lesson-genesis-4-perfected",
          sectionId: "genesis-creation-perfected",
          title: "Cain and Abel",
          description: "The first family and the first murder",
          scripture: "Genesis 4:1-26",
          estimatedMinutes: 15,
          order: 4,
          locked: true,
          content: {
            introduction: {
              id: "intro-4-perfected",
              type: "narration",
              text: "Have you ever felt the sting of rejection? Watched someone else receive what you desperately wanted? Today we're witnessing the first family drama - a story of worship, jealousy, and the tragic consequences of unchecked sin. What if this ancient conflict reveals patterns we still struggle with today?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this first family conflict",
                  response: "This story reveals so much about human nature and God's justice.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand God's response to evil",
                  response: "Perfect! This passage shows both God's justice and His mercy.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore!",
                  response: "Excellent! Let's discover what this foundational story teaches us.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g4-perfected",
                type: "scripture",
                text: "The story begins with two very different offerings:",
                scripture:
                  '"In the course of time Cain brought to the LORD an offering of the fruit of the ground, and Abel also brought of the firstborn of his flock and of their fat portions. And the LORD had regard for Abel and his offering, but for Cain and his offering he had no regard." - Genesis 4:3-5',
              },
              {
                id: "teach-2-g4-perfected",
                type: "question",
                text: "Many people wonder: Was it fair for God to reject Cain's offering? Why would God care how they worshiped?",
                options: [
                  {
                    id: "opt-1",
                    text: "God looks at the heart, not just the action",
                    response:
                      "CORRECT. Hebrews 11:4 reveals Abel offered 'by faith' - the fundamental difference was their heart attitude toward God. Cain went through religious motions while Abel approached with genuine faith and reverence. God's rejection wasn't arbitrary but exposed Cain's heart condition. Worship is primarily about the worshiper's relationship with God, not the external act itself.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Worship should cost us something",
                    response:
                      "PARTIALLY TRUE but misses the heart issue. While Abel did give his best (firstborn and fat portions), the primary distinction was faith, not merely sacrifice quality. David later understood this principle: 'I will not offer burnt offerings that cost me nothing' (1 Chronicles 21:24), but the cost matters because it expresses the heart's priority, not as a mechanical requirement.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It revealed their view of God",
                    response:
                      "ACCURATE but secondary. Their offerings did reflect their theology - Abel saw God as worthy of his best, while Cain approached God as a religious duty. However, the core issue remains the heart attitude of faith versus ritualism. The view of God flows FROM the heart condition rather than being separate from it.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g4-perfected",
                type: "narration",
                text: "Watch how God responds to Cain's anger...",
              },
              {
                id: "teach-4-g4-perfected",
                type: "scripture",
                text: "God's warning to Cain:",
                scripture:
                  '"The LORD said to Cain, \\"Why are you angry, and why has your face fallen? If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is for you, but you must rule over it.\\" - Genesis 4:6-7',
              },
              {
                id: "teach-5-g4-perfected",
                type: "question",
                text: "God describes sin as 'crouching at the door.' What does this vivid imagery teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "Sin is an active force waiting to pounce",
                    response:
                      "CORRECT. Sin isn't passive but aggressively seeks to dominate us. The crouching animal imagery shows sin's predatory nature - it waits for opportunities to attack and control. This reveals why we can't casually coexist with sin; we must actively resist it through God's power. Sin doesn't politely knock but forces entry when we lower our guard.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "We have responsibility to resist sin",
                    response:
                      "TRUE but incomplete. While we do have responsibility ('you must rule over it'), the imagery emphasizes sin's aggressive power, not just our duty. The warning shows we're in a spiritual battle against an active enemy, not merely exercising self-control. Our responsibility exists because of sin's active threat.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Anger gives sin an opening",
                    response:
                      "SPECIFIC application but not the primary lesson. While Cain's anger did create vulnerability, the imagery teaches about sin's fundamental nature, not just its connection to anger. Sin crouches at everyone's door, not only when we're angry. The warning is universal, though specific emotions may increase vulnerability.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g4-perfected",
                type: "narration",
                text: "Tragically, Cain ignores God's warning...",
              },
              {
                id: "teach-7-g4-perfected",
                type: "scripture",
                text: "The first murder:",
                scripture:
                  '"Cain spoke to Abel his brother. And when they were in the field, Cain rose up against his brother Abel and killed him." - Genesis 4:8',
              },
              {
                id: "teach-8-g4-perfected",
                type: "question",
                text: "What's significant about this being the first recorded death in Scripture?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows sin's rapid escalation",
                    response:
                      "CORRECT. In one generation, sin progresses from disobedience to deception to murder. This demonstrates sin's exponential growth when unchecked. What began as eating forbidden fruit culminates in destroying God's image-bearer. The progression reveals sin's inherently destructive nature - it never remains contained but spreads and intensifies.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reveals the ultimate cost of sin",
                    response:
                      "FOUNDATIONAL truth but not the immediate significance. While sin does lead to death, the shocking impact comes from this being MURDER - violence against God's image-bearer. The first death isn't natural but violent, showing how sin corrupts relationships and destroys what God values most.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates broken relationships",
                    response:
                      "TRUE but too general. All sin breaks relationships, but this specific death shows the ultimate relational rupture - destroying another human life. The significance isn't just broken relationship but the violent destruction of the relationship itself through murder.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g4-perfected",
                type: "narration",
                text: "God confronts Cain with a question that echoes through history...",
              },
              {
                id: "teach-10-g4-perfected",
                type: "scripture",
                text: "God's confrontation:",
                scripture:
                  '"Then the LORD said to Cain, \\"Where is Abel your brother?\\" He said, \\"I do not know; am I my brother\'s keeper?\\" - Genesis 4:9',
              },
              {
                id: "teach-11-g4-perfected",
                type: "question",
                text: "Cain's response 'am I my brother's keeper?' has become famous. What does it reveal about his heart?",
                options: [
                  {
                    id: "opt-1",
                    text: "Complete lack of responsibility",
                    response:
                      "CORRECT. Cain denies both knowledge and obligation toward his brother. This reveals a heart completely corrupted by sin - no remorse, no compassion, only self-preservation. The question challenges the fundamental principle that we ARE our brothers' keepers, reflecting sin's power to destroy natural affections and moral responsibility.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Defiance toward God's authority",
                    response:
                      "TRUE but secondary. While Cain does defy God, the deeper revelation is his complete moral breakdown. The defiance flows from a heart that has rejected its created purpose to love and protect others. He questions the basic premise of human responsibility before God.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The ultimate expression of selfishness",
                    response:
                      "ACCURATE but doesn't capture the relational dimension. Selfishness is certainly present, but the greater tragedy is the denial of brotherhood itself. Cain rejects the fundamental truth that humans are interconnected and responsible for one another's welfare.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g4-perfected",
                type: "narration",
                text: "Justice comes, but notice God's surprising mercy...",
              },
              {
                id: "teach-13-g4-perfected",
                type: "scripture",
                text: "Cain's punishment and protection:",
                scripture:
                  '"And the LORD put a mark on Cain, lest any who found him should attack him." - Genesis 4:15',
              },
              {
                id: "teach-14-g4-perfected",
                type: "question",
                text: "Why would God protect a murderer?",
                options: [
                  {
                    id: "opt-1",
                    text: "To demonstrate His mercy even in judgment",
                    response:
                      "CORRECT. God's justice doesn't cancel His compassion. The mark shows that even those under judgment remain objects of God's protective care. This reveals God's complex character - He judges sin severely yet shows mercy to sinners. His justice and mercy coexist, demonstrating that punishment isn't His primary desire but a necessary response to evil.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To preserve human life which bears God's image",
                    response:
                      "IMPORTANT principle but not the primary reason. While human life is sacred, God specifically protects Cain the murderer, not human life in general. The protection demonstrates God's sovereign right to show mercy where He chooses, not an absolute principle of preserving all life.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "To show that vengeance belongs to God",
                    response:
                      "TRUE but secondary. The protection does reserve vengeance to God, but the greater revelation is about God's character. He shows unexpected grace to the undeserving, prefiguring the gospel message that while we were sinners, Christ died for us.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g4-perfected",
                type: "narration",
                text: "The chapter ends with a glimmer of hope...",
              },
              {
                id: "teach-16-g4-perfected",
                type: "scripture",
                text: "The beginning of worship:",
                scripture: '"At that time people began to call upon the name of the LORD." - Genesis 4:26',
              },
              {
                id: "teach-17-g4-perfected",
                type: "question",
                text: "Despite the spread of sin, worship continues. What does this teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "God preserves a remnant who seek Him",
                    response:
                      "CORRECT. Even in humanity's darkest hours, God maintains a line of faithful worshipers. This pattern continues throughout Scripture - Noah, Abraham, the prophets - showing God's commitment to preserve true worship despite widespread corruption. God's purposes cannot be thwarted by human sin; He always has His witnesses.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Worship is the proper human response to God",
                    response:
                      "TRUE but doesn't explain the significance in this context. While worship is always proper, the remarkable thing here is its persistence despite overwhelming sin. The worship continues not because it's natural but because God sovereignly preserves it amid spiritual decline.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Hope persists despite human failure",
                    response:
                      "BEAUTIFUL but incomplete. Hope does persist, but specifically through maintained worship. The hope isn't general optimism but grounded in continued relationship with God through worship. God ensures the means of grace remain available even when few avail themselves.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-4-perfected",
                type: "narration",
                text: "BIBLICAL PATTERN EMERGING: This theme of acceptable vs unacceptable worship will recur throughout Scripture. From Nadab and Abihu's strange fire to Ananias and Sapphira's deception, God consistently cares about HOW we approach Him. This principle finds its ultimate expression in Jesus' teaching about worshiping 'in spirit and truth'!",
              },
            ],
            application: {
              id: "app-4-perfected",
              type: "reflection",
              text: "When God rejected Cain's offering but accepted Abel's, was He being unfair? What does this teach us about what God truly values in our worship?",
            },
            reflection: {
              id: "refl-4-perfected",
              type: "reflection",
              text: "Cain asked 'Am I my brother's keeper?' How is God calling you to take responsibility for the wellbeing of others in your sphere of influence?",
            },
          },
        },
        {
          id: "lesson-genesis-5-perfected",
          sectionId: "genesis-creation-perfected",
          title: "The Line of Seth and Noah",
          description: "Grace in the midst of wickedness",
          scripture: "Genesis 5:1-6:8",
          estimatedMinutes: 13,
          order: 5,
          locked: true,
          content: {
            introduction: {
              id: "intro-5-perfected",
              type: "narration",
              text: "Have you ever looked at your family tree and wondered about the stories behind the names? Today we're exploring one of the most significant genealogies in Scripture - a family line that carries both humanity's hope and God's judgment. What if these ancient names reveal patterns that still shape our world today?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about these genealogies",
                  response: "They're more than just names - they tell a story of God's faithfulness.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the context for Noah",
                  response: "Perfect! This sets the stage for one of Scripture's most dramatic stories.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore the family line!",
                  response: "Excellent! Let's discover what these generations reveal.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g5-perfected",
                type: "scripture",
                text: "The chapter begins by reaffirming humanity's special creation:",
                scripture:
                  '"When God created man, he made him in the likeness of God. Male and female he created them, and he blessed them and named them Man when they were created." - Genesis 5:1-2',
              },
              {
                id: "teach-2-g5-perfected",
                type: "question",
                text: "Many people ask: Why include all these names and ages? What's the point of reading 'so-and-so lived X years and died' over and over?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God keeps His promises across generations",
                    response:
                      "CORRECT. Despite the relentless 'and he died,' the line continues unbroken from Adam to Noah. This demonstrates God's faithfulness to His creation mandate and His promise of redemption. The genealogy shows God working His purposes through ordinary generations, preserving the Messianic line despite universal death and growing sin. God's plans cannot be derailed by human mortality.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It traces the Messianic line",
                    response:
                      "IMPORTANT but not the primary purpose here. While this genealogy does lead to Christ, its immediate function is to show God's faithfulness through the progression from creation to flood. The Messianic significance becomes clearer in later genealogies; here the emphasis is on continuity despite death.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It reminds us of death's reality",
                    response:
                      "TRUE but misses the redemptive context. The repeated 'and he died' does emphasize sin's universal consequence, but within the genealogy's flow, this serves to highlight God's grace in preserving the line despite death, not just to remind us of mortality.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g5-perfected",
                type: "narration",
                text: "The genealogy follows a repeated pattern, but watch for the breaks in the pattern...",
              },
              {
                id: "teach-4-g5-perfected",
                type: "scripture",
                text: "The pattern and its exception:",
                scripture:
                  '"Thus all the days that Adam lived were 930 years, and he died... Thus all the days of Enoch were 365 years. Enoch walked with God, and he was not, for God took him." - Genesis 5:5, 23-24',
              },
              {
                id: "teach-5-g5-perfected",
                type: "question",
                text: "Enoch breaks the 'and he died' pattern. What makes his life so special?",
                options: [
                  {
                    id: "opt-1",
                    text: "He 'walked with God' intimately",
                    response:
                      "CORRECT. Enoch's translation resulted from his extraordinary closeness to God. The phrase 'walked with God' denotes continuous, intimate fellowship - the same language used of Noah later. His life demonstrates that deep relationship with God transforms our earthly existence and ultimate destiny. Enoch shows what humanity was created for: unbroken communion with God.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He demonstrates God's reward for faithfulness",
                    response:
                      "TRUE but risks misunderstanding the nature of walking with God. While God did reward Enoch, the walking wasn't a means to earn reward but the essence of the relationship itself. The focus should be on the communion, not the compensation. The walking WAS the reward, and translation was the natural culmination.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He points to resurrection hope",
                    response:
                      "VALID connection but not the primary significance. While Enoch's translation does foreshadow eternal life, the immediate lesson is about the quality of life that pleases God. His walking with God in a corrupt generation demonstrates faithful living, not just future hope.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g5-perfected",
                type: "narration",
                text: "The genealogy continues to Noah, whose name means 'rest'...",
              },
              {
                id: "teach-7-g5-perfected",
                type: "scripture",
                text: "Noah's significance:",
                scripture:
                  '"Out of the ground that the LORD has cursed, this one shall bring us relief from our work and from the painful toil of our hands." - Genesis 5:29',
              },
              {
                id: "teach-8-g5-perfected",
                type: "question",
                text: "Noah's name means 'rest.' What kind of 'rest' might he bring?",
                options: [
                  {
                    id: "opt-1",
                    text: "Temporary relief through agriculture",
                    response:
                      "POSSIBLE but too limited. While Noah did introduce vineyard cultivation, the naming prophecy points beyond agricultural innovation. In the context of the curse and God's redemptive purposes, the 'rest' likely signifies something more significant than farming techniques.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-2",
                    text: "Spiritual rest from sin's curse",
                    response:
                      "CORRECT. In the context of the creation curse and growing corruption, Noah's name points toward God's provision of relief from sin's effects. While the ultimate rest comes in Christ, Noah prefigures this as one through whom God brings temporary respite and preservation. The ark itself becomes a place of 'rest' from judgment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "A foreshadowing of Christ's rest",
                    response:
                      "THEOLOGICALLY VALID but not the immediate meaning. While Matthew 11:28 connects ultimate rest to Jesus, the naming focuses on Noah's role in his generation. The Christological connection represents later revelation rather than the original context.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g5-perfected",
                type: "narration",
                text: "But as the population grows, so does the problem...",
              },
              {
                id: "teach-10-g5-perfected",
                type: "scripture",
                text: "The spread of wickedness:",
                scripture:
                  '"The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually." - Genesis 6:5',
              },
              {
                id: "teach-11-g5-perfected",
                type: "question",
                text: "Notice the comprehensive description of human corruption. What does this reveal?",
                options: [
                  {
                    id: "opt-1",
                    text: "Sin has infected every aspect of humanity",
                    response:
                      "CORRECT. The phrases 'every intention,' 'only evil,' and 'continually' show total depravity - not that everyone is as bad as possible, but that no part of human nature remains uncorrupted. This comprehensive diagnosis justifies God's severe judgment while highlighting humanity's desperate need for redemption that must come from outside ourselves.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The heart is the source of the problem",
                    response:
                      "TRUE but incomplete. While the 'thoughts of the heart' are indeed identified as the source, the emphasis is on the universality and consistency of the corruption. The problem isn't just internal but affects every expression of human life continually.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "This justifies God's coming judgment",
                    response:
                      "ACCURATE but focuses on consequence rather than condition. The description certainly justifies judgment, but its primary purpose is to reveal the depth of human corruption that makes judgment necessary. The focus is on the human condition that demands divine response.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g5-perfected",
                type: "narration",
                text: "In the midst of this darkness, one man stands out...",
              },
              {
                id: "teach-13-g5-perfected",
                type: "scripture",
                text: "Noah finds grace:",
                scripture:
                  '"But Noah found favor in the eyes of the LORD... Noah was a righteous man, blameless in his generation. Noah walked with God." - Genesis 6:8-9',
              },
              {
                id: "teach-14-g5-perfected",
                type: "question",
                text: "Noah 'found favor' - the first use of this grace language. What's significant?",
                options: [
                  {
                    id: "opt-1",
                    text: "Salvation always begins with God's initiative",
                    response:
                      "CORRECT. Noah doesn't earn favor but finds it as God's unmerited gift. This establishes the pattern for all salvation: God takes the first step toward sinners. Even Noah's righteousness (mentioned later) flows from this prior grace. The sequence is crucial: grace first, then righteous response.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Righteousness is possible by God's grace",
                    response:
                      "TRUE but secondary. While God's grace enables righteousness, the primary revelation is about initiation. Noah isn't righteous apart from grace; his righteousness is the fruit of the favor he already found. Grace precedes and produces righteousness, not vice versa.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "God preserves a remnant",
                    response:
                      "IMPORTANT theme but doesn't capture the gracious nature of the preservation. The remnant isn't preserved because they're better but because God graciously chooses to show favor. The emphasis is on God's sovereign choice, not the remnant's qualities.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-5-perfected",
                type: "narration",
                text: "GENEALOGY PATTERN DEVELOPING: Pay attention to these family lines! This genealogy from Adam to Noah establishes a pattern we'll see repeated with Abraham's family, David's line, and ultimately Jesus' genealogy. God works through specific families to accomplish His salvation purposes across history!",
              },
            ],
            application: {
              id: "app-5-perfected",
              type: "reflection",
              text: "If everyone's thoughts were 'only evil continually,' how could Noah be 'righteous'? Does this mean we're totally corrupt or can we still choose good?",
            },
            reflection: {
              id: "refl-5-perfected",
              type: "reflection",
              text: "Noah found grace amid widespread wickedness. How can you maintain your integrity and walk with God even when it seems everyone around you is compromising?",
            },
          },
        },
        {
          id: "lesson-genesis-6-perfected",
          sectionId: "genesis-creation-perfected",
          title: "The Great Flood",
          description: "Judgment and salvation",
          scripture: "Genesis 6:9-8:22",
          estimatedMinutes: 18,
          order: 6,
          locked: true,
          content: {
            introduction: {
              id: "intro-6-perfected",
              type: "narration",
              text: "Have you ever faced a task so massive it seemed impossible? A calling that required everything you had? Today we're witnessing the ultimate fresh start - a story of judgment yes, but more importantly, of salvation. What if this ancient flood reveals patterns of how God works redemption even through judgment?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to explore the flood story",
                  response: "This is one of the most dramatic and significant stories in Scripture.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand God's justice and mercy",
                  response: "Perfect! The flood reveals both aspects of God's character beautifully.",
                },
                {
                  id: "opt-3",
                  text: "Let's discover Noah's faithfulness",
                  response: "Excellent! His story teaches us about obedience in overwhelming circumstances.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g6",
                type: "scripture",
                text: "God gives Noah detailed instructions:",
                scripture:
                  '"Make yourself an ark of gopher wood. Make rooms in the ark, and cover it inside and out with pitch. This is how you are to make it..." - Genesis 6:14-15',
              },
              {
                id: "teach-2-g6",
                type: "question",
                text: "Why such specific instructions for the ark?",
                options: [
                  {
                    id: "opt-1",
                    text: "Precision matters in God's salvation plans",
                    response:
                      "CORRECT. God's way of salvation requires following His exact design. The specific dimensions, materials, and construction details show that deliverance comes on God's terms, not human ingenuity. This pattern continues throughout Scripture - whether Passover blood placement or Brazen Serpent viewing, God specifies the means of salvation, and obedience to His instructions brings deliverance.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It tests Noah's obedience in details",
                    response:
                      "TRUE but secondary. While detailed obedience is important, the primary significance is theological: salvation comes through God's prescribed means. The testing aspect is real but serves the greater purpose of establishing that God designs the ark of salvation.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It ensures the ark's survival",
                    response:
                      "PRACTICAL but misses the spiritual dimension. While the design was certainly seaworthy, the greater lesson is about trusting God's wisdom even when we don't understand the reasons. The specifications teach dependence on God's knowledge rather than human engineering.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g6",
                type: "narration",
                text: "Imagine building this massive project while everyone else continues life as normal...",
              },
              {
                id: "teach-4-g6",
                type: "scripture",
                text: "Noah's complete obedience:",
                scripture: '"Noah did this; he did all that God commanded him." - Genesis 6:22',
              },
              {
                id: "teach-5-g6",
                type: "question",
                text: "This simple statement is profound. What does it reveal about Noah?",
                options: [
                  {
                    id: "opt-1",
                    text: "Complete trust in God's word",
                    response:
                      "CORRECT. Noah believed God's warning about something never before seen - a worldwide flood. His obedience demonstrates extraordinary faith in God's word over visible reality. While everyone else lived normally, Noah acted on divine revelation rather than human experience. This is the essence of biblical faith: acting on God's word regardless of circumstances.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Obedience without understanding everything",
                    response:
                      "TRUE but doesn't capture the faith dimension. While Noah certainly didn't understand all the details, the key was his trust in God's character and word. The obedience flowed from confidence in the Speaker, not just mechanical compliance with instructions.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Faith demonstrated through action",
                    response:
                      "ACCURATE but focuses on the demonstration rather than the source. The actions certainly demonstrated faith, but the profound reality was the faith itself - complete reliance on God's word that motivated massive, costly obedience over decades.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g6",
                type: "narration",
                text: "The day finally arrives when God shuts the door...",
              },
              {
                id: "teach-7-g6",
                type: "scripture",
                text: "God's protective action:",
                scripture: '"And the LORD shut him in." - Genesis 7:16',
              },
              {
                id: "teach-8-g6",
                type: "question",
                text: "Why is it significant that God Himself shuts the door?",
                options: [
                  {
                    id: "opt-1",
                    text: "Salvation is ultimately God's work",
                    response:
                      "CORRECT. While Noah built the ark according to God's instructions, final security comes from God's action. This demonstrates that salvation, from beginning to end, is God's work. We participate through obedience, but He secures our safety. The closed door signifies that God alone determines who is safe from judgment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's personal care",
                    response:
                      "BEAUTIFUL but secondary. While God's care is evident, the primary significance is theological: God actively secures those who take refuge in His provision. The personal touch demonstrates His direct involvement in salvation, not just general oversight.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It marks the point of no return",
                    response:
                      "TRUE but focuses on the consequence rather than the Actor. The finality is important, but the greater truth is WHO effects that finality. God Himself closing the door emphasizes His sovereign control over salvation and judgment.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g6",
                type: "narration",
                text: "The flood waters rise, and creation returns to its pre-creation state...",
              },
              {
                id: "teach-10-g6",
                type: "scripture",
                text: "The extent of the flood:",
                scripture:
                  '"And the waters prevailed so mightily on the earth that all the high mountains under the whole heaven were covered." - Genesis 7:19',
              },
              {
                id: "teach-11-g6",
                type: "question",
                text: "The language emphasizes the flood's universality. Why is this important?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows the comprehensive nature of God's judgment",
                    response:
                      "CORRECT. The flood's universal scope matches the universal extent of human corruption. Just as sin infected all creation, judgment reaches all creation. This demonstrates God's thorough dealing with evil - no corner of corrupted creation escapes His righteous assessment. The completeness of judgment highlights the seriousness of sin.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates God's sovereignty over nature",
                    response:
                      "TRUE but secondary. While God's control over creation is evident, the primary point is the moral dimension: judgment matches the extent of the offense. The sovereignty serves justice, not just displays power.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It highlights the completeness of salvation",
                    response:
                      "VALID perspective but not the main emphasis here. Those in the ark were completely safe, but the universal language primarily serves to show the thoroughness of judgment. The salvation's completeness is wonderful, but the context emphasizes judgment's comprehensiveness.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g6",
                type: "narration",
                text: "After the destruction comes the waiting, and then the signs of new life...",
              },
              {
                id: "teach-13-g6",
                type: "scripture",
                text: "The dove and the olive leaf:",
                scripture:
                  '"And the dove came back to him in the evening, and behold, in her mouth was a freshly plucked olive leaf. So Noah knew that the waters had subsided from the earth." - Genesis 8:11',
              },
              {
                id: "teach-14-g6",
                type: "question",
                text: "Why has the olive leaf become such a powerful symbol?",
                options: [
                  {
                    id: "opt-1",
                    text: "It represents new life after judgment",
                    response:
                      "CORRECT. The fresh olive leaf signals life emerging from the waters of death - creation renewing after judgment. This becomes a powerful symbol of hope, restoration, and new beginnings throughout Scripture. Just as creation was reborn after the flood, God continually brings life from death, hope from despair.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It signals God's peace and restoration",
                    response:
                      "TRUE but more specific than the primary symbolism. While peace is certainly implied, the olive branch specifically represents the end of judgment and the beginning of new creation. The peace comes through the passing of judgment and the emergence of new life.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God's care for His creation",
                    response:
                      "ACCURATE but too general. God's care is evident throughout, but the olive leaf specifically symbolizes the transition from judgment to renewal. It's not just general care but particular evidence that the world is becoming habitable again.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g6",
                type: "narration",
                text: "Finally, the moment comes to leave the ark...",
              },
              {
                id: "teach-16-g6",
                type: "scripture",
                text: "Noah's first act on dry land:",
                scripture:
                  '"Then Noah built an altar to the LORD and took some of every clean animal and some of every clean bird and offered burnt offerings on the altar." - Genesis 8:20',
              },
              {
                id: "teach-17-g6",
                type: "question",
                text: "Why does Noah's first act involve sacrifice?",
                options: [
                  {
                    id: "opt-1",
                    text: "Worship is the proper response to salvation",
                    response:
                      "CORRECT. Having been saved from judgment, Noah's immediate response is worship. This pattern continues throughout Scripture - redemption should lead to worship. The sacrifice acknowledges God as the source of deliverance and expresses gratitude for preservation. True salvation always produces worship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It acknowledges continued need for atonement",
                    response:
                      "THEOLOGICALLY IMPORTANT but not the primary reason. While blood atonement remains necessary, the context emphasizes thanksgiving worship. The salvation from floodwaters doesn't remove sin's guilt, but the sacrifice here functions primarily as worshipful response to deliverance.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates gratitude",
                    response:
                      "TRUE but incomplete. Gratitude is certainly involved, but the act of sacrifice constitutes formal worship, not just personal thanksgiving. The burnt offering represents complete dedication to God in response to His salvation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g6",
                type: "narration",
                text: "God responds to Noah's worship with a profound promise...",
              },
              {
                id: "teach-19-g6",
                type: "scripture",
                text: "The Noahic Covenant:",
                scripture:
                  '"I establish my covenant with you, that never again shall all flesh be cut off by the waters of the flood, and never again shall there be a flood to destroy the earth." - Genesis 9:11',
              },
              {
                id: "teach-20-g6",
                type: "question",
                text: "What's significant about God making a covenant with all creation?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God's commitment to His creation",
                    response:
                      "CORRECT. Despite humanity's persistent sin, God binds Himself to preserve the natural order. This demonstrates His commitment to the world He made, not just to human redemption. The cosmic scope shows God's faithfulness extends beyond His dealings with people to His entire creation project.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reveals God's gracious restraint",
                    response:
                      "TRUE but focuses on what God won't do rather than His positive commitment. The restraint is real, but the covenant primarily establishes God's positive promise to maintain creation's stability, not just limit judgment.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It points toward ultimate redemption",
                    response:
                      "VALID connection but not the immediate significance. While the preservation covenant anticipates final redemption, its primary function is to ensure earthly stability until that redemption comes. The promise concerns preservation, not yet transformation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g6",
                type: "scripture",
                text: "The sign of the covenant:",
                scripture:
                  '"I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth." - Genesis 9:13',
              },
              {
                id: "teach-22-g6",
                type: "narration",
                text: "The rainbow - a weapon of war (bow) laid aside in the clouds - becomes a sign of peace.",
              },
              {
                id: "teach-preview-6-perfected",
                type: "narration",
                text: "FLOOD FORESHADOWING: This massive cleansing by water points forward to an even greater salvation! Peter will later compare the flood waters to baptism, and the ark to Christ who saves us from coming judgment. The patterns of salvation are being established!",
              },
            ],
            application: {
              id: "app-6-perfected",
              type: "reflection",
              text: "How can a loving God justify destroying almost all humanity in the flood? Does this conflict with His character of mercy and compassion?",
            },
            reflection: {
              id: "refl-6-perfected",
              type: "reflection",
              text: "Noah obeyed God in building something that seemed absurd. Where is God calling you to faithful obedience even when it doesn't make sense to others?",
            },
          },
        },
      ],
    },
  ],
}
