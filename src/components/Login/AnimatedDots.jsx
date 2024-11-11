import React, { useEffect } from 'react';

const AnimatedDots = () => {
    useEffect(() => {
        const dotsContainer = document.querySelector('.animated-dots');
        const numDots = 20;

        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';

            dot.style.left = `${Math.random() * 100}vw`;
            dot.style.top = `${Math.random() * 100}vh`;
            dot.style.animationDuration = `${3 + Math.random() * 5}s`;
            dot.style.width = `${5 + Math.random() * 5}px`;
            dot.style.height = `${5 + Math.random() * 5}px`;

            dotsContainer.appendChild(dot);
        }
    }, []);

    return <div className="animated-dots"></div>;
};

export default AnimatedDots;
