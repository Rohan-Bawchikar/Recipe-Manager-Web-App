# 🎨 **Modern Gradient + Premium Portfolio README.md (Updated Version)**

```md
<div align="center">

# 🥗 Recipe Manager Web App

### **A Beautiful, Modern & Fully Responsive JavaScript CRUD Application**

✨ A visually appealing, gradient-themed recipe management system built using **Vanilla JS**, **LocalStorage**, and a clean modular architecture.  
No backend. No database. **Pure client-side magic.**

<br>

<img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Frontend-Vanilla%20JS-yellow?style=for-the-badge" />
<img src="https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge" />

</div>

---

# 🎥 Live Demo

### 🚀 Try the Live Project

🔗 **Live Demo:** [Click Here](https://rohan-bawchikar.github.io/Recipe-Manager-Web-App/)

### 🎞️ Live Demo GIF

<img src="Assets/demo.gif" width="600" />

---

# 📖 Overview

The **Recipe Manager Web App** is a polished, feature-rich Single Page Application that lets users:

- Create new recipes
- View detailed instructions
- Edit and update instantly
- Delete recipes
- Pin favorites
- Filter & search recipes
- Switch between beautiful Light/Dark themes

All data is stored permanently using the browser’s **LocalStorage**, meaning the app works:

✔ Offline  
✔ Without a backend  
✔ Without a database  
✔ With instant load times

---

# ✨ Highlight Features

### 🔧 CRUD Operations

Create, edit, and delete recipes with real-time UI updates.

### 🎨 Modern Gradient UI

Stylish cards, shadows, and premium glassmorphism-inspired components.

### 🔍 Advanced Search & Filters

- Search by title
- Filter by difficulty
- Filter by Veg / Non-Veg

### 📌 Pin Favorite Recipes

Pinned recipes always remain at the top.

### 🌓 Animated Theme Toggle

Smooth sun–moon animation with persistent dark mode.

### 🖼️ Image Support

Add recipe images using URLs with elegant fallback support.

### 🧩 Modular Architecture

Clean and scalable structure using JavaScript ES6 modules.

---

# 🚀 Tech Stack

<div align="center">

| Technology                        | Purpose            |
| --------------------------------- | ------------------ |
| **HTML5**                         | UI structure       |
| **CSS3 (Gradients + Animations)** | Styling            |
| **JavaScript (ES6 Modules)**      | Core logic         |
| **LocalStorage API**              | Persistent storage |
| **FontAwesome**                   | Icons              |
| **Google Fonts: Poppins**         | Typography         |

</div>

---

# 🏗️ Project Structure
```

/
├── index.html
├── style.css
├── README.md
├── Assets/
│ ├── demo.gif
│ ├── images...
│ └── (your recipe images)
└── js/
├── app.js
├── ui.js
├── storage.js
└── validation.js

```

---

# ⚙️ Architecture Flow

```

```
        ┌──────────────────────┐
        │      index.html       │
        └───────────┬──────────┘
                    │
```

┌─────────────────────┼─────────────────────┐
│ │ │
▼ ▼ ▼
ui.js storage.js validation.js
(DOM + UI) (LocalStorage) (Form validation)

```
            ▲
            │
         app.js
 (Main logic + event handling)
```

```

---

# 💾 Data Persistence

All recipes are saved offline using:

```

localStorage.setItem("recipes", JSON.stringify(array))

```

Benefits:
✔ Persistent storage
✔ Fast performance
✔ Works offline
✔ Zero backend cost

---

# ▶️ Running the App

1. Open the folder in **VS Code**
2. Open `index.html`
3. Right-click → **Open with Live Server**

If you don’t have Live Server, install it from VS Code Extensions.

---

# 🛠️ Future Enhancements

- ⬜ Import/Export recipes as JSON
- ⬜ Categories & tags
- ⬜ Favorites page
- ⬜ Drag-and-drop recipe sorting
- ⬜ Convert to React/MERN stack
- ⬜ Firebase cloud sync

---

# 📜 License

This project is licensed under the **MIT License**.

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!
### Made with 💛 Love, JavaScript & Creativity

</div>
```

---
