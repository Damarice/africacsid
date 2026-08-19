import { getGalleryAlbums } from "@/lib/wordpress";
import { galleryProjects, GalleryProject, GalleryMedia } from "@/data/gallery";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  // Fetch albums from WordPress — one post per project, each with many photos & videos
  const wpAlbums = await getGalleryAlbums();

  // Deep-clone static projects so WP items can be injected without mutating the module
  const projects: GalleryProject[] = galleryProjects.map((project) => ({
    ...project,
    media: [...project.media],
  }));

  // Build a set of every static media id so we never show duplicates
  const existingIds = new Set(projects.flatMap((p) => p.media.map((m) => m.id)));

  for (const album of wpAlbums) {
    const target = projects.find((p) => p.id === album.projectId);
    if (!target) continue; // unknown project_id — skip

    // ── Inject photos ───────────────────────────────────────────────────────
    for (const photo of album.photos) {
      if (existingIds.has(photo.id)) continue;
      const item: GalleryMedia = {
        id: photo.id,
        title: photo.title,
        src: photo.url,
        type: "image",
        description: photo.caption || undefined,
      };
      target.media.push(item);
      existingIds.add(photo.id);
    }

    // ── Inject videos ───────────────────────────────────────────────────────
    for (const video of album.videos) {
      if (existingIds.has(video.id)) continue;
      const item: GalleryMedia = {
        id: video.id,
        title: video.title,
        src: video.url,
        type: "video",
        description: video.caption || undefined,
      };
      target.media.push(item);
      existingIds.add(video.id);
    }
  }

  return <GalleryClient projects={projects} />;
}
