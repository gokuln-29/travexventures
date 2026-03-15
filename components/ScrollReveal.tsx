'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const observeElements = () => {
            const elements = document.querySelectorAll('.reveal:not(.visible)');
            elements.forEach((el) => observer.observe(el));
        };

        // Initial observe
        observeElements();

        // Retry multiple times over the first couple of seconds
        // to catch dynamically added or hydrated elements
        const timeouts = [
            setTimeout(observeElements, 100),
            setTimeout(observeElements, 300),
            setTimeout(observeElements, 1000),
            setTimeout(observeElements, 2500)
        ];

        return () => {
            observer.disconnect();
            timeouts.forEach(clearTimeout);
        };
    }, [pathname]);

    return null;
}
