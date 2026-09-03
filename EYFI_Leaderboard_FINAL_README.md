# 🏆 EYFI Challenge — Interactive Leaderboard

An interactive, engaging, and gamified **Leaderboard experience for the EYFI (Earn Your First Income) Challenge**, designed specifically for college students across India.

The goal is to turn a traditional ranking table into a motivating experience where participants can quickly understand **where they stand, how much they have earned, who is ahead of them, and what they need to do to move up**.

---

## 📌 Assignment Objective

The EYFI Challenge requires designing a leaderboard that ranks participants based on the **income they have earned during the 30-day challenge**.

The experience should be:

- 🎯 Easy to understand
- 💰 Earnings-focused
- 🏆 Competitive and motivating
- ⚡ Interactive
- 📱 Mobile-first and responsive
- 🎨 Visually appealing to college students
- 🚀 Simple enough to understand within seconds

Instead of building a boring administrative table, this project focuses on creating a **gamified, student-friendly leaderboard experience**.

---

# 💡 Design Concept

> **"Don't just show the rank — motivate the participant to reach the next one."**

The leaderboard combines:

**Rank + Earnings + Progress + Competition + Personalization**

A participant should be able to answer these questions immediately:

1. Where am I?
2. How much have I earned?
3. Who is ahead of me?
4. How much more do I need to earn to move up?
5. How am I performing compared to others?
6. Can I improve my position?

---

# 🎨 Design Direction

The design follows the existing EYFI visual language and the assignment's target audience.

### Visual Style

- 🌑 Near-black / dark background
- 🟠 Orange as the primary accent
- ₹ used as an earning-related visual motif
- 🔤 Bold, punchy typography
- 🎮 Gamified progress and ranking elements
- 📱 Mobile-first experience
- 🧑‍🎓 Casual, energetic, Gen-Z-oriented tone

The design direction is intended to feel consistent with EYFI's existing branding rather than looking like a generic leaderboard.

---

# ✨ Core Features

## 🥇 1. Top 3 Podium

The top three participants receive a visually prominent podium-style presentation.

### Includes

- 🥇 1st place
- 🥈 2nd place
- 🥉 3rd place
- Participant name
- Avatar / initials
- Total earnings
- Visual distinction for each position

The podium creates an immediate sense of achievement and competition.

---

## 📊 2. Ranked Leaderboard

Participants below the top three are displayed in a structured ranked list.

Each row contains:

| Information | Description |
|---|---|
| Rank | Current participant position |
| Participant | Name + avatar/initials |
| College | College/campus |
| Earnings | Total income earned |
| Movement | Rank change |
| Category | Type of earning/hustle |

Example:

```text
#4   Rahul Sharma      ABC University      ₹35,200      ↑ 2
#5   Priya Mehta       XYZ College         ₹31,800      ↓ 1
#6   Karan Singh       LPU                 ₹29,400      ↑ 4
#7   Sneha Gupta       ABC University      ₹27,100      —
```

The list is sorted by **earnings in descending order**.

---

## 👤 3. Your Rank

The current user's ranking is clearly highlighted.

Even if the user is far down the leaderboard, their position remains easy to find.

Example:

```text
YOUR RANK

#18

₹12,450 EARNED

↑ 6 positions this week
```

This creates personalization and prevents lower-ranked users from feeling disconnected from the leaderboard.

---

## 🎯 4. Next Rank Progress

The leaderboard shows users how close they are to overtaking the participant immediately above them.

Example:

```text
You're #18

₹850 more to reach #17

████████████████░░░░ 82%
```

This turns the leaderboard into a **goal-oriented experience** instead of simply displaying rankings.

---

## 📈 5. Rank Movement

Participants can see whether their rank has improved or decreased.

Examples:

```text
↑ 4
↓ 2
—
```

Meaning:

- `↑ 4` → moved up 4 positions
- `↓ 2` → moved down 2 positions
- `—` → no change

This creates a more dynamic and competitive feel.

---

## 🔍 6. Search

Users can search for themselves or other participants.

```text
🔎 Search participants...
```

Search can support:

- Participant name
- Username
- College / campus

The results update dynamically based on the search query.

---

## 🎛️ 7. Filters & Segments

The leaderboard can be filtered based on relevant categories.

### Ranking Period

```text
[ Overall ▼ ]
[ This Week ▼ ]
[ This Month ▼ ]
```

### Optional Segments

```text
[ All India ▼ ]
[ College ▼ ]
[ Category ▼ ]
```

Possible earning categories:

- 💻 Build
- 🎨 Sell
- 🎤 Perform
- 📚 Teach
- 🧑‍💻 Freelance

These categories reflect the different ways participants can earn during the challenge.

---

## 💰 8. Earnings-Focused UI

Because income is the core ranking metric, earnings are displayed prominently.

Example:

```text
₹48,500
TOTAL EARNINGS
```

The UI gives earnings strong visual hierarchy instead of making rank the only important metric.

---

# 🎮 Gamification

Gamification is used intentionally to make the leaderboard more engaging for college students without overcrowding the interface.

### Gamification elements

- 🏆 Top 3 podium
- 📈 Rank movement
- 🎯 Next-rank target
- 💰 Earnings milestones
- 👤 Personal rank
- 📊 Progress indicators
- 🔥 Optional streak/momentum
- 🏅 Optional achievement badges

Possible badges:

```text
🔥 Rising Fast
💰 Top Earner
🚀 Fastest Climber
🏆 Top 10
⭐ Consistent Performer
```

The primary focus remains **clarity + motivation**, not excessive visual effects.

---

# ⚡ Interactions

The interface should feel interactive rather than static.

### Search

Typing in the search field dynamically filters participants.

### Filters

Changing the ranking period or category updates the displayed leaderboard.

### Rank Highlight

The current user's row remains visually identifiable.

### Next-Rank Progress

The progress indicator is calculated from the user's earnings and the earnings of the participant directly above them.

### Hover Effects

On desktop, hovering over a participant can reveal additional information or subtle visual feedback.

### Micro-interactions

Subtle animations can be used for:

- Podium appearance
- Leaderboard row entrance
- Progress bars
- Count-up earnings
- Filter transitions
- Hover states

Animations should be quick and purposeful rather than distracting.

---

# 📱 Responsive / Mobile-First Design

The leaderboard supports:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

### Desktop

The page can include:

- Navigation
- Hero section
- Top 3 podium
- Search and filters
- Ranked leaderboard
- Your Rank card
- Next Rank progress

### Mobile

The layout changes into a compact card/list experience.

Example:

```text
🥇 Aarav Sharma
   ₹48,500

🥈 Riya Gupta
   ₹42,300

🥉 Abhinav Jindal
   ₹39,750

────────────────

#4 Rahul Sharma
₹35,200
↑ 2
```

The most important information remains visible without requiring horizontal scrolling.

---

# 🧮 Leaderboard Logic

The leaderboard uses mock participant earning data for the assignment.

Example participant:

```javascript
{
  id: 1,
  name: "Aarav Sharma",
  college: "ABC University",
  earnings: 48500,
  category: "Build",
  rankChange: 3
}
```

Participants are sorted by earnings in descending order:

```text
Highest Earnings
       ↓
     Rank #1
       ↓
     Rank #2
       ↓
     Rank #3
       ↓
       ...
```

### Example

```text
Aarav    ₹48,500
Riya     ₹42,300
Abhinav  ₹39,750
Rahul    ₹35,200
```

Results in:

```text
Aarav    → #1
Riya     → #2
Abhinav  → #3
Rahul    → #4
```

---

# 🎯 Next Rank Calculation

For a participant currently at rank `N`:

```text
Next Rank Earnings - Current Earnings
```

Example:

```text
Current user earnings = ₹12,450
Next participant      = ₹13,300

Difference            = ₹850
```

The interface displays:

```text
₹850 more to reach #17
```

This gives the participant a clear and achievable short-term target.

---

# 🏗️ Tech Stack

## Frontend

- **React.js**
- **JavaScript / TypeScript**
- **HTML5**
- **Tailwind CSS / CSS3**

## UI & Interaction

- Responsive layout
- Reusable React components
- CSS transitions/keyframes
- Icons
- Cards
- Progress indicators
- Micro-interactions

## Data

The assignment uses a hardcoded/mock dataset of approximately **15–20 participants**.

Each participant can contain:

- Name
- College
- Earnings
- Category
- Avatar / initials
- Rank movement

No backend is required for the assignment.

---

# 🧩 Component Architecture

```text
Leaderboard
│
├── Navbar
│
├── HeroSection
│
├── LeaderboardStats
│
├── Podium
│   ├── FirstPlace
│   ├── SecondPlace
│   └── ThirdPlace
│
├── Filters
│   ├── SearchBar
│   ├── TimeFilter
│   └── CategoryFilter
│
├── LeaderboardTable
│   └── LeaderboardRow
│
├── YourRankCard
│
├── NextRankProgress
│
└── Footer
```

The component structure keeps the UI modular and makes future changes easier.

---

# 📂 Project Structure

```text
eyfi-leaderboard/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Podium.jsx
│   │   ├── LeaderboardRow.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Filters.jsx
│   │   ├── YourRank.jsx
│   │   └── ProgressCard.jsx
│   │
│   ├── data/
│   │   └── participants.js
│   │
│   ├── pages/
│   │   └── Leaderboard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── README.md
└── .gitignore
```

---

# 📊 Sample User Journey

### Step 1 — Open Leaderboard

The participant lands on the leaderboard and immediately sees the top performers.

↓

### Step 2 — See Top 3

The podium highlights the three highest earners.

↓

### Step 3 — Find Yourself

The participant can search for their name or use the highlighted **Your Rank** section.

↓

### Step 4 — Understand Performance

Example:

```text
#18
₹12,450 earned
↑ 6 positions
```

↓

### Step 5 — Get a Target

The system shows:

```text
₹850 more to reach #17
```

↓

### Step 6 — Take Action

The participant now has a clear target to improve their ranking.

---

# ⏱️ Development Plan

The assignment is designed to fit approximately **1–1.5 hours**, so the implementation prioritizes the highest-impact features.

### Phase 1 — Setup & Data
**10 minutes**

- Create React project
- Add mock participant data
- Prepare basic component structure

### Phase 2 — Core UI
**25–30 minutes**

- Navbar
- Hero
- Top 3 podium
- Leaderboard list
- Your Rank card

### Phase 3 — Branding
**15 minutes**

- Dark background
- Orange accents
- Bold typography
- EYFI-inspired spacing and visual hierarchy

### Phase 4 — Interactions
**15 minutes**

- Search
- Filters
- Rank highlight
- Next-rank progress

### Phase 5 — Polish
**10–15 minutes**

- Micro-animations
- Responsive testing
- Final visual cleanup
- Screen recording

---

# 🎥 Assignment Demo

A short **1–10 second video** demonstrates the final experience.

The video should focus on the product rather than explaining the code.

### Suggested sequence

```text
0–2 sec
Leaderboard landing view

↓

2–4 sec
Top 3 podium

↓

4–6 sec
Leaderboard interaction / scrolling

↓

6–8 sec
Your Rank highlighted

↓

8–10 sec
Next-rank progress / interaction
```

A 5–10 second polished demo is sufficient.

---

# 📁 Submission Structure

```text
EYFI-Leaderboard/
│
├── README.md
│
├── Source Code/
│
├── Design/
│
├── Screenshots/
│
└── Demo/
    └── leaderboard-demo.mp4
```

The final Google Drive folder should contain the required supporting files and demo video.

The **folder link** should be submitted through the Google Form as requested in the assignment instructions.

---

# 🚀 Running the Project

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd eyfi-leaderboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

---

# 🎯 Scope

## Included in the Assignment

- ✅ Interactive leaderboard
- ✅ Top 3 podium
- ✅ Earnings-based ranking
- ✅ Participant avatars / initials
- ✅ Search
- ✅ Filters
- ✅ Rank movement
- ✅ Personal rank highlight
- ✅ Next-rank progress
- ✅ Responsive mobile-first UI
- ✅ Gamification elements
- ✅ Mock participant data

## Optional Enhancements

- ⭐ Achievement badges
- ⭐ Streak / momentum indicator
- ⭐ Count-up earnings animation
- ⭐ Shareable rank card
- ⭐ Confetti when rank improves
- ⭐ Additional category views

These are secondary and should only be implemented if time permits.

---

# 🔄 Future Production Integration

The assignment uses mock data, but the frontend can later be connected to a real backend.

Possible API:

```text
GET /api/leaderboard
```

Example response:

```json
[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "college": "ABC University",
    "earnings": 48500,
    "rank": 1,
    "rankChange": 2,
    "category": "Build"
  }
]
```

A production version could later support:

- Real-time leaderboard updates
- Authentication
- User profiles
- Database integration
- Pagination
- Secure API access
- Performance optimization
- Anti-fraud verification of earnings

These are **future considerations and are outside the scope of this assignment**.

---

# 💭 Product Thinking

A leaderboard should not only answer:

> **"Who is #1?"**

It should also answer:

> **"Where am I, and what can I do to move up?"**

The core product idea is therefore to transform the leaderboard from a **static ranking table into a motivating progress system**.

Every major UI decision is built around three things:

**Visibility → Competition → Motivation**

The participant should always know:

**Where they are → Who is ahead → What it takes to move up.**

---

# 👨‍💻 Author

**Abhinav Jindal**

B.Tech CSE — Lovely Professional University

### Interests

- Software Engineering
- Full-Stack Development
- Data Structures & Algorithms
- Cloud Computing
- AI/ML
- Generative AI
- Data Science
