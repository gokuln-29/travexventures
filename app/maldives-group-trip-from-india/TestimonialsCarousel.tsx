'use client';

import { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: 'Priya Sharma',
        city: 'Mumbai, Maharashtra',
        initials: 'PS',
        color: 'bg-cyan-brand',
        rating: 5.0,
        review: 'The sandbank picnic was absolutely surreal — standing on a strip of white sand in the middle of the ocean with turquoise water all around us. Travex organised everything flawlessly. Not a single stressful moment the entire trip.',
        trip: 'Group Trip — Baa Atoll',
    },
    {
        name: 'Rahul & Deepika Nair',
        city: 'Kochi, Kerala',
        initials: 'RD',
        color: 'bg-sunset-orange',
        rating: 4.8,
        review: 'We booked this for our honeymoon and it was perfect. The domestic flight to Dharavandhoo, the welcome dinner, the half-board meals — all top notch. The Hanifaru Bay snorkeling was honestly the most incredible thing I have ever seen underwater.',
        trip: 'Honeymoon Package',
    },
    {
        name: 'Vikram Menon',
        city: 'Bangalore, Karnataka',
        initials: 'VM',
        color: 'bg-emerald-500',
        rating: 4.5,
        review: 'I was sceptical about joining a group trip but it turned out to be the best decision. Our group of 12 clicked immediately and the night fishing competition on Day 3 had us all in hysterics. The manta rays at Hanifaru were breathtaking.',
        trip: 'Group Trip — June Batch',
    },
    {
        name: 'Anjali Krishnan',
        city: 'Chennai, Tamil Nadu',
        initials: 'AK',
        color: 'bg-violet-500',
        rating: 4.7,
        review: 'Organised this as a friends trip for 8 of us and it was seamless. The Travex team handled the domestic flights, excursion schedules, and even sorted our dietary preferences for meals. Highly recommend the deserted island day — pure magic.',
        trip: 'Friends Group — 8 pax',
    },
    {
        name: 'Siddharth Joshi',
        city: 'Pune, Maharashtra',
        initials: 'SJ',
        color: 'bg-rose-500',
        rating: 4.2,
        review: "First international trip and Travex Ventures made it incredibly easy. The team was reachable throughout, the itinerary was well-paced — not rushed or too slow. Night fishing was surprisingly relaxing even for someone who's never fished before!",
        trip: 'Solo in Group Trip',
    },
    {
        name: 'Meera & Karthik Reddy',
        city: 'Hyderabad, Telangana',
        initials: 'MK',
        color: 'bg-amber-500',
        rating: 5.0,
        review: 'Honestly, not a single complaint. From the moment we landed in Malé to boarding our return flight, every detail was handled. The half-board meals at Blueworld were delicious, and the snorkeling guide was knowledgeable and patient with beginners.',
        trip: 'Couple Package',
    },
    {
        name: 'Rohan Gupta',
        city: 'New Delhi, Delhi',
        initials: 'RG',
        color: 'bg-sky-500',
        rating: 4.6,
        review: "The Dharavandhoo island itself is small and peaceful — perfect for exploring by bicycle. The house reef snorkeling was incredible. We spotted turtles and a reef shark on the second day. Travex's local knowledge really sets them apart.",
        trip: 'Group Trip — March',
    },
    {
        name: 'Nithya Suresh',
        city: 'Coimbatore, Tamil Nadu',
        initials: 'NS',
        color: 'bg-teal-500',
        rating: 4.9,
        review: 'The water clarity in Baa Atoll is something that photos simply cannot capture. Hanifaru Bay was full of manta rays on the day we visited — we counted at least 30 from the boat alone. Worth every rupee and more. Will definitely book again.',
        trip: 'Friends Group — 5 pax',
    },
    {
        name: 'Aditya Bhat',
        city: 'Mangaluru, Karnataka',
        initials: 'AB',
        color: 'bg-fuchsia-500',
        rating: 4.3,
        review: 'The deserted island trip on Day 3 was the highlight of the trip for me. Having a fresh meal cooked on an uninhabited island surrounded by the Indian Ocean is not something you get to experience every day. Brilliant experience overall.',
        trip: 'Group Trip — Solo Traveler',
    },
    {
        name: 'Shreya & Amit Patel',
        city: 'Ahmedabad, Gujarat',
        initials: 'SA',
        color: 'bg-lime-600',
        rating: 4.5,
        review: 'We combined this Maldives trip with a 5-day Sri Lanka tour and Travex handled both seamlessly. The Maldives leg felt like the perfect reward after the cultural intensity of Sri Lanka. Sandbank picnic and the sunset over the ocean — unforgettable.',
        trip: 'Twin-Centre: SL + Maldives',
    },
];

function StarRating({ rating }: { rating: number }) {
    const full = Math.floor(rating);
    const partial = rating - full;
    return (
        <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => {
                const isFull = i < full;
                const isPartial = i === full && partial > 0;
                return (
                    <span key={i} className="relative inline-block w-4 h-4">
                        <Star className="w-4 h-4 text-navy-700 fill-navy-700 absolute inset-0" />
                        {(isFull || isPartial) && (
                            <span
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: isFull ? '100%' : `${partial * 100}%` }}
                            >
                                <Star className="w-4 h-4 text-sunset-yellow fill-sunset-yellow" />
                            </span>
                        )}
                    </span>
                );
            })}
            <span className="text-xs font-bold text-sunset-yellow ml-1">{rating.toFixed(1)} / 5</span>
        </div>
    );
}

export default function TestimonialsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const CARD_WIDTH = 320 + 24; // w-80 (320px) + gap-6 (24px)

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const interval = setInterval(() => {
            if (isPaused || !track) return;

            const maxScroll = track.scrollWidth - track.clientWidth;

            if (track.scrollLeft >= maxScroll - 4) {
                // Smoothly reset to start
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
            }
        }, 3200);

        return () => clearInterval(interval);
    }, [isPaused, CARD_WIDTH]);

    return (
        <section className="py-20 bg-navy-950 text-white overflow-hidden">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 mb-10 flex items-end justify-between">
                <div>
                    <p className="text-cyan-brand font-bold uppercase tracking-widest text-sm mb-2">Real Reviews</p>
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Travelers Say</h2>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={() => {
                            trackRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
                        }}
                        className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-white hover:border-cyan-brand hover:text-cyan-brand transition-colors"
                        aria-label="Scroll left"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => {
                            trackRef.current?.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
                        }}
                        className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-white hover:border-cyan-brand hover:text-cyan-brand transition-colors"
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Scroll track */}
            <div
                ref={trackRef}
                className="flex gap-6 overflow-x-auto pb-6 px-4 md:px-8"
                style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {reviews.map((r) => (
                    <div
                        key={r.name}
                        className="shrink-0 w-80 bg-navy-900 border border-navy-800 rounded-2xl p-7 flex flex-col justify-between hover:border-cyan-brand/40 transition-colors duration-300"
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <div>
                            <StarRating rating={r.rating} />
                            <span className="text-[10px] text-cyan-brand font-bold uppercase tracking-widest mb-4 block">
                                {r.trip}
                            </span>
                            <p className="text-navy-200 text-sm leading-relaxed italic">"{r.review}"</p>
                        </div>

                        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-navy-800">
                            <div
                                className={`w-11 h-11 ${r.color} rounded-full flex items-center justify-center text-white font-black text-sm shrink-0`}
                            >
                                {r.initials}
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">{r.name}</h4>
                                <p className="text-xs text-navy-400">{r.city}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot indicators (mobile) */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
                {reviews.map((r, i) => (
                    <button
                        key={i}
                        onClick={() =>
                            trackRef.current?.scrollTo({ left: i * CARD_WIDTH, behavior: 'smooth' })
                        }
                        className="w-2 h-2 rounded-full bg-navy-700 hover:bg-cyan-brand transition-colors"
                        aria-label={`Go to review ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
