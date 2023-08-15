import { useState } from 'react'

function Declaratividade() {
  const [isAdmin, setIsAdmin] = useState(false)

  if (isAdmin) {
    return (
      <div>
        <p>Você é um usuário administrador!</p>
        <button onClick={() => setIsAdmin(false)}>Virar usuário comum</button>
      </div>
    )
  }

  return (
    <div>
      <p>Você é um usuário comum.</p>
      <button onClick={() => setIsAdmin(true)}>Virar administrador</button>
    </div>
  )
}

export default Declaratividade
