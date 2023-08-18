import { useState } from 'react'

function Desafio1() {
  const [bool, setBool] = useState(false)

  return (
    <div>
      <button onClick={() => setBool(!bool)}>Mudar</button>
      {bool == true && <p>Isso é um componente simples</p>}
    </div>
  )
}

export default Desafio1
