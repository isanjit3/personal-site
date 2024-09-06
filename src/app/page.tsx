import { Hero } from "@/components/sections/hero";
import { NavigationBar } from "@/components/global/navbar";
import Badge from "@/components/global/badge";
import ScrollChevron from "@/components/global/chevron";
import { About } from "@/components/sections/about";
import { ChatWindow } from "@/components/chat/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 bg-gray-200 text-black rounded w-full max-h-[85%] overflow-hidden">
      <h1>Welcome Sanjit AI!</h1>
      <p>This is a RAG LLM that I built and trained with my data.</p>
      <p>Try asking it some questions about me!</p>
      <p className="text-xs text-gray-500 italic">* Still a work in progress, some answers may be incorrect</p>
    </div>
  );
  return (
    <main className="flex flex-col h-screen p-12">
      <NavigationBar />
      <div className="flex flex-col flex-1 justify-center">
        <Hero />
      </div>
      <ChatWindow
                endpoint="api/chat/retrieval"
                emptyStateComponent={InfoCard}
                placeholder={
                    'Where do you work?'
                }
                emoji="🤖"
                titleText="Sanjit AI"
                ></ChatWindow>
    </main>
  );
}