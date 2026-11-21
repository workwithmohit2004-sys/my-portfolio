# Mohit Sharma — Frontend Web Developer Portfolio

A modern, premium-quality personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Resend** for server-side email delivery.

---

## 🚀 Features

- **Design & Theme**: High-end dark theme inspired by modern SaaS and developer interfaces (`#080B14`, `#101827`, `#6366F1`, `#06B6D4`).
- **Interactive Hero**: Dynamic typewriter effect, floating technology badges (HTML5, CSS3, JavaScript, React.js), real profile picture with subtle hover zoom, and glowing animated profile frame.
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
- **Contact Section with Real Email Delivery**: 
  - Direct delivery to `mohitsharma701708@gmail.com` powered by **Resend**.
  - **Zero mailto: redirects or blank tabs**.
  - Sets the visitor's email address as the `Reply-To` header so clicking "Reply" in Gmail replies directly to the sender.
  - Server-side input validation, HTML sanitization, rate limiting, and honeypot spam bot protection.
  - Interactive states: *Sending Message...*, green success notification with form reset, and red error notification with form preservation.
  - Functional Phone and Email copy buttons with visible "Copied!" tooltips.
- **Interactive Resume Modal**: View and print/download full resume.
- **Responsive**: 100% mobile-friendly with sliding drawer navigation and zero horizontal overflow.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React**
- **Resend** (Email Delivery API)

---

## 📁 Project Structure

```
portfilyo/
├── api/
│   └── send-email.js       # Vercel Serverless Function for production /api/send-email
├── server/
│   └── emailHandler.js     # Shared email processor: validation, sanitization & Resend call
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Modular React components
│   │   ├── About.jsx
│   │   ├── BackgroundGlow.jsx
│   │   ├── Contact.jsx     # Direct email contact form (API integration)
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx        # Developer profile & floating tech stack
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeModal.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio configuration
│   ├── App.jsx             # Main layout & scroll progress
│   ├── index.css           # Custom scrollbar, glassmorphism & gradients
│   └── main.jsx            # React root mount
├── .env.example            # Environment variables template
├── .env                    # Local environment variables (do not commit)
├── index.html              # SEO metadata & Google Fonts
├── package.json            # Scripts & dependencies
├── tailwind.config.js      # Custom theme colors & animations
└── vite.config.js          # Vite config with local dev API middleware
```

---

## ⚙️ How to Configure Resend & Environment Variables

### 1. Get Your Free Resend API Key
1. Go to [https://resend.com](https://resend.com) and create a free account.
2. Navigate to **API Keys** and click **Create API Key**.
3. Copy your key (starts with `re_...`).

### 2. Configure `.env` File
In your root folder, open `.env` and set your key:
```env
# Your Resend API Key
RESEND_API_KEY=re_your_actual_key_here

# Your email where contact inquiries will arrive
CONTACT_EMAIL=mohitsharma701708@gmail.com

# From address (use onboarding@resend.dev during testing or your verified domain)
FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

---

## 🚀 Running Locally

### 1. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000`. The Vite dev server will automatically handle POST requests to `/api/send-email` using your `.env` configuration!

### 2. Build for Production
```bash
npm run build
```

---

## 🌐 Production Deployment (Vercel)

When deploying to [Vercel](https://vercel.com):

1. Push your project to GitHub.
2. Import your GitHub repository in Vercel.
3. In **Project Settings** > **Environment Variables**, add:
   - `RESEND_API_KEY` = your Resend API key (`re_...`)
   - `CONTACT_EMAIL` = `mohitsharma701708@gmail.com`
   - `FROM_EMAIL` = `Portfolio Contact <onboarding@resend.dev>` (or your verified domain)
4. Deploy! Vercel automatically deploys [`api/send-email.js`](file:///c:/Users/DELL/portfilyo/api/send-email.js) as a secure serverless endpoint.
