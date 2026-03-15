'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

type Trip = {
    id: number;
    title: string;
    destination: string;
    category: string;
    dates: string;
    duration: string;
    price: string;
    spotsLeft: number | string;
    soldOut: boolean;
    image: string;
    highlights: string[];
    href: string;
};

export default function UpcomingTripsClient({ trips }: { trips: Trip[] }) {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Maldives', 'Sri Lanka', 'Adventure', 'Honeymoon'];

    const filteredTrips = activeFilter === 'All'
        ? trips
        : trips.filter(trip => trip.category === activeFilter || trip.destination === activeFilter);

    return (
        <main className="py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-20 reveal">
                {filters.map((filter, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveFilter(filter)}
                        className={`font-accent text-[11px] uppercase tracking-[0.2em] px-6 py-3 border border-brand-gold/40 rounded-[2px] transition-all duration-300 hover:bg-brand-gold hover:text-brand-black ${activeFilter === filter ? 'bg-brand-gold text-brand-black shadow-[0_4px_15px_rgba(201,168,76,0.2)]' : 'text-brand-gold bg-transparent'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Horizontal Cards */}
            <div className="flex flex-col gap-12 sm:gap-16">
                {filteredTrips.map((trip) => (
                    <article
                        key={trip.id}
                        className="reveal flex flex-col lg:flex-row bg-brand-card overflow-hidden border border-[rgba(201,168,76,0.15)] group rounded-[2px]"
                    >
                        {/* Image Left 45% */}
                        <div className="relative w-full lg:w-[45%] aspect-video lg:aspect-auto min-h-[300px] lg:min-h-full overflow-hidden">
                            <Image
                                src={trip.image}
                                alt={trip.title}
                                fill
                                className={`object-cover transition-transform duration-600 ease-out group-hover:scale-[1.05] ${trip.soldOut ? 'grayscale opacity-70' : ''}`}
                            />
                            {trip.soldOut && (
                                <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm px-4 py-2 font-accent text-[10px] uppercase tracking-[0.25em] text-white">
                                    UPCOMING
                                </div>
                            )}
                        </div>

                        {/* Details Right 55% */}
                        <div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-6 gap-4">
                                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-brand-black bg-brand-gold px-4 py-1.5 shrink-0 rounded-[2px]">
                                    {trip.destination}
                                </span>
                                <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-brand-muted text-right">
                                    {trip.dates} <br /> <span className="text-brand-cream/40 text-[9px]">{trip.duration}</span>
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl sm:text-4xl text-brand-cream mb-8 leading-snug">
                                {trip.title}
                            </h3>

                            <ul className="flex flex-col gap-3 mb-10 border-l border-brand-gold/20 pl-6">
                                {trip.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-4 text-brand-cream/70 text-sm font-light leading-relaxed">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mt-auto pt-8 border-t border-[rgba(201,168,76,0.1)]">
                                <div className="flex flex-col">
                                    {trip.soldOut ? (
                                        <span className="text-brand-muted italic font-serif text-xl mb-3">Join the waitlist for 2026</span>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 mb-3 rounded-[2px] w-fit">
                                                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                                                <span className="font-accent text-[9px] uppercase tracking-[0.15em] text-amber-500">Only {trip.spotsLeft} Spots Left</span>
                                            </div>
                                            <span className="font-serif text-3xl text-brand-gold">{trip.price}</span>
                                        </>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3 w-full sm:w-auto">
                                    {trip.soldOut ? (
                                        <Link href="/contact" className="btn-ghost text-center">Join Waitlist</Link>
                                    ) : (
                                        <>
                                            <Link href={trip.href} className="btn-gold text-center">Reserve Now</Link>
                                            <Link href={trip.href} className="font-accent text-[10px] uppercase tracking-[0.2em] text-brand-cream/60 hover:text-brand-gold transition-colors text-center pb-1 border-b border-brand-cream/20 hover:border-brand-gold mx-auto sm:ml-auto sm:mr-0 w-fit">View Full Itinerary</Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}

