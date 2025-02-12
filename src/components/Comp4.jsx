import React from 'react'
import "../App.css"
import Haldi from "../assests/haldi.png"
import ring from "../assests/ring.png"
import nikha from "../assests/nikha.png"

function Comp4() {
  return (
    <div>
        <div className=' flex flex-col justify-center items-center'>

<div className=' font2 text-center text-[#464D43] ' >
We invite you to celebrate our wedding
</div>

<div className=' flex flex-wrap justify-center gap-5  m-4'>
<div className=' sm:w-[464.5px] sm:h-[309px] w-[364.95px] h-[309px] haldi rounded-xl  ' >
    <div className='sha h-full w-full rounded-xl '>
        <div className=' flex h-full flex-col justify-center items-center content-center '> 
            <img src={ring} alt=""  />
            <div className=' font3 text-white text-[39px] ' >Haldi of Tanaz</div>

<div className=' font3 text-white text-[20px] pt-20'>
16/02/2025
</div>
<div className=' font3 text-white text-[20px]  '>
4:30 PM</div>

        </div>

    </div>
</div>
<div className=' sm:w-[464.5px] sm:h-[309px] w-[364.95px] h-[309px] haldi rounded-xl  ' >
    <div className='sha h-full w-full rounded-xl '>
        <div className=' flex h-full flex-col justify-center items-center content-center '> 
            <img src={ring} alt=""  />
            <div className=' font3 text-white text-[39px] ' >Haldi of Rahil</div>

<div className=' font3 text-white text-[20px] pt-20'>
17/02/2025
</div>
<div className=' font3 text-white text-[20px]  '>
4:30 PM</div>

        </div>

    </div>
</div>


</div>
<div className=' flex flex-wrap justify-center gap-5  m-4'>
<div className=' sm:w-[464.5px] sm:h-[500px] w-[364.95px] h-[500px] nakh rounded-xl  ' >
    <div className='sha h-full w-full rounded-xl '>
        <div className=' flex h-full flex-col justify-center items-center content-center '> 
            <img src={ring} alt=""  />
            <div className=' font3 text-white text-[39px] underline decoration-[#EBA1DE] text-wrap text-center ' >Sangeet</div>

<div className=' font3 text-white text-[20px] pt-20'>
17/02/2025
</div>
<div className=' font3 text-white text-[20px]  '>
09:30 PM</div>

<div className='font3 text-white font-bold text-[31px] mt-10'>
Khoja wadi, Babra
</div>
<div className='font3 text-white font-extralight text-center text-wrap text-[20px] mt-10'>
Umiya Nagar Society,Amreli Rd, Ashirvad Society, Babra, Gujarat 365421</div>
        </div>

    </div>
</div>
<div className=' sm:w-[464.5px] sm:h-[500px] w-[364.95px] h-[500px] nakh rounded-xl  ' >
    <div className='sha h-full w-full rounded-xl '>
        <div className=' flex h-full flex-col justify-center items-center content-center '> 
            <img src={ring} alt=""  />
            <div className=' font3 text-white text-[39px] underline decoration-[#EBA1DE] text-wrap text-center' >Wedding Ceremony</div>

<div className=' font3 text-white text-[20px] pt-10'>
18/02/2025
</div>
<div className=' font3 text-white text-[20px]  '>
11:30 AM</div>

<div className='font3 text-white font-bold text-[31px] mt-5'>
Khoja wadi, Babra
</div>
<div className='font3 text-white font-extralight text-center text-wrap text-[20px] mt-10'>
Umiya Nagar Society,Amreli Rd, Ashirvad Society, Babra, Gujarat 365421</div>
        </div>

    </div>
</div>



</div>


        </div>

    </div>
  )
}

export default Comp4