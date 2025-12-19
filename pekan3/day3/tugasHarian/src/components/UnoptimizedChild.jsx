function UnoptimizedChild({ count }) {
  console.log('UnoptimizedChild render')
  return <p>Unoptimized Count: {count}</p>
}

export default UnoptimizedChild
