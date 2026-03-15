import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description:
        'Read the terms and conditions governing your use of Travexventures travel booking services, cancellation and refund policies, and website usage.',
    alternates: {
        canonical: 'https://travexventures.com/terms',
    },
};

export default function TermsOfServicePage() {
    return (
        <section className="py-20 md:py-28 bg-earth-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-0.5 bg-cyan-brand rounded-full" />
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-brand">
                            Legal
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-navy-950 mb-4">
                        Terms of <span className="text-cyan-brand">Service</span>
                    </h1>
                    <p className="text-navy-500 text-sm">Last updated: March 10, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-navy max-w-none space-y-10">

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">1. Acceptance of Terms</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            By accessing and using the Travexventures website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">2. Services Offered</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            Travexventures provides curated group travel experiences, honeymoon packages, and custom trip planning services. We act as a travel organizer and coordinator, working with third-party suppliers including hotels, airlines, transport providers, and activity operators to deliver your travel experience.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">3. Booking and Reservations</h2>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li>All bookings are subject to availability and confirmation by Travexventures.</li>
                            <li>A booking is confirmed only after receipt of the required deposit or full payment as communicated at the time of reservation.</li>
                            <li>Prices are subject to change without prior notice until a booking is confirmed.</li>
                            <li>You are responsible for providing accurate personal details including passport information, travel dates, and dietary or medical requirements.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">4. Payment Terms</h2>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li>Payment schedules and methods will be communicated at the time of booking.</li>
                            <li>A non-refundable deposit may be required to secure your reservation.</li>
                            <li>Full payment must be received by the due date specified in your booking confirmation.</li>
                            <li>Failure to make payment on time may result in cancellation of your booking.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">5. Cancellation and Refund Policy</h2>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li><strong className="text-navy-900">30+ days before departure:</strong> Full refund minus the non-refundable deposit.</li>
                            <li><strong className="text-navy-900">15–29 days before departure:</strong> 50% refund of the total trip cost.</li>
                            <li><strong className="text-navy-900">7–14 days before departure:</strong> 25% refund of the total trip cost.</li>
                            <li><strong className="text-navy-900">Less than 7 days before departure:</strong> No refund will be provided.</li>
                            <li>Cancellations due to force majeure (natural disasters, pandemics, government restrictions) will be handled on a case-by-case basis.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">6. Travel Insurance</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            We strongly recommend that all travelers purchase comprehensive travel insurance covering trip cancellation, medical emergencies, baggage loss, and personal liability. Travexventures is not liable for any losses incurred due to the absence of adequate travel insurance.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">7. Traveler Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li>You are responsible for ensuring that you have valid travel documents, including passports, visas, and any required vaccinations.</li>
                            <li>You must comply with all local laws and regulations of the destination country.</li>
                            <li>You are expected to behave respectfully toward fellow travelers, guides, and local communities.</li>
                            <li>Any damage caused to property during the trip is the traveler&apos;s financial responsibility.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">8. Limitation of Liability</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            Travexventures shall not be held liable for any injury, loss, damage, accident, delay, or irregularity arising from the acts or omissions of any third-party service providers, including airlines, hotels, transport operators, or tour guides. Our liability is limited to the amount paid for the services booked through us. We are not responsible for events beyond our reasonable control, including but not limited to natural disasters, political unrest, or health emergencies.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">9. Changes to Itinerary</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            Travexventures reserves the right to modify trip itineraries, accommodations, or activities due to weather conditions, safety concerns, supplier availability, or other unforeseen circumstances. We will make every effort to provide suitable alternatives of equal or greater value. No refund is guaranteed for itinerary modifications made in the interest of traveler safety.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">10. Intellectual Property</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            All content on the Travexventures website — including text, images, videos, logos, and design — is the intellectual property of Travexventures and is protected under applicable copyright and trademark laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">11. Governing Law</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">12. Contact Us</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            If you have any questions about these Terms of Service, please reach out to us:
                        </p>
                        <div className="mt-4 p-6 rounded-2xl bg-navy-950 text-white">
                            <p className="font-bold text-lg mb-2">Travexventures</p>
                            <p className="text-navy-300 text-sm">Email: <a href="mailto:info@travexventures.com" className="text-cyan-brand hover:underline">info@travexventures.com</a></p>
                            <p className="text-navy-300 text-sm">Reservations: <a href="mailto:reservations@travexventures.com" className="text-cyan-brand hover:underline">reservations@travexventures.com</a></p>
                            <p className="text-navy-300 text-sm">Phone: <a href="tel:+919500125257" className="text-cyan-brand hover:underline">+91 95001 25257</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
