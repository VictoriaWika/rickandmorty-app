import './Button.css'

export default function Button({ text, onClick, disabled }) {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
