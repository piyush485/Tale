import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import News from './components/News.jsx'
import About from './components/About.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const pageSize = 10;

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <News key='general' pageSize={pageSize} country={'in'} category={'general'} />
      },
      {
        path: "/home",
        element: <News key='general' pageSize={pageSize} country={'in'} category={'general'} />
      },
      {
        path: "/business",
        element: <News key='business' pageSize={pageSize} country={'in'} category={'business'} />
      },
      {
        path: "/entertainment",
        element: <News key='geentertainmentneral' pageSize={pageSize} country={'in'} category={'entertainment'} />
      },
      {
        path: "/health",
        element: <News key='health'  pageSize={pageSize} country={'in'} category={'health'} />
      },
      {
        path: "/science",
        element: <News key='science' pageSize={pageSize} country={'in'} category={'science'} />
      },
      {
        path: "/sports",
        element: <News key='sports'  pageSize={pageSize} country={'in'} category={'sports'} />
      },
      {
        path: "/technology",
        element: <News key='technology'  pageSize={pageSize} country={'in'} category={'technology'} />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
