import { Hero } from "@/components/sections/hero";
import { NavigationBar } from "@/components/sections/navbar";

export default function Home() {
  return (
    
      <main className="flex flex-col w-full min-h-screen p-12 relative">
        <NavigationBar />
        <div className="flex flex-1 items-start justify-center mt-60">
          <Hero />
        </div>
      </main>
  );
}