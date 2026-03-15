import type { Metadata } from 'next';
import UpcomingTrips from '@/components/UpcomingTrips';

export const metadata: Metadata = {
    title: 'Maldives Hanifaru Bay Group Trip | June 24-28, 2026 | Travexventures',
    description: 'Join Travexventures for a 5-Day/4-Night group trip to the Maldives (June 24-28). Experience Hanifaru Bay manta rays, night fishing, and sandbank picnics.',
    alternates: {
        canonical: 'https://travexventures.com/packages/maldives',
    },
};

export default function MaldivesTripPage() {
    return (
        <div className="bg-earth-light py-20 min-h-screen pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 animate-fade-in">
                <div className="text-center max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-brand/10 text-cyan-brand text-sm font-bold tracking-widest uppercase mb-6">
                        Featured Group Trip
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 mb-6 font-sans">
                        Maldives Hanifaru Bay Explorer
                    </h1>
                    <p className="text-lg md:text-xl text-navy-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                        A curated 5-day / 4-night group adventure to Baa Atoll, where we will swim with manta rays, enjoy sandbank picnics, and hook fresh barracuda under the stars.
                    </p>
                </div>

                {/* Day-by-Day Itinerary Section */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-navy-50">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-10 border-b border-navy-100 pb-4">
                        Day-by-Day Itinerary
                    </h2>

                    <div className="space-y-12">
                        {/* Day 1 */}
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-cyan-brand font-black text-xl mb-1 block">Day 1</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">June 24</span>
                            </div>
                            <div className="md:w-px bg-cyan-brand/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Arrival & Island Welcome</h3>
                                <p className="text-navy-600 leading-relaxed">Touch down in the Maldives and transfer to Dharavandhoo, Baa Atoll via domestic flight. Settle into your boutique guesthouse, meet your fellow adventurers, and enjoy a traditional sunset welcome dinner by the beach.</p>
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-cyan-brand font-black text-xl mb-1 block">Day 2</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">June 25</span>
                            </div>
                            <div className="md:w-px bg-cyan-brand/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Hanifaru Bay Manta Encounter</h3>
                                <p className="text-navy-600 leading-relaxed">Head out to the UNESCO Biosphere Reserve at Hanifaru Bay. Snorkel alongside massive manta rays in their natural feeding grounds. In the afternoon, relax before setting sail for traditional night fishing under the stars.</p>
                            </div>
                        </div>

                        {/* Day 3 */}
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-cyan-brand font-black text-xl mb-1 block">Day 3</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">June 26</span>
                            </div>
                            <div className="md:w-px bg-cyan-brand/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Sandbank Picnic & Snorkeling Safari</h3>
                                <p className="text-navy-600 leading-relaxed">Cruise to an uninhabited sandbank in the middle of the ocean. Snorkel vibrant coral reefs teeming with turtles and tropical fish, followed by a private beachfront BBQ lunch.</p>
                            </div>
                        </div>

                        {/* Day 4 */}
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-cyan-brand font-black text-xl mb-1 block">Day 4</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">June 27</span>
                            </div>
                            <div className="md:w-px bg-cyan-brand/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Dolphin Cruise & Local Island Tour</h3>
                                <p className="text-navy-600 leading-relaxed">Spend the morning exploring local villages, experiencing Maldivian culture. Later, embark on a sunset cruise to spot pods of spinner dolphins jumping in the golden hour light.</p>
                            </div>
                        </div>

                        {/* Day 5 */}
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-cyan-brand font-black text-xl mb-1 block">Day 5</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">June 28</span>
                            </div>
                            <div className="md:w-px bg-cyan-brand/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Farewell & Departure</h3>
                                <p className="text-navy-600 leading-relaxed">Enjoy a leisurely morning beach walk and breakfast. Bid farewell to the islands as we transfer back to Malé International Airport for your flight home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Re-using the UpcomingTrips promo video section */}
            <div className="relative mt-20 w-full overflow-hidden">
                <UpcomingTrips />
            </div>
        </div>
    );
}
