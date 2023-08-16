import { Link, Outlet } from 'react-router-dom'

function Examples() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exemplos/declaratividade">Declaratividade</Link>
          </li>
          <li>
            <Link to="/exemplos/componentes">Componentes</Link>
          </li>
          <li>
            <Link to="/exemplos/estados">Estados</Link>
          </li>
          <li>
            <Link to="/exemplos/condicionais">Condicionais</Link>
          </li>
          <li>
            <Link to="/exemplos/efeitos">Efeitos</Link>
          </li>
          <li>
            <Link to="/exemplos/hooks">Hooks</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default Examples
