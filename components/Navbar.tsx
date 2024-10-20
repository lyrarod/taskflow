"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full overflow-hidden shadow bg-background/70 backdrop-blur">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              TaskFlow
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <a
                href="#features"
                className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary"
              >
                Testimonials
              </a>
              <Button>Get Started</Button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
