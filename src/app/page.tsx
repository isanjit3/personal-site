import { Hero } from "@/components/sections/hero";
import { NavigationBar } from "@/components/sections/navbar";
import Badge from "@/components/sections/badge"; // Assuming Badge is in your components folder

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen p-12 relative">
      <NavigationBar />
      <div className="flex flex-1 items-start justify-center mt-40">
        <Hero />
      </div>
      {/* Overlay the Badge */}
      <div className="absolute top-0 left-[-8rem] p-4" style={{ width: '100vw', height: '100vh' }}>
        <Badge />
      </div>
    </main>
  );
}