# MEHDI DEHGHAN — EXPERIMENTAL DIGITAL PORTFOLIO
> **Concept:** DIGITAL PLAYGROUND  
> **Creative Direction:** EXPERIMENTAL DESIGN. PRECISE EXECUTION.  
> **Positioning:** Designer & Creative Developer  
> **Deployment Target:** GitHub Pages (`https://mehdii-dehghanm.github.io/portfolio/` or custom domain)

---

## 01. Overview

This is the official portfolio and experimental creative laboratory for **Mehdi Dehghan (مهدی دهقان)**. Built as a hybrid between an art-directed design publication and a high-performance interactive application, it showcases original design concepts, interface systems, and frontend experiments with absolute honesty and technical rigor.

### Key Highlights
- **Genuinely Bilingual (EN/FA):** Native bidirectional layout switching with Persian RTL typography (`Vazirmatn`), CSS logical properties, and dynamic document direction/language management.
- **Adaptive Visual Identity:** Warm off-white (`#F4F1EA`), deep ink (`#20211F`), muted grey (`#96958F`), and electric lime (`#C6F36A`) with dynamic dark mode and project-specific color atmospheric tokens.
- **Digital Playground Canvas:** Lightweight, 60fps kinetic spring physics simulation responding to cursor dynamics without blocking UI scrolling or wasting CPU.
- **Honest Project Taxonomy:** Transparent status badges (`Concept Project`, `Visual Experiment`, `Personal Project`, `In Development`) ensuring authentic professional credibility.
- **Bulletproof GitHub Pages Routing:** Hash-based SPA routing (`#/project/:slug`) and `404.html` redirect fallback, guaranteeing zero 404 errors on direct navigation or page refreshes.
- **Acoustic Micro-Interactions:** Pure synthetic Web Audio API feedback (tactile clicks and frequency sweeps) with zero external audio assets, muted by default.

---

## 02. Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Modern CSS Variables, CSS Logical Properties, Flexbox & CSS Grid |
| **Typography** | Syne, Space Grotesk, Inter, Vazirmatn (Persian), JetBrains Mono |
| **Physics** | Native HTML5 Canvas 2D Vector Spring Mechanics |
| **Audio** | Native Web Audio API Synthesizer |
| **CI/CD** | GitHub Actions (`.github/workflows/deploy.yml`) |

---

## 03. Project Structure

```text
mehdi-dehghan-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── 404.html                # GitHub Pages SPA redirect fallback
│   ├── favicon.svg             # Minimalist MD monogram brand icon
│   ├── og-image.svg            # Open Graph social preview banner
│   ├── robots.txt              # Search crawler instructions
│   ├── sitemap.xml             # Search engine index with hreflang annotations
│   └── images/
│       └── projects/           # High-resolution project photography & vector blueprints
│           ├── vand/           # The Vand lookbook and editorial assets
│           ├── xav/            # Xav Coffee cupping and roasting imagery
│           ├── arshia/         # Arshia Gold Gallery macro jewelry assets
│           ├── sepahan/        # Sepahan Baft industrial packaging photography
│           ├── kronomatik/     # Utilitarian horology vector telemetry dial
│           └── void/           # VØID Atelier avant-garde brutalist studies
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Frosted floating navigation with live status & controls
│   │   ├── Hero.tsx            # Scene A: Typographic monument & positioning statement
│   │   ├── InteractivePlayground.tsx # Signature kinetic canvas node simulation
│   │   ├── ProjectIndex.tsx    # Scene B: Art-directed archive with rhythmic grid
│   │   ├── ProjectCard.tsx     # Editorial card with hover zoom, tags & status badges
│   │   ├── ProjectDetail.tsx   # Scene C: Dedicated project case study & gallery view
│   │   ├── AboutSection.tsx    # Scene D: Practice philosophy, disciplines & tech stack
│   │   ├── ServicesSection.tsx # Scene E: 4 core disciplines in numbered accordion
│   │   ├── ContactSection.tsx  # Scene F: Verified email, Telegram, LinkedIn & mail drafter
│   │   ├── TelemetryBar.tsx    # Real-time Tehran (IRST) clock & coordinate telemetry
│   │   └── Footer.tsx          # Brand manifesto, dynamic copyright & navigation
│   ├── data/
│   │   ├── projects.ts         # Structured, typed project dataset
│   │   └── siteConfig.ts       # Verified contact info, services, coordinates
│   ├── hooks/
│   │   ├── useAudio.ts         # Tactile Web Audio synthesizer
│   │   ├── useHashRoute.ts     # Static-host compatible hash routing
│   │   └── useTheme.ts         # Dark / Light mode manager with persistence
│   ├── i18n/
│   │   ├── LanguageContext.tsx # Bilingual context provider & HTML dir synchronizer
│   │   └── translations.ts     # Centralized English & Persian dictionaries
│   ├── styles/
│   │   ├── variables.css       # Design tokens & color variables
│   │   ├── reset.css           # Modern box-sizing & logical property resets
│   │   ├── typography.css      # Display, body, mono & Persian type rules
│   │   └── animations.css      # Keyframes & visual textures
│   ├── types/
│   │   ├── project.ts          # Project schema & theme interface
│   │   └── i18n.ts             # Translation dictionary type safety
│   ├── App.tsx                 # Core app orchestrator
│   └── main.tsx                # React root mount
├── index.html                  # SEO & social meta, Google Fonts preconnect
├── package.json                # Dependencies & build scripts
├── tsconfig.json               # TypeScript strict configuration
└── vite.config.ts              # Vite relative base & bundle chunking config
```

---

## 04. Local Development

### Prerequisites
- Node.js (v18.0.0 or later)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/Mehdii-dehghanm/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Run Dev Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```
The compiled, optimized production files will be output to the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 05. Customization Guide

### 1. Updating Projects
Edit `src/data/projects.ts`. Each project follows the typed `ProjectItem` schema:
```ts
{
  id: 'proj-01',
  slug: 'the-vand',
  index: '01',
  title: 'The Vand',
  titleFa: 'وند',
  category: 'Spatial Design & E-Commerce Concept',
  categoryFa: 'هویت بصری و کانسپت فروشگاهی',
  year: '2026',
  status: 'concept', // 'concept' | 'experiment' | 'personal' | 'in-development'
  statusLabelEn: 'Concept Project',
  statusLabelFa: 'پروژه کانسپت',
  summary: '...',
  summaryFa: '...',
  role: 'Visual Design & Interaction Architecture',
  roleFa: 'طراحی بصری و معماری تعامل',
  services: ['Web Design', 'Creative Development', 'E-commerce'],
  coverImage: './images/projects/vand/hero.webp',
  gallery: [...],
  theme: {
    primary: '#2E2D29',
    accent: '#C6F36A',
    surface: '#EAE7E0',
    glow: 'rgba(198, 243, 106, 0.16)',
  }
}
```

### 2. Updating Personal Information & Channels
Edit `src/data/siteConfig.ts` to update your verified email, social links, location coordinates, or services.

### 3. Updating Translations
Edit `src/i18n/translations.ts` to customize any copy in English or Persian. Both languages are centrally organized.

---

## 06. GitHub Pages Deployment

The repository is pre-configured with a zero-maintenance GitHub Actions workflow located at `.github/workflows/deploy.yml`.

### Step-by-Step Publication Instructions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete experimental portfolio implementation"
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPOSITORY_NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages via GitHub Actions:**
   - In your GitHub repository, navigate to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - No branch selection is necessary — the `.github/workflows/deploy.yml` workflow will automatically detect pushes to `main`, run `npm run build`, and deploy the `dist/` artifact to GitHub Pages.

3. **Verify Deployment:**
   - Go to the **Actions** tab in your repository.
   - You will see the `Deploy Mehdi Dehghan Portfolio to GitHub Pages` workflow run.
   - Once completed (usually 45–60 seconds), your live website will be accessible at:
     ```
     https://<YOUR_GITHUB_USERNAME>.github.io/<REPOSITORY_NAME>/
     ```

### Custom Domain Configuration (Optional)
If you configure a custom domain (e.g., `mehdidehghan.com`):
1. In repository **Settings** > **Pages**, enter your domain under **Custom domain**.
2. GitHub will create a `CNAME` file.
3. Configure your domain registrar's DNS records:
   - For apex domain: `A` records pointing to GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - For subdomain (e.g., `www`): `CNAME` pointing to `<YOUR_USERNAME>.github.io`.

---

## 07. Architecture & Performance Notes

- **Static Routing Assurance:** The website utilizes hash routing (`#/project/:slug`) paired with a `404.html` SPA redirect handler. This ensures that opening a project link directly or refreshing the browser on a project detail page never triggers a 404 error on GitHub Pages.
- **Resource Optimization:** All local imagery is loaded using modern WebP/JPEG formats with responsive aspect-ratio wrappers to prevent Cumulative Layout Shift (CLS).
- **Reduced Motion:** Fully complies with `prefers-reduced-motion`, disabling kinetic canvas physics and animations when requested by operating system accessibility settings.

---

*Designed & Engineered by Mehdi Dehghan — 2026*
