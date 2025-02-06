"use client";

import { useState, useEffect } from "react";
import { SplineScene } from "@/components/robot/splite";
import { BoxReveal } from "@/components/ui/box-reveal";
import { Typewriter } from "@/components/ui/typewriter";
import Link from "next/link";

export default function Home() {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 3600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex min-h-screen overflow-hidden">
        {/* Left content */}
        <div className="flex-1 relative z-10 flex flex-col">
          <div className="flex-1 flex justify-center items-center">
            {/* The container for BoxReveal */}
            <div
              className={`max-w-lg pl-15 overflow-hidden pt-8 transition-opacity duration-500 ${
                showBox ? "opacity-100" : "opacity-0"
              }`}
            >
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <p className="text-[4.5rem] font-semibold">
                  Hi, I'm Sanjit<span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <div className="inline-flex items-baseline">
                  <span className="text-[2.25rem]">
                    {"I am "}
                    <Typewriter
                      text={[
                        "a software engineer",
                        "a problem solver",
                        "an innovator",
                        "a change maker",
                      ]}
                      speed={70}
                      className="text-[#5046e6]"
                      waitTime={1500}
                      deleteSpeed={40}
                      cursorChar={"_"}
                    />
                  </span>
                </div>
              </BoxReveal>
            </div>
          </div>
          <div className="flex-1 flex pl-[8rem]">
            {/* New vertically stacked links with box reveal */}
            <div
              className={`max-w-lg pl-15 overflow-hidden transition-opacity duration-500 ${
                showBox ? "opacity-100" : "opacity-0"
              }`}
            >
            <div className="space-y-9 text-[2rem]">
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <div className="relative group">
                <Link href="https://eblws9kpxcehafgs.public.blob.vercel-storage.com/files/Thangarasu_Sanjit_Resume.pdf" target="_blank" className="relative inline-block px-4 py-2 transition-all duration-300 ease-in-out group-hover:text-white">
                  <span className="relative z-10">
                    Resume
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5046e6] transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                  <span className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </Link>
                </div>
              </BoxReveal>
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <div className="relative group">
                <Link href="https://github.com/isanjit3" target="_blank" className="relative inline-block px-4 py-2 transition-all duration-300 ease-in-out group-hover:text-white">
                  <span className="relative z-10">
                    GitHub
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5046e6] transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                  <span className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </Link>
                </div>
              </BoxReveal>
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <div className="relative group">
                <Link href="https://www.linkedin.com/in/tsanjit/" target="_blank" className="relative inline-block px-4 py-2 transition-all duration-300 ease-in-out group-hover:text-white">
                  <span className="relative z-10">
                    LinkedIn
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5046e6] transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </Link>
                </div>
              </BoxReveal>
            </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative overflow-hidden flex justify-end">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-3/4 h-3/4 absolute inset-0"
          />
        </div>
      </div>
    </>
  );
}
