import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Maldives', href: '/maldives-group-trip-from-india' },
    { name: 'Journeys', href: '/upcoming-trips' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
];

export default function Footer() {
    return (
        <footer className="bg-black text-brand-cream py-16 md:py-20 mt-auto" aria-label="Site footer">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                {/* Logo + divider */}
                <div className="flex flex-col items-center mb-12">
                    <Link href="/" className="relative group mb-8">
                        <Image
                            src="/logo.png"
                            alt="Travex Ventures"
                            width={500}
                            height={500}
                            quality={100}
                            className="w-auto h-20 md:h-28 object-contain drop-shadow-[0_0_3px_rgba(253,251,247,0.7)] hover:scale-105 transition-all duration-300 relative z-10"
                        />
                    </Link>
                    <div className="gold-rule-full" />
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Social Icons — minimal line-art style */}
                <div className="flex justify-center gap-6 mb-12">
                    <a
                        href="https://www.instagram.com/travexventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <circle cx="12" cy="12" r="5" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                    </a>
                    <a
                        href="https://www.facebook.com/travexventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="Facebook"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>
                    <a
                        href="mailto:info@travexventures.com"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="Email"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                        </svg>
                    </a>
                    <a
                        href="https://wa.me/919500125257"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="WhatsApp"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-[10px] text-brand-muted/50 tracking-wider">
                        &copy; {new Date().getFullYear()} Travex Ventures. All rights reserved.
                    </p>
                    <p className="text-[10px] text-brand-muted/30 mt-1 tracking-wider">
                        Designed by{' '}
                        <a
                            href="https://neoklyn.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-gold transition-colors"
                        >
                            NeoKlyn.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
