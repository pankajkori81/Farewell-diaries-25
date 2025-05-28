import React, { useEffect } from "react";

import "./Messages.css";

import AOS from "aos";
import "aos/dist/aos.css";


import img7 from   "../../assets/trip/img7.jpg";
import img13 from  "../../assets/trip/img13.jpg";
import img22 from  "../../assets/trip/img22.JPG";
import img23 from  "../../assets/trip/img23.JPG";
import img15 from  "../../assets/trip/img15.JPG";





const Messages = () => {


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
    <div id="Farewell">
      <div className="notes" >
        <h1 data-aos="flip-left">Farewell Messages & Dedications Personal Messages</h1>

        <hr className="noteline" />

        <div className="notepart">
          <div className="mainnote" data-aos="zoom-in-up" >
            <img src={img7} alt="" />
            <h2>Batch 2021-25. Signing off... </h2>
            <h3>
              "The Final Bell, Endless Memories" : A tribute to your time
              together in class
            </h3>
            <p>
              This farewell isn’t an end, but the start of new journeys for all
              of us. Wherever life takes us, I hope we carry the laughter,
              lessons, and friendships we've built. Not all goodbyes are sad.
              Some are just a promise to meet again. 🌟🎓🚪
            </p>
          </div>

          <div className="cardhead" >
            <div className="card1"  data-aos="zoom-in-up">
              <img src={img13} alt="" />

              <h3>Special Mention to Swapnil Kolekar</h3>
              <p>
                From the very first year to the final moments, you've been more
                than a friend.Thank you for being you, Swapnya Lots of love
                ❤️🌹. Wishing you all the success and happiness the world has to
                offer.
              </p>
            </div>

            <div className="card2" data-aos="zoom-in-up">
              <img src={img22} alt="" />

              <h3>Special Mention to Prathamesh Awale</h3>
              <p>
                From recent time you have been very close to my heart . And having
                mutual respect for each other and kind hearted person. Which
                makes you better person ❤️🌹
              </p>
            </div>

            <div className="card3" data-aos="zoom-in-left">
              <img src={img23} alt="" />

              <h3>A Very Special Mention to All Of You</h3>
              <p>
                As we stand at the crossroads of change, I just want to say—what
                a journey it's been! From endless laughs to unforgettable
                memories, we've built a bond that time and distance can never
                break.This isn't goodbye; it’s just a ‘see you later.’ Until we
                meet again, take care and stay legendary!🫂❤️
              </p>
            </div>

            <div className="card3" data-aos="zoom-in-left">
              <img src={img15} alt="" />

              <h3>Dear Friends,</h3>
              <p>
                As we step into new chapters of our lives, I just want to take a
                moment to appreciate the incredible journey we've shared. From
                sharing lunches to spending quality time together, every moment
                has been a priceless treasure.😊✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
