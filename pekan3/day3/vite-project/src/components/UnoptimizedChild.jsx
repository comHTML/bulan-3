import React from 'react';


function UnoptimizedChild({ count }) {
  console.log('UnoptimizedChild di-render');
  return <p>Count (Unoptimized): {count}</p>;
}



export default UnoptimizedChild;


// function UnoptimizedChild({ count }) {
//   console.log('UnoptimizedChild di-render');
//   return <p>Count (Unoptimized): {count}</p>;
// }

// export default UnoptimizedChild;
