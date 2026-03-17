import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import UpcomingTripsClient from './UpcomingTripsClient';

export const metadata: Metadata = {
    title: 'Upcoming Group Trips 2025–2026 | Travexventures',
    description: 'Explore upcoming group trips from India to Maldives, Sri Lanka & beyond. Reserve your spot for curated luxury journeys and unforgettable adventures.',
    alternates: {
        canonical: 'https://travexventures.com/upcoming-trips'
    }
};

const trips = [
    {
        id: 1,
        title: 'Hanifaru Bay Manta Ray Expedition',
        destination: 'Maldives',
        category: 'Adventure',
        dates: 'June 24 – 28, 2026',
        duration: '5 Days / 4 Nights',
        price: 'From ₹90,000 / person',
        spotsLeft: 8,
        soldOut: false,
        image: '/upcoming_trips/poster-2.jpg',
        highlights: [
            'Swim with manta rays at UNESCO Biosphere Reserve',
            'Sandbank picnic & night fishing excursion',
            'World-class snorkeling at coral reefs'
        ],
        href: '/maldives-group-trip-from-india'
    },
    {
        id: 2,
        title: 'Cultural Heritage & Coastal Trail',
        destination: 'Sri Lanka',
        category: 'Cultural',
        dates: 'August 10 – 16, 2026',
        duration: '7 Days / 6 Nights',
        price: 'From ₹85,000 / person',
        spotsLeft: 0,
        soldOut: true,
        image: '/banner/four.jpg',
        highlights: [
            'Ancient temples of Sigiriya & Dambulla',
            'Scenic train ride through tea country',
            'Wildlife safari at Yala National Park'
        ],
        href: '/contact'
    },
    {
        id: 3,
        title: 'Tropical Honeymoon Getaway',
        destination: 'Maldives',
        category: 'Honeymoon',
        dates: 'Customizable Dates',
        duration: '6 Days / 5 Nights',
        price: 'From ₹1,10,000 / couple',
        spotsLeft: 'Custom',
        soldOut: false,
        image: '/banner/two.jpg',
        highlights: [
            'Private overwater villa with ocean views',
            'Romantic candlelit dinner on the beach',
            'Exclusive couples spa treatment'
        ],
        href: '/contact'
    },
    {
        id: 4,
        title: 'Wilderness & Wildlife Safari',
        destination: 'Sri Lanka',
        category: 'Adventure',
        dates: 'September 12 – 18, 2026',
        duration: '7 Days / 6 Nights',
        price: 'From ₹80,000 / person',
        spotsLeft: 6,
        soldOut: false,
        image: '/banner/three.jpg',
        highlights: [
            'Leopard tracking in Yala National Park',
            'White water rafting in Kitulgala',
            'Explore the dense Sinharaja rain forest'
        ],
        href: '/contact'
    }
];

export default function UpcomingTripsPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <PageHero
                title="Upcoming Journeys"
                breadcrumbName="Upcoming Journeys"
                bgImage="/banner/one.jpg"
                subtext="Reserve your spot before they're gone — all trips run with small, intimate groups."
            />

            <UpcomingTripsClient trips={trips} />

            <CTASection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(trips.map(t => ({
                        '@context': 'https://schema.org',
                        '@type': 'Event',
                        name: t.title,
                        startDate: '2026-06-24',
                        endDate: '2026-08-16',
                        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                        eventStatus: t.soldOut ? 'https://schema.org/EventRescheduled' : 'https://schema.org/EventScheduled',
                        location: {
                            '@type': 'Place',
                            name: t.destination
                        },
                        image: [`https://travexventures.com${t.image}`],
                        description: t.highlights.join('. '),
                        offers: {
                            '@type': 'Offer',
                            priceCurrency: 'INR',
                            price: t.price.replace(/\D/g, ''),
                            availability: t.soldOut ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
                            validFrom: '2026-03-01'
                        }
                    })))
                }}
            />
        </div>
    );
}
