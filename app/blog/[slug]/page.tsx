import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ChevronRight, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '@/data/allBlogs';

export function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogs.find((b) => b.slug === slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found | Travex Ventures',
        };
    }

    return {
        title: `${post.title} | Travex Ventures`,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.featuredImage],
            type: 'article',
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((b) => b.slug === slug);

    if (!post) {
        return <div className="min-h-screen flex items-center justify-center text-center px-4"><h1 className="text-3xl font-bold text-navy-950">Post Not Found</h1></div>;
    }

    // Since we don't have a date in the current blog objects, we'll use a static or current date
    const publishDate = '2026-03-12';

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": post.featuredImage,
        "datePublished": publishDate,
        "author": {
            "@type": "Organization",
            "name": "Travex Ventures",
            "url": "https://travexventures.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Travex Ventures",
            "logo": {
                "@type": "ImageObject",
                "url": "https://travexventures.com/logo.png"
            }
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://travexventures.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://travexventures.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://travexventures.com/blog/${slug}`
            }
        ]
    };

    return (
        <article className="bg-earth-light min-h-screen py-24 px-4 font-sans">
            <SchemaMarkup schema={articleSchema} />
            <SchemaMarkup schema={breadcrumbSchema} />

            <div className="max-w-4xl mx-auto">
                <nav className="flex items-center text-sm font-medium text-navy-500 mb-8 max-w-4xl mx-auto">
                    <Link href="/" className="hover:text-cyan-brand transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-navy-300" />
                    <Link href="/blog" className="hover:text-cyan-brand transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-navy-300" />
                    <span className="text-navy-900 truncate">{post.title}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-950 mb-6 drop-shadow-sm leading-tight tracking-tight">
                    {post.title}
                </h1>

                <div className="flex items-center text-navy-500 mb-10 text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={publishDate}>
                        {new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="mx-3 text-navy-300">|</span>
                    <span>Travex Ventures Team</span>
                </div>

                <div className="relative w-full h-80 md:h-[500px] mb-12 rounded-3xl overflow-hidden shadow-lg border border-navy-50/20">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                        priority
                    />
                </div>

                <div className="max-w-none text-navy-800 leading-relaxed space-y-8">
                    <p className="text-xl text-navy-600 font-medium leading-relaxed bg-white p-6 rounded-2xl border-l-4 border-cyan-brand shadow-sm">
                        {post.description}
                    </p>

                    <ReactMarkdown
                        components={{
                            h1: ({node, ...props}) => <h1 hidden {...props} />, // Hide H1 as it's already rendered above
                            h2: ({node, ...props}) => <h2 className="text-3xl font-extrabold text-navy-950 mt-14 mb-6 border-b border-navy-100 pb-2" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-navy-900 mt-10 mb-5" {...props} />,
                            p: ({node, ...props}) => <p className="mb-6 text-lg text-navy-800 leading-relaxed" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-navy-800" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-navy-800" {...props} />,
                            li: ({node, ...props}) => <li {...props} />,
                            a: ({node, ...props}) => <a className="text-cyan-brand font-bold underline hover:text-cyan-dark transition-colors" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold text-navy-950" {...props} />,
                            em: ({node, ...props}) => <em className="italic text-navy-600" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
                
                {/* AI Search Optimization FAQ & Related Trips */}
                <div className="mt-20 border-t border-navy-100 pt-16">
                    <h3 className="text-2xl font-bold text-navy-900 mb-8 border-l-4 border-sunset-orange pl-4 bg-white py-2 rounded-r-lg shadow-sm">Explore More with Travex</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/maldives-group-trip-from-india" className="bg-white p-6 rounded-2xl shadow-sm border border-navy-50 hover:shadow-md transition-shadow group">
                            <h4 className="font-bold text-cyan-brand mb-2 group-hover:underline">Maldives Group Trips →</h4>
                            <p className="text-sm text-navy-600">Discover our 4N/5D highly affordable Maldives packages including flights, manta ray snorkeling, and half-board meals.</p>
                        </Link>
                        <Link href="/packages/sri-lanka" className="bg-white p-6 rounded-2xl shadow-sm border border-navy-50 hover:shadow-md transition-shadow group">
                            <h4 className="font-bold text-cyan-brand mb-2 group-hover:underline">Sri Lanka Packages →</h4>
                            <p className="text-sm text-navy-600">Explore tea plantations, wildlife safaris, and train journeys with our carefully curated Sri Lankan trips.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
