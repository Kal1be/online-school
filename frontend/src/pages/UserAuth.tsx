import {useState,useEffect} from 'react'

function UserAuth() {
  const [datas,setData] = useState("Kalibe")
  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },7000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader'>
     <div>
     <img src="/use.jpg" alt="" className='md:w-20 md:h-20 w-20 h-20 rounded-full border shadow-2xl' />
    <span>Please Wait</span>
     </div>
       </div>
     )
  }

  return (
    <div>
         <div className="mt-28 md:mx-10 px-2">
        <h3 className="text-4xl font-bold mx-2">Welcome {datas}</h3>
        <div className="flex justify-center w-full mx-2 border h-[50vh] bg-gray-300 my-4">
          <div></div>
        </div>
{/* +_______+++++++++++++++++++++ the user authentication +++++++++++++++++++++++++++++++++= */}

      <div className="md:flex">
        
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/python.jpeg" alt="" className="w-28"/></div>
<h2 className="text-2xl font-bold">Python</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn Python</a>
  </div>
  {/* +++++++++++++++ the second+++++++++++++++++++++++++++++= */}
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/cybersecurity.png" alt="" className="w-28"/></div>
<h2 className="text-2xl font-bold">Cybersecurity</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn Python</a>
  </div>
  {/* +++++++++++ the three part */}

 <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/github.png" alt="" className="w-28"/></div>
<h2 className="text-2xl font-bold">Git & Github</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn github</a>
  </div>
  {/* +++++++++++++++++++++++++++ the user authenticate two +++++++++++++++++++++++++ */}
  
      </div>

      
      <div className="md:flex">
        
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/java.png" alt="" className="w-28"/></div>
<h2 className="text-2xl font-bold">Java</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn java</a>
  </div>
  {/* +++++++++++++++ the second+++++++++++++++++++++++++++++= */}
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/microexcel.png" alt="" className="w-28"/></div>
<h2 className="text-2xl font-bold">Microsoft & Excel</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn M&Excel</a>
  </div>
  {/* +++++++++++ the three part */}

 <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/processing.png" alt="" className="w-28"/></div>
<h2 className="text-2xl font-bold">Data Processing</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn Python</a>
  </div>
  {/* +++++++++++++++++++++++++++ the user authenticate two +++++++++++++++++++++++++ */}
  
      </div>
      
      <div className="md:flex">
        
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/react.png" alt="" className="w-48"/></div>
<h2 className="text-2xl font-bold">Special React</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn React.js</a>
  </div>
  {/* +++++++++++++++ the second+++++++++++++++++++++++++++++= */}
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/rest.png" alt="" className="w-64"/></div>
<h2 className="text-2xl font-bold">Rest Api</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn rest api</a>
  </div>
  {/* +++++++++++ the three part */}

 <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/tailboots.jpeg" alt="" className="w-full"/></div>
<h2 className="text-2xl font-bold">Bootstrapp & Tailwind</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn Tailwind&Bootstrapp</a>
  </div>
  {/* +++++++++++++++++++++++++++ the user authenticate two +++++++++++++++++++++++++ */}
  
      </div>
      
      <div className="md:flex">
        
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/web3.png" alt="" className="w-48"/></div>
<h2 className="text-2xl font-bold">WEB3</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn web3</a>
  </div>
  {/* +++++++++++++++ the second+++++++++++++++++++++++++++++= */}
  <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/spreadsheet.jpeg" alt="" className="w-full h-[25vh]"/></div>
<h2 className="text-2xl font-bold">SpreadSheet</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn spreadsheet</a>
  </div>
  {/* +++++++++++ the three part */}

 <div className=" border w-full md:w-[300px] rounded-xl p-2 my-2 mx-2">
<div className="flex justify-center"><img src="/data.jpeg" alt="" className="w-full h-[25vh]"/></div>
<h2 className="text-2xl font-bold">Data Analysis</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <a href="" className="underline text-[green]">Learn Data Analysis</a>
  </div>
  {/* +++++++++++++++++++++++++++ the user authenticate two +++++++++++++++++++++++++ */}
  
      </div>
       </div>
       
      
    </div>
  )
}

export default UserAuth
