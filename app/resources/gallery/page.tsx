import { getGalleryAlbums } from "@/lib/wordpress";
import { staticGalleryProjects, GalleryProject, GalleryMedia } from "@/data/gallery";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  // Start with static projects as the base — always visible
  const projects: GalleryProject[] = staticGalleryProjects.map((p) => ({
    ...p,
    media: [...p.media],
  }));

  // Track existing media ids to avoid duplicates
  const existingIds = new Set(projects.flatMap((p) => p.media.map((m) => m.id)));

  try {
    // Fetch WordPress albums and merge into matching static projects,
    // or add as brand-new project tabs if the slug doesn't match any static one.
    const wpAlbums = await getGalleryAlbums();

    for (const album of wpAlbums) {
      const existing = projects.find((p) => p.id === album.projectId);

      if (existing) {
        // Merge WP media into the matching static project
        for (const photo of album.photos) {
          if (existingIds.has(photo.id)) continue;
          const item: GalleryMedia = {
            id: photo.id,
            title: photo.title,
            src: photo.url,
            type: "image",
            description: photo.caption || undefined,
          };
          existing.media.push(item);
          existingIds.add(photo.id);
        }
        for (const video of album.videos) {
          if (existingIds.has(video.id)) continue;
          const item: GalleryMedia = {
            id: video.id,
            title: video.title,
            src: video.url,
            type: "video",
            description: video.caption || undefined,
          };
          existing.media.push(item);
          existingIds.add(video.id);
        }
      } else {
        // Brand-new project from WordPress — add as a new tab
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
        projects.push({
          id: album.projectId,
          name: album.projectName,
          shortName: album.projectShortName,
          coverImage: album.coverImage,
          media,
        });
      }
    }
  } catch {
    // WordPress unreachable — static projects still show
  }

  return <GalleryClient projects={projects} />;
}
