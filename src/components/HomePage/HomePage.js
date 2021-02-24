import AppHeader from '../AppHeader'
import Button from '../Button'
import './HomePage.css'

export default function HomePage({ characters, hidden, filterRandom, data }) {
  return (
    <section hidden={hidden} className="HomePage">
      <AppHeader title={'Rick and Morty'} />
      <section className="m-t40">
        <Button
          onClick={() => filterRandom(characters)}
          text={'Show Random Character'}
        />
      </section>
      {data.map(
        ({
          name,
          species,
          image,
          status,
          gender,
          origin,
          location,
          episode,
          id,
        }) => {
          return (
            <section className="RandomCharacter" key={id}>
              <h2>{name}</h2>
              <p>{species}</p>
              <img src={image} alt="" />
              <ul>
                <li>Status: {status} </li>
                <li>Gender: {gender}</li>
                <li>Origin: {origin.name} </li>
                <li>Location: {location.name}</li>
                <li>Episode Count: {episode.length}</li>
              </ul>
            </section>
          )
        }
      )}
    </section>
  )
}
