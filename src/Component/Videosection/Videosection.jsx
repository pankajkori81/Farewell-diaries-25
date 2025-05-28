

// import React, { useEffect } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // Import required modules
// import { Pagination } from 'swiper/modules';

// import './Videosection.css';

// import video1 from "/video/video1.mp4";
// import video2 from "/video/video2.mp4";
// import video3 from "/video/video3.mp4";
// import video4 from "/video/video4.mp4";
// import video5 from "/video/video5.mp4";
// import video6 from "/video/video6.mp4";
// import revdanda from "/video/revdanda.mp4";



// import AOS from "aos";
// import "aos/dist/aos.css";


// const videoFiles = [video2, video1, revdanda, video5, video3, video4 , video6];

// const Videosection = () => {



//             useEffect(()=>{
        
//             AOS.init({
//               offset:200,
//               duration:900,
//               easing:"ease-in-sine",
//               once:false,
//               disable:false
//             })
//           },[]);
    


//   return (
//     <div>
//       <div className='video' data-aos="fade-left">
//         <h1>Unforgettable Memories</h1>
//         <p>A journey captured in motion—these videos hold the moments that made us.</p>
//       </div>

//       <Swiper
//         slidesPerView={'auto'}
//         centeredSlides={true}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {videoFiles.map((file, index) => (
//           <SwiperSlide key={index}>
//             <video controls width="550px" height="400px">
//               <source src={file} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Videosection;




import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Videosection.css';

import AOS from "aos";
import "aos/dist/aos.css";

const videoFiles = [
  "/assets/video/video1.mp4",
  "/assets/video/video2.mp4",
  "/assets/video/revdanda.mp4",
  "/assets/video/video5.mp4",
  "/assets/video/video3.mp4",
  "/assets/video/video4.mp4",
  "/assets/video/video6.mp4"
];

const Videosection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900,
      easing: "ease-in-sine",
      once: false,
      disable: false
    });
  }, []);

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




// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import './Videosection.css';

// import AOS from "aos";
// import "aos/dist/aos.css";

// const Videosection = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 900,
//       easing: "ease-in-sine",
//       once: false,
//       disable: false
//     });
//   }, []);

//   return (
//     <div>
//       <div className='video' data-aos="fade-left">
//         <h1>Unforgettable Memories</h1>
//         <p>A journey captured in motion—these videos hold the moments that made us.</p>
//       </div>

//       <Swiper
//         slidesPerView={'auto'}
//         centeredSlides={true}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/video2.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/video1.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/revdanda.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/video5.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/video3.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/video4.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>
//           <video controls width="550px" height="400px">
//             <source src="assets/video/video6.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Videosection;
