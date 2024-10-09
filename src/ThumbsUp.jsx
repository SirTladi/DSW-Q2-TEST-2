import React from 'react';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

const ThumbsUp = () => {
  const { count, getCounterProps } = useMyAnimatedCounter(0, 1);

  return (
    <div {...getCounterProps({ className: 'thumbs-up' })}>
      <span
        style={{
          fontSize: '3rem',
          color: count % 2 === 0 ? '#007BFF' : '#ccc',
          cursor: 'pointer',
        }}
      >
        👍
      </span>
    </div>
  );
};

export default ThumbsUp;
