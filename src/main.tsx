import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App'
import Examples from './pages/Examples'

import './main.css'
import Declaratividade from './examples/Declaratividade'
import Raiz from './examples/Componente'
import Estados from './examples/Estados'
import Condicionais from './examples/Condicionais'
import Efeitos from './examples/Efeitos'
import Hooks from './examples/Hooks'
import JogoDaVelha from './pages/Velha'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'velha',
    element: <JogoDaVelha />,
  },
  {
    path: '/exemplos',
    element: <Examples />,
    children: [
      {
        path: 'declaratividade',
        element: <Declaratividade />,
      },
      {
        path: 'componentes',
        element: <Raiz />,
      },
      {
        path: 'estados',
        element: <Estados />,
      },
      {
        path: 'condicionais',
        element: <Condicionais />,
      },
      {
        path: 'efeitos',
        element: <Efeitos />,
      },
      {
        path: 'hooks',
        element: <Hooks />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
