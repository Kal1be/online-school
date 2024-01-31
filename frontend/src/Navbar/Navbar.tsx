import {useState} from "react"
import {Link} from "react-router-dom"
import "./navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {FaFacebook,faWhatsapp,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faBars,faClose} from "@fortawesome/free-solid-svg-icons"
function Navbar() {
  const [open,setOpen] =useState(false)
  return (
    <div className="first fixed top-0 bg-white flex justify-between w-full px-2 lg:py-2 items-center shadow-sm">
        <div className="flex items-center">
            <img src="use.jpg" alt="" className="w-16 h-16 rounded-full"/>
            <h2 className="mx-1 text-xl font-bold"><span>Anas</span><span>Dev </span> Institute</h2>
        </div>
        <div>
            <ul className="lg:flex items-center justify-between lg:w-[700px] text-lg font-bold" id={open?"open":"close"}>
          <FontAwesomeIcon icon={faClose} className="flex m-2 absolute justify-end px-2 py-1 right-0 text-2xl bg-white"  id="icon" onClick={()=>{
            setOpen(!open)
          }}/>
                <li><Link to="/">Home</Link></li>
                <li>Ressources</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li className="border px-5 py-1 rounded-lg bg-[#023f89] text-white text-center"><Link to="/register">Register</Link></li>
                <li className="border px-5 py-1 rounded-lg bg-[#2e6c4a] text-white text-center"><Link to="/signin">Sign In</Link></li>
            </ul>
        </div>
        <FontAwesomeIcon icon={faBars} className="text-2xl text-white ms-6 px-2 py-2 bg-slate-900" id="icon" onClick={()=>{
          setOpen(!open)
        }}/>
      
    </div>
  )
}

export default Navbar
