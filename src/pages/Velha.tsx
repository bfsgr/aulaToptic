import { Link } from 'react-router-dom'

interface QuadradoProps {
  selected?: 'x' | 'o'
  onClick: () => void
}

function Quadrado({ selected, onClick }: QuadradoProps) {
  return (
    <div className="square" onClick={onClick}>
      {selected}
    </div>
  )
}

function JogoDaVelha() {
  function handleClick() {
    console.log('Faça algo quando houver um clique em um quadrado')
  }

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
      <main className="velha">
        <div className="row">
          <Quadrado onClick={handleClick} selected="x" />
          <Quadrado onClick={handleClick} selected="o" />
          <Quadrado onClick={handleClick} selected="o" />
        </div>
        <div className="row">
          <Quadrado onClick={handleClick} />
          <Quadrado onClick={handleClick} />
          <Quadrado onClick={handleClick} />
        </div>
        <div className="row">
          <Quadrado onClick={handleClick} />
          <Quadrado onClick={handleClick} />
          <Quadrado onClick={handleClick} />
        </div>
      </main>
    </section>
  )
}

export default JogoDaVelha
