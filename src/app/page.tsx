import { Hero } from "@/components/sections/hero";
import { NavigationBar } from "@/components/global/navbar";
import Badge from "@/components/global/badge";
import ScrollChevron from "@/components/global/chevron";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-12">
      <NavigationBar />
      <div className="flex flex-col flex-1 justify-center">
        <Hero />
      </div>
    </main>
  );
}