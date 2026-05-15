# Sadanand Kumar — Portfolio Website

> **Live Site:**  my-portfolio-sadanand.vercel.app

A fully responsive, animated personal portfolio website built with React + Vite, featuring a cinematic Infinity Nebula moon theme, 3D parallax effects, and on-scroll animations.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Parallax | react-scroll-parallax |
| Icons | Lucide React + Inline SVGs |
| Fonts | Space Grotesk + Inter (Google Fonts) |
| Deployment | Vercel |

---

## ✨ Features

- **Cinematic Moon Hero** — Real NASA moon photo with 3D mouse-tracking tilt effect
- **Infinity Nebula Theme** — Deep void black + teal neon + violet + pink palette
- **Parallax Scrolling** — Background orbs and starfield move at different scroll speeds
- **On-Scroll Animations** — Every section fades/slides in using Framer Motion
- **Fully Responsive** — Mobile (375px), Tablet (768px), Desktop (1280px)
- **Accessibility** — `prefers-reduced-motion` respected globally
- **5 Real Projects** — RAG Intelligence, YOLOv8 Detection, Movie Engine, NFT Launchpad, Price Tracker

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with mobile hamburger
│   ├── ProjectCard.jsx     # Animated project card component
│   └── AnimatedSection.jsx # Reusable scroll animation wrapper
├── sections/
│   ├── Hero.jsx            # 3D moon + parallax hero
│   ├── About.jsx           # Bio, stats, education, certifications
│   ├── Skills.jsx          # 24 skills grid with category badges
│   ├── Projects.jsx        # 5 project cards
│   ├── Contact.jsx         # Email, GitHub, LinkedIn, Phone
│   └── Footer.jsx          # Footer with nav links
├── data/
│   └── portfolioData.js    # ← All content lives here
├── App.jsx
├── main.jsx
└── index.css               # Global styles + Tailwind + reduced-motion
```

---

## 🛠️ Running Locally

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/the-sadanand/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

**Build for production:**
```bash
npm run build
npm run preview
```

---

## 📝 Customization

All personal content is in one file — `src/data/portfolioData.js`:

```js
export const personalInfo = { name, title, bio, email, github, ... }
export const skills = [ { name, icon, category }, ... ]
export const projects = [ { title, description, techStack, githubUrl, ... }, ... ]
```

Edit that file and the whole site updates automatically.

---

## 📊 Lighthouse Scores (Target)

| Category | Score |
|---|---|
| Performance | 80+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 85+ |

---

## 👨‍💻 Author

**Sadanand Kumar**
- Email: thesadanand.toponed0@gmail.com
- GitHub: [@the-sadanand](https://github.com/the-sadanand/)
- LinkedIn: [sadanand-kumar](https://www.linkedin.com/in/sadanand-kumar/)

---

## 📄 License

MIT — feel free to use this as a template with attribution.
