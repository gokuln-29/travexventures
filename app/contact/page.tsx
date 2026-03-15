import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Travexventures — Plan Your Custom Trip',
    description: 'Get in touch with Travexventures to plan your dream adventure or honeymoon. Custom itineraries, group trips, expert guidance. WhatsApp or email us today.',
    alternates: {
        canonical: 'https://travexventures.com/contact'
    }
};

export default function ContactPage() {
    return (
        <div className="bg-brand-black min-h-screen pb-32">
            <PageHero 
                title="Let's Plan Your Journey" 
                breadcrumbName="Contact" 
                bgImage="/banner/one.jpg" 
                subtext="Our travel experts are ready to craft your perfect escape."
            />

            <main className="py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left: Form (60%) */}
                    <div className="w-full lg:w-[60%] reveal">
                        <div className="bg-brand-card p-10 sm:p-14 rounded-[2px] border border-[rgba(201,168,76,0.15)] shadow-2xl relative">
                            {/* Decorative gold elements */}
                            <div className="absolute top-0 left-0 w-24 h-px bg-brand-gold/40" />
                            <div className="absolute top-0 left-0 w-px h-24 bg-brand-gold/40" />
                            <div className="absolute bottom-0 right-0 w-24 h-px bg-brand-gold/40" />
                            <div className="absolute bottom-0 right-0 w-px h-24 bg-brand-gold/40" />

                            <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-8">— Design Your Escape —</span>
                            
                            <form className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Full Name</label>
                                        <input type="text" id="name" required className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Email Address</label>
                                        <input type="email" id="email" required className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Phone Number (Optional)</label>
                                        <input type="tel" id="phone" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="destination" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Destination of Interest</label>
                                        <select id="destination" required defaultValue="" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans [&>option]:bg-brand-card">
                                            <option value="" disabled>Select an option</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Other">Other / Not Sure Yet</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="dates" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Travel Dates / Month</label>
                                        <input type="text" id="dates" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="groupSize" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Group Size</label>
                                        <input type="number" id="groupSize" min="1" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Your Vision / Message</label>
                                    <textarea id="message" rows={4} required className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans resize-y min-h-[100px]" />
                                </div>
                                
                                <button type="submit" className="btn-gold w-full mt-4 flex items-center justify-center gap-3">
                                    Send My Enquiry
                                    <svg width="18" height="10" viewBox="0 0 16 8" fill="none" className="transition-transform duration-300">
                                        <path d="M0 4H14M14 4L10.5 0.5M14 4L10.5 7.5" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </button>
                                
                                <p className="text-center text-brand-cream/40 font-light text-sm italic mt-2">
                                    Our travel experts will respond to your inquiry within 24 hours.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Right: Details (40%) */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-12 reveal pt-2 lg:pt-0">
                        
                        <div className="flex flex-col gap-10">
                            <div>
                                <h3 className="font-serif text-3xl sm:text-4xl text-brand-cream mb-8">Reach Out Directly</h3>
                                <p className="text-brand-cream/70 font-light text-base leading-relaxed mb-10 max-w-sm">
                                    Prefer to speak with an expert immediately? We are available via WhatsApp, email, or direct line to assist you.
                                </p>
                            </div>

                            <ul className="flex flex-col gap-8">
                                <li className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-300">
                                        <MessageCircle className="w-5 h-5 text-brand-gold group-hover:text-brand-black transition-colors" />
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-brand-muted mb-1">WhatsApp Chat</span>
                                        <a href="https://wa.me/919500125257" target="_blank" rel="noopener noreferrer" className="font-serif text-[22px] text-brand-gold hover:text-brand-gold-light transition-colors">
                                            +91 95001 25257
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-brand-gold group-hover:text-brand-black transition-colors" />
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-brand-muted mb-1">Email Enquiry</span>
                                        <a href="mailto:info@travexventures.com" className="font-serif text-[22px] text-brand-gold hover:text-brand-gold-light transition-colors">
                                            info@travexventures.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-300">
                                        <Phone className="w-5 h-5 text-brand-gold group-hover:text-brand-black transition-colors" />
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-brand-muted mb-1">Direct Line</span>
                                        <a href="tel:+919500125257" className="font-serif text-[22px] text-brand-gold hover:text-brand-gold-light transition-colors">
                                            +91 95001 25257
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Social / Maps Widget */}
                        <div className="mt-8 border-t border-[rgba(201,168,76,0.15)] pt-12">
                            <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-6">— Follow the Journey —</span>
                            <div className="flex items-center gap-6">
                                <a href="https://instagram.com/travexventures" target="_blank" rel="noopener noreferrer" className="text-brand-cream/60 hover:text-brand-gold transition-colors">Instagram</a>
                                <span className="text-brand-gold/20 font-serif">/</span>
                                <a href="https://facebook.com/travexventures" target="_blank" rel="noopener noreferrer" className="text-brand-cream/60 hover:text-brand-gold transition-colors">Facebook</a>
                                <span className="text-brand-gold/20 font-serif">/</span>
                                <a href="https://linkedin.com/company/travexventures" target="_blank" rel="noopener noreferrer" className="text-brand-cream/60 hover:text-brand-gold transition-colors">LinkedIn</a>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </main>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: 'Travexventures',
                        image: 'https://travexventures.com/logo.png',
                        email: 'info@travexventures.com',
                        telephone: '+919500125257',
                        url: 'https://travexventures.com',
                        priceRange: '$$$',
                        contactPoint: [{
                            '@type': 'ContactPoint',
                            telephone: '+919500125257',
                            contactType: 'customer service',
                            availableLanguage: ['en', 'hi']
                        }]
                    })
                }}
            />
        </div>
    );
}
