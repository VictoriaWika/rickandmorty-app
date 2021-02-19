import { useEffect, useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [filteredSpecies, setFilteredSpecies] = useState('all')

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
      <section className="buttonContainer">
        <Button
          onClick={() => setFilteredSpecies('Human')}
          disabled={filteredSpecies === 'Human'}
          text={'Human'}
        />
        <Button
          onClick={() => setFilteredSpecies('Alien')}
          disabled={filteredSpecies === 'Alien'}
          text={'Alien'}
        />
        <Button
          onClick={() => setFilteredSpecies('all')}
          disabled={filteredSpecies === 'all'}
          text={'All'}
        />
      </section>
      {characters
        .filter(
          character =>
            filteredSpecies === 'all' || character.species === filteredSpecies
        )
        .map(
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
