import "./body.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faFacebook,faWhatsapp,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
function Body1() {
  return (
  <div className="element md:mt-20 mt-12">

    {/* _+++++++++++++_ the first one of the body1 tag ++++++++++++++++++++++++++++++++++++++++*/}

      <div className="lg:flex justify-between lg:px-8 px-2 py-8 items-center" id="icon">
        <div>
            <h2 className="md:text-4xl text-2xl font-bold my-6 md:my-0">Find the subjects for yourself!</h2>
        </div>
      <div className="flex ">
        <h2 className="text-lg font-bold mx-2">Short by</h2>
       <select name="select course here" title="select here" id="ad" className="shadow-2xl w-32 border outline-none rounded-md hover:bg-gray-300">
        <option value="" className="hover:bg-gray-300">select course</option>
        <option value=""className="hover:bg-gray-300">Updated</option>
        <option value="" className="hover:bg-gray-300">Resent</option>
        <option value="" className="hover:bg-gray-300">Older</option>
       </select>
      </div>
    </div>

    {/* +++++++++++++++++++++++++ the second on is here +++++++++++++++++++++++++++++++++++++++++= */}

    <div className="md:flex justify-between px-2 lg:px-8">
        <div className=" bg-white">
           <div className="flex border items-center justify-between">
             <input type="text" placeholder="find the course here" className="outline-none py-2 px-2"/>
             <h2 className="bg-[#2e6c4a] py-2 px-3 text-white border">Search</h2>
             </div>
             <h2 className="text-xl font-bold my-3">Tags</h2>
        <div className="md:flex justify-between text-center lg:me-3 text-white font-medium">
            <h2 className="bg-[#2e6c4a] px-8 py-2 my-2 md:my-0">coursera</h2>
            <h2 className="bg-[#2e6c4a] px-8 py-2 my-2 md:my-0">program</h2>
        </div>
       <div className="md:me-3 text-white font-medium my-3">
       <h2 className="bg-[#2e6c4a] px-7 py-2 text-white text-center font-medium">Exam Question</h2>
       </div>
       <h2 className="text-xl font-bold my-3">Categories</h2>
       <div>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />CyberSecurity</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Python</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Java</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Data Analyst</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Web 3</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Microsoft&Excel</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Web Frontend</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Web Backend</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Git & Github</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Rest Api</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Special Reactjs</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Tailwindcss/Bootstrapp</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Data Processing</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />SpreadSheet Management</h3>
       <h3 className="text-lg font-medium my-1"> <input title="mycheckbox" type="checkbox" className="mx-2 rounded-full" />Data Vizualisation Tools</h3>
       </div>
        </div>

        <div className=" bg-gray-100 lg:w-[1000px] md:h-[60vh] xl:h-[117vh] md:overflow-y-scroll py-2 w-full">
            <div className="lg:flex my-3">
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/cybersecurity.png" alt="" />
                   <h4 className="text-xl my-2 font-bold"> Cybersecurity</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/python.jpeg" alt="" />
                   <h4 className="text-xl my-2 font-bold">Python</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/java.png" alt="" />
                   <h4 className="text-xl my-2 font-bold">Java</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
            </div>
            <div className="lg:flex my-4">
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/data.jpeg" alt="" />
                   <h4 className="text-xl my-2 font-bold">Data Analyst</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/processing.png" alt="" />
                   <h4 className="text-xl my-2 font-bold">Data Processing</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/microexcel.png" alt="" />
                   <h4 className="text-xl my-2 font-bold">Microsoft&Execl</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
            </div>
            <div className="lg:flex my-4">
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="github.png" alt="" />
                   <h4 className="text-xl my-2 font-bold"> Git & Github</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="rest.png" alt="" />
                   <h4 className="text-xl my-2 font-bold">Rest API</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="tailboots.jpeg" alt="" className="w-full"/>
                   <h4 className="text-xl my-2 font-bold"> Tailwind&Bootstapp</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
            </div>
            <div className="lg:flex my-4">
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/react.png" alt=""  />
                   <h4 className="text-xl my-2 font-bold">Special Reactjs</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/web3.png" alt="" />
                   <h4 className="text-xl my-2 font-bold">Web 3</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
                <div className="border rounded-2xl mx-2 lg:mx-3 my-4 lg:my-0 p-3 bg-white">
                  <img src="/backend.jpeg" alt="" />
                   <h4 className="text-xl my-2 font-bold">Web Developpment</h4>
                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit consectetur eligendi.
                     Vero non fuga a fugit iusto repellat commodi blanditiis sit autem quasi. Aliquam repudiandae
                      cupiditate esse,
                      voluptate culpaillo consectetur.</p>
                      <h1 className="text-[#023f89] text-xl font-medium underline ">Apply for this course<FontAwesomeIcon icon={faChevronRight} className="text-sm mx-2"/></h1>
                </div>
            </div>
        </div>
    </div>
   
  </div>
  )
}

export default Body1
