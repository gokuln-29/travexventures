import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ArticleList from '@/components/ArticleList';

export const metadata: Metadata = {
    title: 'Travel Insights & Guides | Travexventures Blog',
    description: 'Expert travel guides, hidden gems, and stories from the road. Discover curated tips for Maldives, Sri Lanka, and luxury adventures worldwide.',
    alternates: {
        canonical: 'https://travexventures.com/blog'
    }
};

import { blogs as allRawBlogs } from '@/data/allBlogs';

const allMappedArticles = allRawBlogs.map((b) => ({
    slug: b.slug,
    title: b.title,
    excerpt: b.description || 'Expert travel guide.',
    category: b.keywords && b.keywords.length > 0 ? b.keywords[0] : 'Guide',
    readTime: '8 min read',
    author: 'Editorial Team',
    date: 'March 2026',
    image: b.featuredImage || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=60&w=1600&auto=format&fit=crop'
}));

const featuredArticle = allMappedArticles[0];
const remainingArticles = allMappedArticles.slice(1);

export default function BlogPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <PageHero 
                title="Travel Insights" 
                breadcrumbName="Blog" 
                bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=60&w=1600&auto=format&fit=crop" 
                subtext="Expert guides, hidden gems, and stories from the road."
            />

            <main className="py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-16">
                
                {/* Main Content Area (Left 70%) */}
                <div className="w-full lg:w-[70%] flex flex-col gap-16">
                    
                    {/* Featured Article */}
                    <article className="reveal group relative overflow-hidden bg-brand-card rounded-[2px] border border-[rgba(201,168,76,0.15)] shadow-xl w-full">
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image 
                                src={featuredArticle.image} 
                                alt={`${featuredArticle.title} - ${featuredArticle.category} travel guide featured article`}
                                fill 
                                className="object-cover transition-transform duration-800 group-hover:scale-105"
                                quality={85}
                                sizes="(max-width: 1024px) 100vw, 70vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/40 to-transparent" />
                            
                            {/* Badges */}
                            <div className="absolute top-6 left-6 flex items-center gap-3">
                                <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-brand-black bg-brand-gold px-3 py-1.5 rounded-[2px]">
                                    {featuredArticle.category}
                                </span>
                                <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/80 bg-brand-black/60 backdrop-blur-sm border border-brand-cream/10 px-3 py-1.5 rounded-[2px]">
                                    {featuredArticle.readTime}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 sm:p-12 relative z-10 -mt-20 bg-linear-to-t from-brand-card via-brand-card to-transparent pt-32">
                            <h2 className="font-serif text-3xl md:text-5xl text-brand-cream leading-tight mb-6 drop-shadow-lg">
                                {featuredArticle.title}
                            </h2>
                            <p className="text-brand-cream/70 font-light text-[15px] sm:text-base leading-relaxed max-w-3xl mb-10">
                                {featuredArticle.excerpt}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-brand-gold/10 pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-black border border-brand-gold/30 flex items-center justify-center font-serif text-brand-gold">
                                        {featuredArticle.author.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-brand-cream/60">{featuredArticle.author}</span>
                                        <span className="font-accent text-[9px] uppercase tracking-widest text-brand-muted">{featuredArticle.date}</span>
                                    </div>
                                </div>
                                <Link href={`/blog/${featuredArticle.slug}`} className="btn-ghost flex items-center gap-2">
                                    Read Full Guide
                                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M0 4H14M14 4L10.5 0.5M14 4L10.5 7.5" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Client Component for Articles List & Load More */}
                    <ArticleList allArticles={remainingArticles} />
                </div>

                {/* Sidebar (Right 30%) */}
                <aside className="w-full lg:w-[30%] flex flex-col gap-12 reveal">
                    {/* Newsletter */}
                    <div className="bg-brand-card p-10 rounded-[2px] border border-brand-gold/10 shadow-lg text-center">
                        <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-4">— Newsletter —</span>
                        <h4 className="font-serif text-3xl text-brand-cream leading-tight mb-4">Join The Journey</h4>
                        <p className="text-brand-cream/60 font-light text-sm mb-8">
                            Get exclusive travel guides, early access to new packages, and curated inspiration.
                        </p>
                        <form className="flex flex-col gap-4 w-full">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-brand-black border border-brand-gold/20 text-brand-cream px-4 py-3 placeholder:text-brand-cream/30 font-light focus:outline-none focus:border-brand-gold rounded-[2px] transition-colors appearance-none"
                            />
                            <button type="button" className="btn-gold w-full flex justify-center py-3.5">Subscribe Now</button>
                        </form>
                    </div>

                    {/* Popular Articles */}
                    <div>
                        <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-brand-gold block mb-6">— Popular Reads —</span>
                        <div className="flex flex-col gap-6">
                            {[1,2,3].map((num) => (
                                <Link href="/blog" key={num} className="group flex gap-4 items-center bg-brand-card p-4 rounded-[2px] border border-brand-gold/5 hover:border-brand-gold/30 transition-colors">
                                    <span className="font-serif text-3xl text-brand-gold/20 font-bold w-6 text-center">{num}</span>
                                    <h5 className="font-serif text-lg text-brand-cream group-hover:text-brand-gold transition-colors leading-snug">
                                        {num === 1 ? '5 Reasons Maldives Should Be Your Next Trip' : num === 2 ? 'How We Plan the Perfect Custom Itinerary' : 'Packing Essentials for Sri Lanka'}
                                    </h5>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Plan Your Trip CTA */}
                    <div className="overflow-hidden aspect-4/5 rounded-[2px] flex flex-col justify-end p-8 mt-auto sticky top-32">
                        <Image 
                            src="/banner/two.jpg" 
                            alt="Plan your luxury group trip custom itinerary Travex Ventures"
                            fill 
                            className="object-cover"
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 30vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/70 to-transparent" />
                        <div className="relative z-10 text-center">
                            <h4 className="font-serif text-3xl text-brand-cream leading-tight mb-4">Inspired to Travel?</h4>
                            <p className="text-brand-cream/70 font-light text-sm mb-6">Let our experts craft your perfect escape.</p>
                            <Link href="/contact" className="btn-gold w-full flex justify-center py-3 text-[10px]">Start Planning</Link>
                        </div>
                    </div>
                </aside>

            </main>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
