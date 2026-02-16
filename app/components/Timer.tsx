"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // I'll create this utility later, or just define inline if simple. Let's stick to simple first.

// Simple utility for class merging if not using external lib immediately in component
// actually, I'll assume I'll create the lib/utils.ts or just use standard Tailwind classes.
// For now, I will use standard classes to be safe and copy-paste ready as requested.

interface TimeElapsed {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const START_DATE = new Date("2018-06-26T00:00:00");

export default function Timer() {
    const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = now.getTime() - START_DATE.getTime();

            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
            const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeElapsed({ years, months, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4 text-center mt-8">
            {Object.entries(timeElapsed).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center p-3 bg-white/20 backdrop-blur-md rounded-lg shadow-lg min-w-[80px] border border-white/30 animate-pulse-slow">
                    <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                        {value}
                    </span>
                    <span className="text-xs md:text-sm uppercase tracking-widest text-pink-100 mt-1">
                        {unit}
                    </span>
                </div>
            ))}
        </div>
    );
}
