"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import { LoveSection, Gallery, ProposalModal } from "./components/Sections";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-pink-50 selection:bg-rose-200 selection:text-rose-900">

      {/* Navigation - Simple & Elegant */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all bg-white/10 backdrop-blur-sm border-b border-white/10 hover:bg-white/30">
        <div className="flex items-center gap-2">
          <Heart className="text-rose-500 fill-current animate-beat" size={24} />
          <span className="font-serif text-xl font-bold text-rose-600 tracking-wider">LoveStory</span>
        </div>
        <div>
          {/* Could add nav links here if needed, keeping it minimal for now */}
        </div>
      </nav>

      <section id="hero">
        <Hero />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="love-message">
        <LoveSection />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="proposal" className="pb-20">
        <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-t from-rose-100 to-pink-50">
          <ProposalModal />
        </div>
      </section>

      <footer className="bg-rose-900 text-pink-100 py-8 text-center">
        <p className="font-serif text-sm">
          Made with ❤️ for you • Forever & Always
        </p>
        <p className="text-xs mt-2 opacity-60">
          © {new Date().getFullYear()} Our Love Journey
        </p>
      </footer>

    </main>
  );
}