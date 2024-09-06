import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function ProfilePicture() {
    return (
      <Avatar>
        <AvatarImage src="https://eblws9kpxcehafgs.public.blob.vercel-storage.com/assets/profile-pic-gradient" alt="@isanjit3" />
        <AvatarFallback>ST</AvatarFallback>
      </Avatar>
    )
  }
  