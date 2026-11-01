import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Dashbord from './Components/Dashbord/Dashbord'
import Root from './Components/Root/Root'
import Users from './Components/Users/Users'
import Files from './Components/Files/Files'


const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
       index: true, 
       Component: Home
      },
      {
        path: 'dashbord',
        Component: Dashbord
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'files',
        Component: Files
      },
      {
        path: '*',
        element: <p className='text-center'>Not Found : 40004</p>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
