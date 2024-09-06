"use client"

import * as React from "react"
import { ModeToggle } from "@/components/global/theme-toggle"
import { ProfilePicture } from "@/components/global/profile-picture"

export function NavigationBar() {
  return (
    <nav className="w-full">
      <div className="flex flex-row justify-between">
        <div className="flex justify-start">
          {/* You can add a logo or brand name here if needed */}
        </div>
        <div className="shrink-hover flex items-center gap-x-6">
          <ModeToggle />
          <ProfilePicture />
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar