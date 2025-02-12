import React from 'react'
import Countdown from './Countdown'
import Rsvp from './Rsvp'

function Comp2() {
  return (
    <div>
   <div className='font2  flex justify-center  mt-5 flex-col items-center bg-white' >
          <div className="text-center"  >
              We Are Getting Married
            
            </div>
            <div className=" abeezee-regular">

            <Countdown/>
            <Rsvp/>
            </div>
           </div>
    </div>
  )
}

export default Comp2