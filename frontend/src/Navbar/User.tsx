import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { Link } from "react-router-dom"
import "./user.css"
// import {faCart} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { faEdit,faCartShopping,faCode, faBagShopping, faChevronDown } from "@fortawesome/free-solid-svg-icons"
function User() {
  const [open,setOpen] =useState(false)
  return (
    // _++++++++++++++ the navbar of the current user info and the dashboard of our user++++++++++++________++++++++++++++//
    <div className="first fixed top-0 z-50 bg-white flex justify-between w-full px-2 lg:py-1 items-center shadow-sm">
        <div className="flex items-center">
        <div className="flex items-center">
            <img src="use.jpg" alt="" className="w-16 h-16 rounded-full"/>
            <h2 className="mx-1 text-xl font-bold"><span>Anas</span><span>Dev </span> Institute</h2>
        </div>
        <div className="flex md:w-[340px] justify-between ms-8 font-medium mt-2">
          <h3>Tutoriels <FontAwesomeIcon icon={faChevronDown} className="text-sm"/></h3>
           <h3>Exercices <FontAwesomeIcon icon={faChevronDown} className="text-sm"/></h3>
           <h3>Certifications</h3>
        </div>
        </div>
        <div>
       <div className="flex md:w-[400px] justify-between items-center">
       <h3 >
          <FontAwesomeIcon icon={faCartShopping} className="mx-1 text-[#023f89]"/>
          Get Certified
           </h3>
            <h3>
              <FontAwesomeIcon icon={faCode} className="mx-1 text-[#023f89]"/>
              Spaces
           </h3>
            <h3>
             <FontAwesomeIcon icon={faBagShopping} className="mx-1 text-[#023f89]"/>
             Jobs
           </h3>
           <img src="/felix.jpg" alt="" onClick={()=>{setOpen(!open)}} className="rounded-full h-12 w-12"/>
       </div>
       {/* +++++++++++++++ the element of the navbar lets say our collapse navbar with the button _++++++++++++++++++++++++++++ */}
           <div className="absolute right-0 bg-gray-300 shadow-2xl md:rounded-lg text-white md:mx-2  p-4 mt-3 md:w-[400px] w-full" id={open?"ouvre":"ferme"}>
           <div className="flex justify-center my-3">
           <img src="/felix.jpg" alt=""  className="rounded-full w-32 h-32"/>
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
