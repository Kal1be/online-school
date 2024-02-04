import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faWhatsapp,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons'
// import {faBars} from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
   <div className="lg:px-12 -mb-28 px-3 py-3 text-white mt-20 bg-[#000000ed] lg:w-full">
     <div className="lg:flex justify-between items-center ">
    <div className="lg:w-96">
    <div className="flex items-center">
    <img src="/useblack.jpg" alt="" className="w-16 h-16 "/>
     <h2 className="first text-xl font-bold mx-1 text-white"><span  className="text-white">Anas</span><span  className="text-white">Dev</span> Institute</h2>
    </div>
    <p className="sm:text-sm lg:text-lg -mt-2">AnasDev is the Institute of technologie to teach courses like programing with
       some point technologie and analyst course,the institute provide teach job research
        and so more again,choose AnasDev Institute is choosing technologie on is self</p>
    </div>
    <div className="my-4 md:my-0">
      <h2 className="text-xl font-medium">About AnasDev</h2>
      <ul className="text-lg text-gray-300">
        <li className="my-1">- Contact Use</li>
        <li className="my-1">- Check Result</li>
        <li className="my-1">- Check Course</li>
        <li className="my-1">- Features</li>
        <li className="my-1">- Categories</li>
      </ul>
    </div>
    <div className="my-4 md:my-0">
      <h2 className="text-xl font-medium">Our Programme</h2> 
      <ul className="text-lg text-gray-300">
      <li className="my-1">- Contact Use</li>
        <li className="my-1">- Check Result</li>
        <li className="my-1">- Check Course</li>
        <li className="my-1">- Features</li>
        <li className="my-1">- Categories</li>
      </ul>
    </div>
    <div className="my-4 md:my-0">
      <h2 className="text-xl font-medium">Advice & Help</h2>
       <ul className="text-lg text-gray-300">
       <li className="my-1">- Contact Use</li>
        <li className="my-1">- Check Result</li>
        <li className="my-1">- Check Course</li>
        <li className="my-1">- Features</li>
        <li className="my-1">- Categories</li>
      </ul>
    </div>
    </div>
    <div className="my-4 flex items-center">
    <h3 className="text-2xl font-medium">
        Follow Us:
      </h3>
      <div className="flex text-2xl justify-between w-40 mx-2">
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faXTwitter}/>
        <FontAwesomeIcon icon={faWhatsapp}/>
      </div>
    </div>
    <hr />
    <div className="my-2 text-sm md:flex justify-between">
      <h2 className="my-1"> Copyright
        &copy; AnasDev Institute,2024
      </h2>
      <h2 className="my-1">Powered by DevSoftware as AnasDev </h2>
    </div>
   </div>
  )
}

export default Footer
