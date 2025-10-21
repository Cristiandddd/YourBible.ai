import type { LessonBook } from "./types"

export const GENESIS_LESSONS_7_12: LessonBook = {
  id: "genesis-7-12-perfected",
  religion: "christianity",
  title: "Genesis - New Beginnings",
  description: "From the Flood to the Call of Abram",
  icon: "🕊️",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-new-beginnings-perfected",
      bookId: "genesis",
      title: "New Beginnings",
      description: "From the Flood to the call of Abram",
      order: 2,
      lessons: [
        {
          id: "lesson-genesis-7-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Covenant with Noah",
          description: "Promises and a new humanity",
          scripture: "Genesis 9:1-17",
          estimatedMinutes: 16,
          order: 7,
          locked: true,
          content: {
            introduction: {
              id: "intro-7-perfected",
              type: "narration",
              text: "Have you ever made a promise so serious you put up a visible reminder? A marker that said 'I will never go back on my word'? Today we're witnessing God making the first formal covenant with humanity - a promise sealed with the most beautiful sign imaginable. What if this ancient promise still speaks to our deepest fears about the world?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about God's promises",
                  response: "Wonderful! This covenant reveals foundational truths about God's character.",
                },
                {
                  id: "opt-2",
                  text: "I've wondered about the rainbow's meaning",
                  response: "Perfect! You're about to discover its profound theological significance.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this new beginning!",
                  response: "Excellent! Let's see how God establishes order after the flood.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g7-perfected",
                type: "scripture",
                text: "God begins by reaffirming human dignity but with a sober reality:",
                scripture:
                  '"And you, be fruitful and multiply, teem on the earth and multiply in it." And God said to Noah, "Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image." - Genesis 9:1, 6',
              },
              {
                id: "teach-2-g7-perfected",
                type: "question",
                text: "Capital punishment is instituted here. Why does being made in God's image matter for how we treat human life?",
                options: [
                  {
                    id: "opt-1",
                    text: "Human life has sacred worth because it bears God's image",
                    response:
                      "CORRECT. The penalty for murder reflects the supreme value of what was violated - God's image in humanity. This establishes the infinite worth of human life, not based on achievement or status, but on our creation as God's image-bearers. The severe penalty protects human dignity by treating attacks on people as attacks on God's representative.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes human government to restrain evil",
                    response:
                      "TRUE but secondary. While human government is instituted here, the foundational reason is theological: the sanctity of God's image. Government's role flows FROM the value of human life, not vice versa. The image-bearing dignity establishes WHY government must protect life.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God takes violence against His image-bearers seriously",
                    response:
                      "ACCURATE but focuses on God's response rather than human value. While God certainly takes violence seriously, the key insight is WHY He takes it seriously - because humans carry His image. The seriousness derives from the value of what is attacked.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g7-perfected",
                type: "narration",
                text: "Then God does something remarkable - He makes a covenant not just with Noah, but with all creation...",
              },
              {
                id: "teach-4-g7-perfected",
                type: "scripture",
                text: "The universal covenant:",
                scripture:
                  '"Behold, I establish my covenant with you and your offspring after you, and with every living creature that is with you... that never again shall all flesh be cut off by the waters of the flood." - Genesis 9:9-11',
              },
              {
                id: "teach-5-g7-perfected",
                type: "question",
                text: "Why would God make a covenant with animals? What does this reveal about His care for creation?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's compassion extends to all He made",
                    response:
                      "CORRECT. The Noahic Covenant demonstrates God's commitment to His entire creation, not just humanity. Animals share in both judgment and preservation, showing God's concern for all living creatures. This reveals His comprehensive lordship and care - He values what He has made, not just rational beings. The covenant includes 'every living creature' multiple times for emphasis.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows creation's intrinsic value to God",
                    response:
                      "TRUE but doesn't capture the covenantal dimension. While creation has value, the significant development is God binding Himself by covenant to preserve it. The value leads to commitment, but the covenant itself represents a new level of divine promise.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates the scope of God's redemptive plans",
                    response:
                      "VALID but premature. While Romans 8 shows creation's ultimate redemption, this covenant concerns preservation, not redemption. The scope is universal but the content is about maintaining creation's stability, not yet its transformation.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g7-perfected",
                type: "narration",
                text: "Now comes the sign - one of the most beautiful symbols in all of Scripture...",
              },
              {
                id: "teach-7-g7-perfected",
                type: "scripture",
                text: "The rainbow covenant:",
                scripture:
                  '"I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth." - Genesis 9:13',
              },
              {
                id: "teach-8-g7-perfected",
                type: "question",
                text: "The word 'bow' here is the same as a warrior's bow. What's significant about God hanging His 'weapon' in the sky?",
                options: [
                  {
                    id: "opt-1",
                    text: "God is declaring peace with creation",
                    response:
                      "CORRECT. The rainbow represents God's war bow laid aside, signaling ceasefire with the earth. This powerful imagery shows God's commitment to peace despite humanity's continued sinfulness. The bow pointed away from earth signifies God's restraint and gracious commitment to preserve rather than destroy. It's a divine armistice agreement.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It's a divine ceasefire agreement",
                    response:
                      "ACCURATE but redundant with the correct answer. This essentially repeats the primary insight about peace declaration without adding new understanding.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God's self-restraint",
                    response:
                      "TRUE but focuses on God's action rather than the relationship. The restraint is evident, but the bow imagery specifically signifies peace establishment, not just personal discipline. The visual symbol communicates the new relationship status.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g7-perfected",
                type: "narration",
                text: "But notice who this sign is really for...",
              },
              {
                id: "teach-10-g7-perfected",
                type: "scripture",
                text: "The sign's purpose:",
                scripture:
                  '"When I bring clouds over the earth and the bow is seen in the clouds, I will remember my covenant..." - Genesis 9:14-15',
              },
              {
                id: "teach-11-g7-perfected",
                type: "question",
                text: "God says 'I will remember' - does God need reminders? What's really happening here?",
                options: [
                  {
                    id: "opt-1",
                    text: "It reveals God's relational commitment to us",
                    response:
                      "CORRECT. God condescends to speak in human terms we can understand, describing His faithfulness in language of remembrance. This doesn't imply divine forgetfulness but emphasizes God's deliberate attention to His promises. The language assures us of God's reliable commitment, using concepts that communicate certainty to finite minds.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It's for our assurance, not His memory",
                    response:
                      "TRUE but doesn't capture the relational dimension. While assurance is certainly provided, the deeper significance is God's accommodation to our need for concrete expressions of His faithfulness. He establishes visible reminders because WE need them.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God's faithfulness to His word",
                    response:
                      "ACCURATE but incomplete. God's faithfulness is demonstrated, but the 'remembering' language specifically shows how He relates to us in ways we can comprehend. The faithfulness is expressed through committed attention to His covenant.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-7-perfected",
                type: "narration",
                text: "COVENANT PATTERN BEGINNING: This is the first of several major covenants well explore. Each one reveals more of God's character and His unfolding plan of redemption. The ultimate covenant, of course, will be established through Jesus blood - the final assurance of God's commitment to save!",
              },
            ],
            application: {
              id: "app-7-perfected",
              type: "reflection",
              text: "If God promised never to flood the earth again, how do we reconcile this with the biblical teaching about final judgment? Does God's patience mean He's given up on justice?",
            },
            reflection: {
              id: "refl-7-perfected",
              type: "reflection",
              text: "The rainbow reminds God of His promise. What tangible reminders can you create to remember God's faithfulness in your own life when you face storms?",
            },
          },
        },
        {
          id: "lesson-genesis-8-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "Noah and His Sons",
          description: "Blessing and curse",
          scripture: "Genesis 9:18-29",
          estimatedMinutes: 15,
          order: 8,
          locked: true,
          content: {
            introduction: {
              id: "intro-8-perfected",
              type: "narration",
              text: "Have you ever seen a hero stumble? Someone you deeply respected make a mistake that changed everything? Today we're witnessing the sobering reality that salvation doesn't erase human weakness. What if Noah's failure reveals crucial truths about grace, dignity, and the generational impact of our choices?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about what happened to Noah",
                  response: "This is a crucial story about the complexity of human nature after salvation.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the blessing and curse",
                  response: "Perfect! This passage has been misunderstood but contains profound wisdom.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this difficult text",
                  response: "Excellent! Let's approach this with care and seek its deeper meaning.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g8-perfected",
                type: "scripture",
                text: "The story begins with Noah's new beginning in farming:",
                scripture:
                  '"Noah began to be a man of the soil, and he planted a vineyard. He drank of the wine and became drunk and lay uncovered in his tent." - Genesis 9:20-21',
              },
              {
                id: "teach-2-g8-perfected",
                type: "question",
                text: "Many people ask: Why include this embarrassing story about Noah? What purpose does it serve?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows even the righteous struggle with sin",
                    response:
                      "CORRECT. This sobering account demonstrates that salvation from judgment doesn't mean sinless perfection. Noah, who 'walked with God' and was preserved through the flood, still falls into sin. This prevents idealizing biblical heroes and shows our constant need for grace. Even the most faithful remain vulnerable to temptation and failure.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates the ongoing effects of the fall",
                    response:
                      "TRUE but too general. While the fall's effects are evident, the specific lesson is about individual responsibility amid grace. Noah's failure shows that redemption doesn't automatically eradicate indwelling sin; spiritual vigilance remains necessary.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares us for the need for greater salvation",
                    response:
                      "THEOLOGICALLY VALID but not the primary purpose. While Noah points to our need for a perfect Savior, the immediate lesson concerns the realism of spiritual warfare and the danger of complacency after great victories.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g8-perfected",
                type: "narration",
                text: "The situation escalates when Ham discovers his father's shame...",
              },
              {
                id: "teach-4-g8-perfected",
                type: "scripture",
                text: "Contrasting responses:",
                scripture:
                  '"And Ham saw the nakedness of his father and told his two brothers outside. Then Shem and Japheth took a garment and walked backward and covered their father. Their faces were turned backward, and they did not see their father\'s nakedness." - Genesis 9:22-23',
              },
              {
                id: "teach-5-g8-perfected",
                type: "question",
                text: "Why was Ham's response so serious? What's the difference between 'seeing' and 'covering' shame?",
                options: [
                  {
                    id: "opt-1",
                    text: "Ham dishonored his father by exposing his weakness",
                    response:
                      "CORRECT. Ham's sin wasn't merely seeing his father's condition but publicly exposing Noah's shame rather than protecting his dignity. In ancient honor-shame cultures (and in God's perspective), exploiting another's vulnerability constitutes serious dishonor. Shem and Japheth demonstrate the righteous response: covering shame while avoiding further exposure.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Shem and Japheth showed honor and discretion",
                    response:
                      "TRUE but describes the righteous response rather than analyzing Ham's sin. While their actions model proper behavior, the question focuses on what made Ham's actions particularly wrong.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It reveals character in moments of vulnerability",
                    response:
                      "VALID observation but doesn't specify the nature of Ham's failure. The character revelation is evident, but the specific failure was dishonoring his father through exposure rather than protection.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g8-perfected",
                type: "narration",
                text: "When Noah awakens, he pronounces prophetic blessings and curses...",
              },
              {
                id: "teach-7-g8-perfected",
                type: "scripture",
                text: "Noah's prophecy:",
                scripture:
                  '"Cursed be Canaan; a servant of servants shall he be to his brothers." And he said, "Blessed be the LORD, the God of Shem; and let Canaan be his servant. May God enlarge Japheth, and let him dwell in the tents of Shem, and let Canaan be his servant." - Genesis 9:25-27',
              },
              {
                id: "teach-8-g8-perfected",
                type: "question",
                text: "This passage has been tragically misused to justify slavery. What's actually happening here?",
                options: [
                  {
                    id: "opt-1",
                    text: "It's prophetic, not prescriptive",
                    response:
                      "CORRECT. Noah's words predict future relationships between peoples, not establish moral law or social policy. The 'curse' on Canaan describes what will happen, not what should happen. Using this text to justify slavery or racism fundamentally misunderstands its genre and purpose - it's descriptive prophecy, not normative ethics.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reflects ancient Near Eastern family dynamics",
                    response:
                      "TRUE but inadequate. While ancient family structures inform the context, this doesn't address the misuse issue. The primary correction needed is recognizing the difference between prediction and prescription.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The focus is spiritual, not racial",
                    response:
                      "IMPORTANT clarification but secondary. While the blessings are spiritual (especially for Shem), the fundamental hermeneutical issue is genre: this is prophecy, not legislation. The spiritual focus is real but doesn't directly address the slavery justification error.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g8-perfected",
                type: "narration",
                text: "Notice the profound spiritual significance in Shem's blessing...",
              },
              {
                id: "teach-10-g8-perfected",
                type: "scripture",
                text: "The Messianic line established:",
                scripture: '"Blessed be the LORD, the God of Shem..." - Genesis 9:26',
              },
              {
                id: "teach-11-g8-perfected",
                type: "question",
                text: "Why is Shem's blessing so significant for redemptive history?",
                options: [
                  {
                    id: "opt-1",
                    text: "The Messiah will come through Shem's line",
                    response:
                      "CORRECT. Shem's blessing establishes his line as the channel for God's redemptive purposes. Abraham, David, and ultimately Jesus all descend from Shem. The specific blessing - 'Blessed be the LORD, the God of Shem' - identifies Yahweh as Shem's God in a special way, setting apart his descendants for covenant relationship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It identifies Shem's God as the true LORD",
                    response:
                      "TRUE but doesn't capture the historical significance. While Yahweh is identified as Shem's God, the crucial development is that this relationship becomes the means for blessing all nations through the Messianic line.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Japheth will benefit from Shem's spiritual blessing",
                    response:
                      "ACCURATE but secondary. Japheth dwelling in Shem's tents does show Gentiles sharing spiritual blessings, but the primary significance is Shem's role as the bearer of covenant promises leading to Christ.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-8-perfected",
                type: "narration",
                text: "PATTERN OF GRACE: Even in failure, God's purposes advance. Noah's sin doesn't derail God's plan - in fact, the Messianic line becomes clearer. This pattern continues throughout Scripture: God works through flawed people to accomplish His perfect will!",
              },
            ],
            application: {
              id: "app-8-perfected",
              type: "reflection",
              text: "If Noah - who walked with God and was saved from judgment - could still fall so dramatically, what does this teach us about spiritual pride and ongoing dependence on God's grace?",
            },
            reflection: {
              id: "refl-8-perfected",
              type: "reflection",
              text: "How can you be someone who 'covers' rather than exposes the weaknesses of others, reflecting God's grace in how you handle human frailty?",
            },
          },
        },
        {
          id: "lesson-genesis-9-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Nations of the Earth",
          description: "The descendants of Noah",
          scripture: "Genesis 10:1-32",
          estimatedMinutes: 14,
          order: 9,
          locked: true,
          content: {
            introduction: {
              id: "intro-9-perfected",
              type: "narration",
              text: "Have you ever looked at a world map and wondered how we got here? How seventy nations emerged from one family? Today we're exploring the Table of Nations - what some call the most accurate ancient ethnological record ever written. What if these names reveal God's heart for every people group on earth?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about these genealogies",
                  response: "They're far more than a list - they reveal God's global plans.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand where nations came from",
                  response: "Perfect! This chapter provides the biblical framework for human diversity.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore the family tree!",
                  response: "Excellent! Let's trace the branches from Noah's three sons.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g9-perfected",
                type: "scripture",
                text: "The chapter begins by establishing the scope:",
                scripture:
                  '"These are the generations of the sons of Noah: Shem, Ham, and Japheth. Sons were born to them after the flood." - Genesis 10:1',
              },
              {
                id: "teach-2-g9-perfected",
                type: "question",
                text: "Many people ask: Why spend a whole chapter on names we can't pronounce? What's the spiritual significance?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God's faithfulness to the creation mandate",
                    response:
                      "CORRECT. The Table of Nations demonstrates God's blessing on the command to 'be fruitful and multiply' being fulfilled through specific people and places. Despite the flood's judgment, God's creation purposes continue uninterrupted. Each name represents God's faithfulness to His world-populating plan and His sovereign direction of human history.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates God's interest in all peoples",
                    response:
                      "TRUE but doesn't capture the historical-redemptive significance. While God cares for all nations, the specific purpose here is to show how God's blessing spreads through Noah's family to populate the earth, setting the stage for Abraham's call from among these nations.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It provides the context for redemption history",
                    response:
                      "ACCURATE but vague. The nations table does provide context, but specifically it shows the fulfillment of creation blessing and the platform from which God will call one man to bless all these families.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g9-perfected",
                type: "narration",
                text: "The genealogy follows a deliberate structure, tracing the lines of Japheth, Ham, and Shem...",
              },
              {
                id: "teach-4-g9-perfected",
                type: "scripture",
                text: "The Japhethites - distant coastlands:",
                scripture:
                  '"The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras..." From these the coastland peoples spread in their lands, each with his own language, by their clans, in their nations." - Genesis 10:2, 5',
              },
              {
                id: "teach-5-g9-perfected",
                type: "question",
                text: "Japheth's descendants generally settled in what became Europe and Asia Minor. What does their mention first suggest?",
                options: [
                  {
                    id: "opt-1",
                    text: "They were geographically most distant from Israel",
                    response:
                      "CORRECT. The genealogy moves from farthest (Japheth) to nearest (Shem) from Israel's perspective. This geographical arrangement shows the narrative's focus narrowing toward the promised land and Abraham's family. The structure serves the redemptive historical purpose by moving from periphery to center.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's global perspective",
                    response:
                      "TRUE but doesn't explain the specific order. While God certainly has a global perspective, the sequencing serves a literary and theological purpose in preparing for Abraham's call from among the nations.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares for 'dwelling in Shem's tents'",
                    response:
                      "VALID connection but not the organizational principle. The dwelling in Shem's tents is mentioned later, but the genealogical order follows geographical rather than thematic logic.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g9-perfected",
                type: "narration",
                text: "Next comes Ham's line, which includes both great civilizations and great conflicts...",
              },
              {
                id: "teach-7-g9-perfected",
                type: "scripture",
                text: "Nimrod the mighty hunter:",
                scripture:
                  '"Cush fathered Nimrod; he was the first on earth to be a mighty man. He began to be a mighty hunter before the LORD." - Genesis 10:8-9',
              },
              {
                id: "teach-8-g9-perfected",
                type: "question",
                text: "Nimrod founded Babylon and Assyria - empires that would later oppress Israel. What might 'mighty hunter before the LORD' imply?",
                options: [
                  {
                    id: "opt-1",
                    text: "He established human empires opposed to God",
                    response:
                      "CORRECT. Nimrod represents the rise of human civilization organizing itself against God's rule. His 'hunting' may symbolize hunting men or defying divine authority. The cities he founded (Babel, Nineveh) become centers of human pride and opposition to God's purposes. He embodies humanity's attempt at autonomous greatness apart from God.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He represents human power without God",
                    response:
                      "TRUE but doesn't capture the oppositional dimension. Nimrod's power isn't just godless but actively sets itself against God's rule, as seen in the Tower of Babel narrative that immediately follows.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It foreshadows the tower of Babel",
                    response:
                      "ACCURATE but limited. While Nimrod's kingdom leads to Babel, the description reveals a pattern of human arrogance that transcends that single event. He represents the spirit of autonomous human achievement that characterizes godless civilization.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g9-perfected",
                type: "narration",
                text: "Finally, we come to Shem's line - but notice something unusual...",
              },
              {
                id: "teach-10-g9-perfected",
                type: "scripture",
                text: "Shem's genealogy interrupted:",
                scripture:
                  '"To Shem also, the father of all the children of Eber, the elder brother of Japheth, children were born." - Genesis 10:21',
              },
              {
                id: "teach-11-g9-perfected",
                type: "question",
                text: "Eber (from whom 'Hebrew' comes) gets special mention. Why pause the genealogy for him?",
                options: [
                  {
                    id: "opt-1",
                    text: "He's the ancestor of Abraham and the Hebrew people",
                    response:
                      "CORRECT. Eber's highlighting signals the line through which God's redemptive purposes will advance. As the namesake of the Hebrews, he represents the transition to the chosen line. This selective emphasis shows God's sovereign election at work within the broader spread of nations - particularizing His blessing for universal purposes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It highlights the chosen line for redemption",
                    response:
                      "TRUE but redundant with the correct answer. This essentially rephrases the primary point without adding new insight.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares for the call of Abram",
                    response:
                      "ACCURATE but focuses on narrative function rather than theological significance. While it does prepare for Abram, the deeper significance is God's election of a particular line within humanity for redemptive purposes.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g9-perfected",
                type: "narration",
                text: "The chapter concludes with a summary that sets the stage for what's coming...",
              },
              {
                id: "teach-13-g9-perfected",
                type: "scripture",
                text: "The unified world:",
                scripture:
                  '"These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood." - Genesis 10:32',
              },
              {
                id: "teach-14-g9-perfected",
                type: "question",
                text: "Everyone is still together at this point. What's significant about this unity before Babel?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows the potential for human collaboration",
                    response:
                      "CORRECT. Unified humanity possesses tremendous power for collective action, which can be used for good or evil. The concentration of human potential sets the stage for the Babel incident, where unity becomes dangerous when directed against God. This demonstrates why diversity and distribution are part of God's wise design for human flourishing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sets up the contrast with what follows",
                    response:
                      "TRUE but focuses on literary technique rather than theological insight. While the contrast with Babel is important, the primary lesson concerns the ambiguous potential of human unity apart from God.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's blessing on multiplication",
                    response:
                      "ACCURATE but misses the ominous undertone. While multiplication is part of God's blessing, the unified concentration creates the conditions for the prideful collective action that follows.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-9-perfected",
                type: "narration",
                text: "MISSION FORESHADOWED: This table of nations becomes incredibly significant later! The Great Commission in Matthew 28 essentially says 'Now go back to all these nations with the gospel.' The genealogy in Luke 3 will even trace Jesus back to Adam, showing God's heart for every people group listed here!",
              },
            ],
            application: {
              id: "app-9-perfected",
              type: "reflection",
              text: "If all nations come from one family, how should this truth shape our view of racial diversity, national conflicts, and the gospel's claim to be for 'every tribe and tongue and people and nation'?",
            },
            reflection: {
              id: "refl-9-perfected",
              type: "reflection",
              text: "Your name is part of God's story too. How does seeing yourself as part of God's global family change how you pray for and engage with people from different nations and cultures?",
            },
          },
        },
        {
          id: "lesson-genesis-10-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Tower of Babel",
          description: "Human pride and divine judgment",
          scripture: "Genesis 11:1-9",
          estimatedMinutes: 16,
          order: 10,
          locked: true,
          content: {
            introduction: {
              id: "intro-10-perfected",
              type: "narration",
              text: "Have you ever been part of a project that started with noble intentions but slowly became about making a name for yourself? Today we're witnessing humanity's first organized attempt at utopia - a tower reaching to heaven. What if this ancient story diagnoses the root problem of every human civilization since?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about the tower's meaning",
                  response: "This story reveals profound truths about human nature and God's intervention.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand why God confused languages",
                  response: "Perfect! This judgment actually reveals God's mercy in disguise.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore Babel!",
                  response: "Excellent! Let's discover what really happened on that plain.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g10-perfected",
                type: "scripture",
                text: "The story begins with technological unity:",
                scripture:
                  '"And the whole earth had one language and the same words. And they found a plain in the land of Shinar and settled there." - Genesis 11:1-2',
              },
              {
                id: "teach-2-g10-perfected",
                type: "question",
                text: "Unity sounds good initially. What's potentially dangerous about complete human uniformity?",
                options: [
                  {
                    id: "opt-1",
                    text: "Unity without God leads to collective rebellion",
                    response:
                      "CORRECT. Combined human power can become a vehicle for organized opposition to God's purposes. When unity isn't centered on God, it easily turns into collective pride and self-sufficiency. The Babel incident shows how technological and linguistic unity, divorced from divine allegiance, becomes a threat to God's creation order and human destiny.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It contradicts the creation mandate to spread out",
                    response:
                      "TRUE but focuses on disobedience rather than the danger. While they are disobeying the creation mandate, the greater threat is the concentrated power this unity creates for opposing God's rule.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Human potential needs divine direction",
                    response:
                      "VALID principle but doesn't specify the Babel situation. While human potential does need direction, the specific danger here is collective rebellion enabled by technological and linguistic unity.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g10-perfected",
                type: "narration",
                text: "Then comes their famous proposal...",
              },
              {
                id: "teach-4-g10-perfected",
                type: "scripture",
                text: "The human agenda:",
                scripture:
                  '"Then they said, "Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth."" - Genesis 11:4',
              },
              {
                id: "teach-5-g10-perfected",
                type: "question",
                text: "Three key phrases reveal their heart: 'make a name for ourselves,' 'top in the heavens,' 'lest we be dispersed.' What's wrong with each?",
                options: [
                  {
                    id: "opt-1",
                    text: "They sought fame rather than God's glory",
                    response:
                      "CORRECT for 'make a name for ourselves.' This represents autonomous glory-seeking rather than receiving identity from God. They want to establish their own reputation independent of God's assessment, reversing the proper order where God names His creation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "They tried to reach heaven on their terms",
                    response:
                      "CORRECT for 'top in the heavens.' This represents salvation by human achievement rather than divine grace. They attempt to storm heaven through technology and collective effort instead of waiting for God's provision.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "They resisted God's command to fill the earth",
                    response:
                      "CORRECT for 'lest we be dispersed.' This represents fear of obedience and desire for self-preservation over trust in God's wisdom. They prioritize security through concentration over faithful scattering as God commanded.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g10-perfected",
                type: "narration",
                text: "God comes down to see what they're building - the irony is profound...",
              },
              {
                id: "teach-7-g10-perfected",
                type: "scripture",
                text: "God's assessment:",
                scripture:
                  '"And the LORD said, "Behold, they are one people, and they have all one language, and this is only the beginning of what they will do. And nothing that they propose to do will now be impossible for them." - Genesis 11:6',
              },
              {
                id: "teach-8-g10-perfected",
                type: "question",
                text: "God says 'nothing will be impossible for them.' Is God threatened by human achievement? What's really happening?",
                options: [
                  {
                    id: "opt-1",
                    text: "God sees the dangerous potential of unified sin",
                    response:
                      "CORRECT. God isn't threatened but recognizes the destructive potential of concentrated human rebellion. Like parents limiting a child's dangerous freedom, God intervenes to prevent ultimate self-destruction. The assessment reflects divine wisdom, not divine insecurity. Unlimited power in sinful hands would lead to irreversible corruption.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's protecting them from themselves",
                    response:
                      "TRUE but doesn't capture the judicial aspect. While protection is involved, God's action is primarily judicial - a righteous response to organized rebellion. The protection is a byproduct of necessary judgment.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It's a judicial limitation, not a fearful reaction",
                    response:
                      "ACCURATE but focuses on what it isn't rather than what it is. While certainly not fear, the primary positive description is God's wise assessment of dangerous potential in unified sin.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g10-perfected",
                type: "narration",
                text: "The judgment comes, but notice it's exactly what they feared...",
              },
              {
                id: "teach-10-g10-perfected",
                type: "scripture",
                text: "The confusion of languages:",
                scripture:
                  '"Come, let us go down and there confuse their language, so that they may not understand one another\'s speech." So the LORD dispersed them from there over the face of all the earth..." - Genesis 11:7-8',
              },
              {
                id: "teach-11-g10-perfected",
                type: "question",
                text: "The judgment gives them what they needed but resisted. How is this actually merciful?",
                options: [
                  {
                    id: "opt-1",
                    text: "It forces them to fulfill the creation mandate",
                    response:
                      "CORRECT. God's judgment accomplishes what human disobedience resisted - the spreading abroad to fill the earth. The confusion of languages makes necessary what should have been voluntary. This shows God's commitment to His creation purposes even when humans resist them. His judgments often serve His merciful intentions for human flourishing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It limits the spread and power of sin",
                    response:
                      "TRUE but focuses on restraint rather than positive purpose. While sin is limited, the greater mercy is directing humanity toward its created destiny despite rebellion.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares for redemption through diversity",
                    response:
                      "BEAUTIFUL but represents later development. While diversity will ultimately serve redemption, the immediate mercy is ensuring humanity fulfills its creation mandate through necessary scattering.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g10-perfected",
                type: "narration",
                text: "The story ends with a name that captures the entire experience...",
              },
              {
                id: "teach-13-g10-perfected",
                type: "scripture",
                text: "The name 'Babel':",
                scripture:
                  '"Therefore its name was called Babel, because there the LORD confused the language of all the earth." - Genesis 11:9',
              },
              {
                id: "teach-14-g10-perfected",
                type: "question",
                text: "Babel sounds like the Hebrew for 'confused.' What's ironic about their goal versus the result?",
                options: [
                  {
                    id: "opt-1",
                    text: "They wanted a name but got confusion",
                    response:
                      "CORRECT. The builders sought to 'make a name' for themselves but instead received the name 'Babel' - confusion. Their pursuit of autonomous glory resulted in the very opposite - not renown but ridiculousness. This demonstrates the futility of seeking significance apart from God's blessing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Their unity tower became a division monument",
                    response:
                      "TRUE but describes the outcome rather than the irony. The division is the result, but the specific irony concerns their sought-after name versus their actual legacy.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Heaven-reaching ambition ended in earthly confusion",
                    response:
                      "ACCURATE but doesn't capture the naming irony. While their ambition did end in confusion, the particular irony involves the name they sought versus the name they received.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-10-perfected",
                type: "narration",
                text: "BABEL REVERSED: This isn't the end of the story! Pentecost in Acts 2 will show the Holy Spirit reversing Babel - people hearing the gospel in their own languages. The ultimate unity will come not through human achievement but through Christ, who makes us one new humanity!",
              },
            ],
            application: {
              id: "app-10-perfected",
              type: "reflection",
              text: "If God judged human unity at Babel, how do we reconcile this with Jesus' prayer for Christian unity in John 17? What's the difference between unity against God and unity in God?",
            },
            reflection: {
              id: "refl-10-perfected",
              type: "reflection",
              text: "Where in your life are you tempted to 'build a tower' - seeking security, fame, or significance through human achievement rather than receiving these as gifts from God?",
            },
          },
        },
        {
          id: "lesson-genesis-11-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Line from Shem to Abram",
          description: "Preparing the redeemer",
          scripture: "Genesis 11:10-32",
          estimatedMinutes: 15,
          order: 11,
          locked: true,
          content: {
            introduction: {
              id: "intro-11-perfected",
              type: "narration",
              text: "Have you ever traced your family tree and discovered how your story connects to larger historical events? Today we're following a single thread through ten generations - from Shem to Abram. What if these names represent God's quiet, faithful work through ordinary lives to prepare for extraordinary redemption?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this genealogy",
                  response: "This isn't just a list - it's the narrowing focus of God's redemptive plan.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Abram's background",
                  response: "Perfect! This sets the stage for one of the most important calls in history.",
                },
                {
                  id: "opt-3",
                  text: "Ready to trace the family line!",
                  response: "Excellent! Let's follow the path from Babel to blessing.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g11-perfected",
                type: "scripture",
                text: "The genealogy begins with Shem, linking back to the flood:",
                scripture:
                  '"These are the generations of Shem. When Shem was 100 years old, he fathered Arpachshad two years after the flood." - Genesis 11:10',
              },
              {
                id: "teach-2-g11-perfected",
                type: "question",
                text: "Why include ages and time markers so precisely? What does this accomplish?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes historical reliability",
                    response:
                      "CORRECT. The precise chronology demonstrates these are real people in real time, not mythological figures. The specific years connect the flood to Abraham historically, showing God working in actual human history. This grounds redemption in concrete reality rather than abstract ideas, affirming that God's saving acts occur in measurable time and space.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's sovereignty over generations",
                    response:
                      "TRUE but doesn't capture the historical significance. While God is sovereign over generations, the specific chronological data serves to authenticate the narrative as genuine history, connecting the patriarchal period directly back to creation through verifiable genealogy.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It connects the flood to Abraham chronologically",
                    response:
                      "ACCURATE but focuses on connection rather than purpose. While the connection is made, the deeper significance is the historical verification this provides. The chronology shows Abraham lived relatively soon after the flood, making Noah's experience part of his family's living memory.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g11-perfected",
                type: "narration",
                text: "The list progresses through ten generations, with lifespans gradually decreasing...",
              },
              {
                id: "teach-4-g11-perfected",
                type: "scripture",
                text: "The narrowing line:",
                scripture: '"Shem, Arpachshad, Shelah, Eber, Peleg, Reu, Serug, Nahor, Terah, Abram..."',
              },
              {
                id: "teach-5-g11-perfected",
                type: "question",
                text: "Notice Eber (Hebrews) and Peleg ('division' - when earth divided) get special mention. Why highlight these?",
                options: [
                  {
                    id: "opt-1",
                    text: "They mark significant developments in redemptive history",
                    response:
                      "CORRECT. Eber represents the emergence of the Hebrew people through whom redemption will come, while Peleg's time ('when the earth was divided') likely references the Tower of Babel judgment. These markers show God's sovereign direction of both ethnic development and geographical dispersion as part of His redemptive plan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's purposeful selection",
                    response:
                      "TRUE but vague. While God's selection is evident, the specific significance lies in what these individuals represent - the chosen line (Eber) and the judicial division of nations (Peleg) that shape the context for Abraham's call.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It connects world events with the chosen line",
                    response:
                      "ACCURATE but doesn't specify the connections. The genealogy intentionally links the Messianic line with key world developments, showing God's coordination of salvation history with human history.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g11-perfected",
                type: "narration",
                text: "Then we reach Terah, Abram's father, and the story suddenly gets personal...",
              },
              {
                id: "teach-7-g11-perfected",
                type: "scripture",
                text: "Terah's family and movement:",
                scripture:
                  '"Terah took Abram his son and Lot the son of Haran, his grandson, and Sarai his daughter-in-law, and they went forth together from Ur of the Chaldeans to go into the land of Canaan, but when they came to Haran, they settled there." - Genesis 11:31',
              },
              {
                id: "teach-8-g11-perfected",
                type: "question",
                text: "Terah starts for Canaan but stops in Haran. What might this partial obedience suggest?",
                options: [
                  {
                    id: "opt-1",
                    text: "Human initiative often falls short of God's call",
                    response:
                      "CORRECT. Terah begins the journey to Canaan but settles short of the destination, demonstrating how human obedience often falters before completing God's full purpose. This pattern of starting well but not finishing prepares for the contrast with Abraham's complete obedience. It shows the danger of settling for something good that falls short of God's best.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sets up God's direct call to Abram",
                    response:
                      "TRUE but focuses on narrative function rather than spiritual lesson. While it does set up Abram's call, the primary significance is the pattern of incomplete obedience that Abram will need to overcome.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It shows the pattern of faith developing",
                    response:
                      "VALID but doesn't address the disobedience aspect. While faith does develop across generations, Terah's stopping represents failure rather than progressive development.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g11-perfected",
                type: "narration",
                text: "The chapter ends with three crucial details about Abram's situation...",
              },
              {
                id: "teach-10-g11-perfected",
                type: "scripture",
                text: "Abram's predicament:",
                scripture:
                  '"The days of Terah were 205 years, and Terah died in Haran. Now Sarai was barren; she had no child." - Genesis 11:32; 11:30',
              },
              {
                id: "teach-11-g11-perfected",
                type: "question",
                text: "Barrenness and bereavement - why emphasize these two problems as we meet Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "It highlights the impossibility of human solutions",
                    response:
                      "CORRECT. Abram faces dead ends in every direction: no heir (barrenness) and no father (bereavement). This desperate situation eliminates any possibility of human achievement and prepares for divine intervention. God's promises will require miraculous fulfillment, ensuring He alone receives glory for what follows.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sets up key themes of death and life",
                    response:
                      "TRUE but focuses on literary themes rather than theological purpose. While death and life are important themes, the primary significance is demonstrating human impossibility to highlight divine sovereignty.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It makes God's subsequent promises more dramatic",
                    response:
                      "ACCURATE but emphasizes dramatic effect over theological meaning. While the promises are more dramatic, the deeper purpose is to eliminate human boasting and establish that salvation comes through divine power alone.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g11-perfected",
                type: "narration",
                text: "But there's one more crucial detail about where they came from...",
              },
              {
                id: "teach-13-g11-perfected",
                type: "scripture",
                text: "The cultural background:",
                scripture: '"They went forth together from Ur of the Chaldeans..." - Genesis 11:31',
              },
              {
                id: "teach-14-g11-perfected",
                type: "question",
                text: "Ur was a advanced pagan city with moon worship. Why mention this origin?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God calls people out of paganism",
                    response:
                      "CORRECT. Abram's background in sophisticated pagan culture demonstrates that God's call transcends human spiritual preparation. Salvation begins with divine initiative, not human seeking. This establishes the pattern of grace: God calls the undeserving from among the idolaters to become channels of blessing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It highlights the cost of obedience",
                    response:
                      "TRUE but secondary. While leaving Ur was costly, the greater significance is theological: God's sovereign election of someone from pagan origins shows that salvation depends on God's choice, not human merit or background.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's grace to idolaters",
                    response:
                      "BEAUTIFUL but doesn't capture the call aspect. While grace is evident, the specific emphasis is on God's initiative in calling Abram out of paganism, not just showing grace to pagans.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-11-perfected",
                type: "narration",
                text: "PATTERN OF GRACE: From the chaos of Babel to the confusion of barrenness, God is quietly preparing His solution. The stage is set: a man from pagan origins, stuck in halfway obedience, facing dead ends in every direction. Perfect conditions for God to demonstrate that salvation comes not from human potential but from divine promise!",
              },
            ],
            application: {
              id: "app-11-perfected",
              type: "reflection",
              text: "If God worked through ten generations of ordinary people (most of whom we know nothing about) to prepare for Abraham, what does this teach us about faithfulness in our ordinary lives and trusting God's long-term purposes?",
            },
            reflection: {
              id: "refl-11-perfected",
              type: "reflection",
              text: "Like Terah, have you ever started toward God's calling but settled halfway? What would it look like to continue the journey in obedience, even when it means leaving comfort and security?",
            },
          },
        },
        {
          id: "lesson-genesis-12-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Call of Abram",
          description: "Faith to leave the known",
          scripture: "Genesis 12:1-9",
          estimatedMinutes: 17,
          order: 12,
          locked: true,
          content: {
            introduction: {
              id: "intro-12-perfected",
              type: "narration",
              text: "Have you ever stood at a crossroads where obedience meant leaving everything familiar? Your home, your security, your plans? Today we're witnessing the most important journey in human history since Eden - the moment faith is born. What if Abram's call reveals the pattern for every genuine encounter with the living God?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about Abram's call",
                  response: "This moment changes everything - it's the beginning of covenant history.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand what God promised",
                  response: "Perfect! These seven promises form the foundation of biblical faith.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this faith journey!",
                  response: "Excellent! Let's witness the birth of saving faith.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g12-perfected",
                type: "scripture",
                text: "God's radical call to Abram:",
                scripture:
                  '"Now the LORD said to Abram, "Go from your country and your kindred and your father\'s house to the land that I will show you." - Genesis 12:1',
              },
              {
                id: "teach-2-g12-perfected",
                type: "question",
                text: "Three things to leave: country, kindred, father's house. Why this progression from broad to specific?",
                options: [
                  {
                    id: "opt-1",
                    text: "It represents complete detachment from old identity",
                    response:
                      "CORRECT. The progression from nation (country) to extended family (kindred) to immediate family (father's house) requires abandoning every level of security and identity. This comprehensive separation ensures Abram's dependence is entirely on God, not any human relationships or cultural supports. Each level represents deeper attachments that must be surrendered for full obedience.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows the cost of full obedience",
                    response:
                      "TRUE but focuses on sacrifice rather than purpose. While the cost is real, the progression specifically serves to detach Abram completely from his past so his identity can be redefined by God's promises alone.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "It makes Abram completely dependent on God",
                    response:
                      "ACCURATE but doesn't explain the progression. The dependence is the result, but the specific threefold separation systematically removes every natural source of security.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g12-perfected",
                type: "narration",
                text: "But God never asks us to empty our hands without filling them with greater promises...",
              },
              {
                id: "teach-4-g12-perfected",
                type: "scripture",
                text: "The seven-fold promise:",
                scripture:
                  '"And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed." - Genesis 12:2-3',
              },
              {
                id: "teach-5-g12-perfected",
                type: "question",
                text: "Seven promises! Which aspect seems most significant to you?",
                options: [
                  {
                    id: "opt-1",
                    text: "The universal scope: 'all families of earth blessed'",
                    response:
                      "CORRECT. This climactic promise reveals God's global heart from the beginning. The Abrahamic covenant isn't ultimately about one man or nation but about God's plan to redeem all humanity. This universal scope shows God's mission extends beyond Israel to embrace every people group, establishing the biblical theme of particular election for universal blessing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The purpose: 'be a blessing' not just be blessed",
                    response:
                      "TRUE but secondary. While the purpose of blessing others is crucial, it serves the greater goal of universal blessing. The 'be a blessing' command is the means; 'all families blessed' is the ultimate goal.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "The divine protection: 'I will curse who curse you'",
                    response:
                      "IMPORTANT but instrumental. The protection ensures the promise can be fulfilled despite opposition, but it serves the larger purpose of universal blessing rather than being significant in itself.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g12-perfected",
                type: "narration",
                text: "Now comes the moment of decision - will this 75-year-old man actually go?",
              },
              {
                id: "teach-7-g12-perfected",
                type: "scripture",
                text: "Abram's response:",
                scripture: '"So Abram went, as the LORD had told him..." - Genesis 12:4',
              },
              {
                id: "teach-8-g12-perfected",
                type: "question",
                text: "Three simple words that change history: 'So Abram went.' What makes this so remarkable?",
                options: [
                  {
                    id: "opt-1",
                    text: "He obeyed without knowing the destination",
                    response:
                      "CORRECT. Abram's faith acts on God's word despite incomplete information. 'The land I will show you' means he journeys toward an unknown destination, demonstrating radical trust in God's guidance. This defines biblical faith: obedient action based on God's character and word, not full understanding of the plan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He was 75 with a barren wife",
                    response:
                      "TRUE but focuses on circumstances rather than faith. While his age and situation make obedience remarkable, the essence of his faith is trusting God's promise over visible reality, not just overcoming practical obstacles.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "He left civilization for unknown territory",
                    response:
                      "ACCURATE but describes the action rather than the faith behind it. The significant thing isn't the geographical move but the complete trust in God's promise that motivated it.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g12-perfected",
                type: "narration",
                text: "Abram arrives in Canaan and God appears to him again...",
              },
              {
                id: "teach-10-g12-perfected",
                type: "scripture",
                text: "God confirms the promise:",
                scripture:
                  '"Then the LORD appeared to Abram and said, "To your offspring I will give this land." - Genesis 12:7',
              },
              {
                id: "teach-11-g12-perfected",
                type: "question",
                text: "Why appear again so soon after the initial call? What does Abram need at this moment?",
                options: [
                  {
                    id: "opt-1",
                    text: "Confirmation after the difficult journey",
                    response:
                      "CORRECT. Having obeyed and arrived in Canaan, Abram needs reassurance that this unfamiliar land is indeed God's promise. The appearance confirms his obedience was correct and reinforces the promise with a visible manifestation. This pattern continues throughout Abram's life - God reaffirms His promises at key moments of obedience or testing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The specific land promise he could see",
                    response:
                      "TRUE but doesn't capture the relational dimension. While the land is specified, the greater need is relational confirmation from God after costly obedience.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Encouragement to build an altar and worship",
                    response:
                      "SECONDARY purpose. While worship is the proper response, the primary reason for the appearance is confirming Abram's obedience and reinforcing the promise in the new location.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g12-perfected",
                type: "narration",
                text: "Abram's response sets a pattern we'll see throughout his life...",
              },
              {
                id: "teach-13-g12-perfected",
                type: "scripture",
                text: "Abram's worship:",
                scripture: '"So he built there an altar to the LORD, who had appeared to him." - Genesis 12:7',
              },
              {
                id: "teach-14-g12-perfected",
                type: "question",
                text: "Why build altars? What do they represent in Abram's journey?",
                options: [
                  {
                    id: "opt-1",
                    text: "Visible reminders of God's faithfulness",
                    response:
                      "CORRECT. Each altar marks a place where God met Abram and reaffirmed His promises. These stone memorials serve as tangible reminders of divine encounters, creating a geography of grace throughout Canaan. They testify to God's faithfulness at specific locations, helping Abram remember God's promises during future challenges.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Acts of worship and dedication",
                    response:
                      "TRUE but doesn't capture the memorial function. While worship is involved, the altars specifically mark significant encounters with God for future remembrance.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "Claiming territory for Yahweh in pagan land",
                    response:
                      "VALID but secondary. While the altars do stake a claim for Yahweh, their primary function is commemorating God's appearances and promises to Abram personally.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g12-perfected",
                type: "narration",
                text: "The chapter concludes with Abram continuing his journey of faith...",
              },
              {
                id: "teach-16-g12-perfected",
                type: "scripture",
                text: "The journey continues:",
                scripture: '"And Abram journeyed on, still going toward the Negeb." - Genesis 12:9',
              },
              {
                id: "teach-17-g12-perfected",
                type: "question",
                text: "Faith isn't a one-time event but a continuing journey. What does Abram's ongoing movement teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "Obedience involves continual following",
                    response:
                      "CORRECT. Abram's journey demonstrates that faith isn't a single decision but a lifestyle of following God's guidance. Each altar marks a stage in an ongoing journey of obedience. This pattern shows that walking with God means continual responsiveness to His direction, not just initial compliance.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Faith means living as a stranger and pilgrim",
                    response:
                      "TRUE but describes the condition rather than the process. While Abram lives as a pilgrim, the significant lesson is his continual movement in response to God's ongoing guidance.",
                    isCorrect: false,
                  },
                  {
                    id: "opt-3",
                    text: "God leads step by step, not all at once",
                    response:
                      "ACCURATE but focuses on God's method rather than Abram's response. While God does lead progressively, the emphasis here is on Abram's continual obedience to that gradual guidance.",
                    isCorrect: false,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-12-perfected",
                type: "narration",
                text: "ABRAHAM'S FAITH FULFILLED: This call begins a story that culminates in Christ! Galatians 3 will tell us 'the Scripture foresaw that God would justify the Gentiles by faith, and announced the gospel in advance to Abraham: All nations will be blessed through you.' You and I are part of that blessing promised here!",
              },
            ],
            application: {
              id: "app-12-perfected",
              type: "reflection",
              text: "If God promised to bless Abram so he could be a blessing to others, how should this reshape our understanding of God's blessings in our own lives? Are we hoarding blessings or channeling them to bless others?",
            },
            reflection: {
              id: "refl-12-perfected",
              type: "reflection",
              text: "Like Abram, God calls us to journeys of faith where we must trust His promises more than our security. Where is God inviting you to step out in faith, leaving familiar comforts to follow His leading?",
            },
          },
        },
      ],
    },
  ],
}
