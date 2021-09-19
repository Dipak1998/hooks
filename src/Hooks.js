import React, { useState } from 'react'
import './Hooks.css'

const Hooks = () => {
  // const user_data = {
  //   name: 'Peter',
  //   email: 'peter03@gmail.com',
  //   contactNumber: '7955890123',
  // }
  // useState : to define a state
  var [count, setCount] = useState(0)
  var [theme, setTheme] = useState('dark theme')
  var [toggle, setToggle] = useState(false)
  var [user, setUser] = useState({
    name: 'Peter',
    email: 'peter03@gmail.com',
    contactNumber: '7955890123',
  })

  const increaseCount = () => {
    setCount(count + 1) // 0 +1 = 1 , 1+1 = 2
    console.log('Clicked ...')
  }
  //   to change the theme
  const changeTheme = () => {
    setToggle(!toggle)
    if (toggle) {
      setTheme('dark theme')
    } else {
      setTheme('light theme')
    }
  }
  // udpate user details
  const updateUserDetails = () => {
    setUser({
      name: 'Peter',
      email: 'peterparker@gmail.com',
      contact: 89562626265,
    })
    // setUser([
    //   ...user_data,
    //   {
    //     name: 'Peter Parker',
    //     email: 'peterparker@gmail.com',
    //   },
    // ])
  }

  return (
    <>
      <div className='user__details'>
        <h1> User Details</h1>
        <div className='user'>
          <h2>Name:{user.name}</h2>
          <p>Email:{user.email} </p>
          <p>Contact Number:{user.contactNumber}</p>
        </div>
        {/* {user.map((user, key) => {
          return (
            <div className='user' key={key}>
              <h2>Name:{user.name}</h2>
              <p>Email:{user.email} </p>
              <p>Contact Number:{user.contactNumber}</p>
            </div>
          )
        })} */}
      </div>
      <div className={toggle ? 'dark--theme hooks' : 'light-theme hooks'}>
        <h1> We are Learning Hooks </h1>

        <p> Count Value is : {count}</p>
        <button onClick={increaseCount}>Click to Increse Count</button>
        <button onClick={changeTheme}>{theme}</button>
        <button onClick={updateUserDetails}>Update the User</button>
      </div>
    </>
  )
}

export default Hooks

/* 
Rules for Hooks

1. Call every time hooks on top of after  decalaration of the component function
2.Only call the hooks in react function component or react hooks componet

// const testFunc = () => {
//   var [test, setTest] = useState('Test')
// } 
// it's show error
we cant't use hooks in condition, loops or nested function
*/
