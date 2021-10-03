import userEvent from '@testing-library/user-event'
import { React, useState, useReducer } from 'react'

var count = 0
const reducer = (state, action) => {
  console.log('State before action:', state, 'Action:', action)
  if (action.type === 'INCREMENT') {
    state += 5
  } else if (action.type === 'DECREMENT') {
    state -= 5
  }
  console.log('State after action:', state, 'Action:', action)
  return state
}
const ReducerHook = () => {
  //   const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, count)
  return (
    <div style={{ padding: '20px' }}>
      <h1>We are learning UseReducer Hooks</h1>
      <p>{state}</p>
      {/* without reuducer
      <p>Now count is after increment/decremet : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {/* with reuducer */}
      {/* <p>Now count is after increment/decremet : {count}</p> */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement by 5
      </button>
    </div>
  )
}

export default ReducerHook
