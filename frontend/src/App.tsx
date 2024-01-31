import { useState,useEffect } from 'react'
// import Navbar from "./Navbar/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
// import Footer from "./Footer/Footer"
import './App.css'
import Register from "./register/Register"
import Sign from './sign/Sign'
// import User from './Navbar/User.'
import Authenticate from './pages/Authenticate'
// import Test from "./component/Test"

function App() {
  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },8000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader'>
     <div>
     <img src="/use.jpg" alt="" className='md:w-24 md:h-24 w-20 h-20 rounded-full border shadow-2xl' />
    
     </div>
       </div>
     )
  }

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/api/user" element={<Test/>}/> */}
          <Route path="/register" element={<Register/>}/>
          <Route path='/signin' element={<Sign/>}/>
          <Route path='/authentic' element={<Authenticate/>}/>
       </Routes>
      </div>
    </>
  )
}

export default App
