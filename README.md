# 💍 Wedding Invitation — Kevin & Stefanie

A modern **digital wedding invitation website** built with **Next.js App Router** and **Tailwind CSS**.
Created as part of a recruitment technical test and portfolio project.

---

## ✨ Features

* 🎨 Elegant wedding landing page
* 📱 Fully responsive design (mobile & desktop)
* 🖋 Custom Google & local fonts support
* 🖼 Photo slideshow gallery
* 📍 Location section
* 👗 Dresscode section
* 💌 RSVP confirmation system
* 📝 Personal message / wishes board

  * Default wishes included
  * Add new wishes dynamically
  * Saved in localStorage (persist after refresh)
* 🔽 Smooth scrolling navigation (custom hook)
* 🎬 Scroll animation using AOS

---

## 🛠 Tech Stack

* **Next.js (App Router)**
* **React + TypeScript**
* **Tailwind CSS**
* **AOS (Animate On Scroll)**
* **LocalStorage**

---

## 📂 Project Structure

```id="tree1"
app/
 ├─ (pages)/kevin-stefanie/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   └─ style.css
 │
 ├─ components/kevin-stefanie/
 │   ├─ Header.tsx
 │   ├─ Hero.tsx
 │   ├─ TheWedding.tsx
 │   ├─ DateWedding.tsx
 │   ├─ Location.tsx
 │   ├─ Dresscode.tsx
 │   ├─ PhotoSlideshow.tsx
 │   ├─ PersonalMessage.tsx
 │   ├─ Rsvp.tsx
 │   └─ Footer.tsx
 │
 ├─ hooks/
 │   └─ useScrollSmooth.ts
 │
 ├─ fonts/
 │   └─ Safira March Personal Use Only.ttf
 │
 ├─ globals.css
 ├─ layout.tsx
 └─ page.tsx

public/
 └─ images/kevin-stefanie/
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```id="install1"
npm install
```

### 2️⃣ Run development server

```id="run1"
npm run dev
```

### 3️⃣ Open in browser

```id="url1"
http://localhost:3000/kevin-stefanie
```

---

## 🔤 Fonts Used

* Cormorant Garamond (Google Font)
* EB Garamond (Google Font)
* Bona Nova SC (Google Font)
* Safira March (Local Font)
* Constantine (Local Font)

Local fonts stored in:

```id="fonts1"
/app/fonts
```

---

## 🧠 Custom Hooks

### `useScrollSmooth.ts`

Handles smooth scrolling navigation between sections.

Example:

```id="hook1"
const scrollTo = useScrollSmooth()
scrollTo('#wedding')
```

---

## 💾 Wishes Data Persistence

Personal messages:

* Default messages loaded initially
* Stored in browser **localStorage**
* Automatically updated on submit
* Persist after refresh
* Reset if storage cleared

---

## 📱 Responsiveness

Built mobile-first using Tailwind utilities:

* `md:` breakpoint adjustments
* Flexible widths/heights
* Responsive typography
* Optimized hero & slideshow layout

---

## 🎯 Purpose

This project demonstrates:

* Next.js App Router structure
* Component modularization
* Responsive UI implementation
* LocalStorage state persistence
* Custom hooks usage
* Clean Tailwind styling

---

## 👨‍💻 Author

**Wiyan Barkah Elmansyah**
Fullstack Web Developer

---

## 📜 License

For recruitment test and portfolio demonstration only.