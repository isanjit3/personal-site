import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { type NextRequest, NextResponse } from "next/server"
import type { Readable } from "stream"

// Initialize the S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY!,
    secretAccessKey: process.env.R2_SECRET_KEY!,
  },
})

// Map file extensions to MIME types
const mimeTypes: Record<string, string> = {
  mp4: "video/mp4",
  mov: "video/quicktime",
  webm: "video/webm",
  avi: "video/x-msvideo",
  mkv: "video/x-matroska",
  m4v: "video/x-m4v",
  ogg: "video/ogg",
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const fileName = searchParams.get("fileName")

  if (!fileName) {
    return new NextResponse("Missing fileName parameter", { status: 400 })
  }

  try {
    // Get the file extension to determine the content type
    const fileExtension = fileName.split(".").pop()?.toLowerCase() || ""
    const contentType = mimeTypes[fileExtension] || "application/octet-stream"

    // Handle range requests for video seeking
    const rangeHeader = request.headers.get("range")
    let startByte = 0
    let endByte: number | undefined

    if (rangeHeader) {
      const rangeMatch = rangeHeader.match(/bytes=(\d+)-(\d+)?/)
      if (rangeMatch) {
        startByte = Number.parseInt(rangeMatch[1], 10)
        if (rangeMatch[2]) {
          endByte = Number.parseInt(rangeMatch[2], 10)
        }
      }
    }

    // Get the object from R2 with range if specified
    const command = new GetObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
      Key: fileName,
      Range: rangeHeader ? `bytes=${startByte}-${endByte || ""}` : undefined,
    })

    const response = await s3Client.send(command)

    if (!response.Body) {
      return new NextResponse("File not found", { status: 404 })
    }

    // Convert the readable stream to a Response
    const stream = response.Body as Readable
    const headers = new Headers()

    headers.set("Content-Type", contentType)

    if (response.ContentLength) {
      headers.set("Content-Length", response.ContentLength.toString())
    }

    // Enable range requests for video seeking
    headers.set("Accept-Ranges", "bytes")

    // Set Cache-Control header for better performance
    headers.set("Cache-Control", "public, max-age=31536000")

    // Set appropriate status code for range requests
    const status = rangeHeader ? 206 : 200

    if (rangeHeader && response.ContentRange) {
      headers.set("Content-Range", response.ContentRange)
    }

    // Return the stream as a response
    return new NextResponse(stream as unknown as ReadableStream, {
      status,
      headers,
    })
  } catch (error) {
    console.error("Error fetching video:", error)
    return new NextResponse("Error fetching video", { status: 500 })
  }
}

