## 1️⃣ Setup Environment

```bash
# Update Node & npm (Termux)
pkg update && pkg upgrade
pkg install nodejs-lts git
node -v
npm -v
# Clone repo if not exists
git clone https://github.com/jiggoo0/naraksika.git
cd naraksika
# Install dependencies
pnpm install          # or npm install / yarn install
# Check Vite version
vite -v
> ✅ Ensure .env or config files are correctly set if any
2️⃣ Development Workflow
# Start dev server
pnpm dev              # open http://localhost:5173
# Watch for changes automatically
pnpm dev --host        # accessible on local network
# Lint code for errors
pnpm lint
# Auto fix lint issues
pnpm lint:fix
# Format code
pnpm format
Branching & Git Workflow
# Create a new feature branch
git checkout -b feature/<feature-name>
# Stage changes
git add .
# Commit changes
git commit -m "feat: description of feature"
# Push branch to remote
git push origin feature/<feature-name>
# Merge to main after PR review
git checkout main
git pull origin main
git merge feature/<feature-name>
> ⚠️ Always keep main clean for production deploy




---

3️⃣ Building for Production

# Build production files
pnpm build             # output: /dist

# Preview production locally
pnpm preview           # default http://localhost:4173

Check /dist folder before deploy

Ensure all assets & environment variables are correct



---

4️⃣ Deployment (Vercel)

# Switch to main branch
git checkout main
git pull origin main

# Push to trigger Vercel automatic deployment
git push origin main

# Optional: Vercel CLI deploy
vercel --prod

Vercel Project Name: naraksika

Vercel Account: jiggoos-projects

Live URL: https://devbaanban.vercel.app/



---

5️⃣ Maintenance & Updates

# Update dependencies
pnpm update            # or npm update

# Check for outdated packages
pnpm outdated

# Run tests if added
pnpm test

Always lint & format before commit

Keep main branch deployment-ready

Backup config files (tsconfig.json, vite.config.ts, tailwind.config.ts)



---

6️⃣ Notes & Best Practices

One Page Website (Landing, About, Services, Portfolio, Contact)

Fully responsive design (Mobile / Tablet / Desktop)

SEO friendly + SSL HTTPS

Motion & Popups implemented

Free assets included (images, icons)

Visitor counter & Cookie implemented

Keep commits atomic & messages descriptive

Use pnpm or npm consistently across dev team


```
