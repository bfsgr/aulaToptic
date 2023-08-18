import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface QuadradoProps {
  selected?: 'x' | 'o'
  onClick: () => void
}

function calcularGanhador(grid: Array<'x' | 'o' | undefined>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a]
    }
  }
  return undefined
}

function Quadrado({ selected, onClick }: QuadradoProps) {
  return (
    <div className="square" onClick={onClick}>
      {selected}
    </div>
  )
}

function JogoDaVelha() {
  const [grid, setGrid] = useState<Array<'x' | 'o' | undefined>>(
    Array(9).fill(undefined),
  )

  const [turn, setTurn] = useState<'x' | 'o'>('x')

  const [ganhador, setGanhador] = useState<'x' | 'o' | 'velha' | undefined>(
    undefined,
  )

  function handleClick(index: number) {
    if (grid[index] !== undefined || ganhador !== undefined) {
      return
    }

    grid[index] = turn

    setGrid([...grid])

    setTurn((t) => {
      if (t === 'x') {
        return 'o'
      }

      return 'x'
    })
  }

  function reiniciar() {
    setGrid(Array(9).fill(undefined))
    setTurn('x')
    setGanhador(undefined)
  }

  useEffect(() => {
    const result = calcularGanhador(grid)

    if (result) {
      setGanhador(result)
      return
    }

    if (grid.every((sq) => sq !== undefined)) {
      setGanhador('velha')
    }
  }, [turn, grid])

  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exemplos">Exemplos</Link>
          </li>
        </ul>
      </nav>
      <details>
        <summary>Dicas</summary>
        <ul>
          <li>
            Crie um estado para guardar os items, você pode fazer um estado por
            quadrado, por linha, ou guardar tudo em um único estado
          </li>
          <li>
            Use um useEffect para verificar se há um vencedor ou se deu velha
          </li>
          <li>Use um alert() para dizer quando o jogo acabar e reiniciar</li>
        </ul>
      </details>
      <dialog open={ganhador !== undefined}>
        {ganhador !== 'velha' ? (
          <p>{ganhador?.toUpperCase()} ganhou!</p>
        ) : (
          <p>Deu velha :(</p>
        )}
        <button style={{ width: '100%' }} onClick={reiniciar}>
          Reiniciar
        </button>
      </dialog>
      <p>
        Turno: <strong>{turn.toUpperCase()}</strong>
      </p>
      <main className="velha">
        <div className="row">
          <Quadrado onClick={() => handleClick(0)} selected={grid[0]} />
          <Quadrado onClick={() => handleClick(1)} selected={grid[1]} />
          <Quadrado onClick={() => handleClick(2)} selected={grid[2]} />
        </div>
        <div className="row">
          <Quadrado onClick={() => handleClick(3)} selected={grid[3]} />
          <Quadrado onClick={() => handleClick(4)} selected={grid[4]} />
          <Quadrado onClick={() => handleClick(5)} selected={grid[5]} />
        </div>
        <div className="row">
          <Quadrado onClick={() => handleClick(6)} selected={grid[6]} />
          <Quadrado onClick={() => handleClick(7)} selected={grid[7]} />
          <Quadrado onClick={() => handleClick(8)} selected={grid[8]} />
        </div>
      </main>
    </section>
  )
}

export default JogoDaVelha
