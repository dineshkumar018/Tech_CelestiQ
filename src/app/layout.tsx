import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AboutParticles } from "@/components/ui/AboutParticles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Celestiq",
  description: "IT Service & Consulting, Tech Training & Career Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body 
        className="min-h-full flex flex-col bg-[#030712] text-white"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {/* Global Particles Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <AboutParticles />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
