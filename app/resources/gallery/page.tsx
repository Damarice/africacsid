import { getGalleryAlbums } from "@/lib/wordpress";
import { GalleryProject, GalleryMedia } from "@/data/gallery";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  const wpAlbums = await getGalleryAlbums();

  // Build GalleryProject array purely from WordPress — no static data
  const projects: GalleryProject[] = wpAlbums.map((album) => {
    const media: GalleryMedia[] = [
      ...album.photos.map((photo) => ({
        id: photo.id,
        title: photo.title,
        src: photo.url,
        type: "image" as const,
        description: photo.caption || undefined,
      })),
      ...album.videos.map((video) => ({
        id: video.id,
        title: video.title,
        src: video.url,
        type: "video" as const,
        description: video.caption || undefined,
      })),
    ];

    return {
      id: album.projectId,
      name: album.projectName,
      shortName: album.projectShortName,
      coverImage: album.coverImage,
      media,
    };
  });

  return <GalleryClient projects={projects} />;
}
