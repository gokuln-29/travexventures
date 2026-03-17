'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import AnimatedWhatsAppIcon from './AnimatedWhatsAppIcon';

export default function WhatsAppButton() {
    const message = encodeURIComponent('Hi Travex Ventures! I would like to know more about your luxury trips.');

    const handleClick = () => {
        sendGTMEvent({ event: 'whatsapp_lead', lead_type: 'floating_button', contact_label: '+91 90470 33448' });
    };

    return (
        <a
            href={`https://wa.me/919047033448?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 bg-brand-card/90 backdrop-blur-md border border-white/6 text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300 shadow-2xl"
            style={{ borderRadius: '50px' }}
        >
            <div className="shrink-0">
                <AnimatedWhatsAppIcon size={32} />
            </div>
            <span className="font-accent text-[10px] uppercase tracking-[0.15em]">Chat with Us</span>
        </a>
    );
}
