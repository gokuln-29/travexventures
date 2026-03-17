import Link from 'next/link';
import Image from 'next/image';
import AnimatedWhatsAppIcon from './AnimatedWhatsAppIcon';
import AnimatedInstagramIcon from './AnimatedInstagramIcon';
import AnimatedFacebookIcon from './AnimatedFacebookIcon';
import AnimatedEmailIcon from './AnimatedEmailIcon';

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

                {/* Social Icons — animated style */}
                <div className="flex justify-center gap-6 mb-12">
                    <a
                        href="https://www.instagram.com/travexventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <AnimatedInstagramIcon size={52} />
                    </a>
                    <a
                        href="https://www.facebook.com/travexventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="Facebook"
                    >
                        <AnimatedFacebookIcon size={52} />
                    </a>
                    <a
                        href="mailto:info@travexventures.com"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="Email"
                    >
                        <AnimatedEmailIcon size={52} />
                    </a>
                    <a
                        href="https://wa.me/919500125257"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                        aria-label="WhatsApp"
                    >
                        <AnimatedWhatsAppIcon size={52} />
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
