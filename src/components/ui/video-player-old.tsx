"use client";

import { useState, useEffect } from "react";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

interface R2VideoPlayerProps {
	videoKey: string;
	videoKeySafari?: string;
}

export default function R2VideoPlayer({
	videoKey,
	videoKeySafari,
}: R2VideoPlayerProps) {
	const [videoUrl, setVideoUrl] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		// Detect Safari browser
		const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		setIsSafari(isSafariBrowser);
	}, []);

	useEffect(() => {
		async function getVideoUrl() {
			try {
				// Create an S3 client that points to Cloudflare R2
				const s3Client = new S3Client({
					region: "auto", // R2 uses 'auto' as the region
					endpoint: `https://${process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
					credentials: {
						accessKeyId: process.env.NEXT_PUBLIC_R2_ACCESS_KEY || "",
						secretAccessKey: process.env.NEXT_PUBLIC_R2_SECRET_KEY || "",
					},
				});

				// Use Safari video key if available and browser is Safari
				const keyToUse = isSafari && videoKeySafari ? videoKeySafari : videoKey;

				// Create a command to get the object
				const command = new GetObjectCommand({
					Bucket: process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_NAME || "",
					Key: keyToUse,
				});

				// Generate a pre-signed URL (valid for 1 hour)
				const signedUrl = await getSignedUrl(s3Client, command, {
					expiresIn: 3600,
				});

				setVideoUrl(signedUrl);
			} catch (err) {
				console.error("Error fetching video:", err);
				setError("Failed to load video. Please try again later.");
			} finally {
				setLoading(false);
			}
		}

		getVideoUrl();
	}, [videoKey, videoKeySafari, isSafari]);

	if (loading) {
		return <></>;
	}

	if (error) {
		return (
			<div className="">
				<div className="">{error}</div>
			</div>
		);
	}

	// Determine video type based on file extension
	const getVideoType = (key: string) => {
		const extension = key.split('.').pop()?.toLowerCase();
		switch (extension) {
			case 'mov':
				return 'video/quicktime';
			case 'mp4':
				return 'video/mp4';
			case 'webm':
				return 'video/webm';
			default:
				return 'video/mp4';
		}
	};

	const videoType = getVideoType(isSafari && videoKeySafari ? videoKeySafari : videoKey);

	return (
		<video
			autoPlay
			loop
			muted
			playsInline
			className="absolute top-0 left-0 w-full h-full object-cover"
			preload="metadata"
			aria-hidden="true"
		>
			<source src={videoUrl || undefined} type={videoType} />
			Your browser does not support the video tag.
		</video>
	);
}
