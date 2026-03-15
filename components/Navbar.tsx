'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Maldives', href: '/maldives-group-trip-from-india' },
    { name: 'Journeys', href: '/upcoming-trips' },
    { name: 'Trips', href: '/trips' },
    { name: 'Packages', href: '/packages' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/blog' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? 'glass-nav' : 'bg-transparent'
                }`}
                aria-label="Main navigation"
            >
                <div className="px-6 sm:px-10 lg:px-16 mx-auto max-w-[1400px]">
                    <div className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Travex Ventures"
                                width={200}
                                height={60}
                                className="w-auto h-10 md:h-12 object-contain brightness-0 invert"
                                priority
                            />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative font-accent text-[11px] uppercase tracking-[0.25em] text-brand-cream/70 hover:text-brand-gold transition-colors duration-300 group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <Link href="/contact" className="btn-gold-pill">
                                Book Now
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-cream"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Overlay Menu */}
            <div
                className={`fixed inset-0 z-[60] bg-brand-black transition-all duration-500 flex flex-col justify-center items-center ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-brand-cream"
                    aria-label="Close menu"
                >
                    <X className="w-7 h-7" />
                </button>

                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-serif text-3xl sm:text-4xl text-brand-cream hover:text-brand-gold transition-colors duration-300"
                            style={{
                                transitionDelay: isOpen ? `${idx * 80}ms` : '0ms',
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isOpen ? 1 : 0,
                                transition: 'all 0.4s ease-out',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="gold-rule mt-4" />

                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="btn-gold mt-2"
                    >
                        Book Now
                    </Link>
                </nav>
            </div>
        </>
    );
}
