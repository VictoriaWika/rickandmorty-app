import { useEffect, useState } from 'react'
import './App.css'
import Card from '../Card/Card'

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getAllCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next
        nextUrl && getAllCharacters(nextUrl)
      })
  }

  return (
    <div className="App">
      {characters.map(
        ({ name, species, image, status, gender, origin, location, id }) => (
          <Card
            key={id}
            name={name}
            species={species}
            image={image}
            status={status}
            gender={gender}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </div>
  )
}

export default App
