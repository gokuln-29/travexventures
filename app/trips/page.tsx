import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Adventure & Honeymoon Travel Packages | Travexventures',
    description: 'Explore Travexventures\' curated travel packages — from Maldives scuba diving to Amalfi honeymoons. Premium group and private trips from India.',
    alternates: {
        canonical: 'https://travexventures.com/trips'
    }
};

const tripsData = [
    {
        id: 1,
        title: 'Baa Atoll & Beyond',
        destination: 'Maldives',
        category: 'Wildlife',
        duration: '5D / 4N',
        image: '/upcoming_trips/poster-3.jpg',
        teaser: 'Snorkel with gentle giants in crystal waters.',
        href: '/maldives-group-trip-from-india'
    },
    {
        id: 2,
        title: 'Amalfi Coast Romance',
        destination: 'Italy',
        category: 'Honeymoon',
        duration: '7D / 6N',
        image: '/Trips/1.png',
        teaser: 'Private cliffside villas and sunset sailing.',
        href: '/contact'
    },
    {
        id: 3,
        title: 'Sigiriya Cultural Escape',
        destination: 'Sri Lanka',
        category: 'Cultural',
        duration: '6D / 5N',
        image: '/banner/four.jpg',
        teaser: 'Ancient rock fortresses and tea gardens.',
        href: '/contact'
    },
    {
        id: 4,
        title: 'Deep Blue Dive Expedition',
        destination: 'Red Sea',
        category: 'Adventure',
        duration: '8D / 7N',
        image: '/Trips/4.png',
        teaser: 'Dive world-renowned wrecks and reefs.',
        href: '/contact'
    },
    {
        id: 5,
        title: 'Private Yacht Cruise',
        destination: 'Seychelles',
        category: 'Luxury',
        duration: '10D / 9N',
        image: '/Trips/2.png',
        teaser: 'Island hop in ultimate privacy and comfort.',
        href: '/contact'
    },
    {
        id: 6,
        title: 'Northern Lights Hunt',
        destination: 'Iceland',
        category: 'Adventure',
        duration: '5D / 4N',
        image: '/banner/two.jpg',
        teaser: 'Chase the aurora across frozen landscapes.',
        href: '/contact'
    }
];

export default function TripsPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <PageHero 
                title="Our Journeys" 
                breadcrumbName="Journeys" 
                bgImage="/banner/four.jpg" 
                subtext="Every trip is a masterclass in adventure, crafted to your curiosity."
            />

            <main className="py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                
                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-20 reveal border-b border-brand-gold/10 pb-4">
                    {['All Trips', 'Adventure', 'Honeymoon', 'Wildlife', 'Cultural'].map((filter, i) => (
                        <button 
                            key={i} 
                            className={`font-accent text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative pb-4 group ${i === 0 ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-cream'}`}
                        >
                            {filter}
                            <span className={`absolute bottom-0 left-0 h-px bg-brand-gold transition-all duration-300 ${i === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </button>
                    ))}
                </div>

                {/* 3-Column Masonry (grid for simplicity here) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[400px]">
                    {tripsData.map((trip) => (
                        <Link 
                            href={trip.href} 
                            key={trip.id} 
                            className={`reveal group relative bg-brand-card overflow-hidden rounded-[2px] block ${trip.id === 1 || trip.id === 5 ? 'sm:row-span-2 auto-rows-[800px]' : ''}`}
                            style={{ minHeight: trip.id === 1 || trip.id === 5 ? '800px' : '400px' }}
                        >
                            {/* Full-bleed image */}
                            <Image 
                                src={trip.image} 
                                alt={trip.title} 
                                fill 
                                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            
                            {/* Dark gradient mapping bottom up */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-brand-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            
                            {/* Badges */}
                            <div className="absolute top-6 left-6 z-10 font-accent text-[9px] uppercase tracking-[0.3em] text-brand-black bg-brand-gold px-3 py-1.5 rounded-[2px] shadow-lg">
                                {trip.category}
                            </div>
                            <div className="absolute top-6 right-6 z-10 font-accent text-[9px] uppercase tracking-[0.2em] text-brand-gold bg-brand-black/80 backdrop-blur-md border border-brand-gold/20 px-3 py-1.5 rounded-[2px]">
                                {trip.duration}
                            </div>

                            {/* Content Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {trip.destination}
                                </span>
                                <h3 className="font-serif text-3xl sm:text-4xl text-brand-cream leading-tight mb-4 drop-shadow-md">
                                    {trip.title}
                                </h3>
                                <p className="text-brand-cream/60 font-light text-sm hidden group-hover:block transition-all duration-500 opacity-0 group-hover:opacity-100 mb-6">
                                    {trip.teaser}
                                </p>
                                
                                <div className="mt-4 flex items-center gap-3 font-accent text-[10px] uppercase tracking-[0.2em] text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Explore Trip
                                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M0 4H14M14 4L10.5 0.5M14 4L10.5 7.5" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State / Bottom loader marker */}
                <div className="text-center mt-24 reveal">
                    <div className="inline-block w-px h-16 bg-gradient-to-b from-brand-gold to-transparent mb-8" />
                    <p className="font-serif italic text-2xl text-brand-muted mb-6">More adventures coming soon...</p>
                    <Link href="/contact" className="btn-ghost">Contact for Custom Trips</Link>
                </div>
            </main>

            <CTASection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        itemListElement: tripsData.map((t, idx) => ({
                            '@type': 'ListItem',
                            position: idx + 1,
                            item: {
                                '@type': 'TouristTrip',
                                name: t.title,
                                description: t.teaser,
                                itinerary: {
                                    '@type': 'ItemList',
                                    name: t.duration
                                }
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
