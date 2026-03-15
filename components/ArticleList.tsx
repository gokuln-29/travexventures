'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    author: string;
    date: string;
    image: string;
}

interface ArticleListProps {
    allArticles: Article[];
}

export default function ArticleList({ allArticles }: ArticleListProps) {
    const [displayCount, setDisplayCount] = useState(9);
    const [loading, setLoading] = useState(false);

    const visibleArticles = allArticles.slice(0, displayCount);
    const hasMore = displayCount < allArticles.length;

    const loadMore = () => {
        setLoading(true);
        // Simulate a network loading state naturally
        setTimeout(() => {
            setDisplayCount((prev) => Math.min(prev + 10, allArticles.length));
            setLoading(false);
        }, 600);
    };

    return (
        <>
            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 reveal">
                {visibleArticles.map((article, i) => (
                    <Link
                        href={`/blog/${article.slug}`}
                        key={`${article.slug}-${i}`}
                        className="group flex flex-col bg-brand-black border border-[rgba(201,168,76,0.05)] hover:border-[rgba(201,168,76,0.3)] rounded-[2px] overflow-hidden transition-all duration-300 shadow-xl"
                    >
                        <div className="relative aspect-4/3 w-full overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute top-4 left-4 font-accent text-[9px] uppercase tracking-[0.3em] text-brand-black bg-brand-gold px-2 py-1 rounded-[2px] z-10 shadow-md">
                                {article.category}
                            </div>
                            <div className="absolute bottom-4 right-4 font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/80 bg-brand-black/60 backdrop-blur-sm border border-brand-cream/10 px-2 py-1 rounded-[2px] z-10">
                                {article.readTime}
                            </div>
                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                        <div className="p-6 md:p-8 flex flex-col grow bg-linear-to-b from-brand-card to-brand-black">
                            <h3 className="font-serif text-[22px] leading-tight text-brand-cream group-hover:text-brand-gold transition-colors duration-300 mb-4">
                                {article.title}
                            </h3>
                            <p className="text-brand-cream/60 font-light text-sm line-clamp-3 mb-8 grow">
                                {article.excerpt}
                            </p>

                            <div className="mt-auto border-t border-brand-gold/10 pt-4 flex items-center justify-between">
                                <span className="font-accent text-[9px] uppercase tracking-[0.15em] text-brand-cream/50">
                                    {article.author}
                                </span>
                                <span className="font-accent text-[8px] uppercase tracking-widest text-brand-muted">
                                    {article.date}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {hasMore ? (
                <div className="flex justify-center mt-12 mb-12 lg:mb-0 reveal">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className={`btn-ghost px-12 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Loading...' : 'Load More Articles'}
                    </button>
                </div>
            ) : (
                <div className="flex justify-center mt-12 mb-12 lg:mb-0 reveal">
                    <p className="font-serif italic text-xl text-brand-muted">You have reached the end of our journal.</p>
                </div>
            )}
        </>
    );
}
