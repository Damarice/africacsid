import { getGalleryAlbums } from "@/lib/wordpress";
import { staticGalleryProjects, GalleryProject, GalleryMedia } from "@/data/gallery";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  // Start with empty array — WordPress projects will be added first
  const projects: GalleryProject[] = [];

  try {
    // Fetch WordPress albums first so they appear at the top (newest first)
    const wpAlbums = await getGalleryAlbums();
    console.log(`[Gallery Page] Fetched ${wpAlbums.length} albums from WordPress`);

    for (const album of wpAlbums) {
      console.log(`[Gallery Page] Processing album: projectId=${album.projectId}, photos=${album.photos.length}, videos=${album.videos.length}`);
      
      // Add every WordPress post as a brand-new project — no merging with static projects
      // This ensures WordPress projects appear with their full names and aren't confused with static entries
      console.log(`[Gallery Page] Adding new project from WordPress: ${album.projectId}`);
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
  } catch (error) {
    console.error('[Gallery Page] Error fetching WordPress albums:', error);
    // WordPress unreachable — static projects still show below
  }

  // Add static projects after WordPress projects
  for (const p of staticGalleryProjects) {
    projects.push({
      ...p,
      media: [...p.media],
    });
  }

  return <GalleryClient projects={projects} />;
}
