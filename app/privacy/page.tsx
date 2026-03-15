import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Learn how Travexventures collects, uses, and protects your personal information when you use our travel services and website.',
    alternates: {
        canonical: 'https://travexventures.com/privacy',
    },
};

export default function PrivacyPolicyPage() {
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
                        Privacy <span className="text-cyan-brand">Policy</span>
                    </h1>
                    <p className="text-navy-500 text-sm">Last updated: March 10, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-navy max-w-none space-y-10">

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">1. Introduction</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            Welcome to Travexventures. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our travel services. By using our services, you consent to the practices described in this policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">2. Information We Collect</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base mb-3">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li><strong className="text-navy-900">Personal Information:</strong> Full name, email address, phone number, and any other details you provide when submitting an inquiry or booking a trip.</li>
                            <li><strong className="text-navy-900">Travel Preferences:</strong> Trip type preferences, destination interests, travel dates, and group size.</li>
                            <li><strong className="text-navy-900">Communication Data:</strong> Messages you send to us via our contact form, email, or WhatsApp.</li>
                            <li><strong className="text-navy-900">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website, collected automatically through cookies.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">3. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li>To respond to your inquiries and provide personalized travel recommendations.</li>
                            <li>To process and manage your trip bookings.</li>
                            <li>To communicate with you about upcoming trips, offers, and updates.</li>
                            <li>To improve our website, services, and customer experience.</li>
                            <li>To comply with legal obligations and resolve disputes.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">4. Sharing Your Information</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted travel partners (hotels, airlines, tour operators) solely for the purpose of fulfilling your bookings. We may also disclose information when required by law or to protect the safety of our users.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">5. Data Security</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">6. Cookies</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may limit some features of our website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">7. Third-Party Links</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            Our website may contain links to third-party websites such as social media platforms, payment gateways, or partner services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies independently.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">8. Your Rights</h2>
                        <ul className="list-disc list-inside space-y-2 text-navy-700 text-sm md:text-base">
                            <li>Access the personal data we hold about you.</li>
                            <li>Request correction of inaccurate or incomplete data.</li>
                            <li>Request deletion of your personal data, subject to legal obligations.</li>
                            <li>Opt out of marketing communications at any time.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">9. Changes to This Policy</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised &quot;Last updated&quot; date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-navy-950 mb-3">10. Contact Us</h2>
                        <p className="text-navy-700 leading-relaxed text-sm md:text-base">
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 p-6 rounded-2xl bg-navy-950 text-white">
                            <p className="font-bold text-lg mb-2">Travexventures</p>
                            <p className="text-navy-300 text-sm">Email: <a href="mailto:info@travexventures.com" className="text-cyan-brand hover:underline">info@travexventures.com</a></p>
                            <p className="text-navy-300 text-sm">Phone: <a href="tel:+919500125257" className="text-cyan-brand hover:underline">+91 95001 25257</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
