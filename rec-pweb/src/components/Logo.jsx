export default function Logo({ claro = false }) {
  return (
    <div className={`logo ${claro ? 'logo-claro' : ''}`}>
      <span className="logo-marca">IA</span>
      <span className="logo-texto">DIGITAL PROJECT</span>
    </div>
  )
}
