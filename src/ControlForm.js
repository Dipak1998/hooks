import React, { useState } from 'react'

const ControlForm = () => {
  const [usr, setUsr] = useState()
  const [pwd, setPwd] = useState()
  const [userData, setUserData] = useState([])

  const submitForm = (e) => {
    e.preventDefault()

    const newEntry = { username: usr, password: pwd }
    console.log(newEntry)
    console.log(userData)
    setUserData([...userData, newEntry]) // [] => [{}]
    document.querySelectorAll('input')[0].value = ''
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Control Form</h1>
        <input
          type='text'
          placeholder='Enter Username'
          onChange={(e) => {
            console.log(e.target.value)
            setUsr(e.target.value)
          }}
        />
        <input
          type='password'
          placeholder='Enter Password'
          onChange={(e) => {
            console.log(e.target.value)
            setPwd(e.target.value)
          }}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <div className='userData'>
        {userData.map((data, key) => {
          return (
            <ul key={key}>
              <li>Username:{data.username}</li>
              <li>Password:{data.password}</li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default ControlForm
