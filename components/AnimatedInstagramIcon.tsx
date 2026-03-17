'use client';

import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import instagramAnimation from '@/public/instagram.json';

export default function AnimatedInstagramIcon({ size = 24 }: { size?: number }) {
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
                animationData={instagramAnimation}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
