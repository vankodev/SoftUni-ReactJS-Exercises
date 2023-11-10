import {useState} from 'react'

export default function Counter(props) {
  const [count, setCount] = useState(0)

  const incrementCounterHandler = () => {
    setCount(oldValue => oldValue + 1)
  }

  const decrementCounterHandler = () => {
    setCount(oldValue => oldValue - 1)
  }

  const clearCounterHandler = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCounterHandler}>+</button>
      <button onClick={decrementCounterHandler}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
    </div>
  )
}