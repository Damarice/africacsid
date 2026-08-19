// Gallery types — shared between wordpress.ts, page.tsx, and GalleryClient.tsx
// All gallery content is managed entirely through WordPress.
// No static data lives here.

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
