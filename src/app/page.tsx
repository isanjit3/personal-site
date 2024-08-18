"use client";

import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Expand } from '@theme-toggles/react';
import '@theme-toggles/react/css/Expand.css';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode', !isLightMode);
    document.body.classList.toggle('dark-mode', isLightMode);
  };

  return (
    <div className="fade-in transition-all duration-500 ease-in-out">
      <main className={`relative flex flex-col items-center justify-center h-screen p-8 transition-all duration-500 ease-in-out ${isLightMode ? 'bg-lightBackground text-customGray' : 'bg-darkBackground text-white'}`}>
        <div className="absolute top-16 right-16 scale-2x">
          {/* @ts-ignore */}
          <Expand 
            toggled={isLightMode}
            onToggle={handleToggle}
            id="theme-toggle"
            name="theme-toggle"
            type="button"
            aria-label="Toggle Theme"
          />
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            Hi, my name is <span className="text-customRed">Sanjit</span> <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-3xl mb-10">
            I am a{""}
            <ReactTyped
              strings={[
                "&nbsp;software engineer",
                "&nbsp;change maker",
                "n innovator"
              ]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1300}
              loop
              showCursor={true}
              cursorChar="|"
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full unselectable">
            <a
              href="https://eblws9kpxcehafgs.public.blob.vercel-storage.com/files/Thangarasu_Sanjit_Resume.pdf"
              target="_blank"
              className="w-full sm:w-auto bg-red-500 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-red-500 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tsanjit/"
              target="_blank"
              className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/isanjit3"
              target="_blank"
              className="w-full sm:w-auto bg-purple-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-purple-600 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a
              href="https://open.spotify.com/user/qfat5ryfmyfo9jz7emk4z6c76?si=b345e46a8d1943f4"
              target="_blank"
              className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-green-500 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <FontAwesomeIcon icon={faSpotify} /> 
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}