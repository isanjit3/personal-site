"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { Expand } from '@theme-toggles/react';
import '@theme-toggles/react/css/Expand.css';

export default function Home() {
  const [showChevron, setShowChevron] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChevron(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        left: 0,
      });
    }
  };

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <div>
      <main className={`relative flex flex-col items-center justify-center h-screen p-8 ${isLightMode ? 'bg-white text-customGray' : 'bg-customGray text-white'}`}>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            Hi, my name is <span className="text-red-500">Sanjit</span> <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-3xl mb-10">
            I am a{""}
            <ReactTyped
              strings={[
                "&nbsp;software engineer",
                "n entrepreneur",
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
              href="/assets/Thangarasu_Sanjit_Resume.pdf"
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
          {showChevron && (
            <div
              className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 chevron cursor-pointer opacity-0 transition-opacity duration-1000 ease-in-out ${isLightMode ? 'text-customGray' : 'text-white'}`}
              onClick={handleScroll}
              style={{ opacity: showChevron ? 1 : 0 }}
            >
              <FontAwesomeIcon icon={faChevronDown} size="3x" />
            </div>
          )}
          <div className="absolute top-16 right-16">
            <Expand
              toggled={isLightMode}
              onToggle={handleToggle}
              id="theme-toggle"
              name="theme-toggle"
              type="button"
              aria-label="Toggle Theme"
            />
          </div>
        </div>
      </main>
      <div id="next-section" className="w-full h-screen bg-gray-800 flex items-center justify-center">
        <p className="text-3xl text-white">Next Section Content</p>
      </div>
    </div>
  );
}