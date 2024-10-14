import type { Message } from "ai/react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { ProfilePicture } from "@/components/global/profile-picture"
import { AIAvatar } from "@/components/global/ai-avatar"

interface ChatMessageBubbleProps {
  message: Message
  aiAvatar?: string
  sources: any[]
}

export function ChatMessageBubble({ message, aiAvatar, sources }: ChatMessageBubbleProps) {
  const isUser = message.role === "user"

  return (
    <div
      className={cn(
        "flex items-end space-x-2 space-y-4",
        isUser ? "flex-row-reverse space-x-reverse" : "flex-row"
      )}
    >
      {isUser ? (
        <div className={cn("flex-shrink-0 mb-[-8px]")}>
          <ProfilePicture />
        </div>
      ) : (
        <AIAvatar className={cn("flex-shrink-0 mt-[-8px]")} />
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser ? "bg-primary text-primary-foreground" : "bg-background"
        )}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
      </div>
    </div>
  )
}