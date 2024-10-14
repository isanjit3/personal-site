"use client";

import { useChat } from "ai/react";
import { useRef, useState, ReactElement, FormEvent } from "react";
import { Toaster, toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, SendHorizontal} from "lucide-react";

import { ChatMessageBubble } from "@/components/chat/ChatMessageBubble";
import { UploadDocumentsForm } from "@/components/chat/UploadDocumentsForm";

export function ChatWindow(props: {
  endpoint: string,
  emptyStateComponent: ReactElement,
  placeholder?: string,
  titleText?: string,
  emoji?: string;
  showIngestForm?: boolean,
}) {
  const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const { endpoint, emptyStateComponent, placeholder, titleText = "An LLM", emoji } = props;
  const showIngestForm = props.showIngestForm ?? process.env.NEXT_PUBLIC_DEMO === "false";

  const ingestForm = showIngestForm && <UploadDocumentsForm />;

  const [sourcesForMessages, setSourcesForMessages] = useState<Record<string, any>>({});

  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading: chatEndpointIsLoading, setMessages } =
    useChat({
      api: endpoint,
      onResponse(response) {
        const sourcesHeader = response.headers.get("x-sources");
        const sources = sourcesHeader ? JSON.parse((Buffer.from(sourcesHeader, 'base64')).toString('utf8')) : [];
        const messageIndexHeader = response.headers.get("x-message-index");
        if (sources.length && messageIndexHeader !== null) {
          setSourcesForMessages({...sourcesForMessages, [messageIndexHeader]: sources});
        }
      },
      streamMode: "text",
      onError: (e) => {
        toast.error(e.message);
      }
    });

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (messageContainerRef.current) {
      messageContainerRef.current.classList.add("grow");
    }
    if (!messages.length) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    handleSubmit(e);
  }

  return (
    <div>
      {isChatWindowOpen && (
        <Card className="fixed bottom-20 right-5 w-full max-w-sm bg-accent">
          <CardHeader>
            <CardTitle className={`${messages.length > 0 ? "" : "hidden"} text-2xl`}>
              {emoji} {titleText}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {messages.length === 0 ? emptyStateComponent : ""}
            <ScrollArea className="h-[300px] w-full pr-4" ref={messageContainerRef}>
              <div className="flex flex-col-reverse space-y-4">
                {messages.length > 0 ? (
                  [...messages]
                    .reverse()
                    .map((m, i) => {
                      const sourceKey = (messages.length - 1 - i).toString();
                      return (
                        <ChatMessageBubble
                          key={m.id}
                          message={m}
                          aiEmoji={emoji}
                          sources={sourcesForMessages[sourceKey]}
                        />
                      );
                    })
                ) : (
                  ""
                )}
              </div>
            </ScrollArea>

            {messages.length === 0 && ingestForm}

            <form onSubmit={sendMessage} className="flex flex-col w-full mt-4">
              <div className="flex w-full space-x-2">
                <Input
                  value={input}
                  placeholder={placeholder ?? "What's it like to be a pirate?"}
                  onChange={handleInputChange}
                />
                <Button type="submit" disabled={chatEndpointIsLoading}>
                  {chatEndpointIsLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <SendHorizontal className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Button
        className="fixed bottom-5 right-5 text-sm"
        onClick={() => setIsChatWindowOpen(!isChatWindowOpen)}
      >
        {isChatWindowOpen ? "Close" : "Chat"}
      </Button>

      <Toaster />
    </div>
  );
}