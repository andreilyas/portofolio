# GitHub Copilot Custom Instructions
**Project:** Personal Portfolio Website - Andre Ilyas
**Owner:** Andre Ilyas (Full-Stack & IT Support Engineer)

---

## 1. Core Project Context
* **Single Source of Truth:** Always reference `#file:PRD.md` for overall architecture, layout specifications, and feature sets.
* **Owner Profile:** Andre Ilyas. Primary focus: Web & Software Development, Troubleshooting & IT Support.
* **Current Phase Status:** Phase 3 (About & Credentials Section).

---

## 2. Visual & Design System Guidelines
* **Theme Vibe:** Dark Space / Galaxy Theme with Glassmorphism UI & Smooth Transitions.
* **Color Palette:**
  * Background: `#0A0D14` / `#0D0B18` (Space Dark)
  * Primary Accent: `#3B82F6` (Electric Blue) & `#8B5CF6` (Purple Glow)
  * Card Fill: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(12px)`
  * Text Colors: `#FFFFFF` (Primary Text), `#9CA3AF` (Muted/Secondary Text)
* **UI Components Style:** Rounded cards (`rounded-2xl` / `rounded-3xl`), pill-shaped buttons, thin semi-transparent borders (`border border-white/10`), and subtle hover glow effects.

---

## 3. Code Quality & Technical Rules
* **Tech Stack:** HTML5, CSS3 / Tailwind CSS, JavaScript (ES6+) / React.
* **Responsiveness:** Always ensure generated code is fully responsive (mobile-first approach or optimized for Desktop, Tablet, and Mobile).
* **Code Structure:**
  * Write clean, semantic, and well-commented code.
  * Keep CSS modular and avoid inline style bloat (prefer Tailwind utility classes or dedicated CSS variables).
  * Ensure accessibility standards (proper `alt` tags for images, ARIA labels for buttons, and semantic HTML tags like `<header>`, `<main>`, `<section>`, `<footer>`).

---

## 4. Interaction & Communication Tone
* Provide code solutions directly without unnecessary conversational filler.
* When suggesting edits or new sections, ensure consistency with existing components in `index.html` and `style.css`.
* Prioritize performance, smooth scroll behaviors, and clean layout rendering.