import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './component/container/SideBar'
import NavBar from './component/container/NavBar'
import AdminHomePage from './component/container/AdminHomePage'

function App() {
  
  const [isOpen, setIsOpen] = useState(true)

    
  function changeState(){
    setIsOpen(!isOpen)
  }
  return (
    <>
      <AdminHomePage change={changeState} estado={isOpen}/>
      <SideBar open={isOpen}></SideBar>
    </>
  )
}

export default App
