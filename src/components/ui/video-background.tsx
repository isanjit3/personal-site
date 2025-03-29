import { list } from "@vercel/blob"

export default async function VideoBackground() {
  const { blobs } = await list({ prefix: "assets/" })

  console.log("Current directory: assets/")
  console.log("Files in directory:")
  blobs.forEach((blob) => {
    console.log(`- ${blob.pathname} (${blob.size} bytes)`)
  })

  const videoBlob = blobs.find((blob) => blob.pathname.endsWith(".mov"))

  if (!videoBlob) {
    console.log("No video file found. Total files:", blobs.length)
    throw new Error("No video file found in assets/ folder")
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
      aria-hidden="true"
    >
      <source src={videoBlob.url} type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  )
}

