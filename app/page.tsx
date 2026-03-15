import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UpcomingTrips from '@/components/UpcomingTrips';
import TripsGrid from '@/components/TripsGrid';
import Testimonials from '@/components/Testimonials';
import BlogInsights from '@/components/BlogInsights';
import CTASection from '@/components/CTASection';

export default function Home() {
    return (
        <div className="bg-brand-black min-h-screen">
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
