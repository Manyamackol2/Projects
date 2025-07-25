
## 📌 Projects Included
# 1. 🚀 RepoScape – Your GitHub Explorer

Welcome to **RepoScape**, a beautifully designed React app to explore the world of GitHub like never before!  
Search users, discover trending repositories, compare repos, track contributors, and even bookmark your favorites — all in one elegant interface.

![cover](./src/assets/undraw_welcome-cats_tw36.svg)

---

## ✨ Features

- 🔍 **Search GitHub Users**
  - View profiles, top repositories, and user info

- 📈 **Trending Repositories**
  - Discover what’s hot globally on GitHub (via GitHub Trending)

- 📊 **Compare Repositories**
  - Side-by-side comparison of stars, forks, issues, commits, and more

- 📌 **Bookmark & Notes**
  - Bookmark repositories and add personal notes (stored in `localStorage`)

- 🌡️ **Contributor Heatmap**
  - Visualize repo activity using contributor commit trends

- 💅 **Modern UI & Animations**
  - Built with React + Tailwind CSS + Framer Motion for smooth transitions


## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js
- **Data**: GitHub REST API
- **Storage**: localStorage (for bookmarks & notes)

---

## 📂 Project Structure
src/
│
├── components/ # UI components (SearchBar, RepoCard, Sidebar, etc.)
├── pages/ # Page views (CoverPage, TrendingRepos, CompareRepos, etc.)
├── assets/ # Illustrations & icons
├── utils/ # API logic & helpers
└── App.js # Root component


# 2. 🌿 Habit Tracker PWA

A **Progressive Web App (PWA)** built using **React**, **Vite**, **Tailwind CSS**, and **IndexedDB**. This habit tracker helps users stay consistent by tracking daily habits, maintaining streaks, visualizing progress, and working offline.

---

## ✨ Features

- ✅ Track multiple habits per day
- 🔁 Streak tracker to build consistency
- 📊 Analytics dashboard using charts
- 📱 PWA support (installable, works offline)
- 🧠 Data stored in **IndexedDB** (via `idb`)
- 🌈 Calm, soothing UI with TailwindCSS

---

## 🛠 Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **IndexedDB** (`idb`)
- **Chart.js**
- **Workbox** (for PWA)
- **Framer Motion** (animations)

---

src/
├── components/
│   ├── HabitManager.jsx
│   ├── StreakTracker.jsx
│   ├── ProgressAnalytics.jsx
│   └── ...
├── App.jsx
├── main.jsx
├── ...

