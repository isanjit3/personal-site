import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const switzer = localFont({
  src: "../../public/fonts/switzer.woff2",
  display: "swap",
  variable: "--font-switzer",
});

const sentient = localFont({
  src: "../../public/fonts/sentient.woff2",
  display: "swap",
  variable: "--font-sentient",
});

const satoshi = localFont({
  src: "../../public/fonts/satoshi.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const geistSans = Geist({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-geist-mono",
});

export { satoshi, geistSans, geistMono, switzer, sentient };
