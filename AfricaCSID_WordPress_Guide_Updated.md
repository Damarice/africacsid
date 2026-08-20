# Africa CSID Website — WordPress Content Management Guide

**WordPress Admin:** https://resources.africacsid.org/wp-admin

---

## General Rules (Apply to All Content)

1. Always go to **Posts → Add New** to add any content
2. Always set the correct **Category** (see each section below)
3. Always add a **Featured Image** where required
4. Content appears on the website **within 60 seconds** of publishing
5. To upload a PDF: go to **Media → Add New**, upload the file, click it, and copy the **File URL**

---

## 1. Blogs

**Where it appears:** Resources → Blogs & Articles

**Steps:**
1. Posts → Add New
2. Enter the **Title**
3. Write the full **article content** in the editor
4. Add a **Featured Image** (the blog cover photo)
5. Under **Categories** → check **Blogs**
6. Optionally add a sub-category (e.g. Climate Change, Advocacy, Partnerships) — this appears as the category tag on the card
7. Click **Publish**

**Fields needed:** Title, Content, Featured Image, Category

---

## 2. Newsletters

**Where it appears:** Resources → Newsletters

**Steps:**
1. Posts → Add New
2. Enter the **Title** (e.g. "Jan – March 2026 Newsletter: Community Led Action")
3. Write a short **summary/description** in the editor (2–3 sentences)
4. Under **Categories** → check **Newsletters**
5. Scroll down to **Newsletter Fields** → paste the **PDF URL** in the `pdf_url` field
   - To get the PDF URL: Media → Add New → upload PDF → click it → copy File URL
6. Click **Publish**

**Fields needed:** Title, Short Description, PDF URL, Category

---

## 3. Publications

**Where it appears:** Resources → Publications

**Steps:**
1. Posts → Add New
2. Enter the **Title**
3. Write a **description** in the editor (what the publication is about)
4. Add a **Featured Image** (cover image or relevant photo)
5. Under **Categories** → check **Publications**
6. Scroll down to **Publication Fields** → paste the **PDF URL** in the `pdf_url` field
7. Click **Publish**

**Fields needed:** Title, Description, Featured Image, PDF URL, Category

---

## 4. Reports

**Where it appears:** Resources → Reports

**Steps:**
1. Posts → Add New
2. Enter the **Title**
3. Write a short **description** in the editor
4. Under **Categories** → check **Reports**
5. Scroll down to **Report Fields** → paste the **PDF URL** in the `pdf_url` field
6. Click **Publish**

**Fields needed:** Title, Description, PDF URL, Category

> **Note:** Reports display with a live PDF preview on the website. Make sure the PDF URL is publicly accessible.

---

## 5. Events

**Where it appears:** Resources → Events (Upcoming or Past — determined automatically by date)

**Steps:**
1. Posts → Add New
2. Enter the **Title**
3. Write the **event details** in the editor (agenda, what to expect, etc.)
4. Add a **Featured Image**
5. Under **Categories** → check **Events**
6. Scroll down to **Event Fields** and fill in:
   - `event_date` → Date of the event (e.g. `2026-08-15`)
   - `event_time` → Time (e.g. `9:00 AM – 4:00 PM`)
   - `event_location` → Venue (e.g. `Kisumu Conference Hall, Kenya`)
   - `event_type` → Type (e.g. `Workshop`, `Summit`, `Forum`, `Training`)
7. Click **Publish**

**Fields needed:** Title, Content, Featured Image, event_date, event_time, event_location, event_type, Category

> **Note:** Events with a date in the future automatically appear under **Upcoming Events**. Past dates appear under **Past Events**.

---

## 6. Gallery

**Where it appears:** Resources → Gallery

**Steps:**
1. Posts → Add New
2. Enter the **Title** (full project name, e.g. "Agroforestry for Climate Mitigation, Women's Livelihoods and Community Resilience in Tanzania")
3. In the **Excerpt** field (below the editor), enter a **short name** for the dropdown (e.g. "Agroforestry Tanzania")
   - If you don't see Excerpt: click the **⋮** (three dots) at top right → Options → check "Excerpt"
4. Add a **Featured Image** — this is the cover photo for the project
5. Under **Categories** → check **Gallery**
6. In the editor, add a **Gallery block**:
   - Click **+** → search for **Gallery**
   - Click **Upload** or **Media Library** and select all the photos you want to show
   - These photos will appear in the **Photos** tab on the website
7. To add videos, add a **Video block** below the gallery:
   - Click **+** → search for **Video**
   - Click **Upload** and select your video file
   - Videos will appear in the **Videos** tab on the website
8. Click **Publish**

**Fields needed:** Title, Excerpt (short name), Featured Image, Gallery Block (photos), Video Block (videos), Category

> **Note:** WordPress projects appear in the gallery dropdown (newest first). Photos and videos are extracted automatically from Gallery and Video blocks.

**Adding more photos/videos to an existing project:**
1. Posts → find the project → click Edit
2. In the editor, add more images to the Gallery block or add more Video blocks
3. Click **Update**

The website updates automatically within 60 seconds.

---

### Projects with Sub-Projects

If a project has sub-projects (e.g., "Women, Faith & Climate Security" with activities in Baringo, Lake Victoria Basin, and Mombasa), **create ONE WordPress post** that contains all the media from the main project and all its sub-projects:

**Steps:**
1. Create one gallery post with the main project name (e.g., "Women, Faith & Climate Security")
2. In the Gallery block, upload **all photos from all sub-projects** in one go
3. Add **all videos from all sub-projects** using multiple Video blocks
4. **IMPORTANT:** Add a **caption** to each photo and video indicating which sub-project or region it belongs to:
   - Click on each image in the Gallery block → Add caption (e.g., "Baringo")
   - Click on each video → Add caption (e.g., "Lake Victoria Basin")
   - Use consistent caption text for items from the same sub-project
5. All media appears under **one project entry** in the dropdown

**Result on the Website:**
- Users select "Women, Faith & Climate Security" from the dropdown
- Filter buttons appear automatically based on unique captions: **All | Baringo | Lake Victoria Basin | Mombasa**
- Clicking a filter shows only photos/videos with that caption
- Photos and videos appear in the Photos and Videos tabs

**Caption Tips:**
- Use **short, consistent** captions (e.g., "Baringo" not "Baringo Region Activities")
- Use the **same caption text** for all items from one sub-project
- Captions automatically become filter buttons (sorted alphabetically)
- Items without captions appear when "All" filter is selected

**Why this approach?**
- Keeps related content together under one project
- Filters let users explore by sub-project/location
- Simpler to manage (one post instead of many)
- Flexible - add more sub-projects anytime by using new caption values

---

## 7. Projects

**Where it appears:** Programs → Our Projects

**Steps:**
1. Posts → Add New
2. Enter the **Title** (project name)
3. Write the **full project description** in the editor (background, objectives, impact)
4. Add a **Featured Image**
5. Under **Categories** → check **Projects**
6. Scroll down to **Project Fields** and fill in:
   - `program_area` → e.g. `Climate Change`, `Economic Empowerment`, `Peace & Conflict`
   - `location` → e.g. `Baringo and Lake Victoria Basin, Kenya`
   - `project_status` → `Ongoing` or `Completed`
7. Click **Publish**

**Fields needed:** Title, Content, Featured Image, program_area, location, project_status, Category

---

## 8. Platforms

**Where it appears:** About → Our Platforms & Partnerships

**Steps:**
1. Posts → Add New
2. Enter the **Title** (full platform name, e.g. "Just Rural Transition")
3. Write a **short description** as the first paragraph (this shows on the card preview)
4. Write the **full details** below (this shows when "Read More" is clicked)
5. Add the **platform logo** as the Featured Image
6. Under **Categories** → check **Platforms**
7. Scroll down to **Platform Fields** and fill in:
   - `endorsement_link` → URL to any endorsement document (optional)
   - `platform_type` → e.g. `Food Systems`, `Climate`, `Agriculture`
8. Click **Publish**

**Fields needed:** Title, Short Description + Full Details, Logo (Featured Image), endorsement_link (optional), platform_type, Category

---

## 9. Vacancies

**Where it appears:** Work With Us → Current Vacancies

**Steps:**
1. Posts → Add New
2. Enter the **Title** (job title, e.g. "Program Officer – Climate Change")
3. Write the full **job description and requirements** in the editor
4. Under **Categories** → check **Vacancies**
5. Scroll down to **Vacancy Fields** and fill in:
   - `location` → e.g. `Nairobi, Kenya`
   - `job_type` → e.g. `Full-time`, `Part-time`, `Consultancy`
   - `deadline` → Application deadline (e.g. `June 30, 2026`)
6. Click **Publish**

**Fields needed:** Title, Job Description & Requirements, location, job_type, deadline, Category

> **Note:** When there are no vacancies, the website automatically shows a "No Current Vacancies" message with a prompt to send a CV.

---

## Quick Reference Table

| Content Type | Category to Select | Key Fields |
|---|---|---|
| Blog | Blogs | None (just featured image) |
| Newsletter | Newsletters | pdf_url |
| Publication | Publications | pdf_url |
| Report | Reports | pdf_url |
| Event | Events | event_date, event_time, event_location, event_type |
| Gallery | Gallery | Excerpt (short name), Gallery Block, Video Block |
| Project | Projects | program_area, location, project_status |
| Platform | Platforms | endorsement_link, platform_type |
| Vacancy | Vacancies | location, job_type, deadline |

---

## How to Upload a PDF

1. Go to **Media → Add New**
2. Click **Select Files** and upload your PDF
3. Once uploaded, click on the file
4. On the right side, copy the **File URL**
5. Paste that URL into the relevant `pdf_url` field

---

## Need Help?

Contact the website developer or email: **menganyidamarice@gmail.com**
