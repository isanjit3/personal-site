"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-customGray text-white p-8">
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
            backDelay={1000}
            loop
          />
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/assets/Thangarasu_Sanjit_Resume.pdf"
            target="_blank"
            className="bg-red-500 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-red-500 flex items-center space-x-2 text-lg unselectable"
          >
            <FontAwesomeIcon icon={faFile} />
            <span>Resume</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tsanjit/"
            target="_blank"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 flex items-center space-x-2 text-lg unselectable"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/isanjit3"
            target="_blank"
            className="bg-purple-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-purple-600 flex items-center space-x-2 text-lg unselectable"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </a>
          <a
            href="https://open.spotify.com/user/qfat5ryfmyfo9jz7emk4z6c76?si=b345e46a8d1943f4"
            target="_blank"
            className="bg-green-500 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-white hover:text-green-500 flex items-center space-x-2 text-lg unselectable"
          >
            <FontAwesomeIcon icon={faSpotify} />
            <span>Spotify</span>
          </a>
        </div>
      </div>
    </main>
  );
}