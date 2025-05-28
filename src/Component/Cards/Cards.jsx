import React, { useEffect } from "react";

import "./Cards.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";


import img15 from "../../assets/trip/img15.JPG";
import img16 from "../../assets/trip/img16.JPG";
import img3 from "../../assets/trip/img3.jpg";
import img2 from "../../assets/trip/img2.jpg";
import img30 from "../../assets/trip/img30.JPG";
import img31 from "../../assets/trip/img31.JPG";
import img4 from "../../assets/trip/img4.jpg";
import img29 from "../../assets/trip/img29.JPG";
import img34 from "../../assets/trip/img34.jpg";
import img35 from "../../assets/trip/img35.jpg";
import img43 from "../../assets/trip/img43.jpg";
import img45 from "../../assets/trip/img45.jpg";
import img44 from "../../assets/trip/img44.jpg";
import img5 from "../../assets/trip/img5.jpg";
import img6 from "../../assets/trip/img6.jpg";
import img36 from "../../assets/trip/img36.jpg";
import img26 from "../../assets/trip/img26.JPG";
import img7 from "../../assets/trip/img7.jpg";
import img19 from "../../assets/trip/img19.JPG";
import img21 from "../../assets/trip/img21.JPG";
import img9 from "../../assets/trip/img9.jpg";
import img17 from "../../assets/trip/img17.JPG";
import img25 from "../../assets/trip/img25.JPG";
import img38 from "../../assets/trip/img38.JPG";
import img39 from "../../assets/trip/img39.JPG";
import img40 from "../../assets/trip/img40.JPG";
import img41 from "../../assets/trip/img41.jpg";

const imageUrls = [
  img15, img16, img3, img2, img30, img31, img4, img29, img34, img35, img43, img45,
  img44, img5, img6, img36, img26, img7, img19, img21, img9, img17, img25,
  img38, img39, img40, img41
];


const Cards = () => {


        useEffect(()=>{
    
        AOS.init({
          offset:200,
          duration:900,
          easing:"ease-in-sine",
          once:false,
          disable:false
        })
      },[]);

//   const imageUrls = [
//  "/trip/img15.JPG",
//     "/trip/img16.JPG",
//     "/trip/img3.jpg",
//     "/trip/img2.jpg",
//        "/trip/img30.JPG",
//     "/trip/img31.JPG",
    
//     "/trip/img4.jpg",
//     "/trip/img29.JPG",
//         "/trip/img34.jpg",
//       "/trip/img35.jpg",
//       "/trip/img43.jpg",
//       "/trip/img45.jpg",
//       "/trip/img44.jpg",
     
//     "/trip/img5.jpg",
//     "/trip/img6.jpg",
//        "/trip/img36.jpg",
//       "/trip/img26.JPG",
//     "/trip/img7.jpg",
//     "/trip/img19.JPG",
//     "/trip/img21.JPG",
//     "/trip/img9.jpg",
   
//     "/trip/img17.JPG",
//     "/trip/img25.JPG",
  
   
//       "/trip/img38.JPG",
//       "/trip/img39.JPG",
//       "/trip/img40.JPG",
//       "/trip/img41.jpg",
   




// ];



  return (
    <div className="cardsPart" data-aos="fade-up">

<div class="outer">
  <div class="dot"></div>
  <div class="card">
    <div class="ray"></div>
    <div class="text">
       <h3>
          Revdanda & Birla Temple: A Journey to Remember.
        </h3>

    </div>
    <div className="left">
         <p>
          
          
          The journey through Konkan was more than just a trip—it was a collection of emotions, laughter, and moments that will forever stay with us.
           <ul>
            
            <li>The ocean at Revdanda carried our laughter, carrying memories beyond time. 🌊</li>
           <li>Footprints on the sand, stories in our hearts—Konkan was magic. ✨</li>
            <li>At Birla Mandir, the serenity wrapped around us like a comforting embrace 🛕 </li> 
           <li>A trip that was never just a journey, but a feeling we’ll always cherish. ❤️</li>
           </ul>
        </p>
    </div>
    <div class="line topl"></div>
    <div class="line leftl"></div>
    <div class="line bottoml"></div>
    <div class="line rightl"></div>
  </div>
</div>

           <div className="right"  >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <p>Note: Swipe to see all the photos</p>
      </div>
    </div>
  );
};

export default Cards;
