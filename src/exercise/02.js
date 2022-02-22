// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const storedName = window.localStorage.getItem('name')
  const [name, setName] = React.useState(storedName ? storedName : initialName)

  React.useEffect(() => {
    window.localStorage.setItem('name', 'Stored: ' + name)
  }, [name])
  

  function handleChange(event) {
    event.preventDefault()
    const name = event.target.value
    setName(name)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName='Are you Bob?' />
}

export default App
