"use client";
// page.tsx
import { Hero } from "@/components/sections/hero";
import { NavigationBar } from "@/components/global/navbar";
import Badge from "@/components/global/badge";
import Badge2 from "@/components/global/badge2";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei"


export default function Page() {
  return (
    <main className="flex flex-col w-full min-h-screen p-12 relative overflow-hidden">
      < Badge2 />
      <NavigationBar />
      <div className="flex flex-1 items-start justify-center mt-40">
        <Hero />
      </div>
    </main>
  );
}