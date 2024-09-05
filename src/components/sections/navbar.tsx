"use client"

import * as React from "react"
import { ModeToggle } from "@/components/sections/theme-toggle"
import { ProfilePicture } from "@/components/sections/profile-picture"

export function NavigationBar() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center py-4">
        <div className="flex justify-start">
          {/* You can add a logo or brand name here if needed */}
        </div>
        <div className="shrink-hover flex items-center gap-x-6">
          <ModeToggle />
          <ProfilePicture />
        </div>
      </div>
    </div>
  )
}

export default NavigationBar