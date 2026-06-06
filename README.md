# Elementum — React Landing Page

**Assignment submission for Ishank | Deadline: 06 June 2026**

## Tech Stack
- React 18 + Vite 5
- Plain CSS (no Tailwind, no CSS-in-JS)
- Functional components
- IntersectionObserver for scroll animations
- Unsplash for real team/testimonial photos

---

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build

# 4. Preview build
npm run preview
```

**Node.js 18+ required.**

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install CLI
npm install -g vercel

# Deploy from project root
vercel

# Prompts:
#  Set up and deploy? → Y
#  Which scope? → your account
#  Link to existing project? → N
#  Project name? → elementum (or anything)
#  Directory? → ./  (press Enter)
#  Override settings? → N

# Production deploy
vercel --prod
```

Your live URL will be printed: `https://elementum-xxx.vercel.app`

### Option B — GitHub + Vercel Dashboard

```bash
# Push to GitHub
git init
git add .
git commit -m "feat: Elementum landing page"
git remote add origin https://github.com/YOUR_USERNAME/elementum.git
git push -u origin main
```

1. Go to https://vercel.com → **Add New Project**
2. Import your GitHub repo
3. Vercel auto-detects Vite — no config needed:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy** → live in ~60 seconds

---

## Project Structure

```
elementum/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── index.css          ← CSS variables, reset
    ├── App.css
    ├── App.jsx
    ├── main.jsx
    └── components/
        ├── Navbar/        ← Sticky nav, mobile hamburger
        ├── Hero/          ← Headline + floating avatars + shapes
        ├── InfoSection/   ← Two alternating image/text rows
        ├── Services/      ← 3-row services list with hover
        ├── Testimonials/  ← Card + side avatars
        ├── Newsletter/    ← Email capture, green bg
        └── Footer/        ← 4-column dark footer
```

## Features

- ✅ Responsive: mobile 375px / tablet 768px / desktop 1200px+
- ✅ Sticky navbar with blur + shadow on scroll
- ✅ Mobile hamburger with animated X toggle
- ✅ Scroll-reveal animations via IntersectionObserver
- ✅ Floating avatar animations in hero
- ✅ Real photos from Unsplash (no placeholders)
- ✅ Working email subscribe form with success state
- ✅ Hover effects on nav links, service rows, avatars, buttons
- ✅ CSS variables for consistent theming
- ✅ Playfair Display + DM Sans font pairing
- ✅ No animation libraries — pure CSS keyframes
