# AI-DevStudio: Intelligent Code & Content Analyzer

### Capstone Project — Full-Stack Developer Track (EduLinkUp Internship)

A MERN stack Micro-SaaS application in progress, being built to analyze source code snippets and text content — surfacing performance issues, security concerns, and SEO suggestions using an LLM API. This repo documents active development as part of the EduLinkUp Full-Stack Internship capstone.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js (MVC structure)
- **Database:** MongoDB Atlas (Mongoose)
- **AI Integration:** Google Gemini API (planned)
- **Auth:** JWT, bcrypt.js
- **Payments:** Razorpay/Stripe sandbox (planned)

---

## Project Status

🚧 **Actively in development.** Currently in the backend foundation phase.

| Feature | Status |
|---|---|
| Project scaffolding (backend/frontend structure) | ✅ Done |
| MongoDB Atlas connection | ✅ Done |
| User model / schema | ✅ Done |
| JWT authentication (register/login) | 🔜 In progress |
| Gemini API integration for code analysis | ⏳ Planned |
| Gemini API integration for content/SEO analysis | ⏳ Planned |
| Rate limiting (free tier usage caps) | ⏳ Planned |
| Payment gateway sandbox integration | ⏳ Planned |
| Frontend UI (Analyzer, Dashboard, History) | ⏳ Planned |
| Deployment (Render + Vercel) | ⏳ Planned |

---

## Directory Structure

```text
Code-Analyzer/
├── backend/
│   ├── src/
│   │   ├── config/          # DB connection
│   │   ├── controllers/     # Route logic
│   │   ├── middleware/      # Auth guards, rate limiting
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API endpoints
│   │   ├── services/        # LLM API, payment logic
│   │   └── app.js
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        ├── context/
        └── services/
```

---

## Planned Core Features

- Secure JWT-based authentication
- Code snippet analysis: performance notes, security issue flags
- Blog/content draft analysis: SEO suggestions
- Free tier (limited daily analyses) vs paid tier via payment sandbox
- Analysis history dashboard

---

## Setup

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (once scaffolded)
cd frontend
npm install
npm run dev
```

Environment variables required (`backend/.env`):
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

*This README will be updated feature-by-feature as development progresses.*