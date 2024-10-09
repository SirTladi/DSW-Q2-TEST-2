import React from 'react';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

const ProgressRing = () => {
  const { count, getCounterProps } = useMyAnimatedCounter(0, 10, 100);

  return (
    <div {...getCounterProps({ className: 'progress-ring' })}>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: `conic-gradient(#007BFF ${count * 3.6}deg, #ccc 0deg)`,           transition: 'background 0.3s ease',
        }}
      />
      <p>{Math.min(count, 100)}%</p>
    </div>
  );
};

export default ProgressRing;
