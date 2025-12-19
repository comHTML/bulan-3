import { useState } from 'react'
import OptimizedChild from './OptimizedChild'
import UnoptimizedChild from './UnoptimizedChild'

function ParentComponent() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  return (
    <div>
      <h2>React.memo Demo</h2>

      <p>Count: {count}</p>
      <p>Other: {other}</p>

      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <button onClick={() => setOther(other + 1)}>Tambah Other</button>

      <hr />

      <UnoptimizedChild count={count} />
      <OptimizedChild count={count} />
    </div>
  )
}

export default ParentComponent
