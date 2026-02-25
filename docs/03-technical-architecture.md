# Africa CSID Technical Architecture

## Stack Overview

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript/TypeScript (recommended)
- **Deployment:** Vercel (recommended) or Netlify

### Backend/CMS
- **CMS:** WordPress (Headless)
- **API:** WordPress REST API or WPGraphQL
- **Hosting:** Shared hosting or managed WordPress (e.g., Kinsta, WP Engine, or budget options like Namecheap)

### Additional Tools
- **Forms:** Next.js API routes + email service (SendGrid, Resend)
- **Analytics:** Google Analytics 4
- **SEO:** next-seo package
- **Image Optimization:** next/image (built-in)
- **Icons:** React Icons or Heroicons

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│                                                 │
│              User's Browser                     │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│         Next.js Frontend (Vercel)               │
│                                                 │
│  • Static pages (SSG)                          │
│  • Dynamic routes (ISR)                        │
│  • API routes (contact form)                   │
│  • Tailwind CSS styling                        │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 │ Fetches data via REST/GraphQL
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│      WordPress (Headless CMS)                   │
│                                                 │
│  • Publications (custom post type)             │
│  • Blog posts                                  │
│  • Events (custom post type)                   │
│  • Team members (custom post type)             │
│  • Programs content                            │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## WordPress Setup

### Required Plugins

1. **WPGraphQL** (if using GraphQL) or use REST API
   - Exposes WordPress data via GraphQL
   - Better performance than REST API
   - Type-safe queries

2. **Advanced Custom Fields (ACF) PRO**
   - Custom fields for publications, team, events
   - Flexible content management
   - ACF to WPGraphQL integration

3. **Custom Post Type UI**
   - Create custom post types easily
   - Publications, Events, Team Members

4. **Yoast SEO** or **Rank Math**
   - SEO optimization
   - Meta descriptions
   - XML sitemap

5. **WP Headless** (optional)
   - Redirects frontend to Next.js
   - Disables WordPress theme

6. **Enable CORS**
   - Allow Next.js to fetch data
   - Configure in wp-config.php or plugin

### Custom Post Types

#### 1. Publications
**Fields:**
- Title (default)
- Description/Excerpt (default)
- PDF File (ACF - File Upload)
- Publication Date (ACF - Date Picker)
- Program Area (ACF - Select: Peace, Economic, Climate)
- Featured Image (default)
- External Link (ACF - URL, optional)
- Author/Organization (ACF - Text)

**Taxonomies:**
- Category (Year, Topic)
- Tags

#### 2. Events
**Fields:**
- Title (default)
- Description (default)
- Event Date (ACF - Date Picker)
- Event Time (ACF - Time Picker)
- Location (ACF - Text)
- Event Type (ACF - Select: Conference, Workshop, Meeting)
- Registration Link (ACF - URL, optional)
- Featured Image (default)

#### 3. Team Members
**Fields:**
- Name (default title)
- Role/Position (ACF - Text)
- Bio (default content)
- Photo (Featured Image)
- Email (ACF - Email, optional)
- LinkedIn (ACF - URL, optional)
- Order (ACF - Number, for sorting)

#### 4. Programs (optional - can be static pages)
**Fields:**
- Title (default)
- Description (default)
- Icon/Image (Featured Image)
- Objectives (ACF - Repeater)
- Impact Metrics (ACF - Repeater)

#### 5. Partners/Platforms
**Fields:**
- Name (default title)
- Logo (Featured Image)
- Description (default content)
- Website URL (ACF - URL)
- Partnership Type (ACF - Select)

---

## Next.js Structure

### Project Structure
```
africa-csid-nextjs/
├── app/
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Homepage
│   ├── about/
│   │   ├── page.js              # About main
│   │   ├── team/page.js         # Team page
│   │   └── platforms/page.js    # Platforms page
│   ├── programs/
│   │   ├── page.js              # Programs overview
│   │   ├── peace-conflict/page.js
│   │   ├── economic/page.js
│   │   └── climate/page.js
│   ├── resources/
│   │   ├── publications/
│   │   │   ├── page.js          # Publications list
│   │   │   └── [slug]/page.js   # Single publication
│   │   ├── blogs/
│   │   │   ├── page.js          # Blog list
│   │   │   └── [slug]/page.js   # Single blog
│   │   └── events/
│   │       ├── page.js          # Events list
│   │       └── [slug]/page.js   # Single event
│   ├── get-involved/
│   │   ├── page.js
│   │   ├── partner/page.js
│   │   └── careers/page.js
│   ├── contact/page.js
│   └── api/
│       └── contact/route.js     # Contact form handler
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ImpactMetrics.jsx
│   ├── ProgramCard.jsx
│   ├── PublicationCard.jsx
│   ├── BlogCard.jsx
│   └── ContactForm.jsx
├── lib/
│   ├── wordpress.js             # WordPress API functions
│   └── utils.js
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
└── package.json
```

### Key Configuration Files

#### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-wordpress-domain.com'], // WordPress media domain
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static export if needed
  // output: 'export', // Only if not using ISR
}

module.exports = nextConfig
```

#### tailwind.config.js
```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F3F',    // Green
        secondary: '#1E5A8E',  // Blue
        accent: '#E67E22',     // Orange
      },
    },
  },
  plugins: [],
}
```

---

## Data Fetching Strategy

### Static Generation (SSG) - Recommended for most pages
```javascript
// app/resources/publications/page.js
export const revalidate = 3600 // Revalidate every hour

async function getPublications() {
  const res = await fetch('https://your-wp-site.com/wp-json/wp/v2/publications')
  return res.json()
}

export default async function PublicationsPage() {
  const publications = await getPublications()
  return <PublicationsList publications={publications} />
}
```

### Incremental Static Regeneration (ISR)
- Use `revalidate` option
- Pages rebuild in background
- Always fast, always fresh

### Dynamic Routes
```javascript
// app/resources/blogs/[slug]/page.js
export async function generateStaticParams() {
  const posts = await fetch('https://your-wp-site.com/wp-json/wp/v2/posts')
    .then(res => res.json())
  
  return posts.map(post => ({
    slug: post.slug,
  }))
}
```

---

## SEO Implementation

### 1. Metadata API (Next.js 14+)
```javascript
// app/layout.js
export const metadata = {
  title: {
    default: 'Africa CSID - Sustainable and Inclusive Development',
    template: '%s | Africa CSID'
  },
  description: 'Supporting marginalized communities across Africa through peace, economic empowerment, and climate action.',
  keywords: ['Africa', 'NGO', 'sustainable development', 'climate change', 'peace'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://africacsid.org',
    siteName: 'Africa CSID',
  },
}
```

### 2. Dynamic Sitemap
```javascript
// app/sitemap.js
export default async function sitemap() {
  const posts = await fetch('https://your-wp-site.com/wp-json/wp/v2/posts')
    .then(res => res.json())
  
  const postUrls = posts.map(post => ({
    url: `https://africacsid.org/resources/blogs/${post.slug}`,
    lastModified: post.modified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://africacsid.org',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
    // Add more URLs
  ]
}
```

### 3. Robots.txt
```javascript
// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://africacsid.org/sitemap.xml',
  }
}
```

### 4. Structured Data (JSON-LD)
```javascript
// For organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Africa Centre for Sustainable and Inclusive Development",
  "url": "https://africacsid.org",
  "logo": "https://africacsid.org/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254113909961",
    "contactType": "General Inquiries"
  }
}
```

---

## Performance Optimization

### 1. Image Optimization
- Use `next/image` for all images
- Serve WebP/AVIF formats
- Lazy loading by default
- Responsive images

### 2. Code Splitting
- Automatic with Next.js
- Dynamic imports for heavy components

### 3. Caching Strategy
- Static pages cached on CDN
- ISR for dynamic content
- Browser caching headers

### 4. Font Optimization
```javascript
// app/layout.js
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

---

## Deployment

### Vercel (Recommended)
1. Connect GitHub repo
2. Add environment variables:
   - `WORDPRESS_API_URL`
   - `CONTACT_EMAIL`
3. Deploy automatically on push

### Build Command
```bash
npm run build
```

### Environment Variables
```env
WORDPRESS_API_URL=https://your-wp-site.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://africacsid.org
CONTACT_EMAIL=info@africacsid.org
```

---

## Security Considerations

1. **CORS Configuration** - Restrict WordPress API access
2. **Environment Variables** - Never expose sensitive keys
3. **Rate Limiting** - Protect contact form from spam
4. **Content Validation** - Sanitize WordPress content
5. **HTTPS** - Enforce SSL on both sites

---

## Maintenance & Updates

### Client Responsibilities
- Add/edit publications via WordPress
- Write blog posts
- Update events
- Manage team members

### Developer Responsibilities
- Monitor site performance
- Update dependencies
- Fix bugs
- Add new features
- Ensure security patches

### Recommended Schedule
- **Weekly:** Content updates (client)
- **Monthly:** Dependency updates (developer)
- **Quarterly:** Performance audit (developer)
- **Annually:** Major feature updates (developer)

---

## Cost Estimate

| Item | Cost (Monthly) |
|------|----------------|
| WordPress Hosting | $5-20 |
| Vercel (Hobby/Pro) | $0-20 |
| Domain | $1-2 |
| Email Service (SendGrid) | $0-15 |
| **Total** | **$6-57/month** |

**One-time Costs:**
- ACF PRO: $49 (optional, can use free version)
- Premium plugins: $0-100

---

## Timeline Estimate

| Phase | Duration |
|-------|----------|
| WordPress setup & configuration | 2-3 days |
| Next.js project setup | 1 day |
| Homepage development | 2 days |
| Core pages (About, Programs) | 2 days |
| Resources pages (Publications, Blogs) | 2 days |
| Contact & Get Involved | 1 day |
| SEO implementation | 1 day |
| Testing & optimization | 2 days |
| **Total** | **13-14 days** |

---

## Success Metrics

### Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals: All green

### SEO Targets
- All pages indexed within 2 weeks
- Sitemap submitted to Google Search Console
- Meta descriptions on all pages
- Structured data implemented

### User Experience
- Mobile responsive (all devices)
- Accessible (WCAG AA)
- Fast navigation
- Clear CTAs
