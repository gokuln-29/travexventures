import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Luxury Travel Packages — Honeymoon, Adventure & Cruises | Travexventures',
    description: 'Discover handcrafted luxury travel packages — romantic Amalfi honeymoons, Maldives scuba adventures, private island cruises. Tailored from India.',
    alternates: {
        canonical: 'https://travexventures.com/packages'
    }
};

const packagesData = [
    {
        id: 'pkg-1',
        title: 'Baa Atoll & Beyond: 5 Days of Magic',
        category: 'Wildlife',
        image: '/banner/four.jpg',
        teaser: 'Snorkel with gentle giants in crystal waters and retreat to private overwater bungalows.',
        price: 'From ₹1,29,000'
    },
    {
        id: 'pkg-2',
        title: 'Amalfi Coast Romance: 7 Days',
        category: 'Honeymoon',
        image: '/banner/two.jpg',
        teaser: 'Private cliffside villas, exclusive cooking classes, and sunset sailing on the Mediterranean.',
        price: 'From ₹2,45,000'
    },
    {
        id: 'pkg-3',
        title: 'Sigiriya Cultural Escape',
        category: 'Cultural',
        image: '/banner/three.jpg',
        teaser: 'Ancient rock fortresses, sprawling tea gardens, and authentic Michelin-level Sri Lankan dining.',
        price: 'From ₹85,000'
    },
    {
        id: 'pkg-4',
        title: 'Deep Blue Dive Expedition',
        category: 'Adventure',
        image: '/banner/one.jpg',
        teaser: 'Dive world-renowned wrecks and reefs with marine biologists guiding every step.',
        price: 'From ₹1,15,000'
    }
];

export default function PackagesPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <PageHero 
                title="Curated Packages" 
                breadcrumbName="Packages" 
                bgImage="/banner/one.jpg" 
                subtext="Hand-selected journeys. Every detail handled."
            />

            <main className="py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                
                {/* Hero Feature Package - Full Width Card */}
                <div className="reveal grid grid-cols-1 lg:grid-cols-2 bg-brand-card overflow-hidden rounded-[2px] mb-24 border border-[rgba(201,168,76,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Left: Content */}
                    <div className="p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                        <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold bg-brand-black px-4 py-2 rounded-[2px] w-fit shadow-md border border-[rgba(201,168,76,0.1)] mb-8">
                            Featured Package
                        </span>
                        
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-[56px] text-brand-cream leading-tight mb-8">
                            Premium Maldives Escape: <br/><em className="italic text-brand-gold">Manta Ray Magic</em>
                        </h2>

                        <ul className="flex flex-col gap-4 mb-12 border-l border-brand-gold/20 pl-6">
                            {['5 Days / 4 Nights in Baa Atoll', 'Luxury Overwater Villa', 'Private Marine Biologist Guide', 'All-Inclusive Michelin Dining'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-4 text-brand-cream/80 text-sm md:text-base font-light">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mt-auto pt-8 border-t border-[rgba(201,168,76,0.1)]">
                            <div className="flex flex-col gap-1">
                                <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">Starting at</span>
                                <span className="font-serif text-3xl md:text-4xl text-brand-gold">₹1,29,000</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="/maldives-group-trip-from-india" className="btn-gold">View Package</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative aspect-video lg:aspect-auto h-full min-h-[400px] lg:min-h-full order-1 lg:order-2 overflow-hidden">
                        <Image 
                            src="/upcoming_trips/poster-2.jpg" 
                            alt="Premium Maldives Escape Manta Ray Magic" 
                            fill 
                            className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-card lg:block hidden opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent lg:hidden block opacity-60" />
                    </div>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
                    {packagesData.map((pkg) => (
                        <Link 
                            href="/contact" 
                            key={pkg.id}
                            className="group relative bg-brand-black overflow-hidden rounded-[2px] border border-[rgba(201,168,76,0.05)] hover:border-[rgba(201,168,76,0.3)] transition-all duration-500 shadow-xl"
                        >
                            {/* Top Image: 60% */}
                            <div className="relative aspect-[16/10] overflow-hidden w-full h-[320px] transition-transform duration-700 ease-out group-hover:scale-105">
                                <Image 
                                    src={pkg.image} 
                                    alt={pkg.title} 
                                    fill 
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />

                                {/* Content slide up overlay */}
                                <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                    <p className="text-brand-cream/80 font-light text-sm leading-relaxed mb-8 max-w-sm">
                                        {pkg.teaser}
                                    </p>
                                    <div className="btn-ghost flex items-center gap-2 border-[rgba(201,168,76,0.5)]">
                                        View Package
                                    </div>
                                    <div className="btn-gold mt-4">
                                        Book Now
                                    </div>
                                </div>
                            </div>
                            
                            {/* Category Badge - Image Top Left */}
                            <div className="absolute top-4 left-4 z-20 font-accent text-[10px] uppercase tracking-[0.3em] text-brand-black bg-brand-gold px-3 py-1.5 rounded-[2px] shadow-lg pointer-events-none">
                                {pkg.category}
                            </div>

                            {/* Bottom Title area */}
                            <div className="p-8 absolute bottom-0 left-0 right-0 pointer-events-none translate-y-0 group-hover:translate-y-4 group-hover:opacity-0 transition-all duration-500 z-10 bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent pt-12">
                                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3 block">
                                    {pkg.price}
                                </span>
                                <h3 className="font-serif text-2xl md:text-3xl text-brand-cream leading-tight">
                                    {pkg.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </main>

            <CTASection />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'Premium Maldives Escape: Manta Ray Magic',
                        description: '5 Days / 4 Nights in Baa Atoll, Luxury Overwater Villa, Private Marine Biologist Guide.',
                        image: 'https://travexventures.com/upcoming_trips/poster-2.jpg',
                        offers: {
                            '@type': 'Offer',
                            priceCurrency: 'INR',
                            price: '129000',
                            availability: 'https://schema.org/InStock',
                            url: 'https://travexventures.com/maldives-group-trip-from-india'
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '5',
                            reviewCount: '47'
                        }
                    })
                }}
            />
        </div>
    );
}
