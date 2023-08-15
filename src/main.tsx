import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.tsx'
import Examples from './pages/Examples.tsx'

import './main.css'
import Declaratividade from './examples/Declaratividade.tsx'
import Raiz from './examples/Componente.tsx'
import Estados from './examples/Estados.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/examples',
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
