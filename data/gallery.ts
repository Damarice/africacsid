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

export const galleryProjects: GalleryProject[] = [
  {
    id: "agroforestry",
    name: "Agroforestry for Climate Mitigation, Women's Livelihoods and Community Resilience in Tanzania",
    shortName: "Agroforestry Tanzania",
    coverImage: "/community-work-1.JPG",
    media: [
      {
        id: 101,
        title: "Agroforestry Field Training",
        src: "/community-work-1.JPG",
        type: "image",
        description: "Community members learning agroforestry techniques in the field"
      },
      {
        id: 102,
        title: "Women's Livelihoods Workshop",
        src: "/community-work-2.JPG",
        type: "image",
        description: "Women participating in livelihoods training session"
      },
      {
        id: 103,
        title: "Tree Planting Activity",
        src: "/community-work-3.JPG",
        type: "image",
        description: "Community members planting trees for climate mitigation"
      },
      {
        id: 104,
        title: "Community Resilience Meeting",
        src: "/community-work-4.JPG",
        type: "image",
        description: "Community dialogue on resilience strategies"
      },
      {
        id: 105,
        title: "Agroforestry Project Overview",
        src: "https://etnhwhwweywzr6wv.public.blob.vercel-storage.com/Emmy%20Clip.mp4",
        type: "video",
        description: "Overview of the agroforestry project and its impact on women's livelihoods"
      }
    ]
  },
  {
    id: "seeds-for-change",
    name: "Seeds for Change",
    shortName: "Seeds for Change",
    coverImage: "/community-work-5.JPG",
    media: [
      {
        id: 201,
        title: "Seed Distribution",
        src: "/community-work-5.JPG",
        type: "image",
        description: "Distributing climate-resilient seeds to farmers"
      },
      {
        id: 202,
        title: "Farmer Training",
        src: "/community-work-6.JPG",
        type: "image",
        description: "Training farmers on best agricultural practices"
      },
      {
        id: 203,
        title: "Harvest Celebration",
        src: "/community-work-7.JPG",
        type: "image",
        description: "Communities celebrating a successful harvest"
      },
      {
        id: 204,
        title: "Seeds for Change Story",
        src: "https://etnhwhwweywzr6wv.public.blob.vercel-storage.com/Janet.mp4",
        type: "video",
        description: "Hear from beneficiaries of the Seeds for Change project"
      }
    ]
  },
  {
    id: "women-faith-climate",
    name: "Women, Faith, and Climate Security: Strengthening the Gender-Conflict-Climate Nexus Across Kenya's Fragile Ecosystems",
    shortName: "Women, Faith & Climate Security",
    coverImage: "/community-work-8.JPG",
    media: [
      {
        id: 301,
        title: "Interfaith Dialogue",
        src: "/community-work-8.JPG",
        type: "image",
        description: "Women from different faiths coming together for climate dialogue"
      },
      {
        id: 302,
        title: "Peace Committee Meeting",
        src: "/community-work-9.JPG",
        type: "image",
        description: "Women-led peace committee in Baringo pastoral community"
      },
      {
        id: 303,
        title: "Climate Security Workshop",
        src: "/community-work-10.JPG",
        type: "image",
        description: "Workshop on climate security and gender resilience"
      },
      {
        id: 304,
        title: "Lake Victoria Basin Session",
        src: "/community-work-11.JPG",
        type: "image",
        description: "Engaging fisher communities along the Lake Victoria Basin"
      }
    ]
  },
  {
    id: "zanzadapt",
    name: "Zanzibar Women's Leadership and Adaptation (ZanzAdapt) Project",
    shortName: "ZanzAdapt",
    coverImage: "/community-work-12.JPG",
    media: [
      {
        id: 401,
        title: "Women's Leadership Training",
        src: "/community-work-12.JPG",
        type: "image",
        description: "Women leaders in Zanzibar participating in adaptation training"
      },
      {
        id: 402,
        title: "Coastal Adaptation Activity",
        src: "/community-work-1.JPG",
        type: "image",
        description: "Community-led coastal adaptation activities in Zanzibar"
      },
      {
        id: 403,
        title: "ZanzAdapt Community Forum",
        src: "/community-work-2.JPG",
        type: "image",
        description: "Community forum on climate adaptation strategies"
      },
      {
        id: 404,
        title: "ZanzAdapt Field Work",
        src: "/community-work-3.JPG",
        type: "image",
        description: "On-ground field work with Zanzibar communities"
      }
    ]
  }
];
