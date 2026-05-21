import { getGallery } from "@/lib/wordpress";
import { galleryImages as staticGallery } from "@/data/gallery";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  const wpGallery = await getGallery(50);
  const wpIds = new Set(wpGallery.map(g => g.id));
  const galleryImages = [...wpGallery, ...staticGallery.filter(g => !wpIds.has(g.id))];

  return <GalleryClient galleryImages={galleryImages} />;
}
