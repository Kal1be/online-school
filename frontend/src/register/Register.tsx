import Navbar from "../Navbar/Navbar"
import {useState,useEffect} from "react"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { redirect } from "react-router-dom"
// import {faPaper} from "@fortawesome/free-solid-svg-icons"
import axios from  "axios"
import "./register.css"
import Footer from "../Footer/Footer"
function Register() {
  const [data,setData]=useState([])
  const [name,setName]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit=async (e:any)=>{
e.preventDefault()
await axios.post("http://localhost:5000/api/user",{email,password})
.then(()=>{
  console.log("the data is succesfull to this endpoint")
 
})
.catch(err=>{console.log(err)})
redirect("/signin")
  }
  useEffect(()=>{
   axios.get("http://localhost:5000/api/user")
   .then(res=>setData(res.data))
  },[data])
  return (
   <div>
    <Navbar/>
     <div className="md:mt-28 mt-24 lg:flex justify-between md:px-12 px-3">
    <div className="">
    <h2 className="first md:text-4xl text-2xl font-medium my-2">Welcome to <span>Anas</span><span>Dev</span> Institute</h2>
        <p className="text-xl lg:w-[520px]">Please field all the detail before click on the submit button.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, hic!
         </p>
         <button className="bg-[#2e6c4a] py-2 md:px-20 px-10 text-xl text-white md:my-6 my-2">learn more</button>
         </div>
    <form className="form lg:w-[620px]" onSubmit={handleSubmit}>
     <div className="md:flex  my-3 justify-between">
      <div>
        <label htmlFor="name" className="block">Name</label>
        <input type="text" value={name} onChange={(e)=>{
        setName(e.target.value)
        }} placeholder="enter your name" className=" border outline-none md:w-72 w-full p-2 rounded-lg"/>
      </div>
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input type="email" placeholder="enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="md:w-72 w-full p-2 rounded-lg border outline-none"/>
      </div>
      
        </div>
        <div className="md:flex  my-3 justify-between">
      <div>
        <label htmlFor="name" className="block">Password</label>
        <input type="password" placeholder="password"  onChange={(e)=>{setPassword(e.target.value)}} value={password} className="md:w-72 w-full p-2 rounded-lg border outline-none" />
      </div>
      <div>
        <label htmlFor="name" className="block">Confirm Password</label>
        <input type="password" placeholder="confirm your password"   className="md:w-72 w-full p-2 rounded-lg border outline-none"/>
      </div>
      
        </div>

        <div className="my-2">
          <input type="checkbox" placeholder="checkbox"/> <span>Agree our condition {data.map((user:any)=>{return(<div key={user._id}>{user.email}</div>)})}</span>
          </div>
        <button type="submit" className="border w-full mt-3 py-2 rounded-xl bg-[#023f89] text-xl text-white font-medium">Submit</button>
     </form>
    </div>
        
   <Footer/>
   </div>
  )
}

export default Register
