import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './assets/scss/global.css'

import Register from "./pages/Register/Register.jsx";
const router = createBrowserRouter([
  {
    path: '/register',
    element:  <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
