import { useState } from 'react'
import Button from '../Button/Button'
import './Card.css'

import { ReactComponent as HumanSvg } from '../../human.svg'
import { ReactComponent as AlienSvg } from '../../alien.svg'

export default function Card({
  name,
  species,
  image,
  status,
  gender,
  origin,
  location,
}) {
  const human = <HumanSvg />
  const alien = <AlienSvg />
  const icon = species === 'Human' ? human : alien
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  return (
    <section className="Card">
      <h2>{name}</h2>
      <span>{icon}</span>
      <p>{species}</p>
      <img src={image} alt="" />
      <Button
        title={isShowingDetails ? 'Hide Details' : 'Show Details'}
        onClick={() => setIsShowingDetails(!isShowingDetails)}
      />
      <ul hidden={!isShowingDetails}>
        <li>Status: {status} </li>
        <li>Gender: {gender}</li>
        <li>Origin: {origin} </li>
        <li>Location: {location}</li>
      </ul>
    </section>
  )
}
