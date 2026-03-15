import type { Metadata } from 'next';
import UpcomingTrips from '@/components/UpcomingTrips';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sri Lanka Tour Packages | Scenic Trains & Wildlife | Travexventures',
    description: 'Explore our 5-Day Sri Lanka tour packages. Experience the Kandy to Ella scenic train ride, Sigiriya Rock, wildlife safaris, and colonial history.',
    alternates: {
        canonical: 'https://travexventures.com/packages/sri-lanka',
    },
};

export default function SriLankaTripPage() {
    return (
        <div className="bg-earth-light py-20 min-h-screen pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 animate-fade-in">
                <div className="text-center max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sunset-orange/10 text-sunset-orange text-sm font-bold tracking-widest uppercase mb-6">
                        Cultural Adventure
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 mb-6 font-sans">
                        Sri Lanka Heritage & Nature
                    </h1>
                    <p className="text-lg md:text-xl text-navy-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Journey through the heart of the "Pearl of the Indian Ocean". From ancient rock fortresses to mist-covered tea estates and wild elephant safaris.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-navy-50">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-10 border-b border-navy-100 pb-4">
                        Classic 5-Day Itinerary
                    </h2>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-sunset-orange font-black text-xl mb-1 block">Day 1</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">Arrival</span>
                            </div>
                            <div className="md:w-px bg-sunset-orange/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Colombo & Negombo</h3>
                                <p className="text-navy-600 leading-relaxed">Arrive at Bandaranaike International Airport. Enjoy a relaxed evening in the coastal town of Negombo, famous for its golden beaches and seafood.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-sunset-orange font-black text-xl mb-1 block">Day 2</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">Culture</span>
                            </div>
                            <div className="md:w-px bg-sunset-orange/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Sigiriya Rock Fortress</h3>
                                <p className="text-navy-600 leading-relaxed">Climb the magnificent Sigiriya Rock, an ancient palace complex built on a 200m high rock. Explore the water gardens and world-famous frescoes.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-sunset-orange font-black text-xl mb-1 block">Day 3</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">Highlands</span>
                            </div>
                            <div className="md:w-px bg-sunset-orange/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Kandy & Tea Estates</h3>
                                <p className="text-navy-600 leading-relaxed">Visit the sacred Temple of the Tooth in Kandy. Later, drive into the tea country, visiting a tea factory to learn about the production of Ceylon tea.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-sunset-orange font-black text-xl mb-1 block">Day 4</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">Scenery</span>
                            </div>
                            <div className="md:w-px bg-sunset-orange/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">The Scenic Train to Ella</h3>
                                <p className="text-navy-600 leading-relaxed">Embark on the world's most beautiful train ride from Nanu Oya to Ella, winding through mist-covered mountains and emerald tea plantations.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="md:w-32 shrink-0 md:text-right">
                                <span className="text-sunset-orange font-black text-xl mb-1 block">Day 5</span>
                                <span className="text-navy-400 text-sm font-medium uppercase tracking-wider">Departure</span>
                            </div>
                            <div className="md:w-px bg-sunset-orange/20 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Galle Fort & Colombo</h3>
                                <p className="text-navy-600 leading-relaxed">Explore the Dutch colonial Galle Fort before heading back to Colombo for last-minute shopping and your flight home.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl text-white bg-navy-950 hover:bg-navy-900 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-navy-950/20">
                            Book This Package
                        </Link>
                    </div>
                </div>
            </div>

            <UpcomingTrips />
        </div>
    );
}
