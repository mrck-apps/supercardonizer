"use client";

import { useEffect, useState } from 'react';

const shapes = [
  { id: 1, size: 'w-32 h-32', top: '10%', left: '15%' },
  { id: 2, size: 'w-16 h-16', top: '25%', left: '70%' },
  { id: 3, size: 'w-48 h-48', top: '70%', left: '10%' },
  { id: 4, size: 'w-24 h-24', top: '80%', left: '85%' },
  { id: 5, size: 'w-20 h-20', top: '50%', left: '50%' },
  { id: 6, size: 'w-40 h-40', top: '5%', left: '90%' },
  { id: 7, size: 'w-12 h-12', top: '90%', left: '40%' },
];

const BackgroundAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} bg-primary/10 dark:bg-accent/10 rounded-full animate-float`}
          style={{
            top: shape.top,
            left: shape.left,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 8 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
