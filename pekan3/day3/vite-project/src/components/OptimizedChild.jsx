import React from 'react';

function OptimizedChild({ count }) {
  console.log('OptimizedChild di-render');
  return <p>Count (Optimized): {count}</p>;
}

export default React.memo(OptimizedChild);
