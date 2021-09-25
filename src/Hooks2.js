import React, { useState, useEffect } from 'react'
import './Hooks.css'

const Hooks2 = () => {
  console.log('I am component')
  // define the state
  var [count, setCount] = useState(0)
  var [users, setUser] = useState()
  var [myData, setMyData] = useState({
    name: 'Dipak',
    age: 23,
    degree: 'B.Tech',
  })
  //   console.log(useState())
  const modifyTitel = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    document.title = `You clicked ${count} times` //  hooks 0 hooks0
  })
  useEffect(() => {
    console.log('I am useEffect')
    // setCount(count + 1)
    // update the title of document

    // invoke the fetchUser function

    fetchUser()
  }, [])
  // fetchDataFromServer
  const fetchUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUser(data) //  user = data
      })
  }
  const updateMyData = () => {
    // setMyData({ name: 'Dipu' })
    setMyData({ ...myData, name: 'Rafi', age: 19, degree: 'High School' }) // {previous data, newdata}
  }

  return (
    <div className='hooks'>
      <h1>We are Learning useEffect</h1>
      {/* <p> Count Value is : {count}</p> */}
      <button onClick={modifyTitel}>
        Change the title count //// The title is : {document.title}
      </button>

      <div className='cards'>
        {users
          ? users.map((user) => {
              // [{},..... ,{}]
              return (
                <div className='card__item'>
                  <p>{user.id}</p>
                  <h1>{user.name}</h1>
                </div>
              )
            })
          : ''}
      </div>

      <div>
        {myData ? (
          <>
            <h1> My Name is : {myData.name}</h1>
            <h3>My age is :{myData.age}</h3>
            <h3>My Degree: {myData.degree}</h3>
            <button onClick={updateMyData}>Update Details</button>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Hooks2
