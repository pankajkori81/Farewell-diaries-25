

import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import './Videosection.css';

import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import video5 from "../../assets/video/video5.mp4";
import video6 from "../../assets/video/video6.mp4";
import revdanda from "../../assets/video/revdanda.mp4";



import AOS from "aos";
import "aos/dist/aos.css";


const videoFiles = [video2, video1, revdanda, video5, video3, video4 , video6];

const Videosection = () => {



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
    <div>
      <div className='video' data-aos="fade-left">
        <h1>Unforgettable Memories</h1>
        <p>A journey captured in motion—these videos hold the moments that made us.</p>
      </div>

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {videoFiles.map((file, index) => (
          <SwiperSlide key={index}>
            <video controls width="550px" height="400px">
              <source src={file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Videosection;
