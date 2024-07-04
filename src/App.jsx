import { Outlet } from 'react-router-dom'
import Nav from './Component/Nav/Nav'
import Contact from './Component/Contact/Contact'
import { Fragment } from 'react'
import Hero from './Component/Home/Hero'

function App() {


  return (
    <div className='w-screen h-auto relative'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className='w-full h-full p-4 '>
        <Nav />
        <br />
        <br />
        <Hero/>
        {/* <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact /> */}

      </div>

      <Outlet />
    </div>
  )
}

export default App
