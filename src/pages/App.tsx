import { Link } from 'react-router-dom'
import Desafio1 from '../components/desafio1'
import Desafio2 from '../components/desafio2'

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/exemplos">Exemplos</Link>
          </li>
        </ul>
      </nav>
      <section style={{ border: '1px solid', borderRadius: '8px' }}>
        <details>
          <summary>Desafio 1</summary>
          <p>
            Crie um componente na pasta <code>components</code> com o nome{' '}
            <code>desafio1.tsx</code>. Então use um estado booleano para
            controlar a exibição de uma mensagem na tela. Use um botão para
            alterar o estado. Por fim use o componente aqui
          </p>
        </details>

        <Desafio1 />
      </section>

      <section
        style={{
          border: '1px solid',
          borderRadius: '8px',
          padding: '2rem 1rem',
        }}
      >
        <details>
          <summary>Desafio 2</summary>
          <p>
            Crie um componente na pasta <code>components</code> com o nome{' '}
            <code>desafio2.tsx</code>. Crie um estado que possa ser mudado pelo
            usuário, use o <code>useEffect</code> para fazer logar o estado
            atual no console.
          </p>
        </details>

        <Desafio2></Desafio2>
      </section>
      <Link to="/velha">Desafio final</Link>
    </main>
  )
}

export default App
