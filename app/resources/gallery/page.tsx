import { getGallery } from "@/lib/wordpress";
import { galleryImages as staticGallery } from "@/data/gallery";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  const wpGallery = await getGallery(50);
  const galleryImages = wpGallery.length > 0 ? wpGallery : staticGallery;

  return <GalleryClient galleryImages={galleryImages} />;
}
