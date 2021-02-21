import { useEffect, useState } from 'react'
import CharacterPage from '../CharacterPage'
import HomePage from '../HomePage'
import Navigation from '../Navigation'
import './App.css'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState('HomePage')

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
      <HomePage characters={characters} hidden={currentPage !== 'HomePage'} />
      <CharacterPage
        hidden={currentPage !== 'CharacterPage'}
        characters={characters}
      />
      <Navigation onNavigate={setCurrentPage} />
    </div>
  )
}
