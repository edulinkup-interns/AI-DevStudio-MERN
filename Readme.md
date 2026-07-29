# 🚀 AI-DevStudio: Intelligent Code & Content SaaS Analyzer
### 🎓 Official Capstone Project | Full-Stack Developer Track

An advanced, production-grade MERN Stack Micro-SaaS application engineered to analyze source code snippets and technical text assets. Built as the comprehensive **Capstone Project under the EduLinkUp Full-Stack Internship Program**, the platform runs deep structural scans to evaluate code performance metrics, detect security vulnerabilities, optimize syntax, and provide automated debugging solutions via a highly responsive dashboard workspace.

---

## 🛠️ Tech Stack & Architecture

* **Frontend:** React.js, Tailwind CSS, Lucide Icons, Axios (State management & dynamic UI rendering)
* **Backend:** Node.js, Express.js (Modular MVC architecture, Custom Router/Middleware pipeline)
* **Database:** MongoDB Atlas (Mongoose schemas with transactional workflows for users, logs, and billing metrics)
* **AI Integration:** Google Gemini API / OpenAI API SDK (Structured JSON parameter outputs)
* **Security & Ops:** JWT (JSON Web Tokens), bcrypt.js hashing, Express Rate Limiter, CORS protection

---

## 🔥 Core Features

* **🛡️ Secure Token Authentication:** Robust User sign-up and login flow powered by HTTP-Only cookie-based JWT verification.
* **⚡ Live Code & Text Scanning:** Real-time analysis of multi-language scripts (JavaScript, Python, C++, Java) for time-complexity ($O(N)$ syntax mapping) and syntax errors.
* **🧠 Deep AI Diagnostic Engine:** Automated identification of security threats (SQL injections, XSS leaks) with structural fixes generated dynamically.
* **⏳ Rate-Limiting & API Shield:** Custom middleware thresholds protecting API endpoints against concurrent request flooding or DDoS patterns.
* **📊 Analytics Dashboard:** Interactive usage history maps, processing latencies, and total tokens tracked seamlessly per session.

---

## 📁 System Architecture & Directory Layout

```text
ai-devstudio/
├── backend/
│   ├── config/          # Database & AI service initializers
│   ├── controllers/     # Business execution logic (Auth, AI Processing)
│   ├── middleware/      # JWT guards, validation filters, rate-limiters
│   ├── models/          # Mongoose structured Data Schemas
│   ├── routes/          # Express API endpoint declarations
│   └── server.js        # Runtime entry point
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI Atoms (Navbar, Analyzer Forms)
    │   ├── pages/       # Dashboard, Authentication Screens
    │   └── utils/       # API base connection drivers