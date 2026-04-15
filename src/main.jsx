import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <h1>Home</h1>
    }, {
      path: '/about',
      element: <h1>About</h1>
    },
    {
      path: '/contact',
      element: <h1>Contact</h1>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
