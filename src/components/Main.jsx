import React from 'react'
import "../App.css"
import logo from "../assests/Logo.png"
import names from "../assests/names.png"
import scroll from "../assests/scroll.png"
import Countdown from './Countdown'
import curve from "../assests/curve.png"

function Main() {
  return (
    <div className="overflow-x-hidden">
        {/* hero code */}
        <div className="main h-[110vh] ">
            <div className="w-screen flex flex-col justify-start items-center">
                <img className="mb-[-13px]" src={logo} alt="Logo here" /> 
                <div className="font1 text-white">THE WEDDING OF</div>
                <img src={names} alt="rahil and tara" />
                <div className="font1 text-white"> . 18 02 2025 . </div>
                <img src={scroll} alt="" />
              </div>
            

            <div className="h-screen  rounded-[100vh]   ">

           
            {/* <img src={curve} className="  bg-cover bg-center w-screen  " alt="" /> */}

            <div className='font2  flex justify-center  flex-col items-center bg-white' >
          <div className="text-center"  >
              We Are Getting Married
            
            </div>
            <div className=" abeezee-regular">

            <Countdown/>
            </div>
           </div>
        </div>
           </div>
        </div>
      

  )
}

export default Main