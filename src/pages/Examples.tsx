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
            <Link to="/examples/declaratividade">Declaratividade</Link>
          </li>
          <li>
            <Link to="/examples/componentes">Componentes</Link>
          </li>
          <li>
            <Link to="/examples/estados">Estados</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default Examples
