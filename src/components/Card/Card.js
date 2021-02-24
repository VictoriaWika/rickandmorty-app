import { useState } from 'react'
import Button from '../Button'
import './Card.css'

import { ReactComponent as HumanSVG } from '../../icons/human.svg'
import { ReactComponent as AlienSVG } from '../../icons/alien.svg'
import { ReactComponent as LikeSVG } from '../../icons/like.svg'
import { ReactComponent as UnlikeSVG } from '../../icons/unlike.svg'

export default function Card({
  name,
  id,
  species,
  image,
  status,
  gender,
  origin,
  location,
  episode,
}) {
  const human = <HumanSVG />
  const alien = <AlienSVG />
  const like = <LikeSVG className="Card__like" />
  const unlike = <UnlikeSVG className="Card__like" />
  const icon = species === 'Human' ? human : alien
  const [isShowingDetails, setIsShowingDetails] = useState(false)
  const [likedCharacters, setLikedCharacters] = useState([])

  function likeCharacter(currentId) {
    let newArray

    if (likedCharacters.includes(currentId)) {
      newArray = likedCharacters.filter(id => id !== currentId)
    } else {
      newArray = [...likedCharacters, currentId]
    }

    setLikedCharacters(newArray)
  }

  return (
    <section className="Card">
      <h2>{name}</h2>
      <span onClick={() => likeCharacter(id)}>
        {likedCharacters.includes(id) ? like : unlike}
      </span>
      <p>{species}</p>
      <img src={image} alt="" />
      <section className="Card__button-container">
        <span className="icon">{icon}</span>
        <Button
          className="Card__button"
          text={isShowingDetails ? 'Hide Details' : 'Show Details'}
          onClick={() => setIsShowingDetails(!isShowingDetails)}
        />
      </section>
      <ul hidden={!isShowingDetails}>
        <li>Status: {status} </li>
        <li>Gender: {gender}</li>
        <li>Origin: {origin} </li>
        <li>Location: {location}</li>
        <li>Episode Count: {episode.length}</li>
      </ul>
    </section>
  )
}
