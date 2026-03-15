export type TripType = 'Group Trip' | 'Honeymoon' | 'General Inquiry';

export interface Trip {
    id: string;
    title: string;
    durationDays: number;
    price: number;
    imageUrl: string;
    type: TripType;
    description: string;
}

export interface ContactFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    tripType: TripType;
    message: string;
}
