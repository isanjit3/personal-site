import { Typewriter } from "@/components/ui/typewriter";
import { BoxReveal } from "@/components/ui/box-reveal";
import VideoPlayer from "@/components/ui/video-player";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<div className="">
				<div className="flex min-h-screen">
					{/* Left content */}
					<div className="flex-1 relative flex flex-col py-32 pl-32">
						{/* Header */}
						<div className="flex flex-col">
							<p className="text-lg">Hi, I&apos;m</p>
							<p className="text-xl">Sanjit Thangarasu.</p>
						</div>
						{/* Typewriter */}
						<div className="flex flex-col">
							<span className="text-lg">
								{<span>I am </span>}
								<Typewriter
									text={[
										"a software engineer",
										"a problem solver",
										"an innovator",
										"a change maker",
										"a lifelong learner",
									]}
									speed={70}
									className="text-[#5046e6]"
									waitTime={1500}
									deleteSpeed={40}
									cursorChar={"_"}
								/>
							</span>
						</div>
						{/* Socials */}
						<div className="flex flex-col mt-16 gap-y-10">
							<BoxReveal
								href="https://pub-71230dd3ddd04665b2275f23aae355c5.r2.dev/Thangarasu_Sanjit_Resume.pdf"
								target="_blank"
								className="text-md"
								download="Thangarasu_Sanjit_Resume.pdf"
							>
								Resume
							</BoxReveal>
							<BoxReveal
								href="https://www.linkedin.com/in/tsanjit/"
								target="_blank"
								className="text-md"
							>
								LinkedIn
							</BoxReveal>
							<BoxReveal
								href="https://github.com/isanjit3"
								target="_blank"
								className="text-md"
							>
								GitHub
							</BoxReveal>
						</div>
					</div>

					{/* Right content */}
					<div className="flex-1 relative flex flex-col">
						<div className="relative w-full h-full -ml-20 overflow-y-hidden overflow-x-hidden pointer-events-none">
							<Suspense>
								<VideoPlayer 
								videoName="caesar-safari.mp4" 
								chromeVideoName="caesar-chrome.webm" 
								className="absolute top-0 left-0 w-full h-full scale-125"
								controls={false}
								autoPlay={true}
								muted={true}
								loop={true}
								preload="auto"
								/>
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
