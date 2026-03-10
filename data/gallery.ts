export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Community Work Session",
    category: "Community Engagement",
    image: "/community-work-1.JPG",
    description: "Community members participating in local development activities"
  },
  {
    id: 2,
    title: "Community Workshop",
    category: "Capacity Building",
    image: "/community-work-2.JPG",
    description: "Training session on sustainable practices"
  },
  {
    id: 3,
    title: "Field Activities",
    category: "Programs",
    image: "/community-work-3.JPG",
    description: "Field implementation of community projects"
  },
  {
    id: 4,
    title: "Community Gathering",
    category: "Events",
    image: "/community-work-4.JPG",
    description: "Community members coming together for dialogue"
  },
  {
    id: 5,
    title: "Project Implementation",
    category: "Programs",
    image: "/community-work-5.JPG",
    description: "On-ground project activities"
  },
  {
    id: 6,
    title: "Community Engagement",
    category: "Community Engagement",
    image: "/community-work-6.JPG",
    description: "Engaging with local communities"
  },
  {
    id: 7,
    title: "Training Session",
    category: "Capacity Building",
    image: "/community-work-7.JPG",
    description: "Skills development workshop"
  },
  {
    id: 8,
    title: "Field Visit",
    category: "Programs",
    image: "/community-work-8.JPG",
    description: "Monitoring and evaluation activities"
  },
  {
    id: 9,
    title: "Community Meeting",
    category: "Events",
    image: "/community-work-9.JPG",
    description: "Community consultation and planning"
  },
  {
    id: 10,
    title: "Project Activities",
    category: "Programs",
    image: "/community-work-10.JPG",
    description: "Implementation of community initiatives"
  },
  {
    id: 11,
    title: "Capacity Building",
    category: "Capacity Building",
    image: "/community-work-11.JPG",
    description: "Empowering communities through training"
  },
  {
    id: 12,
    title: "Community Action",
    category: "Community Engagement",
    image: "/community-work-12.JPG",
    description: "Communities taking action for change"
  },
  {
    id: 13,
    title: "Emmy's Story",
    category: "Videos",
    image: "/community-work-1.JPG",
    description: "Watch Emmy's inspiring story and journey",
    isVideo: true,
    videoUrl: "/Emmy Clip.mp4"
  },
  {
    id: 14,
    title: "Janet's Testimonial",
    category: "Videos",
    image: "/community-work-2.JPG",
    description: "Hear from Janet about the impact of our programs",
    isVideo: true,
    videoUrl: "/Janet.mp4"
  }
];
