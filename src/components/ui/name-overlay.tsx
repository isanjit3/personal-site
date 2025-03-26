import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function NameOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className={`${inter.className} text-6xl font-bold text-white text-center`}>Sanjit Thangarasu</h1>
    </div>
  )
}

