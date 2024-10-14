// src/components/global/ai-avatar.jsx

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  interface AIAvatarProps {
    className?: string;
    [key: string]: any;
  }
  
  export function AIAvatar({ className, ...props }: AIAvatarProps) {
    return (
      <Avatar className={`w-12 h-12 ${className}`} {...props}>
        <AvatarImage src="https://eblws9kpxcehafgs.public.blob.vercel-storage.com/assets/sanjit-ai" alt="AI" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    )
  }