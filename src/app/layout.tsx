import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import GradientReveal from "@/components/global/gradient";
import Badge2 from "@/components/global/badge2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjit Thangarasu",
  description: "Sanjit Thangarasu's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
            <div className="absolute top-0 badge-style h-full">
              <Badge2 />
            </div>
          </div>
          {/* <GradientReveal> */}
              {children}
          {/* </GradientReveal> */}
        </ThemeProvider>
      </body>
    </html>
  );
}