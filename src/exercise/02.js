// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useStateOverLocalStorage(
  key,
  defaultValue,
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  console.log('calling hook')
  const storedValue = window.localStorage.getItem(key)
    ? deserialize(window.localStorage.getItem(key))
    : undefined

  const initialValue = storedValue
    ? storedValue
    : typeof defaultValue === 'function'
    ? defaultValue()
    : defaultValue

  const [value, setValue] = React.useState(initialValue)

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      // allow key renaming
      window.localStorage.removeItem(prevKey)
    }
    window.localStorage.setItem(key, serialize(value))
    prevKeyRef.current = key
  }, [key, value, serialize])

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
  return <Greeting initialName="Are you Bob?" />
}

export default App
