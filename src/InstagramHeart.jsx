import React from 'react';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

const InstagramHeart = () => {
  const { count, getCounterProps } = useMyAnimatedCounter(0, 1);

  return (
    <div {...getCounterProps({ className: 'heart' })}>
      <span
        style={{
          fontSize: '3rem',
          color: count % 2 === 0 ? '#e25555' : '#ccc',
          cursor: 'pointer',
        }}
      >
        ♥
      </span>
    </div>
  );
};

export default InstagramHeart;
