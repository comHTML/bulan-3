import React from 'react'

function OptimizedChild({ count }) {
  console.log('OptimizedChild render')
  return <p>Optimized Count: {count}</p>
}

export default React.memo(OptimizedChild)
