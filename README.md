# Jathin Y - Azure Backend & Integration Engineer Portfolio

Production-grade personal portfolio website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

## What Is Included

- Modern dark enterprise SaaS visual direction
- Responsive recruiter-focused portfolio layout
- Animated hero, metrics, project cards, architecture flow, timeline, certifications, GitHub activity, resume, contact, and footer
- Scroll progress indicator, loading screen, cursor glow, smooth reveal animations, and animated background layers
- SEO, Open Graph, Twitter card, favicon, and resume download asset
- Data-driven content model in `src/data/portfolio.ts`
- Deployment-ready Vite build configuration

## Project Structure

```txt
src/
  components/
    layout/        Global shell components
    ui/            Reusable interface primitives
    visuals/       Hero, architecture, and activity visualizations
  data/            Portfolio content model
  sections/        Page section components
  styles/          Tailwind entry and global CSS
  types/           Shared TypeScript types
  utils/           Class and motion helpers
```

## Local Development

```bash
npm install
npm run dev
```

Open the local Vite URL, usually:

```txt
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

## Customize Content

Update portfolio content in:

```txt
src/data/portfolio.ts
```

Replace the placeholder contact URLs and email in `contactLinks`, then replace `public/resume-jathin-y.md` with the final resume file if you want a PDF download.

## Deploy To Vercel

1. Create a GitHub repository.
2. Push the project:

```bash
git init
git add .
git commit -m "Create Azure backend portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

3. In Vercel, choose **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Deploy.

No environment variables are required.
