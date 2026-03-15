import Image from 'next/image';

export default function Features() {
    return (
        <section id="about" className="py-24 md:py-32 bg-brand-black relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/2 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left — Cinematic Portrait */}
                    <div className="reveal relative">
                        <div className="relative overflow-hidden aspect-3/4" style={{ borderRadius: '2px' }}>
                            <Image
                                src="/founder.png"
                                alt="Karthikeyan — Founder of Travex Ventures, luxury travel expert with 15+ years in hospitality"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Subtle gradient overlay at bottom */}
                            <div className="absolute inset-0 bg-linear-to-t from-brand-black/40 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Right — Text */}
                    <div className="reveal">
                        {/* Gold rule */}
                        <div className="gold-rule mb-6" />

                        {/* Headline */}
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-cream leading-tight mb-8">
                            Crafted by Experience,{' '}
                            <em className="text-brand-gold italic">Driven by Passion</em>
                        </h2>

                        {/* Body Text */}
                        <p className="text-brand-cream/60 font-light leading-relaxed mb-6 text-sm md:text-base">
                            I am Karthikeyan, founder of Travex Ventures. After more than fifteen years immersed
                            in the world of luxury hospitality, I founded this company with a singular vision:
                            to craft travel experiences that transcend the ordinary. Every journey we curate
                            is a reflection of deep industry knowledge, impeccable attention to detail, and
                            an unwavering commitment to exceeding expectations.
                        </p>

                        <p className="text-brand-cream/60 font-light leading-relaxed mb-12 text-sm md:text-base">
                            Our trips are not mass-produced itineraries — they are bespoke compositions,
                            carefully designed around the desires of each guest. From{' '}
                            <strong className="text-brand-cream font-normal">untouched island landscapes</strong> to{' '}
                            <strong className="text-brand-cream font-normal">extraordinary marine encounters</strong>,
                            we deliver moments that stay with you long after you return home.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/6">
                            <div>
                                <span className="block font-serif text-3xl md:text-4xl text-brand-gold mb-1">15+</span>
                                <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">
                                    Years Hospitality
                                </span>
                            </div>
                            <div>
                                <span className="block font-serif text-3xl md:text-4xl text-brand-gold mb-1">100%</span>
                                <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">
                                    Custom Itineraries
                                </span>
                            </div>
                            <div>
                                <span className="block font-serif text-3xl md:text-4xl text-brand-gold mb-1">12</span>
                                <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-muted">
                                    Small Group Max
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
