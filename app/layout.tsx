import type { Metadata } from 'next';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: {
        default: 'Travex Ventures | Luxury Maldives & Sri Lanka Journeys from India',
        template: '%s | Travex Ventures',
    },
    description:
        'Curated luxury group adventures & private honeymoon escapes to the Maldives and Sri Lanka. Bespoke travel for those who seek extraordinary experiences.',
    metadataBase: new URL('https://travexventures.com'),
    icons: {
        icon: '/fav.ico',
    },
    keywords: [
        'luxury maldives trip from india',
        'maldives group tour',
        'sri lanka travel package',
        'luxury honeymoon maldives',
        'manta ray maldives trip',
        'maldives manta ray experience',
        'curated maldives adventure',
        'snorkeling maldives',
        'hanifaru bay',
        'luxury group trip maldives',
        'maldives tour package',
        'bespoke travel india',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://travexventures.com',
    },
    openGraph: {
        title: 'Travex Ventures | Luxury Maldives & Sri Lanka Journeys from India',
        description:
            'Curated luxury group adventures & private honeymoon escapes to the Maldives and Sri Lanka. Bespoke travel for those who seek extraordinary experiences.',
        url: 'https://travexventures.com',
        siteName: 'Travex Ventures',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Travex Ventures — Luxury Group Adventures & Honeymoons',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Travex Ventures | Luxury Maldives & Sri Lanka Journeys from India',
        description:
            'Curated luxury group adventures & private honeymoon escapes to the Maldives and Sri Lanka. Bespoke travel for those who seek extraordinary experiences.',
    },
};

/* JSON-LD structured data for Organization */
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Travex Ventures',
    url: 'https://travexventures.com',
    logo: 'https://travexventures.com/logo.png',
    description:
        'Travex Ventures offers curated luxury group adventures, honeymoon packages, Maldives trips, and bespoke travel itineraries from India.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
    },
    telephone: ['+919500125257'],
    email: 'info@travexventures.com',
    sameAs: [
        'https://www.instagram.com/travexventures/',
        'https://www.facebook.com/travexventures/',
    ],
    areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 13.0827,
            longitude: 80.2707,
        },
        geoRadius: '5000',
    },
    priceRange: '$$$',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'} />
            <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} flex flex-col min-h-screen font-sans`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <CustomCursor />
                <Navbar />
                <main className="grow">
                    {children}
                </main>
                <WhatsAppButton />
                <Footer />
                <ScrollReveal />
                {process.env.NEXT_PUBLIC_GA_ID && (
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
                )}
            </body>
        </html>
    );
}
