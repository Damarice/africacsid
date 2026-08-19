/**
 * WordPress REST API Integration
 * Source: https://resources.africacsid.org
 *
 * Category IDs (confirmed):
 *   blogs        → 2
 *   newsletters  → 3
 *   publications → 4
 *   events       → 5
 *   reports      → 6
 *   gallery      → 7
 *   projects     → 8
 *   platforms    → 9
 */

const WP_BASE_URL = "https://resources.africacsid.org/wp-json/wp/v2";

export const WP_CATEGORY_IDS = {
  blogs: 2,
  newsletters: 3,
  publications: 4,
  events: 5,
  reports: 6,
  gallery: 7,
  projects: 8,
  platforms: 9,
  vacancies: 10,
} as const;

// ─── Raw WordPress types ──────────────────────────────────────────────────────

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  featured_media: number;
  acf?: {
    pdf_url?: string;
    event_date?: string;
    event_time?: string;
    event_location?: string;
    event_type?: string;
    program_area?: string;
    location?: string;
    project_status?: string;
    endorsement_link?: string;
    platform_type?: string;
    [key: string]: any;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
        };
      };
    }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string }>;
  };
}

// ─── Normalised frontend types ────────────────────────────────────────────────

export interface WPBlog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface WPNewsletter {
  id: number;
  slug: string;
  title: string;
  date: string;
  description: string;
  downloadUrl: string;
}

export interface WPPublication {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  downloadUrl: string;
  type: string;
}

export interface WPEvent {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  time: string;
  location: string;
  type: string;
  status: "upcoming" | "past";
  image: string;
}

/**
 * One WPGalleryAlbum = one WordPress post in the Gallery category.
 *
 * Uses FREE ACF fields only (no ACF Pro required).
 *
 * ACF fields expected on the post:
 *
 *   project_id         (text)     — unique slug e.g. "horn-of-africa"
 *   project_name       (text)     — full name shown in the project header
 *   project_short_name (text)     — short name shown on the tab button
 *   cover_image        (image)    — Return Format = Array; project header thumbnail
 *
 *   photos             (repeater) — one row per photo:
 *     └─ photo         (image)    — Return Format = Array
 *     └─ photo_caption (textarea) — optional caption
 *
 *   videos             (repeater) — one row per video:
 *     └─ video_url     (url)
 *     └─ video_title   (text)
 *     └─ video_caption (textarea) — optional
 */
export interface WPGalleryAlbum {
  /** WordPress post id */
  postId: number;
  /** Unique project slug, e.g. "horn-of-africa" */
  projectId: string;
  /** Full project name, e.g. "Climate Resilience in the Horn of Africa" */
  projectName: string;
  /** Short name for the tab button, e.g. "Horn of Africa" */
  projectShortName: string;
  /** Cover image URL shown in the project header card */
  coverImage: string;
  photos: Array<{
    id: number;
    url: string;
    title: string;
    caption: string;
  }>;
  videos: Array<{
    id: number;
    url: string;
    title: string;
    caption: string;
  }>;
}

/** @deprecated Use WPGalleryAlbum. Kept for any legacy callers. */
export interface WPGalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  type: "image" | "video";
  videoUrl?: string;
  projectId: string;
}

export interface WPReport {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  downloadUrl: string;
  category: string;
}

export interface WPProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  programArea: string;
  location: string;
  status: string;
  tags: string[];
}

export interface WPPlatform {
  id: number;
  slug: string;
  name: string;
  description: string;
  content: string;
  logo: string;
  endorsementLink: string;
  platformType: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function processWordPressContent(content: string): string {
  // Clean up WordPress content for better display
  return content
    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/g, "")
    // Ensure proper paragraph spacing
    .replace(/<\/p>\s*<p>/g, "</p><p>")
    // Clean up extra whitespace
    .replace(/\s+/g, " ")
    .trim();
}

function getFeaturedImage(post: WPPost, fallback = "/hero.JPG"): string {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return fallback;
  return (
    media.media_details?.sizes?.large?.source_url ||
    media.media_details?.sizes?.medium?.source_url ||
    media.source_url ||
    fallback
  );
}

function getAuthor(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || "Africa CSID Team";
}

function getPrimaryCategory(post: WPPost): string {
  const skip = ["blogs", "newsletters", "publications", "events", "reports", "gallery", "projects", "platforms", "uncategorized"];
  const terms = post._embedded?.["wp:term"]?.[0] ?? [];
  const cat = terms.find((t) => !skip.includes(t.slug));
  return cat?.name || "General";
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// ─── Core fetch ───────────────────────────────────────────────────────────────

async function fetchPosts(categoryId: number, perPage = 20): Promise<WPPost[]> {
  const url = `${WP_BASE_URL}/posts?categories=${categoryId}&per_page=${perPage}&_embed=1&orderby=date&order=desc`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`WP API error ${res.status}: ${url}`);
  return res.json();
}

async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const url = `${WP_BASE_URL}/posts?slug=${slug}&_embed=1`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`WP API error ${res.status}: ${url}`);
  const posts: WPPost[] = await res.json();
  return posts[0] ?? null;
}

// ─── Blogs ────────────────────────────────────────────────────────────────────

export async function getBlogs(perPage = 12): Promise<WPBlog[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.blogs, perPage);
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      author: getAuthor(p),
      category: getPrimaryCategory(p),
      image: getFeaturedImage(p),
    }));
  } catch (err) {
    console.error("[WP] getBlogs failed:", err);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<WPBlog | null> {
  try {
    const p = await fetchPostBySlug(slug);
    if (!p) return null;
    return {
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      author: getAuthor(p),
      category: getPrimaryCategory(p),
      image: getFeaturedImage(p),
    };
  } catch (err) {
    console.error("[WP] getBlogBySlug failed:", err);
    return null;
  }
}

// ─── Newsletters ──────────────────────────────────────────────────────────────

export async function getNewsletters(perPage = 12): Promise<WPNewsletter[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.newsletters, perPage);
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      date: formatDate(p.date),
      description: stripHtml(p.excerpt.rendered),
      downloadUrl: p.acf?.pdf_url || "#",
    }));
  } catch (err) {
    console.error("[WP] getNewsletters failed:", err);
    return [];
  }
}

export async function getNewsletterBySlug(slug: string): Promise<WPNewsletter | null> {
  try {
    const p = await fetchPostBySlug(slug);
    if (!p) return null;
    return {
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      date: formatDate(p.date),
      description: stripHtml(p.excerpt.rendered),
      downloadUrl: p.acf?.pdf_url || "#",
    };
  } catch (err) {
    console.error("[WP] getNewsletterBySlug failed:", err);
    return null;
  }
}

// ─── Publications ─────────────────────────────────────────────────────────────

export async function getPublications(perPage = 12): Promise<WPPublication[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.publications, perPage);
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      image: getFeaturedImage(p),
      downloadUrl: p.acf?.pdf_url || "#",
      type: getPrimaryCategory(p),
    }));
  } catch (err) {
    console.error("[WP] getPublications failed:", err);
    return [];
  }
}

export async function getPublicationBySlug(slug: string): Promise<WPPublication | null> {
  try {
    const p = await fetchPostBySlug(slug);
    if (!p) return null;
    return {
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      image: getFeaturedImage(p),
      downloadUrl: p.acf?.pdf_url || "#",
      type: getPrimaryCategory(p),
    };
  } catch (err) {
    console.error("[WP] getPublicationBySlug failed:", err);
    return null;
  }
}

// ─── Events ───────────────────────────────────────────────────────────────────

export async function getEvents(perPage = 20): Promise<WPEvent[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.events, perPage);
    const now = new Date();
    return posts.map((p) => {
      const eventDate = p.acf?.event_date || p.date;
      return {
        id: p.id,
        slug: p.slug,
        title: stripHtml(p.title.rendered),
        description: stripHtml(p.excerpt.rendered),
        content: processWordPressContent(p.content.rendered),
        date: formatDate(eventDate),
        time: p.acf?.event_time || "TBD",
        location: p.acf?.event_location || "TBD",
        type: p.acf?.event_type || getPrimaryCategory(p),
        status: new Date(eventDate) >= now ? "upcoming" : "past",
        image: getFeaturedImage(p),
      };
    });
  } catch (err) {
    console.error("[WP] getEvents failed:", err);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<WPEvent | null> {
  try {
    const p = await fetchPostBySlug(slug);
    if (!p) return null;
    const now = new Date();
    const eventDate = p.acf?.event_date || p.date;
    return {
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(eventDate),
      time: p.acf?.event_time || "TBD",
      location: p.acf?.event_location || "TBD",
      type: p.acf?.event_type || getPrimaryCategory(p),
      status: new Date(eventDate) >= now ? "upcoming" : "past",
      image: getFeaturedImage(p),
    };
  } catch (err) {
    console.error("[WP] getEventBySlug failed:", err);
    return null;
  }
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * ZERO PLUGINS REQUIRED — uses only built-in WordPress features.
 *
 * ═══════════════════════════════════════════════════════════════════
 * HOW TO SET UP A PROJECT GALLERY IN WORDPRESS (one-time per project)
 * ═══════════════════════════════════════════════════════════════════
 *
 * 1. Posts → Add New
 * 2. Title         → Full project name
 *                    e.g. "Agroforestry for Climate Mitigation, Women's
 *                    Livelihoods and Community Resilience in Tanzania"
 * 3. Excerpt       → Short tab label  e.g. "Agroforestry Tanzania"
 *                    (Click "Open excerpt panel" if not visible)
 * 4. Featured Image → The cover photo shown in the project header card
 * 5. Category      → Gallery
 * 6. Upload photos → In the post body, use Add Block → Gallery (or Image)
 *                    to upload/select all project photos.
 *                    WordPress automatically "attaches" uploaded images
 *                    to this post — that is how the site reads them.
 * 7. Videos (optional) → In the post body, use Add Block → Video
 *                    to upload video files directly to WordPress.
 *                    Uploaded videos are attached to the post just like
 *                    photos — the site reads them the same way.
 *                    Add as many Video blocks as you need.
 * 8. Publish
 *
 * To add more photos later → Edit the post → upload more images in the body
 * To add a brand new project → repeat steps above with a new post
 *
 * ═══════════════════════════════════════════════════════════════════
 */

export interface WPGalleryAlbum {
  postId: number;
  /** Derived from the post slug */
  projectId: string;
  /** Derived from the post title */
  projectName: string;
  /** Derived from the post excerpt — short label for the tab button */
  projectShortName: string;
  /** Featured image URL */
  coverImage: string;
  photos: Array<{ id: number; url: string; title: string; caption: string }>;
  videos: Array<{ id: number; url: string; title: string; caption: string }>;
}

/** @deprecated kept for type safety during transition */
export interface WPGalleryItem {
  id: number; title: string; category: string; image: string;
  description: string; type: "image" | "video"; videoUrl?: string; projectId: string;
}

export async function getGalleryAlbums(): Promise<WPGalleryAlbum[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.gallery, 50);
    console.log(`[WP] getGalleryAlbums: fetched ${posts.length} posts`);
    if (posts.length === 0) return [];

    // Fetch attached media and build albums in parallel
    const albums = await Promise.all(
      posts.map(async (p): Promise<WPGalleryAlbum | null> => {
        const projectId   = p.slug.trim();
        const projectName = stripHtml(p.title.rendered);
        // Excerpt used as the short tab label; fall back to title if empty
        const projectShortName = stripHtml(p.excerpt.rendered) || projectName;
        const coverImage  = getFeaturedImage(p, "/hero.JPG");

        // ── Photos: images attached to this post ──────────────────────────
        let photos: WPGalleryAlbum["photos"] = [];
        // ── Videos: video files attached to this post ─────────────────────
        let videos: WPGalleryAlbum["videos"] = [];
        try {
          // First, try to get directly attached media
          const mediaUrl = `${WP_BASE_URL}/media?parent=${p.id}&per_page=100&orderby=date&order=asc`;
          const mediaRes = await fetch(mediaUrl, { next: { revalidate: 60 } });
          if (mediaRes.ok) {
            const mediaItems: any[] = await mediaRes.json();

            photos = mediaItems
              .filter((m) => m.media_type === "image")
              .map((m) => ({
                id: m.id,
                url:
                  m.media_details?.sizes?.large?.source_url ||
                  m.media_details?.sizes?.medium_large?.source_url ||
                  m.media_details?.sizes?.medium?.source_url ||
                  m.source_url,
                title: m.title?.rendered ? stripHtml(m.title.rendered) : projectName,
                caption: m.caption?.rendered ? stripHtml(m.caption.rendered) : "",
              }))
              .filter((m) => !!m.url);

            videos = mediaItems
              .filter((m) => m.media_type === "file" && m.mime_type?.startsWith("video/"))
              .map((m, idx) => ({
                id: m.id ?? p.id * 10000 + idx,
                url: m.source_url ?? "",
                title: m.title?.rendered ? stripHtml(m.title.rendered) : `Video ${idx + 1}`,
                caption: m.caption?.rendered ? stripHtml(m.caption.rendered) : "",
              }))
              .filter((v) => !!v.url);
          }

          // Also extract images from Gallery blocks in post content
          // WordPress Gallery block stores images with data-id attribute
          if (p.content?.rendered) {
            const content = p.content.rendered;
            const dataIdMatches = content.matchAll(/data-id="(\d+)"/g);
            const galleryImageIds = Array.from(dataIdMatches, m => parseInt(m[1]));
            
            // Fetch each gallery image by ID
            for (const imageId of galleryImageIds) {
              // Skip if already in photos array
              if (photos.some(photo => photo.id === imageId)) continue;
              
              try {
                const imgRes = await fetch(`${WP_BASE_URL}/media/${imageId}`, { next: { revalidate: 60 } });
                if (imgRes.ok) {
                  const img: any = await imgRes.json();
                  if (img.media_type === "image") {
                    photos.push({
                      id: img.id,
                      url:
                        img.media_details?.sizes?.large?.source_url ||
                        img.media_details?.sizes?.medium_large?.source_url ||
                        img.media_details?.sizes?.medium?.source_url ||
                        img.source_url,
                      title: img.title?.rendered ? stripHtml(img.title.rendered) : projectName,
                      caption: img.caption?.rendered ? stripHtml(img.caption.rendered) : "",
                    });
                  }
                }
              } catch {
                // Skip this image if fetch fails
              }
            }
          }
        } catch {
          // media fetch failed — photos and videos stay empty, album still shows
        }

        console.log(`[WP] Album built: projectId=${projectId}, photos=${photos.length}, videos=${videos.length}`);
        return { postId: p.id, projectId, projectName, projectShortName, coverImage, photos, videos };
      })
    );

    return albums.filter(Boolean) as WPGalleryAlbum[];
  } catch (err) {
    console.error("[WP] getGalleryAlbums failed:", err);
    return [];
  }
}

// ─── Reports ──────────────────────────────────────────────────────────────────

export async function getReports(perPage = 20): Promise<WPReport[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.reports, perPage);
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      downloadUrl: p.acf?.pdf_url || "#",
      category: getPrimaryCategory(p),
    }));
  } catch (err) {
    console.error("[WP] getReports failed:", err);
    return [];
  }
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export async function getProjects(perPage = 20): Promise<WPProject[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.projects, perPage);
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      image: getFeaturedImage(p),
      programArea: p.acf?.program_area || getPrimaryCategory(p),
      location: p.acf?.location || "",
      status: p.acf?.project_status || "Ongoing",
      tags: p.acf?.program_area ? [p.acf.program_area] : [],
    }));
  } catch (err) {
    console.error("[WP] getProjects failed:", err);
    return [];
  }
}

// ─── Platforms ────────────────────────────────────────────────────────────────

export async function getPlatforms(perPage = 20): Promise<WPPlatform[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.platforms, perPage);
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      logo: getFeaturedImage(p, ""),
      endorsementLink: p.acf?.endorsement_link || "",
      platformType: p.acf?.platform_type || "",
    }));
  } catch (err) {
    console.error("[WP] getPlatforms failed:", err);
    return [];
  }
}

// ─── Vacancies ────────────────────────────────────────────────────────────────

export interface WPVacancy {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  location: string;
  type: string;
  deadline: string;
}

export async function getVacancies(perPage = 20): Promise<WPVacancy[]> {
  try {
    // Vacancies use category slug "vacancies" — add to WordPress when ready
    const url = `${WP_BASE_URL}/posts?categories=${WP_CATEGORY_IDS.vacancies}&per_page=${perPage}&_embed=1&orderby=date&order=desc`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const posts: WPPost[] = await res.json();
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      description: stripHtml(p.excerpt.rendered),
      content: processWordPressContent(p.content.rendered),
      date: formatDate(p.date),
      location: p.acf?.location || "Kenya",
      type: p.acf?.job_type || "Full-time",
      deadline: p.acf?.deadline || "",
    }));
  } catch (err) {
    console.error("[WP] getVacancies failed:", err);
    return [];
  }
}
