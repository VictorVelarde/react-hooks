// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal() {
  const [animal, setAnimal] = React.useState('')

  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      />
      <Display animal={animal} />
    </div>
  )
}

function Display({animal}) {
  return <div>{`Hey you love ${animal}`}</div>
}

function App() {
  // 🐨 add a useState for the animal

  return (
    <form>
      <Name />
      <FavoriteAnimal />
    </form>
  )
}

export default App
