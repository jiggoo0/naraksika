## 1️⃣ Project Overview

Naraksika เป็นเว็บไซต์ One Page สำหรับบริการออกแบบและพัฒนาเว็บไซต์

- Built with: React 18 + Vite 5 + TypeScript
- UI: TailwindCSS + DaisyUI
- Lint & Formatting: ESLint + Prettier
- Deployment: Vercel

**Website URL:** [https://devbaanban.vercel.app/](https://devbaanban.vercel.app/)

---

## 2️⃣ Folder Structure

```text
src
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── About/About.tsx
│   ├── Contact/Contact.tsx
│   ├── Contact/FAQ.tsx
│   ├── Hero/Hero.tsx
│   ├── Layout/Layout.tsx
│   ├── Layout/Navbar.tsx
│   ├── Layout/Header.tsx
│   ├── Layout/Footer.tsx
│   ├── Portfolio/Portfolio.tsx
│   ├── Services/Services.tsx
│   ├── Services/ServiceCard.tsx
│   ├── Services/AddonsSection.tsx
│   └── common/Button.tsx
│   └── common/Icon.tsx
├── config/site.ts
├── constants/routes.ts
├── context/ThemeContext.tsx
├── data/addonServices.ts
├── data/services.ts
├── hooks/useScrollPosition.ts
├── index.css
├── main.tsx
├── pages/Home.tsx
├── styles/global.css
└── utils/cn.ts


---

3️⃣ Quick Commands

# Install dependencies
pnpm install        # or npm install / yarn install

# Run development server
pnpm dev            # localhost:5173

# Build production
pnpm build          # output: /dist

# Preview production build
pnpm preview        # localhost:4173

# Lint and fix code
pnpm lint           # eslint check
pnpm lint:fix       # auto fix

# Format code
pnpm format         # prettier formatting


---

4️⃣ Environment

# Node
node -v             # v22.19.0

# Vite
vite -v             # 5.4.1

# TypeScript
tsc -v              # 5.5.3

# Tailwind
tailwindcss -v      # 3.3.2

> ⚠️ Ensure Node v22+ for smooth Vite + React 18 compatibility




---

5️⃣ Git Workflow

# Create branch
git checkout -b feature/<name>

# Add changes
git add .

# Commit
git commit -m "feat: description"

# Push
git push origin feature/<name>

# Merge PR → main
git checkout main
git pull origin main


---

6️⃣ Deployment (Vercel)

# Make sure main branch is updated
git checkout main
git pull origin main

# Push to Vercel automatic deploy
git push origin main

Vercel Project: naraksika

Account: jiggoos-projects

Live: https://devbaanban.vercel.app/



---

7️⃣ Notes

One Page Website (Landing, About, Services, Portfolio, Contact)

Fully responsive (Mobile / Tablet / Desktop)

SEO friendly

Free assets included (images, icons)

Motion & popups implemented

SSL HTTPS + Cookie + Visitor Counter



---

8️⃣ References / Links

GitHub: https://github.com/jiggoo0/naraksika

Contact Email: jiggo0@outlook.co.th

Line: https://lin.ee/VwXOQQO
```
