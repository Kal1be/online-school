import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function Sign() {
  return (
    <div>
        <Navbar/>
       <div className="md:mt-28 mt-20 md:flex justify-around p-2">
      <div>
      <h2 className="first md:text-4xl text-2xl font-bold my-2">Sign In into <span>Anas</span><span>Dev</span> Institute</h2>
       <p className="md:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro, doloribus facilis pariatur corrupti sunt omnis quia nisi 
        dolore aliquid dolores error repellat maiores? Temporibus quaerat
         ea unde itaque exercitationem omnis 
        aut ad natus optio, asperiores, delectus incidunt praesentium iure deleniti.</p>
        </div>
        <form action="" className="form md:w-[500px]">
         <div>
            <label htmlFor="email" className="block">Email</label>
            <input type="email" placeholder="enter your name" className="w-full border outline-none p-2 rounded-xl" />
         </div> 
         <div className="my-3">
            <label htmlFor="name" className="block">Password</label>
            <input type="password" placeholder="enter your password" className="w-full border outline-none p-2 rounded-xl"/>
         </div>
         <button type="submit" className="w-full p-2 bg-[#2e6c4a] text-white font-medium text-lg">Sign In</button>
        </form>
      
     
       </div>
       <Footer/>
    </div>
  )
}

export default Sign