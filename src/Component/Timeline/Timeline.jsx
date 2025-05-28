import React, { useEffect } from "react";

import img26 from "../../assets/trip/img26.JPG";
import img29 from "../../assets/trip/img29.JPG";
import img31 from "../../assets/trip/img31.JPG";
import img7 from "../../assets/trip/img7.jpg";
import img14 from "../../assets/trip/img14.jpg";
import img15 from "../../assets/trip/img15.JPG";
import img3 from "../../assets/trip/img3.jpg";
import img2 from "../../assets/trip/img2.jpg";
import img1 from "../../assets/trip/img1.jpg";
import img28 from "../../assets/trip/img28.jpg";
import img43 from "../../assets/trip/img43.jpg";
import img44 from "../../assets/trip/img44.jpg";
import img45 from "../../assets/trip/img45.jpg";
import img30 from "../../assets/trip/img30.JPG";
import img32 from "../../assets/trip/img32.jpg";


import img23 from "../../assets/trip/img23.JPG";
import img21 from "../../assets/trip/img21.JPG";
import img24 from "../../assets/trip/img24.JPG";
import img17 from "../../assets/trip/img17.JPG";
import img19 from "../../assets/trip/img19.JPG";
import img20 from "../../assets/trip/img20.JPG";
import img25 from "../../assets/trip/img25.JPG";



import img33 from "../../assets/trip/img33.jpg";
import img34 from "../../assets/trip/img34.jpg";
import img35 from "../../assets/trip/img35.jpg";
import img36 from "../../assets/trip/img36.jpg";
import img37 from "../../assets/trip/img37.jpg";
import img38 from "../../assets/trip/img38.JPG";
import img39 from "../../assets/trip/img39.JPG";
import img40 from "../../assets/trip/img40.JPG";
import img41 from "../../assets/trip/img41.jpg";
import img42 from "../../assets/trip/img42.jpg";



import "./Timeline.css";

import AOS from "aos";
import "aos/dist/aos.css";


const Timeline = () => {



          useEffect(()=>{
      
          AOS.init({
            offset:200,
            duration:900,
            easing:"ease-in-sine",
            once:false,
            disable:false
          })
        },[]);
  

  return (
    <>
    
    <div id="Timeline">
      <div class="marquee">
        <div class="marquee_header" data-aos="fade-up" >
          <h2>Timeline : The Chapters We Wrote Together</h2>

          <p>
            Every photo tells a story, every moment holds a memory. As we slide
            through time, we relive the laughter, the adventures, and the bonds
            that shaped us. Some chapters may close, but the journey we shared
            will always remain.
          </p>
        </div>
        <div class="marquee__inner">
          <div class="marquee__group">
           
            <span><img src={img29} alt="" /></span>
            <span><img src={img39} alt="" /></span>
            <span><img src={img38} alt="" /></span>
            <span><img src={img40} alt="" /></span>
            <span><img src={img33} alt="" /></span>
            <span><img src={img34} alt="" /></span>
            <span><img src={img41} alt="" /></span>
            <span><img src={img31} alt="" /></span>
            <span><img src={img19} alt="" /></span>
            <span><img src={img2} alt="" /></span>
            <span><img src={img1} alt="" /></span>
            <span><img src={img20} alt="" /></span>
            <span><img src={img35} alt="" /></span>
            <span><img src={img42} alt="" /></span>
            
             <span><img src={img26} alt="" /></span>
            <span><img src={img7} alt="" /></span>
            <span><img src={img14} alt="" /></span>
            <span><img src={img15} alt="" /></span>
            <span><img src={img36} alt="" /></span>
            <span><img src={img37} alt="" /></span>
            <span><img src={img43} alt="" /></span>
            <span><img src={img44} alt="" /></span>
            <span><img src={img45} alt="" /></span>
            <span><img src={img3} alt="" /></span>  
            <span><img src={img25} alt="" /></span>
             <span><img src={img28} alt="" /></span>
            <span><img src={img30} alt="" /></span>
            <span><img src={img17} alt="" /></span>
            <span><img src={img32} alt="" /></span>
            <span><img src={img23} alt="" /></span>
          
      
          
          </div>

          <div class="marquee__group">
           
            <span><img src={img21} alt="" /></span>
            <span><img src={img24} alt="" /></span>
          </div>
        </div>
      </div>

 </div>


    </>


   
  );
};

export default Timeline;
