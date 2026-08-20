// Gallery types — shared between wordpress.ts, page.tsx, and GalleryClient.tsx
// Static projects are used as fallback when WordPress has no content yet,
// and are always shown alongside any WordPress-managed projects.

export interface GalleryMedia {
  id: number;
  title: string;
  src: string;
  type: "image" | "video";
  description?: string;
}

export interface GalleryProject {
  id: string;
  name: string;
  shortName: string;
  coverImage: string;
  media: GalleryMedia[];
}

// ─── No static projects — all gallery content comes from WordPress ───────────
// Gallery is 100% managed via WordPress. No hardcoded fallback projects.

export const staticGalleryProjects: GalleryProject[] = [];
