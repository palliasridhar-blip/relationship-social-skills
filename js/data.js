/* ============ CONTENT DATA ============ */
const UNITS = [
  {n:1,t:"The Relationship With Yourself",h:"Self-awareness"},
  {n:2,t:"Communication Skills",h:"Listening & speaking"},
  {n:3,t:"Emotional Intelligence",h:"Naming & steering feelings"},
  {n:4,t:"Mapping Your Relationships",h:"Types & their rules"},
  {n:5,t:"Building & Keeping Friendships",h:"Trust & reciprocity"},
  {n:6,t:"Boundaries & Consent",h:"Saying & hearing no"},
  {n:7,t:"Conflict & Repair",h:"Disagree, then mend"},
  {n:8,t:"Peer Pressure & the Upstander",h:"Influence & courage"},
  {n:9,t:"Bullying & Cyberbullying",h:"Target, witness, help"},
  {n:10,t:"Digital & Social-Media Relating",h:"Online vs in person"},
  {n:11,t:"Attraction & Healthy Romance",h:"Crushes & red flags"},
  {n:12,t:"Respecting Difference",h:"Across every line"},
  {n:13,t:"Trust, Honesty & Integrity",h:"What holds people"},
  {n:14,t:"Endings & Loss",h:"Drifting & goodbyes"}
];

const PLANS = [
{time:"~50 min",chips:["Foundation","Self-awareness"],
 aim:"Help the student see that how they treat themselves sets the floor for how others treat them.",
 obj:["Name three personal values","Notice the tone of their own self-talk","Describe one way self-respect shows up in behaviour"],
 flow:[
  ["5 min","Check-in","Ask for three words to describe themselves. Quietly note whether the words are kind or harsh."],
  ["12 min","Teach","Self-talk is the one voice you can't mute. Values are your inner compass. Self-respect is the standard you hold for how you're treated."],
  ["18 min","Practise","Values sort: pick a top five from a list, narrow to three, explain each. Then rewrite one harsh self-statement as a fair one."],
  ["10 min","Reflect","Where does the harsh self-talk usually show up — exams, the mirror, sport, comparison?"],
  ["5 min","Mission","Set the week's practice and write it down together."]
 ],
 prompts:["When you make a mistake, what do you say to yourself?","Would you say that to a friend in the same spot?","What do you most want people to respect you for?"],
 watch:"Persistently harsh self-talk or hints of self-loathing — stay warm, don't argue them out of it, and loop in a parent or counsellor if it runs deep.",
 mission:"Catch one unkind self-thought a day and reword it fairly. Bring one example next time."},

{time:"~50 min",chips:["Core skill","Listening & speaking"],
 aim:"Move from waiting-to-talk to genuinely listening, and from mumbling or blurting to clear, assertive speaking.",
 obj:["Demonstrate active listening by reflecting back","Tell apart passive, aggressive and assertive styles","Build one clean 'I-statement'"],
 flow:[
  ["5 min","Check-in","Sixty seconds of 'tell me about your week' — you reflect it back to model real listening."],
  ["12 min","Teach","Listening to understand vs listening to reply. How much sits in tone and body, not just words. The passive–assertive–aggressive ladder."],
  ["18 min","Practise","Mirror drill: they speak 90 seconds, you reflect; swap. Then convert three passive or aggressive lines into assertive I-statements."],
  ["10 min","Reflect","Which style is your default — and does it change depending on who you're with?"],
  ["5 min","Mission","Agree where they'll try one I-statement this week."]
 ],
 prompts:["What does someone do that makes you feel truly heard?","What's the difference between honest and harsh?","Can you say that without blaming the other person?"],
 watch:"Students who hear 'assertive' as 'rude'. Keep modelling warm, direct, kind.",
 mission:"Use one real I-statement with a parent or friend. Note what happened."},

{time:"~50 min",chips:["Core skill","Emotions"],
 aim:"Grow the vocabulary for feelings and widen the gap between feeling and acting.",
 obj:["Name feelings beyond 'mad', 'sad', 'fine'","Spot a body cue for a strong emotion","Use one regulation tool"],
 flow:[
  ["5 min","Check-in","Point to a feeling on a feelings wheel for right now."],
  ["12 min","Teach","Feelings are data, not orders. The body signals first — jaw, gut, heat. Name it to tame it."],
  ["18 min","Practise","Map a recent flare-up: trigger → body cue → thought → action. Then rehearse a three-breath, name-it reset."],
  ["10 min","Reflect","What's your earliest body warning sign that you're about to lose it?"],
  ["5 min","Mission","Agree the 'name it before you act' practice."]
 ],
 prompts:["Where do you feel that in your body?","What was the feeling underneath the anger?","What would calm, wise you do here?"],
 watch:"Flat affect or 'I don't feel anything' can mask a great deal. Stay curious, never pushy.",
 mission:"Once this week, name the feeling out loud or in a note before reacting."},

{time:"~50 min",chips:["Foundation","Mapping"],
 aim:"See that different relationships run on different rules — and audit the current state of each.",
 obj:["Map their key relationships","Name what each one needs","Choose one relationship to invest in"],
 flow:[
  ["5 min","Check-in","Who did you actually talk to most this week?"],
  ["12 min","Teach","Concentric circles: self, family, close friends, peers, mentors and teachers, online. Each runs on different give-and-take — banter with friends, respect with elders."],
  ["18 min","Practise","Draw the relationship map. Rate each circle's health 1–5. Mark one that's drifting."],
  ["10 min","Reflect","Which circle gets the best of you — and which gets the leftovers?"],
  ["5 min","Mission","Pick the drifting relationship to act on."]
 ],
 prompts:["Who would you call at 11pm with bad news?","Where do you act most like the real you?","Which relationship would you miss most if it vanished?"],
 watch:"A very empty map can signal isolation. Note it gently and follow up.",
 mission:"Do one small thing for a neglected relationship this week."},

{time:"~50 min",chips:["Connection","Friendship"],
 aim:"Demystify how friendships actually start, and what keeps them alive.",
 obj:["Identify how they make friends","Name what builds vs breaks trust","Practise an opener"],
 flow:[
  ["5 min","Check-in","How did you meet your closest friend?"],
  ["12 min","Teach","Friendship grows from repeated low-stakes contact plus reciprocity. Trust is built in small deposits. Some friendships fade — that's normal, not failure."],
  ["18 min","Practise","Role-play joining a group or starting a chat with someone new. Then list three trust deposits they could make this week."],
  ["10 min","Reflect","Are you a starter or a waiter? A giver or a taker?"],
  ["5 min","Mission","Agree one deliberate trust deposit."]
 ],
 prompts:["What makes someone easy to be friends with?","When did a friend show you they were reliable?","What do you bring to a friendship?"],
 watch:"Friendlessness or constant friend-conflict — explore the pattern without blame.",
 mission:"Make one trust deposit: follow through, remember a detail, show up. Log it."},

{time:"~50 min",chips:["Safety skill","Boundaries"],
 aim:"Make 'no' sayable — and 'no' hearable.",
 obj:["Define a boundary in their own words","Say no without guilt","Respect someone else's no"],
 flow:[
  ["5 min","Check-in","A time you said yes but meant no."],
  ["12 min","Teach","Boundaries protect the relationship, they don't attack it. Consent applies to time, sharing, touch, photos — everywhere. 'No' is a full sentence."],
  ["18 min","Practise","Rehearse three graceful refusals (lending money, sharing homework, an unwanted hug). Then practise receiving a no calmly."],
  ["10 min","Reflect","Where do you most struggle to say no, and to whom?"],
  ["5 min","Mission","Choose one small boundary to hold."]
 ],
 prompts:["What happens inside when you let a boundary get crossed?","How can you say no and still be kind?","How do you want people to react to your no?"],
 watch:"Any account of pressure into something physical or sexual, or coercion, moves from coaching to safeguarding — involve trusted adults.",
 mission:"Hold one small boundary. Note what happened and how it felt."},

{time:"~50 min",chips:["Repair","Conflict"],
 aim:"Teach that conflict isn't the end — unrepaired conflict is.",
 obj:["De-escalate in the moment","Deliver a real apology","Make one repair move"],
 flow:[
  ["5 min","Check-in","A recent disagreement — what was it really about, underneath?"],
  ["12 min","Teach","Fair fighting: issue not person, no 'always/never', one topic at a time. Anatomy of a real apology — name it, own it, no 'but', change. Repair beats winning."],
  ["18 min","Practise","Role-play a friend conflict all the way to a repair, not a victory. Draft one genuine apology."],
  ["10 min","Reflect","Do you fight to win, or to understand?"],
  ["5 min","Mission","Identify one repair they've been avoiding."]
 ],
 prompts:["What did the other person need that they didn't get?","What's your part in this, even ten percent of it?","What would 'we're okay again' actually look like?"],
 watch:"Conflicts involving threats or violence need adult involvement, not role-play.",
 mission:"Attempt one overdue repair this week."},

{time:"~50 min",chips:["Courage","Peer pressure"],
 aim:"Build the spine to act on their own values inside a group.",
 obj:["Spot subtle pressure","Use a refusal that saves face","Choose upstander over bystander"],
 flow:[
  ["5 min","Check-in","A time the group wanted one thing and you wanted another."],
  ["12 min","Teach","Most pressure is invisible — a laugh, a look, 'don't be boring'. Face-saving exits. The bystander effect, and upstander moves: distract, delegate, direct, delay."],
  ["18 min","Practise","Role-play resisting a dare, then stepping in for someone being mocked."],
  ["10 min","Reflect","What do you fear more — being uncool, or being unkind?"],
  ["5 min","Mission","Pick a go-to exit line and one upstander move to try."]
 ],
 prompts:["Whose opinion are you actually worried about?","What would future-you want you to do here?","What's the smallest way you could step in?"],
 watch:"Group pressure toward substances, theft, or harm — name the line clearly and directly.",
 mission:"Use one upstander move or face-saving exit if the moment comes. Reflect on it."},

{time:"~50 min",chips:["Safety skill","Bullying"],
 aim:"Equip them to respond from any seat — target, witness, or someone who has caused harm.",
 obj:["Tell bullying apart from ordinary conflict","Know the response options","Know when and how to get help"],
 flow:[
  ["5 min","Check-in","What does bullying look like at your school or online right now?"],
  ["12 min","Teach","Bullying = repeated, plus a power imbalance, plus intent. Online adds permanence and an audience. Options: document, block, report, tell a trusted adult."],
  ["18 min","Practise","Role-play telling a trusted adult. Then practise a supportive message to someone who's been targeted."],
  ["10 min","Reflect","Have you ever been part of a pile-on without meaning to be?"],
  ["5 min","Mission","Plan one private check-in with someone who's been a target."]
 ],
 prompts:["What stops people from telling?","What does a target most need to hear?","If you've hurt someone, what's the brave next step?"],
 watch:"Disclosure of current bullying or self-harm shifts you straight from coaching to safeguarding. Act on it.",
 mission:"Do one private check-in, or save and report one piece of evidence."},

{time:"~50 min",chips:["Modern life","Digital"],
 aim:"Make online relationships conscious instead of automatic.",
 obj:["Compare online vs in-person relating","Spot the comparison trap","Set one digital boundary"],
 flow:[
  ["5 min","Check-in","First and last thing your phone showed you today."],
  ["12 min","Teach","Online loses tone and face, so misreads multiply. The highlight-reel comparison. Parasocial bonds with influencers. A footprint is permanent."],
  ["18 min","Practise","Re-read an ambiguous message two ways. Design one screen-time or do-not-disturb boundary. Audit one feed: how does it make you feel?"],
  ["10 min","Reflect","Most days, does your phone connect you or isolate you?"],
  ["5 min","Mission","Choose one digital boundary to trial."]
 ],
 prompts:["Who are you comparing yourself to, and is it a fair comparison?","Would you say that to their face?","What does your feed do to your mood?"],
 watch:"Signs of grooming, sextortion, or compulsive use — involve parents and professionals.",
 mission:"Test one digital boundary for a week and review how it went."},

{time:"~50 min",chips:["Age-appropriate","Romance"],
 aim:"Give a calm, age-appropriate frame for crushes, attraction, and what healthy actually looks like.",
 obj:["Tell healthy and controlling dynamics apart","Handle rejection","Spot early red flags"],
 flow:[
  ["5 min","Check-in","What do films and shows get wrong about love?"],
  ["12 min","Teach","Attraction is normal. Healthy = respect, freedom, honesty, kindness. Unhealthy = control, jealousy, pressure, isolation. Rejection is survivable and not a verdict on your worth."],
  ["18 min","Practise","Sort behaviours into green and red flags. Rehearse a respectful 'no thanks' and receiving one with grace."],
  ["10 min","Reflect","What would you never accept from someone who liked you?"],
  ["5 min","Mission","Set a noticing task for the week."]
 ],
 prompts:["How should someone who likes you treat your other friendships?","What's the difference between caring and controlling?","How do you want to handle hearing 'no'?"],
 watch:"Keep strictly age-appropriate — never any romantic or sexual how-to. Any exploitative or abusive dynamic is a safeguarding matter.",
 mission:"Notice and name one green flag and one red flag in a story or show this week."},

{time:"~50 min",chips:["Respect","Difference"],
 aim:"Build the habit of meeting people as individuals, across every line.",
 obj:["Notice a stereotype in action","Name one of their own biases","Practise curious questions"],
 flow:[
  ["5 min","Check-in","A time you were judged by a label rather than by yourself."],
  ["12 min","Teach","Stereotypes are shortcuts that flatten people. Difference across religion, language, region, gender, ability, class. Curiosity is the antidote."],
  ["18 min","Practise","Spot the bias in everyday phrases. Rehearse a curious, respectful question in place of an assumption."],
  ["10 min","Reflect","Where might you be quietly judging a whole group?"],
  ["5 min","Mission","Plan one curious conversation across a difference."]
 ],
 prompts:["When has an assumption about you been completely wrong?","What's one thing you don't understand about a group — that you could just ask?","Who do you find hardest to respect, and why?"],
 watch:"Don't let 'respecting views' slide into excusing cruelty or contempt. Name that line.",
 mission:"Have one genuinely curious conversation across a difference."},

{time:"~50 min",chips:["Character","Trust"],
 aim:"Make the link between small daily choices and being someone people rely on.",
 obj:["Define trust in their own words","See the cost of small dishonesties","Name one integrity commitment"],
 flow:[
  ["5 min","Check-in","Who do you trust most, and what is it about them?"],
  ["12 min","Teach","Trust = predictability plus care, over time. White lies and gossip are slow leaks. Integrity = same person when no one's watching. Keeping confidences."],
  ["18 min","Practise","Sort real situations into trust deposits and withdrawals. Draft one 'this is who I want to be' line."],
  ["10 min","Reflect","Where are you most tempted to bend the truth?"],
  ["5 min","Mission","Choose one promise they'd normally let slide — to keep."]
 ],
 prompts:["What would make you lose trust in a friend instantly?","Whose secret are you holding well right now?","When is honesty unkind, and how do you handle that?"],
 watch:"Honesty used as a weapon — 'I'm just being honest' — needs distinguishing from cruelty.",
 mission:"Keep one small promise you'd usually let slide. Log it."},

{time:"~50 min",chips:["Resilience","Endings"],
 aim:"Normalise that relationships end, and build skill for grieving and closing them well.",
 obj:["Accept drifting as normal","Name the feelings around an ending","Close a relationship with grace"],
 flow:[
  ["5 min","Check-in","A friendship that faded — how did that feel?"],
  ["12 min","Teach","Friendships have seasons; an ending isn't a failure. You can grieve living people who move on. The difference between closure you're given and closure you create."],
  ["18 min","Practise","Write an unsent letter to a faded friend. Rehearse a kind way to step back from a draining relationship."],
  ["10 min","Reflect","What do you carry forward from relationships that ended?"],
  ["5 min","Mission","Identify where a goodbye or a thank-you is owed."]
 ],
 prompts:["What did that relationship give you that you still keep?","Is this a pause, or an ending?","How do you want to be remembered by people you drift away from?"],
 watch:"A loss tied to bereavement, family breakdown, or being cut off can be heavy. Make space, and involve support if it's needed.",
 mission:"Offer one act of closure or gratitude where one is owed."}
];

const SCENARIOS = [
{theme:"Communication",title:"The Half-Listened Story",setup:"The student tells you about something they're excited about. Halfway through you start glancing at your phone and giving 'mm-hm's.",roles:"You: the distracted friend. Student: the one sharing.",debrief:["How did it feel to lose me mid-story?","What exactly did I do with my body and words?","How will you show someone they have your full attention?"]},
{theme:"Communication",title:"Honest, Not Harsh",setup:"A friend asks if their new haircut looks good. It really doesn't — but they clearly want both honesty and reassurance.",roles:"You: the friend. Student: giving the feedback.",debrief:["How did you stay honest and kind at the same time?","Which words softened it without lying?","When is a small kindness better than the brutal truth?"]},
{theme:"Communication",title:"Listen, Don't Fix",setup:"You're overwhelmed and want a friend to just listen — but they keep jumping in with solutions.",roles:"You: the fixer friend. Student: asking for what they actually need.",debrief:["How do you ask for listening instead of advice?","Why is that surprisingly hard to say?","What changed once you named it?"]},
{theme:"Boundaries",title:"Can I Copy Your Homework?",setup:"A classmate you like asks to copy your assignment — for the third time this month. Saying yes feels easier.",roles:"You: the classmate, pushing a little. Student: holding the line.",debrief:["What made the 'no' hard?","What did you offer instead, if anything?","What's the long-term cost of always saying yes?"]},
{theme:"Boundaries",title:"The Unwanted Hug",setup:"A relative at a function wants a big hug and a cheek pinch. You'd rather not — but 'they're family'.",roles:"You: the warm, pushy relative. Student: setting a boundary respectfully.",debrief:["How do you honour respect AND your own comfort?","What's a polite alternative you can offer?","Who gets to decide what happens to your body?"]},
{theme:"Boundaries",title:"Always Available",setup:"A friend texts constantly and gets upset if you don't reply fast. You need space without losing them.",roles:"You: the clingy friend. Student: setting a kind boundary.",debrief:["How do you create space without it feeling like rejection?","What did you reassure them of?","What's your right to take time before replying?"]},
{theme:"Conflict",title:"You Told Everyone",setup:"You told one friend something private. Now the whole group knows. You're confronting them.",roles:"You: the friend who leaked it. Student: raising it.",debrief:["Did you go after the person, or the action?","What did you actually need from them?","Is this repairable — and how?"]},
{theme:"Conflict",title:"The Group-Project Freeloader",setup:"One member did nothing. The deadline is tomorrow. You're furious.",roles:"You: the freeloader, a bit defensive. Student: addressing it.",debrief:["How do you stay firm without exploding?","What outcome do you actually want here?","What's genuinely fair in this situation?"]},
{theme:"Conflict",title:"The Apology You Owe",setup:"You said something cruel in the heat of an argument. You've been avoiding the person ever since.",roles:"You: the person who was hurt. Student: making a real apology.",debrief:["Did you own it without sneaking in a 'but'?","What did you offer to do differently?","What makes an apology actually land?"]},
{theme:"Peer pressure",title:"Just One Puff",setup:"At a hangout, friends are vaping and offer you one. 'Don't be boring.'",roles:"You: the friend offering, light pressure. Student: refusing with their cool intact.",debrief:["Which exit kept you both calm and clear?","Whose approval were you really protecting?","What's your go-to line for next time?"]},
{theme:"Peer pressure",title:"Cover For Me",setup:"A friend asks you to lie to their parents about where they were. You're caught between loyalty and honesty.",roles:"You: the friend. Student: deciding.",debrief:["What does real loyalty look like here?","What's the risk to you if it unravels?","Is there a third option you haven't considered?"]},
{theme:"Peer pressure",title:"Everyone's Mocking Him",setup:"The group is roasting a quieter kid who's clearly hurt. Laughing along is the easiest thing to do.",roles:"You: the ringleader. Student: the upstander.",debrief:["What small move shifted the moment?","What stopped people acting sooner?","What does the target remember about this later?"]},
{theme:"Bullying",title:"Telling the Teacher",setup:"You've decided to report ongoing bullying. You're nervous it'll only make things worse.",roles:"You: a trusted teacher. Student: reporting it.",debrief:["What made telling so hard?","What did you want the adult to do?","What helped you find the words?"]},
{theme:"Bullying",title:"I'm In The Group Chat",setup:"A cruel group chat is mocking a classmate — and you're in it, staying silent.",roles:"You: a friend in the chat. Student: deciding what to do.",debrief:["What are your options beyond staying silent?","What's the risk of each one?","What would you want if it were you being mocked?"]},
{theme:"Digital",title:"That Text Read Wrong",setup:"A friend's reply seemed cold — just 'k.' — and you're spiralling about what it means.",roles:"You: the friend (who was simply busy). Student: checking it out instead of assuming.",debrief:["How many ways could that message be read?","What did assuming the worst cost you?","How do you check in without accusing?"]},
{theme:"Digital",title:"Post It Or Not",setup:"You've got a hilarious but embarrassing photo of a friend. It would get loads of likes.",roles:"You: a friend egging them on. Student: deciding.",debrief:["Whose laugh is it really at?","Did you ask for their consent?","What's the half-life of a post once it's up?"]},
{theme:"Digital",title:"The Comparison Spiral",setup:"Scrolling, you feel like everyone's life is better than yours. A friend texts asking how you are.",roles:"You: the friend checking in. Student: being honest about the spiral.",debrief:["What was the feed actually showing you?","Who do you compare yourself to, and is it fair?","What pulls you out of the spiral?"]},
{theme:"Friendship",title:"The New Kid",setup:"A new student is sitting alone at lunch. You could go over, but it's awkward.",roles:"You: the new student, shy. Student: making the first move.",debrief:["What opener actually worked?","What's the worst that could realistically have happened?","Who once did this for you?"]},
{theme:"Endings",title:"Drifting Apart",setup:"A once-close friend has new friends and less time for you. You feel quietly dropped.",roles:"You: the drifting friend. Student: naming how they feel.",debrief:["Is this a pause, or an ending?","What part of this can you actually control?","How do you say 'I miss you' without guilt-tripping?"]},
{theme:"Romance",title:"I Just Want To Be Friends",setup:"Someone has feelings for you that you don't share. You want to be both kind and clear.",roles:"You: the person who likes them. Student: letting them down.",debrief:["How do you protect their dignity AND stay honest?","What did you carefully not promise?","How would you want to be told?"]},
{theme:"Romance",title:"Where Were You?",setup:"Someone you're close to checks who you text and gets upset when you see other friends. They call it 'caring'.",roles:"You: the controlling person. Student: naming the red flag.",debrief:["Is this care, or control?","Where's the line between the two?","What do you want in how someone treats your freedom?"]},
{theme:"Difference",title:"You Wouldn't Get It",setup:"A classmate from a different background shares a custom and the group snickers. You want to respond.",roles:"You: a snickering peer. Student: upstander and genuinely curious.",debrief:["What's the difference between curiosity and judgement?","What question could you ask instead of assuming?","When did a label once flatten you?"]},
{theme:"Difference",title:"New To The City",setup:"You've moved to a new city and school where the language and customs are different. You feel like an outsider.",roles:"You: a local classmate. Student: bridging the gap.",debrief:["What helps you reach across the gap?","What would you want a local to do for you?","How do you ask to be included?"]},
{theme:"Family",title:"You Never Listen To Me",setup:"A parent has said no to something important to you without hearing you out. You want to be heard, not just win.",roles:"You: the parent. Student: making their case respectfully.",debrief:["How do you disagree with an elder and stay respectful?","What did you do to understand their side?","What's the real ask underneath the argument?"]},
{theme:"Family",title:"Compared To My Cousin",setup:"At a family gathering you're compared unfavourably to a cousin — again. It stings.",roles:"You: a well-meaning relative. Student: responding with composure.",debrief:["How do you protect your self-worth in that moment?","What's worth saying, and what's worth letting go?","Whose opinion of you actually counts?"]},
{theme:"Trust",title:"Keep This Secret",setup:"A friend tells you they're being hurt at home and begs you not to tell anyone.",roles:"You: the friend. Student: navigating a secret that may need an adult.",debrief:["Which secrets can you keep, and which can't you?","How do you tell a friend you have to get help?","What does loyalty really mean here?"]},
{theme:"Trust",title:"The Borrowed Money",setup:"A friend keeps 'forgetting' to return money they owe. You value the friendship and the money.",roles:"You: the friend, a bit sheepish. Student: raising it.",debrief:["How do you raise it without wrecking the friendship?","What's the real issue — the cash, or the respect?","What's your bottom line?"]},
{theme:"Self & emotions",title:"The Slow Fuse",setup:"Small annoyances have stacked up all day. A friend makes a harmless joke and you snap.",roles:"You: the friend, surprised. Student: noticing it and recovering.",debrief:["What were you actually angry about?","Which body signs did you miss earlier?","How do you repair an overreaction?"]},
{theme:"Self & emotions",title:"Three Words",setup:"Describe yourself in three honest words. We'll look at the tone together.",roles:"You: curious listener. Student: describing themselves.",debrief:["Were your words kind or harsh?","Would you describe a friend that way?","What's one word you'd add on a good day?"]},
{theme:"Endings",title:"The Clean Goodbye",setup:"A relationship has run its course — a club, a team, a friendship. You want to leave well, not ghost.",roles:"You: the other person. Student: closing with gratitude.",debrief:["What's worth saying thank-you for?","Why does ghosting feel easier?","How do you want to be remembered?"]}
];

const DIMS = [
 {short:"Self-Awareness",name:"Self-Awareness",items:["I can name what I'm feeling, and why.","I treat myself with the same kindness I'd give a friend.","I know what my core values are."]},
 {short:"Communication",name:"Communication",items:["I listen to understand, not just to reply.","I can say what I need clearly and calmly.","I notice people's tone and body language, not just their words."]},
 {short:"Empathy",name:"Empathy & Emotions",items:["I can sense how other people are feeling.","I can calm myself down before reacting when I'm upset.","I think about how my actions affect others' feelings."]},
 {short:"Friendship",name:"Friendship Skills",items:["I find it easy to start conversations with new people.","My friends know they can rely on me.","I keep in touch and make an effort with friends."]},
 {short:"Boundaries",name:"Boundaries & Assertiveness",items:["I can say no without feeling guilty.","I respect it when other people say no to me.","I stand up for what I want, even in a group."]},
 {short:"Conflict & Repair",name:"Conflict & Repair",items:["I can disagree with someone without it turning into a fight.","I apologise properly when I'm in the wrong.","I try to repair things after an argument."]},
 {short:"Peer Pressure",name:"Handling Peer Pressure",items:["I act on my own values even when friends push back.","I speak up when someone is being treated badly.","I don't need everyone's approval to feel okay."]},
 {short:"Digital",name:"Digital Relating",items:["I think before I post things about other people.","I don't let social media wreck my mood or self-worth.","I check my assumptions instead of overreacting to a text."]},
 {short:"Trust",name:"Trust & Integrity",items:["I keep my promises, even the small ones.","I'm honest in a way that's kind, not cruel.","I'm the same person whether or not people are watching."]},
 {short:"Difference",name:"Respecting Difference",items:["I treat people as individuals, not as stereotypes.","I'm curious about people who are different from me.","I can disagree with someone's views and still respect them."]}
];
