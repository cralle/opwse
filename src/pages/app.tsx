import React from "react"
import { RandomPerson } from "../modules/RandomPerson"
import { Person } from "../modules/Person"
import { Router } from "@reach/router"

const App = () => {
  return (
    <Router>
      <RandomPerson path="/app/random-person/:results" />
      <Person path="/app/person/:results" />
    </Router>
  )
}

export default App
