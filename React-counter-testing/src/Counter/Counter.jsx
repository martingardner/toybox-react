import { useState } from 'react'


function Counter({initCount}) {
  const [count, setCount] = useState(initCount || 0);

  const increment = () => {
    setCount( ()=> {
      return count + 1
    })
  };

  const decrement = () => {
    setCount( ()=> {
      return count - 1
    })
  }

  const reset = () => {
    setCount( initCount )
  }

  return (
    <>
      <h1 data-testid={`count-${initCount}`}>Count {count}</h1>
      <button onClick={ ()=> increment()}>Increment</button>
      <button onClick={ ()=> decrement()}>Decrement</button>
      <button onClick={ ()=> reset()}>Reset</button>
    </>
  )
}

export default Counter
