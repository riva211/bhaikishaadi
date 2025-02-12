import React from 'react'
import Countdown from './Countdown'

function Timer() {
  return (
    <div >
         <div className='font2 flex justify-center  flex-col items-center bg-white ' >
          <div className="text-center   sm:mt-5 md:mt-3 lg:mt-5 "  >
              We Are Getting Married
            
            </div>
            <div className=" abeezee-regular">

            <Countdown/>
            </div>
           </div>
    </div>
  )
}

export default Timer