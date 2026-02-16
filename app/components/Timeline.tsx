"use client";

import React from "react";
import { Heart } from "lucide-react";

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    index: number;
    image?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, index, image }) => {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`mb-8 flex justify-between items-center w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
        >
            <div className="order-1 w-5/12"></div>

            <div className="z-20 flex items-center order-1 bg-rose-500 shadow-xl w-8 h-8 rounded-full border-4 border-pink-200">
                <Heart size={14} className="mx-auto text-white fill-current" />
            </div>

            <div
                className="order-1 w-5/12 px-6 py-4 rounded-xl glass-card shadow-lg ring-1 ring-pink-100/50"
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-offset="100"
            >
                <span className="mb-1 text-sm font-bold text-rose-500 bg-rose-100 px-2 py-1 rounded inline-block">
                    {year}
                </span>

                {image && (
                    <div className="relative h-32 w-full mb-4">
                        <img
                            src={image}
                            alt={title}
                            className="object-contain w-full h-full rounded-lg"
                        />
                    </div>
                )}

                <h3 className="mb-2 font-bold text-gray-800 text-xl font-serif">{title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function Timeline() {
    const events = [
        {
            year: "2017",
            title: "Where it all began",
            description: "That Day i met u with Sesara.Those eyes got my attention that day mottas",
            image: "/17.png"
        },
        {
            year: "2018",
            title: "Day of propose",
            description: "You asked me who is my crush and i told u to see the mirror and rest is history .",
            image: "/18.png"
        },
        {
            year: "2019",
            title: "The Year made us more closer",
            description: "Through every challenge including Covid, we held hands and came out stronger than ever. Weve missed each other more and more but we stood strong",
            image: "/19.png"
        },
        {
            year: "2020",
            title: "Darkest  Memories",
            description: "Darkest moments that will last a lifetime, Broke me into pieces i lost my self.",
            image: "/20.png"

        },
        {
            year: "2023",
            title: "The Year i found my self again",
            description: "I found my self again and i started to love my self more and more.",
            image: "/23.png"
        },
        {
            year: "2025",
            title: "We found us again",
            description: "We started to talk to each other and love each other more and more and we started to make memories again.",
            image: "/25.png"
        },
        {
            year: "2026",
            title: "A Promise",
            description: "A beautiful promise not to be broken ever again ",
            image: "/26.png"
        },
    ];

    return (
        <div className="bg-pink-50 py-20 px-4 overflow-hidden relative">
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 via-pink-400 to-rose-300 rounded-full opacity-50"></div>

                <h2 className="text-4xl text-center font-bold text-rose-600 mb-16 font-serif" data-aos="fade-down">
                    Our Path of Love
                </h2>

                {events.map((event, index) => (
                    <TimelineItem
                        key={index}
                        year={event.year}
                        title={event.title}
                        description={event.description}
                        image={event.image}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
