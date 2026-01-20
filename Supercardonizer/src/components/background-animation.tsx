"use client";

import { useEffect, useState } from 'react';

// To prevent hydration mismatch, we generate random values on the client.
const useRandomValues = (count: number) => {
    const [values, setValues] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        const newValues = Array.from({ length: count }, () => ({
            left: `${Math.random() * 100}vw`,
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
        }));
        setValues(newValues);
    }, [count]);

    return values;
};

export function BackgroundAnimation() {
    const shapes = useRandomValues(12);

    if (shapes.length === 0) {
        return null; // Render nothing on the server to avoid hydration mismatch
    }

    return (
        <ul className="background-shapes" aria-hidden="true">
            {shapes.map((style, index) => (
                <li key={index} style={style}></li>
            ))}
        </ul>
    );
}
