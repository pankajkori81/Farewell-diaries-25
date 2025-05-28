import React, { useEffect } from 'react'

import './Fun.css'




import memes1 from "../../assets/trip/swapnilemoji.webp";
import memes2 from "../../assets/trip/swapnilemoji1.webp";   

import memes3 from "../../assets/trip/memes3.jpeg";
import memes4 from "../../assets/trip/memes4.webp";




import AOS from "aos";
import "aos/dist/aos.css";


const Fun = () => {

      useEffect(()=>{
        
            AOS.init({
              offset:200,
              duration:800,
              easing:"ease-in-sine",
              once:false,
              disable:false
            })
          },[]);
    
  return (
    <>
    
    <div className='memeclass' data-aos="fade-up">
      <h1>Memes of the Moments – A collection of the funniest moments shared together</h1>
    </div>
    <div  className='memes'>
     
       
       <div className='memebox' data-aos="flip-left">
      <img src={memes1} alt="" />
      <p>Ganne ka juice bada gilas 🥛  20 rupye ka . Idhar idhar chale aaiye.</p>

       </div>

       <div className='memebox' data-aos="flip-right">
        <img src={memes2} alt="" />
        <p>जप करा शांतता रखा</p>
       </div>

       <div className='memebox' data-aos="flip-left">
        <img className='meme3' src={memes3} alt="" />
        <p>He Became Most wanted Person since he didn't ask swapnil  to come  with them at Iskon temple and AOA dam 😂</p>
       </div>

       <div className='memebox' data-aos="flip-right">
        <img  src={memes4} alt="" />
        <p>#Chhota Don 😎</p>
       </div> 
    </div>
      </>
  )
}

export default Fun
