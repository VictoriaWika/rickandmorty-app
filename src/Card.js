import { useState } from 'react'
import './Button.css'
import './Card.css'

export default function Card({
  name,
  species,
  image,
  status,
  gender,
  origin,
  location,
}) {
  const icon = species === 'Human' ? '👨🏼' : '👽'
  const [isShowingDetails, setIsShowingDetails] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <section className="Card">
      <h2>{name}</h2>
      {icon}
      <p>{species}</p>
      <img src={image} alt="" />
      <button
        onClick={event => {
          console.log('Hello')
          event.stopPropagation()
          setIsClicked(!isClicked)
          setIsShowingDetails(!isShowingDetails)
        }}
        className="Button"
      >
        {isClicked ? 'Hide Details' : 'Show Details'}
      </button>
      <ul hidden={!isShowingDetails}>
        <li>Status: {status} </li>
        <li>Gender: {gender}</li>
        <li>Origin: {origin} </li>
        <li>Location: {location}</li>
      </ul>
    </section>
  )
}
