import React from 'react'
import '../App.css'
import curve from "../assests/curve.png"
import logo from "../assests/Logo.png"
import names from "../assests/names.png"
import scroll from "../assests/scroll.png"


function Comp1() {
  return (
    <div className='backk min-w-screen max-h-screen h-[100vh]' >
        <div className=' '>

        <div className="w-screen  flex flex-col justify-center items-center h-screen ">
          <img className="" src={logo} alt="Logo here" />
          <div className="font1 text-white">THE WEDDING OF</div>
          <div className='allura-regular text-white text-[87px] text-wrap text-center'>
          Rahil & Tanaz
          </div>
          <div className="font1 text-white">. 18 02 2025 .</div>
          <img src={scroll} className="  " alt="" />
          </div>
        </div>

    </div>
  )
}

export default Comp1