# RealHomes

A luxury real-estate developer website built with **Nuxt 3 / Vue 3**. The layout and section
structure mirror a premium developer site (rotating hero, apartment & community grids, investment
benefits, global presence, company stats, newsroom, app promo, multi-column footer). All imagery
uses different photographs (Unsplash) from the reference.

## Stack
- Nuxt 3 (Vue 3, Vite, Nitro)
- File-based routing & auto-imported components/composables
- Plain CSS with a dark, gold-accented luxury theme (`assets/css/main.css`)
- Google Fonts: Cormorant Garamond (serif) + Jost (sans)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run preview  # preview the build
```

## Structure
```
assets/css/main.css        Design tokens + base styles
composables/useSiteData.ts All demo content (projects, stats, stories, images)
layouts/default.vue        Header + Footer wrapper
components/                 AppHeader, AppFooter, HeroSlider, ProjectCard,
                           ProjectsGrid, InvestmentBenefits, GlobalPresence,
                           CompanyStats, StoriesSection, AppPromo
pages/index.vue            Home page
pages/projects.vue         Portfolio page
```

To swap imagery, edit the `image` fields in `composables/useSiteData.ts` (and the inline
background images in `CompanyStats.vue`, `AppPromo.vue`, `pages/projects.vue`).
