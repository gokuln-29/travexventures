'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PageHeroProps {
    title: string;
    breadcrumbName: string;
    bgImage: string;
    subtext?: string;
}

export default function PageHero({ title, breadcrumbName, bgImage, subtext }: PageHeroProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-black">
            {/* Background Image */}
            <Image
                src={bgImage}
                alt={`${title} ${breadcrumbName} page hero banner Travex Ventures luxury travel`}
                fill
                className={`object-cover transition-all duration-1000 ease-out ${loaded ? 'scale-100 blur-none' : 'scale-105 blur-sm'}`}
                priority={true}
                fetchPriority="high"
                quality={85}
                sizes="100vw"
            />

            {/* Dark gradient overlay (bottom 70% opacity) */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-black/90 via-brand-black/60 to-brand-black/30" />

            {/* Content */}
            <div className={`relative z-10 flex flex-col items-center text-center px-6 max-w-4xl transition-all duration-1000 delay-200 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-6 font-accent text-[11px] uppercase tracking-[0.25em] text-brand-gold">
                    <Link href="/" className="hover:text-brand-cream transition-colors">Home</Link>
                    <span>&gt;</span>
                    <span>{breadcrumbName}</span>
                </div>

                {/* Page Title */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-[64px] text-brand-cream leading-tight mb-6">
                    {title}
                </h1>

                {/* Thin animated gold underline */}
                <div className="w-24 h-px bg-brand-gold relative overflow-hidden mb-6">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/50 -translate-x-full animate-[goldShimmer_3s_ease-in-out_infinite]" />
                </div>

                {/* Subtext */}
                {subtext && (
                    <p className="text-brand-cream/70 font-light text-lg max-w-2xl mx-auto leading-relaxed mt-4">
                        {subtext}
                    </p>
                )}
            </div>
        </section>
    );
}
