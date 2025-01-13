import React from 'react'
import "../App.css"
import logo from "../assests/Logo.png"
import names from "../assests/names.png"
import scroll from "../assests/scroll.png"
import curve from "../assests/curve.png"


function Main() {
  return (
    <div className=" overflow-x-hidden  "  >

        {/* hero code  */}
    <div className="main  " >
        <div className="w-screen flex flex-col justify-start items-center 	 " >
        <img className="mb-[-13px]" src={logo} alt="Logo here" /> 
       <div className="font1 text-white" >THE WEDDING OF</div>
       <img src={names} alt="rahil and tara" />
       <div className="font1 text-white" > . 09 02 2025 . </div>
       <img className="mt-2 mb-12" src={scroll} alt="scroll down" />
       <div className="h-[50px] ">

       </div>
        </div>
      
    </div>
    <div className="flex justify-center  ">
<img className="absolute md:top-[96%] lg:top-[97%] sm:top-[90%] w-screen " src={curve} alt="" />
    </div>
    </div>
  )
}

export default Main