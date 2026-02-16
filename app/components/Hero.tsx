"use client";

import React from "react";
import Timer from "./Timer";
import { ChevronDown, Heart } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-pink-400 via-rose-400 to-pink-600 text-white">
            {/* Background Hearts Animation - Subtle */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <Heart
                        key={i}
                        className={`absolute text-white/10 animate-float`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 50 + 20}px`,
                            height: `${Math.random() * 50 + 20}px`,
                            animationDuration: `${Math.random() * 10 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="z-10 text-center px-4" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg font-serif">
                    Our Love Journey
                </h1>
                <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md opacity-90">
                    Every second since June 26, 2018 has been a beautiful adventure with you.
                </p>

                <Timer />
            </div>

            <div className="absolute bottom-10 animate-bounce cursor-pointer z-10" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <ChevronDown size={40} className="text-white drop-shadow-md" />
            </div>
        </div>
    );
}
