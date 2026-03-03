# 🌐 Sudharsanselvan T — Personal Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, dark-themed multi-page developer portfolio built with pure HTML, CSS & JavaScript.**

[View Live](#) · [Report Bug](mailto:sudharsanselvan13@gmail.com) · [Request Feature](mailto:sudharsanselvan13@gmail.com)

</div>

---

## 📸 Preview

> *Dark amber-themed portfolio with animated transitions, custom cursor, and a 3-page layout.*

---

## ✨ Features

- **3-Page SPA Layout** — Home & About · Skills & Projects · Services & Contact
- **Animated Page Transitions** — Smooth slide-in/out between pages
- **Custom Cursor** — Magnetic amber dot + ring with hover interaction
- **Loading Screen** — Shimmer name animation with progress bar
- **Skill Bars** — Animated on page entry with percentage indicators
- **Project Cards** — Bento-style grid with hover effects and key metrics
- **Sticky Sidebar Navigation** — Icon-based with active state indicators
- **Responsive Design** — Mobile-friendly layout across all screen sizes
- **Contact Form** — With submit feedback animation
- **Photo Placeholder** — Ready to swap with your real photo URL

---

## 🗂️ Pages

| Page | Sections |
|------|----------|
| **01 — Home & About** | Hero · Stats · Photo · About · Experience · Certifications |
| **02 — Skills & Projects** | Frontend / Backend / AI & Data skills · 5 Project cards |
| **03 — Services & Contact** | 6 Freelance services · Contact form · Footer |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Bebas Neue, DM Mono, Instrument Serif, Inter |
| Icons | Emoji-based (no external icon library needed) |

---

## 🚀 Getting Started

### Prerequisites
No build tools or dependencies required. Just a browser.

### Installation

```bash
# Clone the repository
git clone https://github.com/sudharsanselvan/portfolio.git

# Navigate into the project
cd portfolio

# Open in browser
open index.html
# or simply double-click index.html
```

---

## 📁 Project Structure

```
portfolio/
├── index.html        # Single file — all HTML, CSS & JS included
└── README.md         # Project documentation
```

> The entire portfolio is contained in a single `index.html` file for simplicity and portability.

---

## 🖼️ Adding Your Photo

Inside `index.html`, find the photo placeholder block and replace it:

```html
<!-- BEFORE -->
<div class="photo-placeholder">
  <span class="photo-initials">ST</span>
  <span class="photo-hint">Add your photo</span>
</div>

<!-- AFTER -->
<img src="YOUR_PHOTO_URL_HERE" alt="Sudharsanselvan T">
```

Accepted sources: direct image URL, Google Drive public link, or hosted image (Cloudinary, ImgBB, etc.)

---

## 🎨 Customization

All design tokens are defined as CSS variables at the top of the `<style>` block:

```css
:root {
  --amber: #f5a623;      /* Primary accent color */
  --amber2: #ffca6b;     /* Gradient end color */
  --bg: #0a0a0b;         /* Main background */
  --text: #e8e6df;       /* Primary text */
  --border: #2a2a35;     /* Card borders */
}
```

Change `--amber` to any color to instantly re-theme the entire portfolio.

---

## 📊 Projects Showcased

| # | Project | Tech | Key Metric |
|---|---------|------|------------|
| 01 | AI Agent Workflow Automation | n8n, Gemini, Mistral | 70% effort reduction |
| 02 | Disease Detection & Price Prediction | TensorFlow, CNN, Scikit-learn | 95% accuracy |
| 03 | E-Commerce Application Backend | Java, Spring Boot, MySQL | 500+ concurrent requests |
| 04 | Airline Booking Analysis Dashboard | Power BI, DAX, ETL | 40% faster reporting |
| 05 | Python-Based Website Blocking System | Python, Flask, MySQL | 95% detection accuracy |

---

## 📬 Contact

**Sudharsanselvan T**

- 📧 Email: [sudharsanselvan13@gmail.com](mailto:sudharsanselvan13@gmail.com)
- 📱 Phone: +91 63830 15521
- 💼 LinkedIn: [linkedin.com/in/sudharsanselvan](https://linkedin.com/in/sudharsanselvan)
- 🐙 GitHub: [github.com/sudharsanselvan](https://github.com/sudharsanselvan)
- 📍 Location: Trichy, Tamil Nadu, India

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it as a template for your own portfolio.

```
MIT License © 2026 Sudharsanselvan T
```

---

<div align="center">

Made with ☕ and 💛 by **Sudharsanselvan T**

⭐ *If you found this useful, consider giving it a star!*

</div>
