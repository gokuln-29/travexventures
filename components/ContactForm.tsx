'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

const contactSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
    tripType: z.enum(['Group Trip', 'Honeymoon', 'General Inquiry'], {
        message: 'Please select a valid trip type',
    }),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            tripType: 'General Inquiry',
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        sendGTMEvent({ event: 'whatsapp_lead', lead_type: 'contact_form', trip_type: data.tripType });
        const subject = encodeURIComponent(`[Travexventures Inquiry] ${data.tripType} — ${data.fullName}`);
        const body = encodeURIComponent(
            `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phoneNumber}\nTrip Type: ${data.tripType}\n\nMessage:\n${data.message}`
        );
        window.open(`mailto:reservations@travexventures.com?subject=${subject}&body=${body}`, '_self');
        setIsSubmitted(true);
        reset();
    };

    if (isSubmitted) {
        return (
            <div className="glass-panel p-10 text-center animate-fade-in border-cyan-500/20 shadow-cyan-900/10">
                <CheckCircle2 className="w-16 h-16 text-cyan-brand mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-navy-950 mb-3 block">Request Received!</h3>
                <p className="text-navy-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out to Travexventures. Your inquiry has been sent to{' '}
                    <strong className="text-navy-900">reservations@travexventures.com</strong>. Our travel experts will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline border-navy-200 text-navy-800 hover:bg-navy-50 w-full sm:w-auto"
                >
                    Send Another Inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-slide-up bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-navy-50">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-navy-900">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        {...register('fullName')}
                        className={`w-full px-4 py-3 rounded-lg border bg-earth-light/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${errors.fullName ? 'border-sunset-orange focus:ring-sunset-orange/50' : 'border-navy-200 focus:ring-cyan-brand/50 focus:border-cyan-brand'
                            }`}
                        placeholder="Enter Your Full Name"
                    />
                    {errors.fullName && (
                        <p className="flex items-center text-sm text-sunset-orange mt-1">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-lg border bg-earth-light/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${errors.email ? 'border-sunset-orange focus:ring-sunset-orange/50' : 'border-navy-200 focus:ring-cyan-brand/50 focus:border-cyan-brand'
                            }`}
                        placeholder="Enter Your Email Address"
                    />
                    {errors.email && (
                        <p className="flex items-center text-sm text-sunset-orange mt-1">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-navy-900">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        {...register('phoneNumber')}
                        className={`w-full px-4 py-3 rounded-lg border bg-earth-light/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${errors.phoneNumber ? 'border-sunset-orange focus:ring-sunset-orange/50' : 'border-navy-200 focus:ring-cyan-brand/50 focus:border-cyan-brand'
                            }`}
                        placeholder="+91 95001 25257"
                    />
                    {errors.phoneNumber && (
                        <p className="flex items-center text-sm text-sunset-orange mt-1">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* Trip Type Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="tripType" className="block text-sm font-semibold text-navy-900">
                        Nature of Inquiry
                    </label>
                    <select
                        id="tripType"
                        {...register('tripType')}
                        className={`w-full px-4 py-3 rounded-lg border bg-earth-light/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 appearance-none ${errors.tripType ? 'border-sunset-orange focus:ring-sunset-orange/50' : 'border-navy-200 focus:ring-cyan-brand/50 focus:border-cyan-brand'
                            }`}
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Group Trip">Group Trip</option>
                        <option value="Honeymoon">Honeymoon</option>
                    </select>
                    {errors.tripType && (
                        <p className="flex items-center text-sm text-sunset-orange mt-1">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.tripType.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
                    How can we help you plan?
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-lg border bg-earth-light/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 resize-none ${errors.message ? 'border-sunset-orange focus:ring-sunset-orange/50' : 'border-navy-200 focus:ring-cyan-brand/50 focus:border-cyan-brand'
                        }`}
                    placeholder="Tell us about your dream destination, budget, or any specific dates..."
                />
                {errors.message && (
                    <p className="flex items-center text-sm text-sunset-orange mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-lg mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
                {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : null}
                {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
            </button>

            <p className="text-xs text-center text-navy-400 mt-6 max-w-md mx-auto">
                Your inquiry will be sent to <strong>reservations@travexventures.com</strong>. By submitting this form, you agree to Travexventures&apos; Privacy Policy.
            </p>
        </form>
    );
}
