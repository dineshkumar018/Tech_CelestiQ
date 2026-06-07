"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Training Programs", href: "#programs" },
  { name: "Technology", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 xl:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-12 flex items-center justify-center shrink-0">
              <Image 
                src="/logo.png" 
                alt="Tech Celestiq Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline-block font-bold text-2xl tracking-tight">
              <span className="text-[#3b82f6]">Tech_</span>
              <span className="text-[#06b6d4]">CelestiQ</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end gap-8 flex-1 lg:mr-10 xl:mr-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-white ${link.active ? "text-white" : "text-zinc-400"}`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-brand rounded-full shadow-[0_0_8px_rgba(0,123,255,0.8)]" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex items-center">
          <Button className="bg-gradient-brand text-white border-0 shadow-[0_0_15px_rgba(0,123,255,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-all rounded-full px-6">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation (Hamburger) */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger 
              render={<Button variant="ghost" size="icon" className="text-white hover:bg-white/10" />}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-border bg-black/95 backdrop-blur p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <div className="relative h-12 w-12 flex items-center justify-center shrink-0">
                    <Image 
                      src="/logo.png" 
                      alt="Tech Celestiq Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold tracking-tight text-2xl">
                    <span className="text-[#3b82f6]">Tech_</span>
                    <span className="text-[#06b6d4]">CelestiQ</span>
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium transition-colors hover:text-white ${link.active ? "text-white" : "text-zinc-400"}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pb-8">
                  <Button className="w-full bg-gradient-brand text-white border-0 shadow-[0_0_15px_rgba(0,123,255,0.4)] rounded-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
