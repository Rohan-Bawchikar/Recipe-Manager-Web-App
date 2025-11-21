# 🥗 Recipe Manager Web App

> A modern, responsive, and feature-rich JavaScript application for managing your personal recipe collection.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/built%20with-Vanilla%20JS-yellow)

## 📖 Overview

The **Recipe Manager** is a Single Page Application (SPA) built with vanilla JavaScript that allows users to create, read, update, and delete (CRUD) recipes. It utilizes **Local Storage** for data persistence, meaning your recipes are saved in your browser without needing a backend database.

The application features a sleek, gradient-based UI with support for **Dark Mode**, comprehensive filtering, and a responsive grid layout that works beautifully on mobile and desktop.

## ✨ Key Features

- **Create & Manage:** Add new recipes with detailed ingredients, steps, cooking times, and images.
- **Edit & Delete:** Full control to update existing recipes or remove them permanently.
- **📌 Pinning System:** Pin your favorite recipes to keep them at the top of the list.
- **🔍 Smart Search & Filtering:**
  - Real-time search by recipe title.
  - Filter by Difficulty (Easy, Medium, Hard).
  - Filter by Diet Type (Vegetarian, Non-Vegetarian).
- **🌓 Dark Mode:** Fully integrated dark theme that persists across sessions using Local Storage.
- **📱 Fully Responsive:** Adaptive grid layout and mobile-optimized forms.
- **Data Persistence:** All data is stored in `localStorage`, ensuring data isn't lost on refresh.
- **Form Validation:** Ensures all required fields and numeric values are correct before saving.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure.
- **CSS3:** Custom variables, Flexbox, Grid, Glassmorphism effects, and Radial Gradients.
- **JavaScript (ES6+):** Modular architecture using ES Modules (`import`/`export`).
- **FontAwesome:** For UI icons.
- **Google Fonts:** Typography (Poppins).

## 📂 Project Structure

The project uses a modular JavaScript architecture to keep code clean and maintainable:

```text
/
├── index.html          # Main entry point
├── style.css           # Global styles, themes, and responsive design
├── app.js              # Main controller and initialization logic
├── ui.js               # UI rendering, DOM manipulation, and View switching
├── storage.js          # LocalStorage wrapper (CRUD operations)
└── validation.js       # Form validation logic
```
