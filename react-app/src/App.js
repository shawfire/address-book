import React, { useState } from 'react'
import './App.css'
import { EditAddress } from './EditAddress'

function App() {
  const [address, setAddress] = useState({
    firstName: 'a',
  })
  const { firstName } = address
  return (
    <div className="App">
      <EditAddress address={address} setAddress={setAddress} />
      <div>
        <div>firstName: {firstName}</div>
      </div>
    </div>
  )
}

export default App
