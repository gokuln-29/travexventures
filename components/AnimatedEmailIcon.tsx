'use client';

import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import emailAnimation from '@/public/email.json';

export default function AnimatedEmailIcon({ size = 24 }: { size?: number }) {
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.play();
        }
    }, []);

    return (
        <div style={{ width: size, height: size }}>
            <Lottie
                lottieRef={lottieRef}
                animationData={emailAnimation}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
