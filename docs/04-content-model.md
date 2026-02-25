# Africa CSID Content Model

## WordPress Custom Post Types & Fields

This document defines all content types that will be managed through WordPress, including their fields and relationships.

---

## 1. Publications

**Post Type:** `publication`
**Slug:** `/resources/publication/[slug]`
**Purpose:** Downloadable reports, policy briefs, research documents

### Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Title | Text | Yes | Publication title |
| Description | Rich Text | Yes | Full description/summary |
| Excerpt | Text | No | Short summary (auto-generated if empty) |
| PDF File | File Upload | Yes | Main publication PDF |
| Publication Date | Date | Yes | When published |
| Program Area | Select | Yes | Peace/Economic/Climate/General |
| Featured Image | Image | Yes | Cover image or thumbnail |
| External Link | URL | No | Alternative to PDF (if hosted elsewhere) |
| Author/Organization | Text | No | Who produced it |
| File Size | Text | Auto | Display file size (e.g., "2.5 MB") |

### Taxonomies
- **Category:** Year (2025, 2024, 2023...)
- **Tags:** Topics (Climate Action, Gender, Youth, Policy, etc.)

### Display
- Grid view on listing page
- Featured publications section on homepage
- Filterable by program area, year, topic
- Searchable

---

## 2. Blog Posts

**Post Type:** `post` (default WordPress)
**Slug:** `/resources/blog/[slug]`
**Purpose:** News, insights, thought leadership, updates

### Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Title | Text | Yes | Blog post title |
| Content | Rich Text | Yes | Full article content |
| Excerpt | Text | No | Short summary |
| Featured Image | Image | Yes | Header image |
| Author | User | Yes | Post author (WordPress user) |
| Publish Date | Date | Auto | Publication date |
| Related Program | Select | No | Link to program area |

### Taxonomies
- **Category:** News, Insights, Events, Impact Stories
- **Tags:** Free-form tags

### Display
- Latest 3 posts on homepage
- Full blog listing page with pagination
- Single post page with related posts
- Author bio section
- Social sharing buttons

---

## 3. Events

**Post Type:** `event`
**Slug:** `/resources/event/[slug]`
**Purpose:** Past and upcoming events, conferences, workshops

### Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Title | Text | Yes | Event name |
| Description | Rich Text | Yes | Full event details |
| Event Date | Date | Yes | Event date |
| Event Time | Time | No | Start time |
| End Date | Date | No | For multi-day events |
| Location | Text | Yes | Physical or "Virtual" |
| Event Type | Select | Yes | Conference/Workshop/Meeting/Webinar |
| Registration Link | URL | No | External registration page |
| Featured Image | Image | Yes | Event banner/photo |
| Status | Select | Yes | Upcoming/Past/Cancelled |
| Organizer | Text | No | Who's organizing |

### Taxonomies
- **Category:** Type (Conference, Workshop, Training, etc.)
- **Tags:** Topics

### Display
- Upcoming events on homepage
- Calendar view (optional)
- Past events archive
- Event detail page with registration CTA

---

## 4. Team Members

**Post Type:** `team_member`
**Slug:** `/about/team` (all on one page)
**Purpose:** Staff, leadership, board members

### Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Name | Text | Yes | Full name (post title) |
| Role/Position | Text | Yes | Job title |
| Bio | Rich Text | Yes | Professional background |
| Photo | Image | Yes | Professional headshot |
| Email | Email | No | Contact email (optional) |
| LinkedIn | URL | No | LinkedIn profile |
| Twitter | URL | No | Twitter handle |
| Order | Number | Yes | Display order (1, 2, 3...) |
| Department | Select | No | Leadership/Programs/Admin |

### Taxonomies
- **Category:** Leadership, Staff, Board, Advisors

### Display
- Grid layout on team page
- Ordered by "Order" field
- Modal or expandable bio on click
- Contact info (if provided)

---

## 5. Programs (Optional - Can be Static)

**Post Type:** `program` or static pages
**Slug:** `/programs/[slug]`
**Purpose:** Three core program areas

### Fields (if using custom post type)

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Title | Text | Yes | Program name |
| Description | Rich Text | Yes | Full program details |
| Icon | Image | Yes | Program icon/symbol |
| Objectives | Repeater | Yes | List of objectives |
| Approach | Rich Text | Yes | Methodology |
| Impact Metrics | Repeater | No | Numbers/stats |
| Featured Image | Image | Yes | Header image |

### Display
- 3 cards on homepage
- Individual program pages
- Related publications
- Related blog posts

**Note:** Programs can also be static Next.js pages since they don't change often.

---

## 6. Partners/Platforms

**Post Type:** `partner`
**Slug:** Not individual pages (displayed on About/Platforms page)
**Purpose:** Partner organizations and collaborative platforms

### Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Name | Text | Yes | Organization name |
| Logo | Image | Yes | Partner logo |
| Description | Rich Text | No | Partnership details |
| Website URL | URL | Yes | Partner website |
| Partnership Type | Select | Yes | Platform/Donor/Implementing Partner |
| Order | Number | Yes | Display order |

### Taxonomies
- **Category:** Type (Platform, Donor, Partner, Network)

### Display
- Logo grid on homepage
- Detailed list on Platforms page
- Hover effect showing name
- Click to visit partner website

---

## 7. Job Postings (Optional)

**Post Type:** `job`
**Slug:** `/get-involved/careers/[slug]`
**Purpose:** Current job openings

### Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| Job Title | Text | Yes | Position title |
| Description | Rich Text | Yes | Full job description |
| Location | Text | Yes | Office location or "Remote" |
| Job Type | Select | Yes | Full-time/Part-time/Contract |
| Application Deadline | Date | Yes | Closing date |
| Application Link | URL | No | External application form |
| Salary Range | Text | No | Optional salary info |
| Status | Select | Yes | Open/Closed |

### Display
- List on careers page
- "No vacancies" message if none
- Application instructions

---

## Content Relationships

### Publications ↔ Programs
- Publications tagged with program area
- Program pages show related publications

### Blog Posts ↔ Programs
- Blog posts can be linked to programs
- Program pages show related blog posts

### Events ↔ Programs
- Events tagged with program area
- Program pages show related events

### Team Members ↔ Blog Posts
- Blog posts show author info
- Team page can link to author's posts

---

## WordPress Admin Configuration

### User Roles
- **Administrator:** Full access (developer)
- **Editor:** Can manage all content (client main user)
- **Author:** Can write and publish posts (client staff)
- **Contributor:** Can write but not publish (interns/volunteers)

### Menu Structure in WordPress Admin
```
Dashboard
├── Posts (Blogs)
├── Publications
├── Events
├── Team Members
├── Partners
├── Jobs
├── Media
├── Pages (static pages)
└── Settings
```

---

## Content Entry Guidelines for Client

### Publications
1. Click "Add New Publication"
2. Enter title and description
3. Upload PDF file
4. Select publication date
5. Choose program area
6. Add featured image (cover or thumbnail)
7. Add tags (topics)
8. Publish

### Blog Posts
1. Click "Add New Post"
2. Write title and content
3. Add featured image
4. Select category
5. Add excerpt (optional)
6. Publish or schedule

### Events
1. Click "Add New Event"
2. Enter event details
3. Set date and time
4. Add location
5. Add registration link (if applicable)
6. Upload event banner
7. Set status (Upcoming/Past)
8. Publish

### Team Members
1. Click "Add New Team Member"
2. Enter name (as title)
3. Add role/position
4. Write bio
5. Upload professional photo
6. Add contact info (optional)
7. Set display order
8. Publish

---

## Data Migration Plan

### From Current Site to New Site

1. **Publications:**
   - Export existing PDFs
   - Create CSV with metadata
   - Bulk import using WP All Import plugin

2. **Blog Posts:**
   - Export from current site
   - Import using WordPress importer
   - Verify images and formatting

3. **Events:**
   - Manual entry (limited number)
   - Or CSV import

4. **Team Members:**
   - Collect photos and bios
   - Manual entry or CSV import

---

## Content Maintenance Schedule

### Client Responsibilities (Weekly/Monthly)
- Add new publications as they're released
- Write and publish blog posts (2-4 per month)
- Update events (add upcoming, mark past)
- Update team members (new hires, departures)

### Developer Responsibilities (As Needed)
- Update static pages (About, Programs)
- Modify layouts or design
- Add new features
- Performance optimization

---

## SEO Best Practices for Content

### For All Content Types
- ✅ Descriptive titles (50-60 characters)
- ✅ Meta descriptions (150-160 characters)
- ✅ Alt text for all images
- ✅ Internal links to related content
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Keywords in first paragraph
- ✅ Readable URLs (slugs)

### Publications
- Include keywords in title
- Write detailed descriptions
- Tag appropriately
- Link from blog posts

### Blog Posts
- Engaging titles
- Clear structure with headings
- Include images
- Link to programs and publications
- Add social sharing

### Events
- Clear, descriptive titles
- Include location and date in description
- Add event schema markup (developer task)

---

## Sample Content Structure

### Sample Publication Entry
```
Title: "Zanzadapt Project Report 2024"
Description: "This report outlines the progress and impact of the Zanzadapt project in supporting gender equality and climate adaptation in Zanzibar..."
PDF: zanzadapt-report-2024.pdf (2.3 MB)
Publication Date: January 15, 2025
Program Area: Climate Change
Tags: Gender, Climate Adaptation, Zanzibar
Featured Image: zanzibar-women-farming.jpg
```

### Sample Blog Post
```
Title: "Seeds of Change: Agroecology Training Builds Climate Resilience"
Excerpt: "In Nyatike, Africa CSID conducted a transformative 2-day training on agroecology..."
Content: [Full article with images]
Category: Impact Stories
Tags: Agroecology, Climate, Kenya, Training
Author: Africa CSID Team
Featured Image: nyatike-training.jpg
```

### Sample Event
```
Title: "Africa Climate Summit 2025"
Description: "Join us at the second Africa Climate Summit..."
Event Date: September 4, 2025
Location: Nairobi, Kenya
Event Type: Conference
Registration Link: https://example.com/register
Status: Upcoming
Featured Image: acs-2025-banner.jpg
```

---

## Technical Notes

### API Endpoints (WordPress REST API)

```
GET /wp-json/wp/v2/publications
GET /wp-json/wp/v2/publications/{id}
GET /wp-json/wp/v2/posts
GET /wp-json/wp/v2/posts/{id}
GET /wp-json/wp/v2/events
GET /wp-json/wp/v2/team_members
GET /wp-json/wp/v2/partners
```

### Custom Fields in API Response
- Use ACF REST API plugin
- Or WPGraphQL for GraphQL queries

### Filtering & Pagination
```
GET /wp-json/wp/v2/publications?per_page=10&page=1
GET /wp-json/wp/v2/publications?program_area=climate
GET /wp-json/wp/v2/posts?categories=5
```

---

## Backup & Security

### Content Backup
- Daily automated backups (WordPress plugin)
- Store PDFs and media separately
- Export database weekly

### Security
- Regular WordPress updates
- Strong passwords
- Two-factor authentication
- Limit login attempts
- SSL certificate

---

This content model ensures the client can independently manage dynamic content while you maintain control over design and functionality.
