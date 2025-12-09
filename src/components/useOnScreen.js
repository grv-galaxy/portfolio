import { useState, useEffect } from 'react';

// Custom hook to detect if an element is currently in the viewport
export default function useOnScreen(ref, rootMargin = '0px') {
    // State to store whether the element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                // Adjust threshold to be aggressive. 0.0 means as soon as 1 pixel is visible.
                // You might want 0.1 to start loading slightly before it's fully visible.
                threshold: 0.0
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, rootMargin]); // Only run if ref or rootMargin changes

    return isIntersecting;
}