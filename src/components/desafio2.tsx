import { useEffect, useState } from 'react'

function Desafio2() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log(counter)
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

export default Desafio2
