import { Outlet } from 'react-router-dom'
import Nav from './Component/Nav/Nav'
import Contact from './Component/Contact/Contact'
import { Fragment } from 'react'
import Hero from './Component/Home/Hero'
import About from './Component/Home/About'
import Techno from './Component/Home/Techno'
import Project from './Component/Home/Project'

function App() {


  return (
    <div className='w-screen h-auto relative selection:bg-blue-500 '>
      <div class="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className='w-full h-full p-10'>
        {/* <Nav />
        <br />
        <br />
        <Outlet/>
        <Techno/> */}
        <Project/>
       

      </div>
    </div>
  )
}

export default App
