import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Feed from './paginas/feed/feed.jsx';
import Perfil from './paginas/profile/perfil.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Feed/>,
  },
  {
    path:"/perfil",
    element:<Perfil/>
  }
]);
function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
