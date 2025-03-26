"use client"

import { useState } from "react"
import { Video, VideoOff } from "lucide-react"
import { Dock } from "@/components/ui/dock"

interface VideoToggleProps {
  onToggle: (isVisible: boolean) => void
}

export function VideoToggle({ onToggle }: VideoToggleProps) {
  const [isVideoVisible, setIsVideoVisible] = useState(true)

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible)
    onToggle(!isVideoVisible)
  }

  const dockItems = [
    {
      icon: isVideoVisible ? VideoOff : Video,
      label: isVideoVisible ? "Hide Video" : "Show Video",
      onClick: toggleVideo,
    },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <Dock items={dockItems} />
    </div>
  )
}

