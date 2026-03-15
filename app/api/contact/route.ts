import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, email, phoneNumber, tripType, message } = body;

        if (!fullName || !email || !tripType || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Travexventures Contact <onboarding@resend.dev>', // Replace with your verified domain e.g. reservations@travexventures.com
            to: ['travelbosstamil@gmail.com'], // In Resend testing mode, you must send to your verified email
            subject: `[Travexventures Inquiry] ${tripType} — ${fullName}`,
            replyTo: email,
            text: `
Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber || 'N/A'}
Trip Type: ${tripType}

Message:
${message}
            `,
        });

        if (data.error) {
            console.error('Resend API Error:', data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data.data?.id });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
