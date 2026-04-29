# Jai Koushik Kotra — Portfolio 🧑‍💻

My personal portfolio website built with React, Three.js, and GSAP. It features an interactive 3D character, smooth scroll animations, and a physics-based tech stack visualizer.

🔗 **Live:** *coming soon*

---

## ✨ Highlights

- **Interactive 3D Avatar** — A rigged character that tracks your cursor in real-time
- **Physics-Based Skills Section** — Bouncing tech spheres you can interact with using Rapier physics
- **Smooth Scroll Animations** — Powered by GSAP ScrollSmoother and ScrollTrigger
- **Horizontal Project Carousel** — Scroll-driven showcase of my work
- **Fully Responsive** — Adapts across desktop, tablet, and mobile

---

## ⚙️ Tech Stack

| Category | Tools |
|----------|-------|
| Frontend | React, TypeScript, CSS |
| 3D / WebGL | Three.js, React Three Fiber, Drei, Rapier |
| Animation | GSAP, ScrollTrigger, ScrollSmoother |
| Build | Vite |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/koushikjai/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

> **Note:** This project uses GSAP trial plugins (ScrollSmoother). These work in development but cannot be used in production hosting. For production, you'll need a [GSAP Club](https://gsap.com/pricing/) membership.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Character/     # 3D avatar scene, animations, lighting
│   ├── Landing.tsx    # Hero section
│   ├── About.tsx      # About me
│   ├── WhatIDo.tsx    # Skills breakdown
│   ├── Career.tsx     # Experience timeline
│   ├── Work.tsx       # Projects showcase
│   ├── TechStack.tsx  # Physics-based skills visualizer
│   └── Contact.tsx    # Contact & socials
├── context/           # Loading state provider
├── data/              # Bone animation data
└── assets/            # Static assets
```

---

## 📬 Contact

- **Email:** koushikjai138@gmail.com
- **LinkedIn:** [jai-koushik](https://www.linkedin.com/in/jai-koushik-2243073b3/)
- **GitHub:** [koushikjai](https://github.com/koushikjai)

---

## 📄 License

This project is open source. Original template by [Moncy Yohannan](https://github.com/MoncyDev/Portfolio-Website), customized and extended by Jai Koushik Kotra.
