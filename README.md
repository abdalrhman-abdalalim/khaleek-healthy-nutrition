# 🥗 AI-Powered Nutrition & Fitness Assistant

## 📋 Overview

An AI-driven web application that helps users track their nutrition and fitness activities and receive personalized recommendations based on their goals, body data, and lifestyle.

The platform enables users to log meals using voice or text input, automatically analyzes nutritional values via external APIs, tracks training activities, and generates weekly AI-powered recommendations to improve consistency and results.

This project focuses on delivering a clean MVP, emphasizing usability, performance, and real-world system design rather than medical or advanced coaching features.

---

## 🚀 Features

### 🔐 Authentication & Onboarding
- Secure email/password authentication
- User onboarding with body metrics and fitness goals
- Automatic calculation of BMR, TDEE, and daily calorie targets

### 🍽️ Nutrition Tracking
- Voice-based food logging using Speech-to-Text
- Text-based food input with quick-add support
- Automatic calorie & macronutrient analysis
- Daily nutrition summaries and progress tracking

### 🏋️ Training Activity Logging
- Workout logging (type, duration, calories burned)
- MET-based calorie burn estimation
- Weekly activity summaries

### 🤖 AI Recommendations
- Weekly AI-generated nutrition & fitness tips
- Recommendations adapted to:
  - User goals
  - Diet preferences
  - Budget constraints
  - Adherence and progress

### 📊 Dashboard & Reports
- Personalized dashboard
- Daily calorie & macro progress
- Weekly adherence insights
- Historical progress charts

---

## 🧱 Tech Stack

### Frontend
- **Next.js** (React)
- **Tailwind CSS**
- Responsive, mobile-first UI

### Backend
- **Laravel** (REST API)
- JWT Authentication
- Input validation & rate limiting

### Database
- **MySQL / PostgreSQL**

### External Services
- **CalorieNinjas API** – Nutrition analysis
- **Speech-to-Text API** (Whisper or equivalent)
- **AI Model API** (GPT or similar)

---

## 🧠 System Overview

1. **User logs food** via voice or text
2. **Food data is analyzed** using nutrition APIs
3. **Daily & weekly metrics** are calculated
4. **AI engine generates** personalized recommendations
5. **User tracks progress** via dashboard

---

## 🎯 Project Scope

### ✅ In Scope (MVP)
- Nutrition & training tracking
- AI-based weekly recommendations
- User progress reporting

### ❌ Out of Scope
- Wearable integrations
- Medical diagnoses
- Meal delivery services
- Mobile applications
- Social features

---

## 🔒 Non-Functional Highlights
- Optimized for mobile users
- Secure API communication (HTTPS + JWT)
- Graceful handling of external API failures
- Scalable MVP architecture

---

## 📄 Documentation
- **Software Requirements Specification (SRS)**
- **Business Requirements Document (BRD)**
- **Product Requirements Document (PRD)**
- **API documentation** (OpenAPI / Swagger)

---

## 📌 Notes
- This project focuses on system design and MVP implementation
- Recommendations are informational only and not medical advice
- Designed for extensibility in future versions
