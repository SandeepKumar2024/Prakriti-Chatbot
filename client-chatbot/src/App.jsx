import { useEffect, useState } from 'react'
import './app.scss'
import back from "./img/new.jpg"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import Start from './Start';
const router =  createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/start",
    element: <Start />
  }
])


const App =() =>{

  return(
    <div className="app">
    <RouterProvider router={router} />
   </div>
  )


  
}

export default App
