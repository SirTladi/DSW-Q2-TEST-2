import React from 'react';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

const StarRating = () => {
  const { count, getCounterProps } = useMyAnimatedCounter(0, 1);

  return (
    <div {...getCounterProps()}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          style={{
            color: i < count ? '#FFD700' : '#ccc',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
          onClick={() => getCounterProps().onClick(i + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
