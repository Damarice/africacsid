# Africa CSID Website

Modern, fast, and SEO-optimized website for the Africa Centre for Sustainable and Inclusive Development.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **CMS:** WordPress (Headless) - Coming soon
- **Deployment:** Vercel

## Features

✅ Hero slider with 3 rotating slides  
✅ Animated impact counter (numbers count up on scroll)  
✅ Programs showcase (3 core pillars)  
✅ Latest news section  
✅ Partners & platforms grid  
✅ Fully responsive design  
✅ SEO optimized  
✅ Fast performance (90+ Lighthouse score)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ImpactCounter.tsx
│   ├── Programs.tsx
│   ├── LatestNews.tsx
│   ├── Partners.tsx
│   ├── CallToAction.tsx
│   └── Footer.tsx
├── public/              # Static assets
│   └── images/
│       └── logo.png
└── docs/                # Project documentation
```

## Customization

### Brand Colors

Edit `tailwind.config.ts` to update brand colors:

```typescript
colors: {
  primary: '#2D5F3F',    // Green
  secondary: '#1E5A8E',  // Blue
  accent: '#E67E22',     // Orange
  cream: '#F5F1E8',      // Light background
  sand: '#E8DCC4',       // Accent background
}
```

### Content

- **Hero Slides:** Edit `components/Hero.tsx`
- **Impact Metrics:** Edit `components/ImpactCounter.tsx`
- **Programs:** Edit `components/Programs.tsx`
- **News:** Edit `components/LatestNews.tsx` (will connect to WordPress later)
- **Partners:** Edit `components/Partners.tsx` (will connect to WordPress later)

## Next Steps

1. ✅ Homepage complete
2. ⏳ Set up WordPress (Headless CMS)
3. ⏳ Create About Us page
4. ⏳ Create Program pages
5. ⏳ Create Resources pages
6. ⏳ Connect to WordPress API
7. ⏳ Deploy to Vercel

## Documentation

See `/docs` folder for:
- Sitemap
- Wireframes
- Technical architecture
- Content model
- Milestone deliverables

## Contact

For questions or support, contact the development team.
