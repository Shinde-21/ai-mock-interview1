# 🧠 AI Mock Interview Platform

AI Mock Interview is a modern web platform designed to simulate job interviews using voice-enabled AI agents. Built with **Next.js**, **Firebase**, **TailwindCSS**, and **Vapi**, it offers an interactive and effective way to prepare for job interviews by integrating powerful AI technologies like **Google Gemini**.

> 🚀 This project helps you learn how to integrate AI models into your applications in a hands-on way.

---

## 🔋 Features

- 🔐 **Authentication**: Sign up and sign in using Firebase email/password authentication.
- 🎙️ **Create Interviews**: Generate interviews instantly with the help of **Vapi Voice Assistants** and **Google Gemini**.
- 💬 **AI Feedback**: Conduct interviews with AI voice agents and receive real-time feedback with transcripts.
- 🖥️ **Modern UI/UX**: Clean and user-friendly interface for a seamless experience.
- 📄 **Interview Page**: Voice-powered interview sessions with real-time analysis and detailed feedback.
- 📊 **Dashboard**: Track and manage all your interviews easily.
- 📱 **Responsive Design**: Works flawlessly across mobile, tablet, and desktop devices.
- 🧱 **Modular Architecture**: Designed with reusability and scalability in mind.

---

## ⚡ Quick Start

Follow these steps to set up the project locally.

### ✅ Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

---

### 📁 Clone the Repository

```bash
git clone https://github.com/Shinde-21/ai-mock-interview1.git
cd ai-mock-interview1

npm install

Create a file named .env.local in the root directory and add the following variables:

env
Copy code
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=





🔐 Replace the placeholders with your actual Firebase, Google Gemini, and Vapi credentials.

Run the Project
npm run dev


Visit http://localhost:3000 in your browser to start using the platform.
