'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        // Only show on devices with fine pointer (desktop)
        const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (!mq.matches) return;

        setVisible(true);

        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('[role="button"]')
            ) {
                setHovering(true);
            }
        };

        const handleOut = () => setHovering(false);

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', handleOver);
        window.addEventListener('mouseout', handleOut);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', handleOver);
            window.removeEventListener('mouseout', handleOut);
        };
    }, []);

    if (!visible) return null;

    return (
        <>
            {/* Main gold dot */}
            <div
                className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference"
                style={{
                    transform: `translate(${pos.x - (hovering ? 16 : 5)}px, ${pos.y - (hovering ? 16 : 5)}px)`,
                    transition: 'transform 0.08s ease-out, width 0.2s, height 0.2s, opacity 0.2s',
                    width: hovering ? 32 : 10,
                    height: hovering ? 32 : 10,
                    borderRadius: '50%',
                    background: hovering ? 'transparent' : '#C9A84C',
                    border: hovering ? '1.5px solid #C9A84C' : 'none',
                    opacity: 0.9,
                }}
            />
        </>
    );
}
