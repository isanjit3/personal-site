"use client";

import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div 
        className="flex flex-col items-center gap-y-10"
        >
            <h1 className="font-bold tracking-wide text-6xl">
                Hi, my name is<span className="gradient-text"> Sanjit </span>👋
            </h1>
            <p className="text-3xl">
                I am a
                <ReactTyped
                    strings={[
                        '&nbsp;<span class="underline">software engineer</span>',
                        '&nbsp;<span class="underline">change maker</span>',
                        'n&nbsp;<span class="underline">innovator</span>',
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    backDelay={1300}
                    loop
                    showCursor={true}
                    cursorChar="|"
                />
            </p>
            <div className="shrink-hover unselectable grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <a href="https://eblws9kpxcehafgs.public.blob.vercel-storage.com/files/Thangarasu_Sanjit_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button 
                        size={"custom"}
                        className="flex flex-row items-center w-full gap-x-2.5 bg-red-500 text-white hover:bg-red-100 hover:text-red-500">
                        <FontAwesomeIcon icon={faFile} />
                        Resume
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/tsanjit/" target="_blank" rel="noopener noreferrer">
                    <Button
                        size={"custom"}
                        className="flex flex-row items-center w-full gap-x-2.5 bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500">             
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </Button>
                </a>
                <a href="https://github.com/isanjit3" target="_blank" rel="noopener noreferrer">
                    <Button
                        size={"custom"}
                        className="flex flex-row items-center w-full gap-x-2.5 bg-purple-500 text-white hover:bg-purple-100 hover:text-purple-500">
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                    </Button>
                </a>
                <a href="https://open.spotify.com/user/qfat5ryfmyfo9jz7emk4z6c76?si=894cca65877242eb" target="_blank" rel="noopener noreferrer">
                    <Button
                        size={"custom"}
                        className="flex flex-row items-center w-full gap-x-2.5 bg-green-500 text-white hover:bg-green-100 hover:text-green-500">
                        <FontAwesomeIcon icon={faSpotify} />
                        Spotify
                    </Button>
                </a>
            </div>
        </div>
    );
}