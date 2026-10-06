export default function Titulo({ leve, forte }) {
  return (
    <h1 className="titulo">
      <span>{leve}</span> <strong>{forte}</strong>
    </h1>
  )
}
