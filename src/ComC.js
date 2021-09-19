import React from 'react'
import { FirstName } from './App'
const ComC = () => {
  return (
    <div>
      <h1>Component C</h1>
      <FirstName.Consumer>
        {(fname) => {
          return <h1>My name is {fname}</h1>
        }}
      </FirstName.Consumer>
    </div>
  )
}

export default ComC
