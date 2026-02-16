"use client";

import React, { useState, useEffect } from "react";
import { Heart, X, Sparkles } from "lucide-react";

// --- Types for Floating Hearts ---
interface FloatingHeart {
    id: number;
    left: string;
    top: string;
    scale: number;
    duration: string;
    delay: string;
}
// --- Types ---
interface FloatingHeart {
    id: number;
    left: string;
    animationDuration: string;
    scale: number;
    color: string;
}
// --- 1. Hero Section: Cinematic & Emotional ---
export function LoveSection() {
    return (
        <div
            className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/boat.jpeg')" }}  // fixed
        >
            <div className="absolute inset-0 bg-rose-900/40 backdrop-blur-[2px]"></div>

            <div
                className="z-10 text-center px-4"
                data-aos="zoom-in"
                data-aos-duration="2000"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white font-serif drop-shadow-2xl">
                    You mean everything and
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-serif drop-shadow-2xl">
                    you are my everything wasthu
                </h2>
            </div>
        </div>
    );
}
// --- 2. Gallery Section: Minimalist Grid ---
export function Gallery() {
    const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];

    return (
        <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-rose-500 uppercase tracking-widest text-xs font-bold">Memories</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-stone-800">
                        I always wish you were with me
                    </h2>
                    <p className="text-stone-500 italic font-serif">- motta koto -</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[400px] overflow-hidden rounded-2xl bg-gray-200 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img
                                src={src}
                                alt={`Memory ${idx + 1}`}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Elegant Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                                <Heart className="text-white fill-white/20 animate-pulse" size={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- 3. Proposal Modal: Glassmorphism & Interaction ---
export function ProposalModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCelebrating, setIsCelebrating] = useState(false);
    const [celebrationHearts, setCelebrationHearts] = useState<any[]>([]);

    // Function to handle the "Yes" click
    const handleAccept = () => {
        setIsCelebrating(true);

        // Generate burst of hearts
        const hearts = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDuration: `${Math.random() * 1.5 + 1}s`, // Random speed (1s to 2.5s)
            scale: Math.random() * 1.5 + 0.5, // Random size
            color: Math.random() > 0.5 ? "text-rose-500" : "text-pink-300", // Mix of colors
        }));
        setCelebrationHearts(hearts);

        // Close modal after animation plays (2.5 seconds)
        setTimeout(() => {
            setIsOpen(false);
            setIsCelebrating(false);
            setCelebrationHearts([]);
        }, 2500);
    };

    return (
        <div className="py-32 bg-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-10 left-10 text-rose-100 transform -rotate-12">
                <Heart size={120} fill="currentColor" />
            </div>
            <div className="absolute bottom-10 right-10 text-rose-100 transform rotate-12">
                <Heart size={100} fill="currentColor" />
            </div>

            <div className="relative z-10 max-w-lg mx-auto space-y-8">
                <h2 className="text-4xl font-serif text-stone-800">
                    I have one important question...
                </h2>

                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-stone-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-rose-500 hover:shadow-[0_10px_40px_-10px_rgba(244,63,94,0.5)]"
                >
                    <span className="relative z-10 font-medium tracking-wide text-lg">Click Me</span>
                    <Heart className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:fill-current" />
                </button>
            </div>

            {/* Full Screen Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

                    {/* Darker Blur Backdrop */}
                    <div
                        className="absolute inset-0 bg-stone-900/60 backdrop-blur-md transition-opacity duration-500"
                        onClick={() => !isCelebrating && setIsOpen(false)} // Prevent closing during celebration
                    />

                    {/* Celebration Hearts Overlay (Only visible when celebrating) */}
                    {isCelebrating && (
                        <div className="absolute inset-0 z-[60] pointer-events-none overflow-hidden">
                            {celebrationHearts.map((heart) => (
                                <Heart
                                    key={heart.id}
                                    fill="currentColor"
                                    className={`absolute bottom-0 opacity-0 ${heart.color} animate-float-up`}
                                    style={{
                                        left: heart.left,
                                        transform: `scale(${heart.scale})`,
                                        animation: `floatUp ${heart.animationDuration} ease-out forwards`,
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Modal Content Card */}
                    <div className={`relative w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white/50 overflow-hidden transition-all duration-500 ${isCelebrating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>

                        {/* Close Button */}
                        {!isCelebrating && (
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 text-stone-400 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        )}

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center space-y-6">
                            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mb-2 animate-bounce">
                                <Heart size={40} className="text-rose-500 fill-rose-500" />
                            </div>

                            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 tracking-tight">
                                Wasthu
                            </h1>

                            <div className="space-y-4 text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                <p>
                                    You’re my happiness, my safe place after a long day.
                                </p>
                                <p>
                                    You’re my favorite notification and my quiet comfort.
                                </p>
                                <p className="font-medium text-rose-500">
                                    You make my world feel complete.
                                </p>
                            </div>

                            <div className="pt-8 w-full">
                                <p className="text-sm uppercase tracking-widest text-stone-400 mb-6">
                                    Will you be mine forever?
                                </p>

                                <button
                                    onClick={handleAccept}
                                    disabled={isCelebrating}
                                    className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl text-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <Sparkles size={20} />
                                    {isCelebrating ? "Yay! ❤️" : "Yes, Forever!"}

                                    {isCelebrating && <Heart size={20} fill="currentColor" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Inline Styles for the specific float-up animation */}
            <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}

// --- Add custom keyframes to your global CSS or Tailwind config if possible ---
// If not, these classes rely on standard Tailwind or arbitrary values used above.
// The arbitrary animations (animate-[...]) used in the JSX cover the custom needs without external CSS files.