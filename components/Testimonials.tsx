'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
    {
        text: 'Absolutely life-changing experience. The planning was flawless, the guides were legendary, and the group felt like family by day two. This was far beyond any trip I have ever taken.',
        name: 'Priya Sharma',
        trip: 'Maldives Group Trip, 2025',
    },
    {
        text: 'Travex Ventures crafted the most magical honeymoon. Every single detail was handled with precision and warmth — all we had to do was show up and fall in love all over again.',
        name: 'James & Emily',
        trip: 'Maldives Honeymoon, 2025',
    },
    {
        text: "I've been on many organized trips across the globe, but the level of care, curation, and personal attention here is truly unmatched. Already planning my next journey with them.",
        name: 'Arjun Menon',
        trip: 'Sri Lanka Heritage Tour, 2024',
    },
    {
        text: 'From the moment we arrived until the last sunset, every experience felt intentional and extraordinary. The attention to detail is what separates Travex Ventures from everything else.',
        name: 'Sneha & Vikram',
        trip: 'Baa Atoll Expedition, 2025',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrent(index);
            setTimeout(() => setIsTransitioning(false), 600);
        },
        [isTransitioning]
    );

    const goNext = useCallback(() => {
        goTo((current + 1) % testimonials.length);
    }, [current, goTo]);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(goNext, 6000);
        return () => clearInterval(timer);
    }, [goNext, isPaused]);

    return (
        <section
            className="py-24 md:py-32 bg-brand-dark relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/1.5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center reveal">
                {/* Section Label */}
                <p className="section-label mb-8">What Our Travelers Say</p>

                {/* Large decorative gold quote mark */}
                <div className="mb-8">
                    <span className="font-serif text-[120px] md:text-[160px] text-brand-gold/20 leading-none select-none" aria-hidden="true">
                        &ldquo;
                    </span>
                </div>

                {/* Testimonial Text */}
                <div className="relative min-h-[180px] md:min-h-[140px] flex items-center justify-center -mt-16 md:-mt-24">
                    {testimonials.map((t, idx) => (
                        <p
                            key={idx}
                            className="absolute inset-x-0 font-serif italic text-xl sm:text-2xl md:text-[26px] text-brand-cream/90 leading-relaxed transition-all duration-600 ease-out"
                            style={{
                                opacity: idx === current ? 1 : 0,
                                transform: idx === current ? 'translateY(0)' : 'translateY(20px)',
                                pointerEvents: idx === current ? 'auto' : 'none',
                            }}
                        >
                            {t.text}
                        </p>
                    ))}
                </div>

                {/* Customer Name */}
                <div className="mt-10 transition-opacity duration-300" style={{ opacity: isTransitioning ? 0.3 : 1 }}>
                    <p className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-cream/70">
                        {testimonials[current].name}
                    </p>
                    <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-brand-muted mt-1">
                        {testimonials[current].trip}
                    </p>
                </div>

                {/* Dot Navigation */}
                <div className="flex items-center justify-center gap-3 mt-12">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`transition-all duration-300 rounded-full ${idx === current
                                    ? 'w-8 h-2 bg-brand-gold'
                                    : 'w-2 h-2 bg-brand-cream/20 hover:bg-brand-cream/40'
                                }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
