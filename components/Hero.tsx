'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden bg-brand-black">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/banner/one.jpg"
            >
                <source src="/video.webm" type="video/webm" />
            </video>

            {/* Dark overlay — 60% bottom-heavy gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-brand-black/40 via-brand-black/30 to-brand-black/80" />
            <div className="absolute inset-0 bg-linear-to-r from-brand-black/50 via-transparent to-brand-black/30" />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="max-w-3xl">
                    {/* Headline */}
                    <h1
                        className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-brand-cream leading-[1.1] mb-2">
                            Extraordinary
                        </span>
                        <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-brand-gold italic leading-[1.1]">
                            Adventures Await
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p
                        className={`mt-8 text-base sm:text-lg md:text-xl text-brand-cream/70 font-light max-w-xl leading-relaxed transition-all duration-1000 delay-300 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Curated group journeys &amp; private escapes — crafted for those who seek more than a vacation.
                    </p>

                    {/* CTAs */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-1000 delay-500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <Link href="/maldives-group-trip-from-india" className="btn-gold flex items-center gap-2">
                            <span className="text-[14px]">🔥</span> Maldives Group Trip
                        </Link>
                        <Link href="/upcoming-trips" className="btn-ghost">
                            Explore All Trips
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <span className="font-accent text-[9px] uppercase tracking-[0.35em] text-brand-cream/40">
                    Scroll
                </span>
                <div className="w-px h-8 bg-brand-cream/20 relative overflow-hidden">
                    <div className="w-px h-3 bg-brand-gold animate-scroll-line absolute top-0 left-0" />
                </div>
            </div>

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 w-full h-40 bg-linear-to-t from-brand-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
