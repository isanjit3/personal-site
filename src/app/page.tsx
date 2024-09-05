import { Hero } from "@/components/sections/hero";
import { NavigationBar } from "@/components/sections/navbar";
import Badge from "@/components/sections/badge";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen p-12 relative overflow-hidden">
      <NavigationBar />
      <div className="flex flex-1 items-start justify-center mt-40">
        <Hero />
      </div>
      {/* <div className="absolute top-0 left-[-15rem] p-4" style={{ width: '120vw', height: '100vh' }}>
        <Badge />
      </div> */}
    </main>
  );
}