# 📘 SelectIQ – AI-Powered Interview & Assessment Platform  

> **Make Hiring Smart, Simple & Scalable.**  
SelectIQ is a modern MERN + AI platform that streamlines **assessments, coding rounds, and AI-driven interviews** – all in one place.  

<p align="center">
  <a href="https://github.com/manuVrtti/select_iq/actions"><img src="https://github.com/manuVrtti/select_iq/actions/workflows/ci.yml/badge.svg?branch=main" alt="Build Status"></a>
  <a href="https://select-iq.vercel.app"><img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel" alt="Vercel Deploy"></a>
  <a href="https://github.com/manuVrtti/select_iq/stargazers"><img src="https://img.shields.io/github/stars/manuVrtti/select_iq?style=social" alt="GitHub Stars"></a>
  <a href="https://github.com/manuVrtti/select_iq/network/members"><img src="https://img.shields.io/github/forks/manuVrtti/select_iq?style=social" alt="GitHub Forks"></a>
  <a href="https://github.com/manuVrtti/select_iq/graphs/contributors"><img src="https://img.shields.io/github/contributors/manuVrtti/select_iq" alt="Contributors"></a>
  <a href="https://github.com/manuVrtti/select_iq/issues"><img src="https://img.shields.io/github/issues/manuVrtti/select_iq" alt="Issues"></a>
  <a href="https://github.com/manuVrtti/select_iq/blob/main/LICENSE"><img src="https://img.shields.io/github/license/manuVrtti/select_iq" alt="License"></a>
</p>

---

## 📑 Table of Contents
- [✨ Features](#-features)  
- [🖼️ Architecture](#️-architecture)  
- [⚡ Tech Stack](#-tech-stack)  
- [📂 Project Structure](#-project-structure)  
- [⚙️ Setup & Installation](#️-setup--installation)  
- [🧪 Usage Flow](#-usage-flow)  
- [🚀 Deployment](#-deployment)  
- [🤝 Contributing](#-contributing)  
- [📜 License](#-license)  

---

## ✨ Features  
✅ **Assessment Round** – MCQs, reasoning, CS fundamentals, SQL, cloud, OS, DBMS etc.  
✅ **Coding Round** – Real coding questions with testcases & execution.  
✅ **AI Interview** – Conversational AI-powered interview with voice support.  
✅ **Supabase Auth** – Secure login, session management.  
✅ **Dark/Light Mode** – Powered by `next-themes`.  
✅ **Smooth Animations** – GSAP + Framer Motion.  
✅ **Analytics & Insights** – via Vercel Analytics & Speed Insights.  

---

## 🖼️ Architecture  

```mermaid
flowchart TD
    subgraph Client[Frontend - Next.js 15]
        UI[React + Tailwind UI]
        Auth[Supabase Auth Helpers]
        Theme[Dark/Light Mode]
    end

    subgraph Server[Supabase Backend]
        DB[(Postgres DB)]
        Storage[File/Resume Storage]
        Realtime[Realtime API]
    end

    subgraph AI[AI & Interviews]
        OpenAI[OpenAI GPT APIs]
        Vapi[Voice AI (Vapi.ai)]
    end

    Client -->|Auth/API Calls| Server
    Client -->|Voice/Chat| AI
    AI -->|Insights| Client
```

---

## ⚡ Tech Stack  

**Frontend:**  
- ⚛️ React 19 + Next.js 15  
- 🎨 TailwindCSS 4 + shadcn/ui + Framer Motion + GSAP  
- 🌗 next-themes for dark/light mode  

**Backend:**  
- 🟢 Supabase (Auth, Database, Realtime, Storage)  

**AI Integration:**  
- 🤖 OpenAI GPT APIs (interview analysis, feedback)  
- 🎙️ Vapi.ai (real-time voice interview experience)  

**DevOps & Deployment:**  
- ▲ Vercel (CI/CD + Hosting)  
- 🔍 Vercel Analytics + Speed Insights  

---

## 📂 Project Structure  

```
select_iq/
├── app/                  # Next.js App Router
│   ├── page.jsx          # Landing / Interview page
│   └── ...               
├── components/           # Reusable UI components
│   └── ui/               # shadcn/ui components
├── context/              # React Context (InterviewDataContext etc.)
├── lib/                  # Utilities
├── public/               # Static assets
├── styles/
│   └── globals.css       # Tailwind base styles
├── .env.local            # Environment variables
├── next.config.mjs       # Next.js config
├── tailwind.config.js    # Tailwind config
├── package.json          # Dependencies & scripts
└── README.md             # 📘 You are here
```

---

## ⚙️ Setup & Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/manuVrtti/select_iq.git
cd select_iq
```

### 2️⃣ Install Dependencies  
```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables  
Create a `.env.local` file:  
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your-vapi-key
OPENAI_API_KEY=your-openai-key
```

### 4️⃣ Run Development Server  
```bash
npm run dev
```
Visit 👉 [http://localhost:3000](http://localhost:3000)  

---

## 🧪 Usage Flow  

1. **Login / Signup** via Supabase  
2. **Choose Assessment Round**  
   - MCQs, reasoning, CS fundamentals  
3. **Coding Round**  
   - Solve coding problems with testcases  
4. **AI Interview**  
   - Real-time voice/video AI interview (Vapi + OpenAI)  
5. **Get Feedback & Report**  

---

## 🚀 Deployment  

Deployed easily on **Vercel**:  
```bash
npm run build
vercel deploy
```

---

## 🤝 Contributing  

We welcome contributions! 🎉  

1. Fork the repo  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m 'Add feature'`  
4. Push branch: `git push origin feature-name`  
5. Create a Pull Request  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

💡 *SelectIQ: Redefining hiring with AI, voice, and automation.*  
