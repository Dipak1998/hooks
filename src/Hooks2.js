import React, { useState, useEffect } from 'react'

const Hooks2 = () => {
  console.log('I am component')
  // define the state
  var [count, setCount] = useState(0)
  var [user, setUser] = useState()
  //   console.log(useState())

  useEffect(() => {
    console.log('I am useEffect')
    // setCount(count + 1)
  })
  // fetchDataFromServer

  return (
    <div>
      <h1>We are Learning useEffect</h1>
      <p> Count Value is : {count}</p>
    </div>
  )
}

export default Hooks2
