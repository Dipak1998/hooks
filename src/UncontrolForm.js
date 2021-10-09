import React, { useRef, useState } from 'react'

const UncontrolForm = () => {
  const email = useRef('Dipak')
  const [userEmail, setUserEmail] = useState('')
  const submitUncon = (e) => {
    e.preventDefault()
    console.log(email.current.value)
    setUserEmail(email.current.value)
  }
  return (
    <div>
      <form onSubmit={submitUncon}>
        <h1>UncontrolForm</h1>
        <input type='text' placeholder='Enter Your Mail...' ref={email} />
        <div>
          <button type='submit'>Suscribe</button>
        </div>
      </form>
      <div>
        {userEmail ? (
          <p>Your {userEmail} email account is suscribed with xyz.com</p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default UncontrolForm
