import { useState } from 'react'

function Estados() {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('')

  return (
    <div>
      <section>
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
      </section>
      <section>
        <p>Entrada do usuário: "{text}"</p>
        <input value={text} onChange={(ev) => setText(ev.target.value)} />
      </section>
    </div>
  )
}

export default Estados
