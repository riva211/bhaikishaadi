import React from 'react';
import { Calendar } from 'lucide-react';

const Rsvp = () => {
  const handleRSVP = () => {
    // Event details
    const event = {
        title: "Tanaz and Rahil's Wedding",
              description: 'Rahil and Tanaz are getting married',
      location: 'Babra Gujarat',
      // Setting time to 2 PM - 5 PM on Feb 9th, 2025
      startTime: '20250217T140000',
      endTime: '20250218T170000'
    };

    // Create Google Calendar URL
    const calendarUrl = new URL('https://calendar.google.com/calendar/render');
    calendarUrl.searchParams.append('action', 'TEMPLATE');
    calendarUrl.searchParams.append('text', event.title);
    calendarUrl.searchParams.append('details', event.description);
    calendarUrl.searchParams.append('location', event.location);
    calendarUrl.searchParams.append('dates', `${event.startTime}/${event.endTime}`);

    // Open Google Calendar in new tab
    window.open(calendarUrl.toString(), '_blank');
  };

  return (
    <div className=" flex justify-center items-center flex-col ">
      
      
      <button
        onClick={handleRSVP}
        className="w-[170px] h-[40px] rounded-xl bg-[#464D43] text-sm flex justify-center items-center m-2 p-2  text-center" 
      >
     <div>
     
         <Calendar className="w-[14px] h-[20px] text-white" />
        </div>  
     <div className='m-3 text-white '> SAVE THE DATE</div>  
      </button>
    </div>
  );
};

export default Rsvp;