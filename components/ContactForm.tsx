'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = {
            fullName:    (form.elements.namedItem('name')        as HTMLInputElement).value,
            email:       (form.elements.namedItem('email')       as HTMLInputElement).value,
            phone:       (form.elements.namedItem('phone')       as HTMLInputElement).value,
            destination: (form.elements.namedItem('destination') as HTMLSelectElement).value,
            dates:       (form.elements.namedItem('dates')       as HTMLInputElement).value,
            groupSize:   (form.elements.namedItem('groupSize')   as HTMLInputElement).value,
            message:     (form.elements.namedItem('message')     as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.error || 'Something went wrong. Please try again.');
            }

            setStatus('success');
            form.reset();
        } catch (err: unknown) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <div>
                    <h3 className="font-serif text-2xl text-brand-cream mb-3">Enquiry Received</h3>
                    <p className="text-brand-cream/60 font-light text-sm max-w-xs leading-relaxed">
                        Thank you! Our travel experts will reach out within 24 hours.
                    </p>
                </div>
                <button
                    onClick={() => setStatus('idle')}
                    className="font-accent text-[10px] uppercase tracking-[0.25em] text-brand-muted hover:text-brand-gold transition-colors mt-2"
                >
                    Submit another enquiry →
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Full Name</label>
                    <input type="text" id="name" name="name" required className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Email Address</label>
                    <input type="email" id="email" name="email" required className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="destination" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Destination of Interest</label>
                    <select id="destination" name="destination" required defaultValue="" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans [&>option]:bg-brand-card">
                        <option value="" disabled>Select an option</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Other">Other / Not Sure Yet</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="dates" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Travel Dates / Month</label>
                    <input type="text" id="dates" name="dates" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="groupSize" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Group Size</label>
                    <input type="number" id="groupSize" name="groupSize" min="1" className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-accent text-[9px] uppercase tracking-[0.2em] text-brand-cream/60">Your Vision / Message</label>
                <textarea id="message" name="message" rows={4} required className="bg-transparent border-b border-white/10 text-brand-cream py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm md:text-base font-light font-sans resize-y min-h-[100px]" />
            </div>

            {status === 'error' && (
                <p className="text-red-400/80 text-sm font-light text-center -mt-2">
                    ⚠ {errorMsg}
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full mt-4 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                        </svg>
                        Sending…
                    </>
                ) : (
                    <>
                        Send My Enquiry
                        <svg width="18" height="10" viewBox="0 0 16 8" fill="none" className="transition-transform duration-300">
                            <path d="M0 4H14M14 4L10.5 0.5M14 4L10.5 7.5" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </>
                )}
            </button>

            <p className="text-center text-brand-cream/40 font-light text-sm italic mt-2">
                Our travel experts will respond to your inquiry within 24 hours.
            </p>
        </form>
    );
}
