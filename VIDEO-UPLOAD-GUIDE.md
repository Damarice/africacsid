# Video Upload Guide - Vercel Blob Storage

## Setup Instructions

### 1. Enable Vercel Blob Storage
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Storage tab
4. Create a new Blob store
5. Copy the `BLOB_READ_WRITE_TOKEN`

### 2. Add Environment Variable
1. In your Vercel project settings
2. Go to Environment Variables
3. Add: `BLOB_READ_WRITE_TOKEN` = your token
4. Deploy the changes

### 3. Upload Videos
1. Visit `/admin/videos` on your deployed site
2. Upload your video files (Emmy Clip.mp4, Janet.mp4)
3. Copy the generated URLs
4. Update `data/gallery.ts` with the real URLs
5. Commit and push changes

## Current Video Placeholders

In `data/gallery.ts`, replace these placeholder URLs:
- `https://your-blob-url.vercel-storage.com/Emmy%20Clip.mp4`
- `https://your-blob-url.vercel-storage.com/Janet.mp4`

With the actual URLs from Vercel Blob Storage.

## File Structure

```
app/
├── api/
│   └── upload-video/
│       └── route.ts          # Upload API endpoint
├── admin/
│   └── videos/
│       └── page.tsx          # Video management interface
components/
└── VideoUpload.tsx           # Upload component
data/
└── gallery.ts               # Gallery data with video URLs
```

## Notes

- Videos are excluded from Git (see .gitignore)
- Maximum file size depends on your Vercel plan
- Videos are served with public access
- URLs are permanent once uploaded