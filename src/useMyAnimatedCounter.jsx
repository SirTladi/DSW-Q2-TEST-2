import { useState, useEffect } from 'react';

export const useMyAnimatedCounter = (initialValue = 0, increment = 10, max = 100) => {
  const [count, setCount] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    if (!isAnimating && count < max) {
      setIsAnimating(true);
      setCount((prev) => Math.min(prev + increment, max));
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const getCounterProps = (props = {}) => ({
    ...props,
    onClick: handleIncrement,
    style: {
      ...props.style,
      transition: 'transform 0.3s ease',
      transform: isAnimating ? 'scale(1.3)' : 'scale(1)',
    },
  });

  return { count, getCounterProps };
};
