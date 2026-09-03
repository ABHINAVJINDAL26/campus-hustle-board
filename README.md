# 🏆 EYFI Challenge — Interactive Leaderboard

> **"Don't just show the rank — motivate the participant to reach the next one."**

An interactive, gamified, and responsive **Leaderboard experience for the EYFI (Earn Your First Income) Challenge**, designed specifically for ambitious college students across India.

---

## ⚡ Live Highlights & Features

### 🥇 1. Top 3 Champions Podium
- **1st Place (Gold)**: Elevated center card with shimmering gold halo, crown emblem, and earnings spotlight.
- **2nd Place (Silver)** & **3rd Place (Bronze)**: Distinguished pedestals with category tags, streak indicators, and rank jumps.
- **Interactive**: 1-click modal to inspect verified income breakdown for any champion.

### 👤 2. "Your Rank" Focus & Goal-Driven Targets
- **Personal Standings**: Clear spotlight on the user's current rank (`#18`), verified earnings (`₹12,450`), and weekly movement (`↑ 6`).
- **Live Next-Rank Math**: Calculates real-time gap to overtake the participant immediately above:
  $$\text{Target Gap} = \text{Next Rank Earnings} - \text{Current Earnings}$$
  *(e.g., "₹850 more to overtake #17")*
- **Animated Progress Bar**: Dynamic completion percentage towards the next rank.
- **Persona Switcher**: Dropdown in the header to preview the experience from any student's perspective.

### 🔍 3. Instant Search & Multi-Level Filters
- **Smart Search**: Filter by student name, `@handle`, campus, hustle category, or exact `#rank` number.
- **Timeframe Modes**: `Overall (30 Days)`, `This Week`, and `Today`.
- **Hustle Category Chips**: 💻 `Build`, 🎨 `Sell`, 🧑‍💻 `Freelance`, 📚 `Teach`, 🎤 `Perform`.
- **Campus Selector**: Filter participants across 16+ Indian universities (LPU, IITs, DTU, VIT, etc.).
- **Dynamic Sorting**: By Highest Earnings, Fastest Climbers, or Longest Streaks.

### 🎮 4. Real-Time Earning Simulator & Gamification
- **"Log Income" Modal**: Add client payments or gig sales with custom or preset amounts (+₹500, +₹1,000, +₹2,500, etc.).
- **Live Recalculation**: Ranks re-sort in real time, the live ticker pulses, celebratory **confetti** bursts, and Web Audio synthesizers play celebratory chimes.

### 📱 5. 100% Mobile-First Responsiveness
- **Desktop**: High-density glassmorphism table with active-user glowing indicators.
- **Mobile Card Stream**: Zero horizontal overflow with full touch-friendly spacing.
- **Persistent Mobile Sticky Bar**: Bottom bar keeping your rank, earnings, and quick "+Boost" action at your fingertips.

### 🗂️ 6. Transaction Drawer & Social Share Card
- **Detailed Profile**: Itemized breakdown of verified gigs, income timeline, and badges (🔥 *Rising Fast*, 💰 *Top Earner*, 🚀 *Fastest Climber*).
- **Social Story Card**: Generate high-res Instagram / LinkedIn story-style cards with one-tap clipboard copy.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Reusable UI component architecture & fast state updates |
| **Vite** | Modern, lightning-fast build tool and dev server |
| **Tailwind CSS** | Custom dark neon design system, responsive utilities, and glassmorphism |
| **Lucide Icons** | Crisp, scalable icon library |
| **Canvas Confetti** | Celebratory milestone and rank-jump particle effects |
| **Web Audio API** | Zero-dependency synthesized audio chimes for tactile feedback |

---

## 📂 Project Structure

```text
campus-hustle-board/
├── public/
│   └── favicon.svg             # Glowing EYFI rupee mark
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with countdown & persona switcher
│   │   ├── HeroStats.jsx       # Pulse ticker & aggregated statistics
│   │   ├── Podium.jsx          # Top 3 Olympic Champions showcase
│   │   ├── YourRankCard.jsx    # Personalized focus & next-rank progress
│   │   ├── Filters.jsx         # Search, category chips, and dropdowns
│   │   ├── LeaderboardTable.jsx# High-density ranked standings table
│   │   ├── LeaderboardRow.jsx  # Responsive row & mobile card
│   │   ├── MobileStickyBar.jsx # Persistent mobile bottom status bar
│   │   ├── LogEarningModal.jsx # Interactive income simulation modal
│   │   ├── ProfileModal.jsx    # Verified transaction history drawer
│   │   ├── ShareRankCard.jsx   # Social story card preview & copy
│   │   └── Footer.jsx          # Mission quote and author attribution
│   ├── data/
│   │   └── participants.js     # Mock dataset of 22 student hustlers
│   ├── utils/
│   │   ├── formatters.js       # Currency formatting & badge helpers
│   │   └── sound.js            # Web Audio chime synthesizers
│   ├── App.jsx                 # State management & dynamic rankings
│   ├── main.jsx                # React root mount
│   └── index.css               # Tailwind directives & glass tokens
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/ABHINAVJINDAL26/campus-hustle-board.git
cd campus-hustle-board
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 👨‍💻 Author

**Abhinav Jindal**  
*B.Tech CSE — Lovely Professional University*  
- **GitHub**: [@ABHINAVJINDAL26](https://github.com/ABHINAVJINDAL26)
