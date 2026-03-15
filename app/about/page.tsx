import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'About Travexventures | Luxury Travel Agency',
    description: 'Learn about Karthikeyan and the vision behind Travexventures. We craft travel experiences that transcend the ordinary.',
    alternates: {
        canonical: 'https://travexventures.com/about'
    }
};

export default function AboutPage() {
    return (
        <div className="bg-brand-black min-h-screen">

            {/* Hero — full natural-size image, no cropping */}
            <section className="relative overflow-hidden">
                <Image
                    src="/banner/four.jpg"
                    alt="Our Story — Travex Ventures"
                    width={1920}
                    height={1080}
                    className="w-full h-auto block"
                    sizes="100vw"
                    priority
                />

                {/* Dark overlays */}
                <div className="absolute inset-0 bg-brand-black/60" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-brand-black/30" />

                {/* Centred content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-6 font-accent text-[11px] uppercase tracking-[0.25em] text-brand-gold">
                        <Link href="/" className="hover:text-brand-cream transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span>About</span>
                    </div>

                    <h1 className="font-serif text-5xl sm:text-6xl md:text-[64px] text-brand-cream leading-tight mb-6">
                        Our Story
                    </h1>

                    {/* Gold underline */}
                    <div className="w-24 h-px bg-brand-gold relative overflow-hidden mb-6">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/50 -translate-x-full animate-[goldShimmer_3s_ease-in-out_infinite]" />
                    </div>

                    <p className="text-brand-cream/70 font-light text-lg max-w-2xl mx-auto leading-relaxed mt-4">
                        Crafting travel experiences that transcend the ordinary.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <div className="pt-24">
                <Features />
            </div>

            <Testimonials />

            <CTASection />
        </div>
    );
}
