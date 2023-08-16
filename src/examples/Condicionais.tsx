function Condicionais() {
  const mostrando = true

  return (
    <div>
      {/* Ternário */}
      {mostrando ? <p>Mostrando é verdadeiro</p> : <p>Mostrando é false</p>}

      {/* Usando && para só um caso, caso mostrando seja false nada é renderizado */}
      {mostrando && <p>Mostrando é verdadeiro</p>}

      {/* Usando ternário com CSS */}
      <p style={{ visibility: mostrando ? 'inherit' : 'hidden' }}>Texto</p>
    </div>
  )
}

export default Condicionais
