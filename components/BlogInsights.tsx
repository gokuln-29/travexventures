import Image from 'next/image';
import Link from 'next/link';

const articles = [
    {
        slug: 'best-maldives-trip-from-india-complete-travel-guide',
        title: 'Best Maldives Trip from India: The Complete 2026 Guide',
        category: 'Featured Guide',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=60&w=800&auto=format&fit=crop',
        featured: true,
    },
    {
        slug: 'hanifaru-bay-manta-ray-experience-guide',
        title: 'Hanifaru Bay Manta Ray Experience Guide',
        category: 'Wildlife',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=60&w=600&auto=format&fit=crop',
        featured: false,
    },
    {
        slug: 'sri-lanka-5-day-travel-guide',
        title: 'Sri Lanka: The Perfect 5-Day Cultural Itinerary',
        category: 'Itinerary',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=60&w=600&auto=format&fit=crop',
        featured: false,
    },
];

export default function BlogInsights() {
    const featured = articles[0];
    const rest = articles.slice(1);

    return (
        <section className="py-24 md:py-32 bg-brand-black">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 reveal">
                    <div>
                        <p className="section-label mb-4">Expert Insights</p>
                        <h2 className="section-headline">
                            Stories &amp; <em className="text-brand-gold italic">Guides</em>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="font-accent text-[11px] uppercase tracking-[0.2em] text-brand-gold hover:text-brand-gold-light transition-colors flex items-center gap-2"
                    >
                        View All Articles
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                            <path d="M0 4H14M14 4L10.5 0.5M14 4L10.5 7.5" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </Link>
                </div>

                {/* Featured + Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Featured Article (full-width banner card) */}
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="reveal group relative overflow-hidden aspect-4/5 lg:aspect-auto lg:row-span-2 flex items-end p-8 md:p-10"
                        style={{ borderRadius: '2px' }}
                    >
                        <Image
                            src={featured.image}
                            alt={`${featured.title} - ${featured.category} featured travel guide`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/40 to-transparent" />
                        <div className="relative z-10 w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-brand-gold border border-brand-gold/30 px-3 py-1">
                                    {featured.category}
                                </span>
                                <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/40">
                                    {featured.readTime}
                                </span>
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl text-brand-cream group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                                {featured.title}
                            </h3>
                        </div>
                    </Link>

                    {/* Smaller Article Cards */}
                    {rest.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="reveal group bg-brand-card overflow-hidden flex flex-col"
                            style={{ borderRadius: '2px' }}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={`${article.title} - ${article.category} travel article`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    quality={85}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-brand-gold">
                                        {article.category}
                                    </span>
                                    <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">
                                        {article.readTime}
                                    </span>
                                </div>
                                <h4 className="font-serif text-lg md:text-xl text-brand-cream group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                                    {article.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
