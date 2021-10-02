import React, { createContext } from 'react'
import './App.css'
import ComA from './ComA'
import ComC from './ComC'
import Hooks from './Hooks'
import Hooks2 from './Hooks2'
import ReducerHook from './ReducerHook'
// create context

const FirstName = createContext()

function App() {
  return (
    <div className='App'>
      {/* <h1>Hello, We are learning contect api</h1>
      <FirstName.Provider value={'Dipak'}>
        <ComC />
      </FirstName.Provider>
      <ComA /> */}
      {/* <Hooks /> */}
      {/* <Hooks2 /> */}
      <ReducerHook />
    </div>
  )
}

export default App

export { FirstName }
