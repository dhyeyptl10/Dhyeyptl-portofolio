# DHAMO Portfolio — React.js

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 🖼️ WHERE TO PUT YOUR IMAGES

Place ALL images inside the `public/images/` folder.

```
public/
└── images/
    ├── Background img.jpeg       ← Hero background photo
    ├── About - me.png            ← Your about section photo
    └── certs/
        ├── frontend-mastery.jpg       ← Certificate 1
        ├── c-programming.jpg          ← Certificate 2
        ├── unsaid-talk-hackathon.jpg  ← Certificate 3
        ├── prompt-craft-3rd.jpg       ← Certificate 4
        └── prompt-engineering.jpg     ← Certificate 5
```

### Image File Names (must match exactly):
| Image | File Name | Location |
|-------|-----------|----------|
| Hero background | `Background img.jpeg` | `public/images/` |
| Your photo | `About - me.png` | `public/images/` |
| Cert 1 | `frontend-mastery.jpg` | `public/images/certs/` |
| Cert 2 | `c-programming.jpg` | `public/images/certs/` |
| Cert 3 | `unsaid-talk-hackathon.jpg` | `public/images/certs/` |
| Cert 4 | `prompt-craft-3rd.jpg` | `public/images/certs/` |
| Cert 5 | `prompt-engineering.jpg` | `public/images/certs/` |

> **Tip:** If an image is missing, it gracefully hides itself — no broken image icons.

---

## 🤖 Setting Up the AI Chatbot

1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Click **API Keys** → **Create Key**
3. Copy the key (starts with `sk-ant-...`)
4. Open `src/components/ChatBot.jsx`
5. Replace `YOUR_ANTHROPIC_API_KEY_HERE` with your key

```js
// Line ~12 in ChatBot.jsx
const BUILT_IN_API_KEY = 'sk-ant-YOUR_KEY_HERE'
```

> ⚠️ **Warning:** Your API key will be visible in the browser source code.  
> Set a **monthly usage limit** on your Anthropic dashboard to protect yourself.

---

## 🌐 Deploy to Netlify (Recommended)

### Option A — Drag & Drop
```bash
npm run build
```
Then drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

### Option B — Git + Auto Deploy
1. Push this project to GitHub
2. Go to [netlify.com](https://netlify.com) → **New site from Git**
3. Select your repo
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click **Deploy**

---

## 📁 Project Structure

```
dhamo-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/          ← PUT ALL YOUR IMAGES HERE
│       └── certs/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Preloader.jsx
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Ticker.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── ChatBot.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## ✏️ Customization

### Update Social Links
Edit `src/components/Contact.jsx` — find the `.socials` section and update the `href` values.

### Add More Projects
Edit `src/components/Projects.jsx` — add a new object to the `projects` array at the top.

### Add More Skills
Edit `src/components/Skills.jsx` — add to the `skills` array.

### Change Colors
Edit `src/index.css` — update the `:root` CSS variables at the top.

---

Built with ❤️ by Dhyey "Dhamo" Patel
