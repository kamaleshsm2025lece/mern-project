import { useState } from 'react'

const Effects = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Effects: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Effects