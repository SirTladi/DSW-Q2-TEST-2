import React from 'react';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

const SimpleCounter = () => {
  const { count, getCounterProps } = useMyAnimatedCounter(0, 1);
  return (
    <div {...getCounterProps({ className: 'counter' })}>
      <h1>{count}</h1>
    </div>
  );
};

export default SimpleCounter;
