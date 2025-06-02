import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import FullAbout from './component/FullAbout.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/fullAbout",
    element:<FullAbout/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
