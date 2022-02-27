// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useStateOverLocalStorage(key, defaultValue) {
  const storedValue = window.localStorage.getItem(key)
  const [value, setValue] = React.useState(storedValue ? storedValue : defaultValue)

  React.useEffect(() => {
    window.localStorage.setItem(key, value)
  }, [key, value])
  
  return [value, setValue]
}


function Greeting({initialName = ''}) {
  const [name, setName] = useStateOverLocalStorage('name', initialName)

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
