# Mohit Sharma — Frontend Web Developer Portfolio

A modern, premium-quality personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Features

- **Design & Theme**: High-end dark theme inspired by modern SaaS and developer interfaces (`#080B14`, `#101827`, `#6366F1`, `#06B6D4`).
- **Interactive Hero**: Dynamic typewriter effect, floating technology badges (HTML5, CSS3, JavaScript, React.js), and glowing animated profile frame.
- **About Me**: Highlights background, core strengths, and interactive cards for Frontend Development, Continuous Learning, and Problem Solving.
- **Skills Showcase**: Categorized cards with real competencies (HTML5, CSS3, JavaScript, React.js, Node.js [Currently Learning], VS Code, Git/GitHub, Soft Skills) — *no invented or fake percentages*.
- **Experience Timeline**: Modern vertical timeline detailing self-directed frontend development and practical milestones.
- **Featured Projects**:
  1. **E-Commerce Website** (React.js, HTML, CSS, JavaScript)
  2. **News Website** (React.js, News API)
  3. **Weather App** (React.js, Weather API)
  4. **Rock-Paper-Scissors Game** (HTML, CSS, JavaScript)
  Includes custom browser-frame mockups, technology badges, live preview triggers, and repository links.
- **Education Timeline**: MCA (Pursuing, J.P. Institute of Engineering Technology), BCA (Completed, College of Applied Education and Health Science), and Class XII.
- **Contact Section**: Phone (`+91-9068582691`), Email (`Mohitsharma701708@gmail.com`), one-click copy buttons, client-side validation, and instant email draft launcher.
- **Interactive Resume Modal**: View and print/download full resume.
- **Responsive**: 100% mobile-friendly with sliding drawer navigation and zero horizontal overflow.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React**

---

## 📁 Project Structure

```
portfilyo/
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Modular React components
│   │   ├── About.jsx
│   │   ├── BackgroundGlow.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeModal.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js # Centralized, easy-to-edit portfolio data
│   ├── App.jsx             # Main application layout & scroll progress
│   ├── index.css           # Custom scrollbar, glassmorphism & gradients
│   └── main.jsx            # React root mount
├── index.html              # SEO metadata & Google Fonts
├── package.json            # Scripts & dependencies
├── tailwind.config.js      # Custom theme colors & animations
└── vite.config.js          # Vite configuration
```

---

## ⚙️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Personal Details

All personal information, social URLs, project links, and skills are centralized in:
👉 [`src/data/portfolioData.js`](file:///c:/Users/DELL/portfilyo/src/data/portfolioData.js)

To replace the profile image placeholder with your real photo:
1. Place your photo inside `public/` (e.g. `public/profile.jpg`).
2. Update the image `src` in [`src/components/Hero.jsx`](file:///c:/Users/DELL/portfilyo/src/components/Hero.jsx).
