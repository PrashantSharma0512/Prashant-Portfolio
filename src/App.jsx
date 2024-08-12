import { Outlet } from 'react-router-dom'
import Nav from './Component/Nav/Nav'

function App() {


  return (
    <div className='w-screen h-auto relative select-none'>
      <div class="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
     


      <div className='w-full h-full p-10'>
        <Nav />
        <br />
        <br />
        <Outlet />


      </div>
      <center className=' text-white bg-zinc-600'>Thank You Visiting My Portfolio</center>
    </div>
  )
}

export default App
