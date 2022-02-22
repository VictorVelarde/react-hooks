// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName}) {
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
    console.log('state change causes rerender')
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name}/>
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return (
    <>
      <Greeting initialName={'Rob'}/>
      <Greeting initialName={'Elm'}/>
      <Greeting />
    </>
  )
}

export default App
