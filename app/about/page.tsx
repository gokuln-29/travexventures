import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
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
            <PageHero 
                title="Our Story" 
                breadcrumbName="About" 
                bgImage="/banner/four.jpg" 
                subtext="Crafting travel experiences that transcend the ordinary."
            />

            {/* Founder Section */}
            <div className="pt-24">
                <Features />
            </div>
            
            <Testimonials />
            
            <CTASection />
        </div>
    );
}
