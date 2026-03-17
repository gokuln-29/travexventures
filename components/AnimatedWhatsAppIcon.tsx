'use client';

import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import whatsappAnimation from '@/public/whatsapp-animation.json';

export default function AnimatedWhatsAppIcon({ size = 24 }: { size?: number }) {
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        // Auto-play the animation
        if (lottieRef.current) {
            lottieRef.current.play();
        }
    }, []);

    return (
        <div style={{ width: size, height: size }}>
            <Lottie
                lottieRef={lottieRef}
                animationData={whatsappAnimation}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
