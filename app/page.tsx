import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UpcomingTrips from '@/components/UpcomingTrips';
import TripsGrid from '@/components/TripsGrid';
import Testimonials from '@/components/Testimonials';
import BlogInsights from '@/components/BlogInsights';
import CTASection from '@/components/CTASection';
import SchemaScript from '@/components/SchemaScript';

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
