"use client";

import { useState, useEffect } from "react";
import { SplineScene } from "@/components/robot/splite";
import { BoxReveal } from "@/components/ui/box-reveal";
import { Typewriter } from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
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
                        "an entrepreneur",
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
          <div className="flex-1 flex pl-[9.15rem]">
            {/* New vertically stacked links with box reveal */}
            <div className="space-y-8 text-[1.5rem]">
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <Link href="/about" className="block">
                  <span className="relative z-10">
                    Hover Me
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5046e6] transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                </Link>
              </BoxReveal>
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <Link href="/projects" className="block">
                  <span className="relative z-10">
                    Hover Me
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5046e6] transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                </Link>
              </BoxReveal>
              <BoxReveal boxColor="#5046e6" duration={0.5}>
                <Link href="/contact" className="block">
                  <span className="relative z-10">
                    Hover Me
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5046e6] transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
                  </span>
                </Link>
              </BoxReveal>
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
