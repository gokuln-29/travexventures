import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UpcomingTrips from '@/components/UpcomingTrips';
import TripsGrid from '@/components/TripsGrid';
import Testimonials from '@/components/Testimonials';
import BlogInsights from '@/components/BlogInsights';
import CTASection from '@/components/CTASection';
import SchemaScript from '@/components/SchemaScript';
import type { Metadata } from 'next';

/**
 * Homepage Metadata for Open Graph & Twitter Cards
 * 
 * Test with:
 * - Facebook: https://developers.facebook.com/tools/debug/
 * - Twitter: https://cards-dev.twitter.com/validator
 */
export const metadata: Metadata = {
    title: 'Luxury Maldives & Sri Lanka Trips | Travex Ventures',
    description: 'Discover luxury Maldives & Sri Lanka group trips from India. Curated experiences with premium accommodation and exclusive activities. Book now.',
    openGraph: {
        title: 'Luxury Maldives & Sri Lanka Trips from India | Travex Ventures',
        description:
            'Curated luxury group journeys and private escapes. Experience Maldives manta rays, sandbank picnics, and Sri Lanka adventures.',
        url: 'https://travexventures.com',
        type: 'website',
        images: [
            {
                url: '/banner/one.jpg',
                width: 1200,
                height: 630,
                alt: 'Travex Ventures luxury Maldives group trip with manta rays and crystal clear waters',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luxury Maldives & Sri Lanka Trips from India | Travex Ventures',
        description:
            'Curated luxury group journeys and private escapes. Experience Maldives manta rays, sandbank picnics, and Sri Lanka adventures.',
        images: ['/banner/one.jpg'],
    },
};

export default function Home() {
    const travelAgencySchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Travex Ventures",
        "description": "Curated luxury group journeys and private escapes to the Maldives and Sri Lanka. Bespoke travel experiences for those who seek extraordinary adventures.",
        "url": "https://travexventures.com",
        "telephone": "+919047033448",
        "email": "info@travexventures.com",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Tamil Nadu"
        },
        "founder": {
            "@type": "Person",
            "name": "Karthikeyan"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "500"
        },
        "sameAs": [
            "https://www.instagram.com/travexventures/",
            "https://www.facebook.com/travexventures/"
        ]
    };

    return (
        <div className="bg-brand-black min-h-screen">
            <SchemaScript schema={travelAgencySchema} />
            <Hero />

            {/* STATS ROW (after hero) */}
            <section className="bg-brand-dark py-16 border-y border border-brand-gold/10 relative z-10">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-gold/20">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center flex-1 w-full pt-4 md:pt-0">
                            <span className="font-serif text-5xl lg:text-6xl text-brand-gold mb-2">500+</span>
                            <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-muted">Travelers</span>
                        </div>
                        {/* Stat 2 */}
                        <div className="flex flex-col items-center flex-1 w-full pt-8 md:pt-0">
                            <span className="font-serif text-5xl lg:text-6xl text-brand-gold mb-2">15+</span>
                            <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-muted">Years Experience</span>
                        </div>
                        {/* Stat 3 */}
                        <div className="flex flex-col items-center flex-1 w-full pt-8 md:pt-0">
                            <span className="font-serif text-5xl lg:text-6xl text-brand-gold mb-2">20+</span>
                            <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-muted">Destinations</span>
                        </div>
                        {/* Stat 4 */}
                        <div className="flex flex-col items-center flex-1 w-full pt-8 md:pt-0">
                            <span className="font-serif text-5xl lg:text-6xl text-brand-gold mb-2">100%</span>
                            <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-muted">Custom Itineraries</span>
                        </div>
                    </div>
                </div>
            </section>

            <UpcomingTrips />
            <TripsGrid />
            <Features />
            <Testimonials />
            <BlogInsights />
            <CTASection />
        </div>
    );
}
