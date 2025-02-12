import React from 'react';
import "../App.css";
import Pho from "../assests/pho.png"
import tanu from "../assests/tanu.png"
import bhai from "../assests/bha.png"

function Comp3() {
  return (
    <div className="flex p-3  flex-col justify-center items-center mt-4">
      <div className="font-bold text-center mb-4 text-[39px] font2 text-[#464D43]">
        Meet The Happy Couple
      </div>

      {/* div1 visible on md (tablet) and larger screens */}
      <div className="hidden md:block">
        <div className=' flex  justify-center items-center 
        m-5 p-4 ' >

        <div className=' w-[447px] h-[110px] text-wrap font3 
        text-right text-clip m-4 '>
        From the charm of Babra to the buzz of Bengaluru, this product manager blends tech-savviness with artistry, crafting strategies by day and masterpieces by night.
        </div>
        <div>
            <img src={Pho} alt="" />
        </div>
        <div className='  w-[447px] h-[110px] text-wrap font3 
        text-left text-clip m-4 '>
        Rooted in the vibrant city of Bhavnagar, she’s a dedicated teacher with a love for books. Balancing knowledge and warmth, she inspires young minds by day and finds her joy in the world of stories by night.
        </div>
        </div>
      </div>

      {/* div2 visible on sm (mobile) screens */}
      <div className="block md:hidden">

<div className='flex justify-center flex-col items-center'>

<img src={bhai} alt=""  className=' w-[168px] h-[168px] '/>
<div className=' font3 font-bold  text-center m-4 '>
From the charm of Babra to the buzz of Bengaluru, this product manager blends tech-savviness with artistry, crafting strategies by day and masterpieces by night.
</div>

<img src={tanu} alt=""  className=' w-[168px] h-[168px] '/>

<div className=' font3 font-bold  text-center m-4'>
Rooted in the vibrant city of Bhavnagar, she’s a dedicated teacher with a love for books. Balancing knowledge and warmth, she inspires young minds by day and finds her joy in the world of stories by night.
</div>

</div>


      </div>
    </div>
  );
}

export default Comp3;
