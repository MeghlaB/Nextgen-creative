import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollWrapper = ({ children, className }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            wrapper: scrollRef.current,
            content: scrollRef.current,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false,
            gestureOrientation: 'vertical',
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div
            ref={scrollRef}
            id="scroll-container"
            className={"overflow-y-scroll will-change-transform rounded-xl " + className}
        >
            {children}
        </div>
    );
};

export default ScrollWrapper;
