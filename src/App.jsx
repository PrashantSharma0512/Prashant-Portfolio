import { Outlet } from 'react-router-dom'
import Nav from './Component/Nav/Nav'
import Contact from './Component/Contact/Contact'

function App() {


  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full max-md:w-screen max-md:h-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Nav/>
      {/* <Contact/> */}
      <Outlet/>
    </>
  )
}

export default App
