import React, { useState } from 'react'

const ControlForm = () => {
  const [usr, setUsr] = useState()
  const [pwd, setPwd] = useState()
  const [userData, setUserData] = useState([])
  // const [isButtonClickAble, setButtonStatus] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()

    const newEntry = { username: usr, password: pwd }
    console.log(newEntry)
    console.log(userData)
    setUserData([...userData, newEntry]) // [] => [{}]
    // document.querySelectorAll('input')[0].value = ''
    setUsr('')
    setPwd('')
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Control Form</h1>
        <input
          type='text'
          placeholder='Enter Username'
          value={usr}
          onChange={(e) => {
            console.log(e.target.value)
            setUsr(e.target.value)
          }}
        />
        <input
          type='password'
          placeholder='Enter Password'
          value={pwd}
          onChange={(e) => {
            console.log(e.target.value)
            setPwd(e.target.value)
          }}
        />
        <div>
          {/* {usr !== 'undefined' ? setButtonStatus(true) : setButtonStatus(false)} */}
          <button type='submit' disabled={usr ? (pwd ? false : true) : true}>
            Submit
          </button>
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
