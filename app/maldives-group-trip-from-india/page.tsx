import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, MapPin, Clock, Check, X, ChevronDown, Download } from 'lucide-react';
import CTASection from '@/components/CTASection';
import SchemaScript from '@/components/SchemaScript';

export const metadata: Metadata = {
    title: 'Maldives Group Trip from India 2026 — Hanifaru Bay Manta Rays | Travexventures',
    description: 'Join Travexventures\' exclusive Maldives group trip from India — June 2026. Snorkel with manta rays at Hanifaru Bay UNESCO Reserve, Baa Atoll. Limited spots. Book now.',
    keywords: 'maldives group trip from india, maldives trip june 2026, hanifaru bay manta ray trip, baa atoll maldives, maldives package from chennai',
    alternates: {
        canonical: 'https://travexventures.com/maldives-group-trip-from-india'
    }
};

const itinerary = [
    {
        day: 1,
        title: 'Arrival & Welcome to Paradise',
        desc: 'Transfer via scenic domestic flight and speedboat to your luxury boutique island in Baa Atoll. Evening welcome dinner on the beach under the stars.',
        image: '/banner/one.jpg'
    },
    {
        day: 2,
        title: 'Hanifaru Bay Manta Expedition',
        desc: 'Board a private dhoni to Hanifaru Bay, the world’s largest manta ray feeding station. Snorkel alongside hundreds of giant mantas guided by a marine biologist.',
        image: '/upcoming_trips/poster-2.jpg'
    },
    {
        day: 3,
        title: 'Sandbank Picnic & Local Island Visit',
        desc: 'Journey to a deserted sandbank in the middle of the ocean for a private BBQ lunch. Afternoon visit to a local fishing village to experience authentic Maldivian culture.',
        image: '/banner/three.jpg'
    },
    {
        day: 4,
        title: 'Coral Reef Snorkeling & Sunset Cruise',
        desc: 'Explore vibrant house reefs teeming with turtles and reef sharks. End your evening on a traditional sunset cruise watching playful dolphins.',
        image: '/Trips/1.png'
    },
    {
        day: 5,
        title: 'Farewell & Departure',
        desc: 'Enjoy one last morning swim in the crystal clear lagoon before transferring back to Male International Airport.',
        image: '/banner/four.jpg'
    }
];

export default function MaldivesTripPage() {
    const touristTripSchema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Maldives Hanifaru Bay Manta Ray Expedition",
        "description": "Experience the world's greatest manta ray gathering at Hanifaru Bay UNESCO Biosphere Reserve. 5-day exclusive luxury trip with marine biologist, private dhoni, sandbank picnic, and authentic island culture.",
        "startDate": "2026-06-24",
        "endDate": "2026-06-28",
        "duration": "P5D",
        "touristType": "Group",
        "url": "https://travexventures.com/maldives-group-trip-from-india",
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Arrival & Welcome to Paradise",
                    "description": "Transfer via scenic domestic flight and speedboat to your luxury boutique island in Baa Atoll. Evening welcome dinner on the beach under the stars."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Hanifaru Bay Manta Expedition",
                    "description": "Snorkel alongside hundreds of giant mantas at the world's largest manta ray feeding station with a marine biologist guide."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Sandbank Picnic & Local Island Visit",
                    "description": "Private BBQ lunch on deserted sandbank and visit to authentic Maldivian fishing village."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Coral Reef Snorkeling & Sunset Cruise",
                    "description": "Explore vibrant house reefs and watch playful dolphins on a traditional sunset dhoni cruise."
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Farewell & Departure",
                    "description": "Final morning swim in crystal clear lagoon before transfer back to Male International Airport."
                }
            ]
        },
        "location": {
            "@type": "Place",
            "name": "Baa Atoll, Maldives",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "MV",
                "addressRegion": "Baa Atoll"
            }
        },
        "offers": {
            "@type": "Offer",
            "price": "90000",
            "priceCurrency": "INR",
            "availability": "LimitedAvailability",
            "availabilityEnds": "2026-06-24",
            "url": "https://travexventures.com/contact",
            "description": "Luxury accommodation, all meals, private boat excursions, marine biologist guide, airport transfers included. Limited to 12 travelers."
        },
        "provider": {
            "@type": "TravelAgency",
            "name": "Travex Ventures",
            "telephone": "+919047033448",
            "url": "https://travexventures.com"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "200"
        }
    };

    return (
        <div className="bg-brand-black min-h-screen relative">
            <SchemaScript schema={touristTripSchema} />

            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/upcoming_trips/poster-2.jpg"
                    alt="Maldives Hanifaru Bay manta ray snorkeling UNESCO biosphere reserve Baa Atoll"
                    fill
                    className="object-cover"
                    priority={true}
                    fetchPriority="high"
                    quality={85}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black/95 via-brand-black/60 to-brand-black/20" />

                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-20">
                    <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-black bg-brand-gold px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.5)] mb-8 flex items-center gap-2 font-semibold">
                        <span className="text-red-600 text-[12px]">🔥</span> LIMITED SPOTS — JUNE 2026
                    </span>

                    <h1 className="font-serif text-5xl sm:text-6xl md:text-[80px] text-brand-cream leading-tight mb-6 drop-shadow-2xl">
                        Maldives: <em className="italic text-brand-gold">Hanifaru Bay</em>
                    </h1>

                    <p className="text-brand-cream/80 font-light text-xl md:text-2xl mb-12 max-w-3xl">
                        The World&apos;s Greatest Manta Ray Gathering
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link href="/contact" className="btn-gold py-4 px-10 text-[11px] w-full sm:w-auto text-center">
                            Book Your Spot Now
                        </Link>
                        <a href="/maldives-itinerary.pdf" download className="btn-ghost py-4 px-8 text-[11px] flex items-center gap-3 w-full sm:w-auto justify-center group">
                            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            Download Itinerary PDF
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24 relative py-20">

                {/* Main Content Area (Left 70%) */}
                <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col gap-24 font-light">

                    {/* 1. Trip Snapshot Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-[rgba(201,168,76,0.15)] bg-linear-to-r from-[rgba(201,168,76,0.05)] to-transparent px-8 rounded-[2px] reveal">
                        <div className="flex flex-col gap-2">
                            <Calendar className="w-6 h-6 text-brand-gold mb-1" />
                            <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">Dates</span>
                            <span className="font-serif text-xl text-brand-cream">June 24-28, 2026</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Clock className="w-6 h-6 text-brand-gold mb-1" />
                            <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">Duration</span>
                            <span className="font-serif text-xl text-brand-cream">5 Days / 4 Nights</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Users className="w-6 h-6 text-brand-gold mb-1" />
                            <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">Group Size</span>
                            <span className="font-serif text-xl text-brand-cream">Max 22 People</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <MapPin className="w-6 h-6 text-brand-gold mb-1" />
                            <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">Location</span>
                            <span className="font-serif text-xl text-brand-cream">Baa Atoll, Maldives</span>
                        </div>
                    </div>

                    {/* 2. Why This Trip */}
                    <div className="reveal">
                        <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-8">— Why This Trip —</span>
                        <h2 className="font-serif text-4xl lg:text-[44px] text-brand-cream leading-tight mb-12">
                            Experience the extraordinary without the crowds.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-brand-card p-8 border border-[rgba(201,168,76,0.1)] rounded-[2px] hover:border-brand-gold/30 transition-colors">
                                <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center mb-6">
                                    <span className="font-serif text-xl text-brand-gold italic">01</span>
                                </div>
                                <h3 className="font-serif text-xl text-brand-cream mb-4">UNESCO Biosphere</h3>
                                <p className="text-brand-cream/60 text-sm leading-relaxed">Snorkel in Hanifaru Bay, a protected reserve famous globally for the largest manta ray aggregations.</p>
                            </div>
                            <div className="bg-brand-card p-8 border border-[rgba(201,168,76,0.1)] rounded-[2px] hover:border-brand-gold/30 transition-colors">
                                <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center mb-6">
                                    <span className="font-serif text-xl text-brand-gold italic">02</span>
                                </div>
                                <h3 className="font-serif text-xl text-brand-cream mb-4">Exclusive Access</h3>
                                <p className="text-brand-cream/60 text-sm leading-relaxed">Travel with our in-house marine biologist on a private dhoni, avoiding the crowded resort boats.</p>
                            </div>
                            <div className="bg-brand-card p-8 border border-[rgba(201,168,76,0.1)] rounded-[2px] hover:border-brand-gold/30 transition-colors">
                                <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center mb-6">
                                    <span className="font-serif text-xl text-brand-gold italic">03</span>
                                </div>
                                <h3 className="font-serif text-xl text-brand-cream mb-4">Intimate Groups</h3>
                                <p className="text-brand-cream/60 text-sm leading-relaxed">Capped at 12 travelers, ensuring personalized attention and a tight-knit community of adventurers.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Day by Day Itinerary */}
                    <div className="reveal">
                        <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-8">— The Journey —</span>
                        <h2 className="font-serif text-4xl lg:text-[44px] text-brand-cream leading-tight mb-16">
                            Day-by-Day Itinerary
                        </h2>

                        <div className="flex flex-col gap-12 relative">
                            {/* Gold vertical line connecting icons */}
                            <div className="absolute left-6 top-6 bottom-12 w-px bg-linear-to-b from-brand-gold via-brand-gold/20 to-transparent shadow-[0_0_10px_rgba(201,168,76,0.5)] hidden md:block" />

                            {itinerary.map((day, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 relative group z-10 w-full">
                                    {/* Number Circle */}
                                    <div className="w-12 h-12 rounded-full bg-brand-black border-2 border-brand-gold flex items-center justify-center shrink-0 z-10 md:flex group-hover:bg-brand-gold transition-colors duration-500 shadow-xl">
                                        <span className="font-serif text-lg text-brand-cream group-hover:text-brand-black transition-colors">
                                            {day.day}
                                        </span>
                                    </div>

                                    {/* Day Content */}
                                    <div className="flex flex-col lg:flex-row gap-8 bg-brand-card p-8 border border-[rgba(201,168,76,0.1)] hover:border-brand-gold/30 transition-colors w-full rounded-[2px] shadow-lg">
                                        <div className="flex-1">
                                            <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-3 block md:hidden">Day {day.day}</span>
                                            <h3 className="font-serif text-2xl lg:text-3xl text-brand-cream mb-4 leading-snug">{day.title}</h3>
                                            <p className="text-brand-cream/60 leading-relaxed text-[15px]">{day.desc}</p>
                                        </div>
                                        <div className="w-full lg:w-[250px] aspect-video lg:aspect-square relative overflow-hidden rounded-[2px] shrink-0">
                                            <Image 
                                                src={day.image} 
                                                alt={`${day.title} - Maldives group trip day ${day.day} experience`}
                                                fill 
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                quality={85}
                                                sizes="(max-width: 1024px) 100vw, 250px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Included/Excluded */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal border-t border-[rgba(201,168,76,0.15)] pt-20">
                        <div className="bg-brand-card p-10 border border-brand-gold/20 shadow-xl relative overflow-hidden rounded-[2px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full" />
                            <h3 className="font-serif text-3xl text-brand-cream mb-8">What&apos;s Included</h3>
                            <ul className="flex flex-col gap-5">
                                {[
                                    '4 Nights luxury boutique hotel accommodation',
                                    'Return transfers (Domestic Flight + Speedboat)',
                                    'All meals (Breakfast, Lunch, Dinner)',
                                    'Hanifaru Bay Manta Ray Excursion',
                                    'Sandbank Picnic & BBQ',
                                    'Sunset Dolphin Cruise',
                                    'Marine Bio & Expert guide fees',
                                    'All green taxes and government fees'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-brand-gold" />
                                        </div>
                                        <span className="text-brand-cream/70 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#111111] p-10 border border-white/5 relative overflow-hidden rounded-[2px]">
                            <h3 className="font-serif text-3xl text-brand-muted mb-8">What&apos;s Excluded</h3>
                            <ul className="flex flex-col gap-5">
                                {[
                                    'International Flights to Male (MLE)',
                                    'Travel Insurance (Mandatory)',
                                    'Alcoholic beverages & personal expenses',
                                    'Scuba diving certification/equipment (available as add-on)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 flex items-center justify-center shrink-0">
                                            <X className="w-4 h-4 text-brand-muted/50" />
                                        </div>
                                        <span className="text-brand-muted text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 6. Meet Your Expert */}
                    <div className="reveal">
                        <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-8">— The Guides —</span>
                        <div className="flex flex-col md:flex-row gap-12 bg-brand-card p-10 border border-brand-gold/10 rounded-[2px] items-center">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-2 border-brand-gold/50 shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                                <Image 
                                    src="/founder.png" 
                                    alt="Karthikeyan founder expedition leader marine biologist Maldives expert"
                                    fill 
                                    className="object-cover"
                                    quality={90}
                                    sizes="(max-width: 768px) 200px, 256px"
                                />
                            </div>
                            <div>
                                <h3 className="font-serif text-3xl text-brand-cream mb-2">Karthikeyan</h3>
                                <div className="font-accent text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-6">Expedition Leader / Founder</div>
                                <p className="text-brand-cream/60 text-[15px] leading-relaxed italic border-l-2 border-brand-gold/30 pl-4">
                                    &quot;I have dove in oceans across the globe, but nothing compares to the absolute magic of Hanifaru Bay. When a five-meter manta ray glides inches from your face, time simply stops. I built this specific itinerary so our guests can experience that pure awe, without the crowds of standard tours.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Sidebar right (30%) */}
                <aside className="w-full lg:w-[35%] xl:w-[30%] relative">
                    <div className="sticky top-32 flex flex-col gap-8">
                        {/* Price Summary Card */}
                        <div className="bg-brand-card p-8 border border-[rgba(201,168,76,0.3)] shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-[2px]">
                            <div className="font-accent text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4 text-center">June 24-28, 2026</div>
                            <h3 className="font-serif text-4xl text-brand-cream text-center mb-6">₹90,000 <span className="text-lg text-brand-muted font-light">/ pp</span></h3>

                            <div className="h-px w-full bg-linear-to-r from-transparent via-brand-gold/30 to-transparent mb-6" />

                            <ul className="flex flex-col gap-4 mb-8">
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-brand-cream/60 font-light">Deposit Required:</span>
                                    <span className="text-brand-cream font-medium">₹30,000</span>
                                </li>
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-brand-cream/60 font-light">Availability:</span>
                                    <span className="text-amber-500 font-medium tracking-wide">8 Spots Left</span>
                                </li>
                            </ul>

                            <Link href="/contact" className="btn-gold w-full text-center flex justify-center py-4 text-[11px] mb-4">
                                Secure Your Spot
                            </Link>
                            <p className="text-center text-[11px] text-brand-muted font-light italic">
                                Fully refundable for 14 days after booking.
                            </p>
                        </div>

                        {/* Booking Help */}
                        <div className="bg-[#111111] p-8 border border-white/5 text-center flex flex-col items-center gap-4 rounded-[2px]">
                            <h4 className="font-serif text-2xl text-brand-cream">Have Questions?</h4>
                            <p className="text-brand-cream/60 text-sm font-light leading-relaxed">Chat with our Maldives experts to see if this trip is right for you.</p>
                            <a href="https://wa.me/919047033448?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20the%20Maldives%20trip!" target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center justify-center gap-2 w-full mt-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Final CTA Full Width */}
            <section className="relative py-40 overflow-hidden reveal">
                <Image 
                    src="/Trips/3.png" 
                    alt="Crystal clear turquoise waters Maldives ocean lagoon snorkeling destination"
                    fill 
                    className="object-cover"
                    quality={85}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-brand-black/80" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black to-transparent" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-cream leading-tight mb-8">
                        Your Maldives Adventure is <br /><em className="text-brand-gold italic">One Click Away</em>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                        <Link href="/contact" className="btn-gold py-4 px-12 text-[11px] w-full sm:w-auto text-center">Book Now</Link>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Event',
                        name: 'Maldives: Hanifaru Bay Manta Ray Gathering',
                        startDate: '2026-06-24',
                        endDate: '2026-06-28',
                        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                        eventStatus: 'https://schema.org/EventScheduled',
                        location: {
                            '@type': 'Place',
                            name: 'Baa Atoll, Maldives'
                        },
                        image: ['https://travexventures.com/upcoming_trips/poster-2.jpg'],
                        description: 'Join Travexventures exclusive Maldives group trip from India — June 2026. Snorkel with manta rays at Hanifaru Bay UNESCO Reserve, Baa Atoll.',
                        offers: {
                            '@type': 'Offer',
                            priceCurrency: 'INR',
                            price: '90,000',
                            availability: 'https://schema.org/LimitedAvailability',
                            url: 'https://travexventures.com/maldives-group-trip-from-india'
                        }
                    })
                }}
            />
        </div>
    );
}
