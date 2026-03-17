'use client';

import Image from 'next/image';
import Link from 'next/link';

const packages = [
    {
        src: '/Trips/1.png',
        alt: 'Romantic honeymoon couple — luxury honeymoon package by Travex Ventures',
        category: 'Honeymoon',
        title: 'Romantic Getaways',
        description: 'Intimate escapes crafted for two — from overwater villas to candlelit beach dinners.',
        href: '/contact',
    },
    {
        src: '/Trips/2.png',
        alt: 'Luxury yacht anchored near a private island',
        category: 'Luxury Cruise',
        title: 'Private Island Cruises',
        description: 'Sail through turquoise waters aboard world-class yachts with exclusive island access.',
        href: '/contact',
    },
    {
        src: '/Trips/3.png',
        alt: 'Group scuba diving at coral reef — adventure travel',
        category: 'Adventure',
        title: 'Scuba & Snorkeling',
        description: 'Dive into crystal-clear depths and discover underwater worlds with expert guides.',
        href: '/maldives-group-trip-from-india',
    },
    {
        src: '/Trips/4.png',
        alt: 'Deep sea diver exploring underwater caves',
        category: 'Exploration',
        title: 'Deep Sea Expeditions',
        description: 'Push boundaries with guided deep-sea cave explorations and marine encounters.',
        href: '/contact',
    },
];

export default function TripsGrid() {
    return (
        <section className="py-24 md:py-32 bg-brand-dark">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-4">Curated Experiences</p>
                    <h2 className="section-headline">
                        Our <em className="text-brand-gold italic">Signature</em> Packages
                    </h2>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packages.map((pkg, idx) => (
                        <Link
                            key={idx}
                            href={pkg.href}
                            className="reveal group relative overflow-hidden aspect-4/5 md:aspect-3/4 lg:aspect-square"
                            style={{ borderRadius: '2px' }}
                        >
                            {/* Full background image */}
                            <Image
                                src={pkg.src}
                                alt={pkg.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Default state overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-brand-black/80 via-brand-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                            {/* Category Label — top-left, always visible */}
                            <span className="absolute top-6 left-6 z-10 font-accent text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                                {pkg.category}
                            </span>

                            {/* Package Title — bottom-left, always visible */}
                            <h3 className="absolute bottom-8 left-6 right-6 z-10 font-serif text-2xl md:text-3xl text-white transition-transform duration-500 group-hover:-translate-y-20">
                                {pkg.title}
                            </h3>

                            {/* Hover overlay — slides up with description + CTA */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-linear-to-t from-brand-black/90 via-brand-black/70 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <p className="text-sm text-brand-cream/80 font-light mb-4 max-w-xs">
                                    {pkg.description}
                                </p>
                                <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-gold flex items-center gap-2">
                                    Discover More
                                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M0 4H14M14 4L10.5 0.5M14 4L10.5 7.5" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
