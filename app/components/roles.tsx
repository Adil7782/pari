"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Data ---
const traits = [
    { text: "You’re my best friend", style: "simple" },
    { text: "You’re my girlfriend", style: "simple" },
    { text: "You’re my chattering radio", style: "playful" },
    { text: "You’re the best listener", style: "soft" },
    { text: "You’re the most loving person after my mom", style: "highlight" },
    { text: "You’re a strict teacher", style: "stern" },
    { text: "You’re a little villain", style: "mischievous" },
    { text: "And everything in between", style: "final" },
];

export default function RomanticScrollStory() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Slower duration for premium feel
            easing: "ease-out-cubic", // Smooth easing
            once: false, // Animation happens every time you scroll up/down
            mirror: true, // Elements animate out while scrolling past them
            anchorPlacement: "center-center", // Triggers when element is in middle of screen
        });
    }, []);

    return (
        <div className="relative bg-stone-50 text-stone-800 font-serif overflow-hidden selection:bg-rose-200">

            {/* --- Fixed Background Elements (Glassmorphism & Ambiance) --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-200/40 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-100/40 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"></div>
            </div>

            {/* --- Section 1: The Title --- */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="text-5xl md:text-8xl font-bold text-rose-950 tracking-tight drop-shadow-sm mb-4">
                        You are my happiness Bole
                    </h1>
                    <div className="h-1 w-24 bg-rose-400 mx-auto rounded-full mt-6" />
                </div>

                <div
                    className="absolute bottom-10 animate-bounce text-stone-400 text-sm tracking-widest uppercase"
                    data-aos="fade-in"
                    data-aos-delay="1000"
                >
                    Scroll Slowly
                </div>
            </section>

            {/* --- Section 2: The Transition --- */}
            <section className="relative z-10 min-h-[60vh] flex items-center justify-center">
                <h2
                    className="text-2xl md:text-4xl text-rose-500 italic font-light tracking-widest"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >
                    ... Sometimes ...
                </h2>
            </section>

            {/* --- Section 3: The List (One Item Per Screen) --- */}
            <div className="relative z-10">
                {traits.map((trait, index) => (
                    <section
                        key={index}
                        className="min-h-screen flex items-center justify-center px-4 sticky top-0"
                    >
                        {/* We use a container with backdrop-blur to separate text from background 
              giving it a glassmorphic card feel without borders 
            */}
                        <div
                            className={`
                max-w-4xl text-center p-10 rounded-3xl transition-all duration-500
                ${trait.style === 'highlight' ? 'bg-white/30 backdrop-blur-md shadow-sm' : ''}
              `}
                            data-aos={index % 2 === 0 ? "fade-up" : "fade-up"} // Alternating logic if desired, keeping consistent fade-up for elegance
                            data-aos-offset="100"
                        >
                            <p
                                className={`
                  text-4xl md:text-6xl font-medium leading-tight
                  ${trait.style === 'highlight' ? 'text-rose-600 scale-110' : 'text-stone-700'}
                  ${trait.style === 'stern' ? 'font-bold text-stone-900' : ''}
                  ${trait.style === 'mischievous' ? 'italic text-rose-400' : ''}
                `}
                            >
                                {trait.text}
                            </p>

                            {/* Decorative detail for the highlighted item */}
                            {trait.style === 'highlight' && (
                                <div
                                    className="mt-4 text-rose-400"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                >
                                    <span className="text-3xl">♥</span>
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>

            {/* --- Section 4: Final Closure --- */}
            <section className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-t from-rose-100/50 to-transparent">
                <div
                    className="text-center p-12 border border-white/40 bg-white/60 backdrop-blur-xl rounded-full shadow-2xl"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                >
                    <p className="text-lg md:text-2xl text-stone-500 mb-2 uppercase tracking-widest">
                        Conclusion?
                    </p>
                    <h2 className="text-4xl md:text-7xl font-bold text-rose-600 font-serif">
                        Youre the love of my life.
                    </h2>
                </div>
            </section>

        </div>
    );
}