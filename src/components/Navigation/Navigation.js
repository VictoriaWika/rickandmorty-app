import Button from '../Button'
import './Navigation.css'

export default function Navigation({ onNavigate }) {
  return (
    <nav className="Navigation">
      <Button text={'Home'} onClick={() => onNavigate('HomePage')} />
      <Button text={'Characters'} onClick={() => onNavigate('CharacterPage')} />
    </nav>
  )
}
