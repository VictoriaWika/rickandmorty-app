import './App.css'
import Card from './Card'
import { results } from './rickandmortyapi.json'

function App() {
  return (
    <div className="App">
      {results.map(
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
