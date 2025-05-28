import React, { useEffect } from 'react'

import './Memories.css';
import Cards from '../Cards/Cards';

import AOS from "aos";
import "aos/dist/aos.css";


const Memories = () => {


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
    <div id='Memories' className='memories' data-aos="fade-up" >
        
<hr className='timelineborder' />
      <h1  >Memory Lane – Best Moments Together</h1>
      <p>We laughed, we lived, we created memories that will last a lifetime.</p>
      <div className='mainmemories'>
        

        <div className='leftline'   >

      
         

        </div>

        <div className='rightline'> 

           <Cards/>
    
           
        </div>

      </div>
    </div>
  )
}

export default Memories
