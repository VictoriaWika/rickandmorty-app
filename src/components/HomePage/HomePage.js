import { useState } from 'react'
import AppHeader from '../AppHeader'
import Button from '../Button'
import './HomePage.css'

export default function HomePage({ characters, hidden }) {
  const [randomNumber, setRandomNumber] = useState()

  // function getRandomCharacter() {
  //   setRandomNumber(Math.floor(Math.random() * (characters.length - 1 + 1)))
  // }

  return (
    <section hidden={hidden} className="HomePage">
      <AppHeader title={'Rick and Morty'} />
      <section className="m-t60">
        {/* <Button
          onClick={() => {
            getRandomCharacter()
          }}
          text={'Random Character'}
        /> */}
        <Button
          onClick={() => {
            setRandomNumber(
              Math.floor(Math.random() * (characters.length - 1 + 1))
            )
            console.log(randomNumber)
          }}
          text={'Random Character'}
        />
      </section>
      {characters
        .map(({ name, id }) => {
          return (
            <section key={id}>
              {id}...
              {name}
            </section>
          )
        })
        .filter(character => character.id === { randomNumber })}
    </section>
  )
}
