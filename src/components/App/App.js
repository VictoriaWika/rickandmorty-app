import { useEffect, useState } from 'react'
import AppHeader from '../AppHeader'
import Button from '../Button'
import Card from '../Card'
import './App.css'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [userInput, setUserInput] = useState('')
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
      <AppHeader title={'Rick and Morty'} />
      <div className="input__container">
        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="Who's your favourite character?"
        />
      </div>
      <section className="Button__container">
        <Button
          onClick={() => setFilteredSpecies('all')}
          disabled={filteredSpecies === 'all'}
          text={'All'}
        />
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
          onClick={() => setFilteredSpecies('Others')}
          disabled={filteredSpecies === 'Others'}
          text={'Other Species'}
        />
      </section>
      {characters
        .filter(
          character =>
            filteredSpecies === 'all' ||
            filteredSpecies === 'Others' ||
            character.species === filteredSpecies
        )
        .filter(
          character =>
            filteredSpecies !== 'Others' ||
            (character.species !== 'Human' && character.species !== 'Alien')
        )
        .filter(character =>
          character.name.toLowerCase().includes(userInput.toLowerCase())
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
