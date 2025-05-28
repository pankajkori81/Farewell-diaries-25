import React, { useEffect } from "react";

import './Home.css';

import img7 from "../../assets/trip/img7.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {


  //   useEffect(()=>{

  //   AOS.init({
  //     offset:200,
  //     duration:900,
  //     easing:"ease-in-sine"
  //   })
  // },[]);


            useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900,
      easing: "ease-in-sine",
      once: false, 
      disable: false, 
    });
  }, []);
  return (
    <div>
    
    <div className="mainpart">

      <div className="left">
        <h2>A Journey of Friendship & Memories</h2>
        <p>
          Some friendships never fade, even as we move forward in life. This is
          our farewell, but not goodbye—let’s cherish our best moments!
        </p>
      </div>

      <div className="right" data-aos="flip-left"  >

      <img src={img7} alt="" />

      </div>
    </div>

  
     </div>
  );
};

export default Home;
