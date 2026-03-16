import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { CursorGlow } from "@/components/animations/CursorGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeKaptaan | Fintech Backend Architect",
  description: "Futuristic portfolio of CodeKaptaan, a senior fintech backend architect and systems engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground selection:bg-primary/30 selection:text-primary`}>
        <Providers>
          <div className="noise" />
          <div className="fixed inset-0 grid-holographic pointer-events-none opacity-20" />
          <CursorGlow />
          {children}
        </Providers>
      </body>
    </html>
  );
}
