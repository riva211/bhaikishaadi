import React from 'react';
import { useMediaQuery } from "react-responsive";
import backDesktop from "../assests/back.png";
import backMobile from "../assests/back1.png";
import curve from "../assests/curve.png";
import logo from "../assests/Logo.png";
import names from "../assests/names.png";
import Countdown from './Countdown';
import scroll from "../assests/scroll.png";
import "../App.css";

function Demo() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="relative w-screen">
      {/* Background Image Container */}
      <div className="absolute w-screen h-screen">
        <img src={isMobile ? backMobile : backDesktop} className="w-screen h-[110vh] absolute" alt="Background" style={{ width: "100%" }} />
      </div>

      <div className="relative z-10 mb-10">
        <div className="max-w-screen max-h-[70vh] flex flex-col justify-start justify-items-center items-center content-start ">
          <img className="" src={logo} alt="Logo here" />
          <div className="font1 text-white">THE WEDDING OF</div>
          <img src={names} alt="rahil and tara" />
          <div className="font1 text-white">. 18 02 2025 .</div>
          <img src={scroll} className="  " alt="" />
          {!isMobile && <img src={curve} className="w-screen" alt="Curve Image" />}

         


        </div>
      </div>
    </div>
  );
}

export default Demo;