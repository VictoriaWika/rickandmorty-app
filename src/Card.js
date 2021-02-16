import './Card.css'

export default function Card({ name, species, image }) {
  const icon = species === 'Human' ? '👨🏼' : '👽'
  return (
    <section className="Card">
      <h2>{name}</h2>
      {icon}
      <p>{species}</p>
      <img src={image} alt="" />
    </section>
  )
}
