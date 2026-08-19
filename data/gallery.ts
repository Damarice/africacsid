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

// ─── Static fallback projects ─────────────────────────────────────────────────
// These always appear in the gallery.
// When a matching WordPress post exists (same slug/id), WordPress media is
// merged in on top — so uploading via WordPress adds to these, not replaces them.

export const staticGalleryProjects: GalleryProject[] = [
  {
    id: "agroforestry",
    name: "Agroforestry for Climate Mitigation, Women's Livelihoods and Community Resilience in Tanzania",
    shortName: "Agroforestry Tanzania",
    coverImage: "/community-work-1.JPG",
    media: [
      { id: 101, title: "Agroforestry Field Training", src: "/community-work-1.JPG", type: "image" },
      { id: 102, title: "Women's Livelihoods Workshop", src: "/community-work-2.JPG", type: "image" },
      { id: 103, title: "Tree Planting Activity", src: "/community-work-3.JPG", type: "image" },
      { id: 104, title: "Community Resilience Meeting", src: "/community-work-4.JPG", type: "image" },
      {
        id: 105,
        title: "Agroforestry Project Overview",
        src: "https://etnhwhwweywzr6wv.public.blob.vercel-storage.com/Emmy%20Clip.mp4",
        type: "video",
      },
    ],
  },
  {
    id: "seeds-for-change",
    name: "Seeds for Change",
    shortName: "Seeds for Change",
    coverImage: "/community-work-5.JPG",
    media: [
      { id: 201, title: "Seed Distribution", src: "/community-work-5.JPG", type: "image" },
      { id: 202, title: "Farmer Training", src: "/community-work-6.JPG", type: "image" },
      { id: 203, title: "Harvest Celebration", src: "/community-work-7.JPG", type: "image" },
      {
        id: 204,
        title: "Seeds for Change Story",
        src: "https://etnhwhwweywzr6wv.public.blob.vercel-storage.com/Janet.mp4",
        type: "video",
      },
    ],
  },
  {
    id: "women-faith-climate",
    name: "Women, Faith, and Climate Security: Strengthening the Gender-Conflict-Climate Nexus Across Kenya's Fragile Ecosystems",
    shortName: "Women, Faith & Climate Security",
    coverImage: "/community-work-8.JPG",
    media: [
      { id: 301, title: "Interfaith Dialogue", src: "/community-work-8.JPG", type: "image" },
      { id: 302, title: "Peace Committee Meeting", src: "/community-work-9.JPG", type: "image" },
      { id: 303, title: "Climate Security Workshop", src: "/community-work-10.JPG", type: "image" },
      { id: 304, title: "Lake Victoria Basin Session", src: "/community-work-11.JPG", type: "image" },
    ],
  },
  {
    id: "zanzadapt",
    name: "Zanzibar Women's Leadership and Adaptation (ZanzAdapt) Project",
    shortName: "ZanzAdapt",
    coverImage: "/community-work-12.JPG",
    media: [
      { id: 401, title: "Women's Leadership Training", src: "/community-work-12.JPG", type: "image" },
      { id: 402, title: "Coastal Adaptation Activity", src: "/community-work-1.JPG", type: "image" },
      { id: 403, title: "ZanzAdapt Community Forum", src: "/community-work-2.JPG", type: "image" },
      { id: 404, title: "ZanzAdapt Field Work", src: "/community-work-3.JPG", type: "image" },
    ],
  },
];
