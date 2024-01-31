import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./user.css"
// import {faCart} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
function User() {
  const [open,setOpen] =useState(false)
  return (
    <div className="first fixed top-0 bg-white flex justify-between w-full px-2 lg:py-1 items-center shadow-sm">
        <div className="flex items-center">
            <img src="use.jpg" alt="" className="w-16 h-16 rounded-full"/>
            <h2 className="mx-1 text-xl font-bold"><span>Anas</span><span>Dev </span> Institute</h2>
        </div>
        <div>
           <h3>
    {/* <FontAwesomeIcon icon={faCart}/> */}
           </h3>
           <img src="/batha.jpg" alt="" onClick={()=>{setOpen(!open)}} className="rounded-full h-12 w-12"/>
           <div className="absolute right-0 bg-gray-300 shadow-2xl md:rounded-lg text-white md:mx-2  p-4 mt-3 md:w-[400px] w-full" id={open?"ouvre":"ferme"}>
           <div className="flex justify-center my-3">
           <img src="/batha.jpg" alt=""  className="rounded-full w-32 h-32"/>
           </div>
           <p className="text-center text-[#023f89] font-medium">Welcome: Kalibe Felix</p>
            <label htmlFor="name">Username</label>
            <p className="ele">Kalibe Felix Yahoulbo</p>
            <label htmlFor="name">Email</label>
            <p className="ele">yahoulbofelix@gmail.com</p>
            <label htmlFor="name">Course:</label>
            <p className="ele">CyberSecurity</p>
            <label htmlFor="name">Address</label>
            <p className="ele">Kaduna/Zaria/SabonGari LGA</p>
            <button className="bg-[#2e6c4a] text-white font-medium text-xl p-2 rounded-full w-full my-2">Edit <FontAwesomeIcon icon={faEdit}/></button>
           </div>
        </div>

    </div>
  )
}

export default User
