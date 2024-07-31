import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Analytics and Speed Insights
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjit Thangarasu",
  description: "Sanjit Thangarasu portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} dark-mode`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
