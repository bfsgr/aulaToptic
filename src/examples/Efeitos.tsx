import { useEffect, useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `Contador: ${counter}`

    return () => {
      document.title = 'Aula de tópicos'
    }
  }, [counter])

  return (
    <div>
      <p>Contador: {counter}</p>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button
          style={{ marginLeft: '8px' }}
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      </div>
    </div>
  )
}

function Efeitos() {
  const [show, setShow] = useState(false)

  return (
    <div>
      {show && <Counter />}
      <button onClick={() => setShow(!show)}>Mostrar/remover contador</button>
    </div>
  )
}

export default Efeitos
