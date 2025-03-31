"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { useBrowserDetection } from "@/hooks/use-browser-detection";

interface VideoPlayerProps {
	videoName: string;
	chromeVideoName?: string;
	className?: string;
	controls?: boolean;
	autoPlay?: boolean;
	muted?: boolean;
	loop?: boolean;
	poster?: string;
	preload?: "auto" | "metadata" | "none";
	onError?: (error: Error) => void;
}

export default function VideoPlayer({
	videoName,
	chromeVideoName,
	className = "",
	controls = true,
	autoPlay = false,
	muted = false,
	loop = false,
	preload = "auto",
	poster,
	onError,
}: VideoPlayerProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const { isSafari } = useBrowserDetection();

	// Determine which video to use based on browser
	const activeVideoName = isSafari && chromeVideoName ? chromeVideoName : videoName;

	// Get file extension to determine video type
	const fileExtension = activeVideoName.split(".").pop()?.toLowerCase() || "";

	// Map file extensions to MIME types
	const mimeTypes: Record<string, string> = {
		mp4: "video/mp4",
		mov: "video/quicktime",
		webm: "video/webm",
		avi: "video/x-msvideo",
		mkv: "video/x-matroska",
		m4v: "video/x-m4v",
		ogg: "video/ogg",
	};

	const videoType = mimeTypes[fileExtension] || "video/mp4";

	const handleLoadedData = () => {
		setIsLoading(false);
	};

	const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
		setIsLoading(false);
		const errorMessage = `Failed to load video: ${activeVideoName}`;
		setError(errorMessage);
		if (onError) {
			console.error(`Error on ${e}`);
			onError(new Error(errorMessage));
		}
	};

	return (
		<div className={`relative ${className}`}>
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
					<Loader2 className="h-8 w-8 animate-spin text-primary" />
				</div>
			)}

			{error && (
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 z-10 p-4">
					<AlertCircle className="h-8 w-8 text-red-500 mb-2" />
					<p className="text-red-500 text-center">{error}</p>
				</div>
			)}

			<video
				ref={videoRef}
				className="w-full h-full"
				controls={controls}
				autoPlay={autoPlay}
				muted={muted}
				loop={loop}
				playsInline
				poster={poster}
				preload={preload}
				onLoadedData={handleLoadedData}
				onError={handleError}
			>
				<source
					src={`/api/video?fileName=${encodeURIComponent(activeVideoName)}`}
					type={videoType}
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
