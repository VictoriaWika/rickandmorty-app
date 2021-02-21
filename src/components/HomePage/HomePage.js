import AppHeader from '../AppHeader'
import './HomePage.css'

export default function HomePage({ hidden }) {
  return (
    <section hidden={hidden} className="HomePage">
      <AppHeader title={'Rick and Morty'} />
    </section>
  )
}
