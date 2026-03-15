'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, AlertTriangle } from 'lucide-react';

const upcomingTrips = [
    {
        destination: 'Maldives',
        title: 'Hanifaru Bay Manta Ray Expedition',
        dates: 'June 24 – 28, 2026',
        duration: '5 Days / 4 Nights',
        image: '/upcoming_trips/poster-2.jpg',
        highlights: [
            'Swim with manta rays at UNESCO Biosphere Reserve',
            'Sandbank picnic & night fishing excursion',
            'World-class snorkeling at coral reefs',
            'Explore authentic Dharavandhoo island',
        ],
        spotsLeft: 4,
        href: '/maldives-group-trip-from-india',
    },
    {
        destination: 'Sri Lanka',
        title: 'Cultural Heritage & Coastal Trail',
        dates: 'August 10 – 16, 2026',
        duration: '7 Days / 6 Nights',
        image: '/banner/four.jpg',
        highlights: [
            'Ancient temples of Sigiriya & Dambulla',
            'Scenic train ride through tea country',
            'Wildlife safari at Yala National Park',
            'Beach stays in Mirissa & Unawatuna',
        ],
        spotsLeft: 6,
        href: '/contact',
    },
];

export default function UpcomingTrips() {
    return (
        <section className="py-24 md:py-32 bg-brand-black relative">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-20 reveal">
                    <p className="section-label mb-4">Upcoming Journeys</p>
                    <h2 className="section-headline">
                        Where Will You Go <em className="text-brand-gold italic">Next?</em>
                    </h2>
                </div>

                {/* Trip Cards */}
                <div className="space-y-20">
                    {upcomingTrips.map((trip, idx) => (
                        <div
                            key={idx}
                            className="reveal grid grid-cols-1 lg:grid-cols-5 gap-0 bg-brand-card overflow-hidden"
                            style={{ borderRadius: '2px' }}
                        >
                            {/* Image — 60% width */}
                            <div className={`relative lg:col-span-3 min-h-[350px] lg:min-h-[500px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={trip.image}
                                    alt={trip.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-card/60 via-transparent to-transparent lg:hidden" />
                            </div>

                            {/* Details — 40% width */}
                            <div className={`lg:col-span-2 p-8 md:p-12 lg:p-14 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                {/* Destination Badge */}
                                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-brand-gold border border-brand-gold/30 px-4 py-1.5 w-fit mb-6">
                                    {trip.destination}
                                </span>

                                <h3 className="font-serif text-2xl md:text-3xl text-brand-cream mb-2 leading-snug">
                                    {trip.title}
                                </h3>

                                <p className="font-accent text-[11px] uppercase tracking-[0.2em] text-brand-muted mb-8">
                                    {trip.dates} &nbsp;·&nbsp; {trip.duration}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-3 mb-8">
                                    {trip.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                                            <span className="text-sm text-brand-cream/70 font-light">{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Limited Spots Warning */}
                                <div className="flex items-center gap-2 mb-8 px-3 py-2 bg-amber-500/10 border border-amber-500/20 w-fit" style={{ borderRadius: '2px' }}>
                                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                                    <span className="font-accent text-[10px] uppercase tracking-[0.15em] text-amber-300">
                                        Only {trip.spotsLeft} spots remaining
                                    </span>
                                </div>

                                <Link href={trip.href} className="btn-ghost w-fit">
                                    Reserve Your Spot
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
