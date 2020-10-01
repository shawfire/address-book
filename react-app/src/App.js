import React, { useState } from "react"
import "./App.css"
import { EditAddress } from "./EditAddress"
// import DateForm from "./DateForm"

function App() {
  const [address, setAddress] = useState({
    firstName: "a",
    dob: new Date(),
  })
  const { firstName, dob } = address
  return (
    <div className="App">
      <div>
        <EditAddress address={address} setAddress={setAddress} />{" "}
      </div>{" "}
      <hr />
      <div>
        <div> firstName: {firstName} </div> <div> dob: {dob.toString()} </div>{" "}
      </div>{" "}
      <hr />
      {/* <DateForm /> */}
    </div>
  )
}

export default App
