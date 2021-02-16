import Card from './Card'
import { results } from './rickandmortyapi.json'

function App() {
  return (
    <div className="App">
      {results.map(({ name, species, image, id }) => (
        <Card key={id} name={name} species={species} image={image} />
      ))}
    </div>
  )
}

export default App
