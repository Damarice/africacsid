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

export interface WPGalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
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

export async function getGallery(perPage = 50): Promise<WPGalleryItem[]> {
  try {
    const posts = await fetchPosts(WP_CATEGORY_IDS.gallery, perPage);
    return posts.map((p) => ({
      id: p.id,
      title: stripHtml(p.title.rendered),
      category: getPrimaryCategory(p),
      image: getFeaturedImage(p),
      description: stripHtml(p.excerpt.rendered),
    }));
  } catch (err) {
    console.error("[WP] getGallery failed:", err);
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
