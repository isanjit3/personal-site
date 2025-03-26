import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

interface BoxRevealProps extends ComponentPropsWithoutRef<typeof Link> {
  children: ReactNode
  className?: string
  backgroundClassName?: string
}

export function BoxReveal({
  children,
  className,
  backgroundClassName = "bg-primary/10",
  ...props
}: BoxRevealProps) {
  return (
    <Link className={cn("group relative w-fit", className)} {...props}>
      {/* Background box that appears from left to right */}
      <span
        className={cn(
          "absolute h-full w-[calc(100%+2rem)] -left-4 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 -z-10",
          backgroundClassName,
        )}
      ></span>

      {/* Text content */}
      <span className="relative">{children}</span>

      {/* Underline that disappears from left to right */}
      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-current origin-left scale-x-100 transition-transform duration-300 ease-in-out group-hover:scale-x-0"></span>
    </Link>
  )
}
