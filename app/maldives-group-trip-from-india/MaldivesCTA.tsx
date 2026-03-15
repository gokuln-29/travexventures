'use client';
import { sendGTMEvent } from '@next/third-parties/google';

export default function MaldivesCTA() {
    const handleWhatsAppClick = () => {
        sendGTMEvent({ event: 'whatsapp_lead', lead_type: 'maldives_landing_page' });
    };

    return (
        <a 
            href="https://wa.me/919500125257?text=Hi%20Travexventures!%20I%20saw%20your%20Maldives%20Group%20Trip.%20Can%20you%20share%20the%20itinerary?"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto px-8 py-5 bg-cyan-brand text-white rounded-full font-bold text-lg hover:bg-cyan-dark transition-colors shadow-lg shadow-cyan-brand/30 flex items-center justify-center gap-2"
        >
            Get Maldives Itinerary on WhatsApp
        </a>
    );
}
