



import React, { useState } from 'react'

import './Navbar.css'

import farewell from "../../assets/trip/farewell-diaries.png";

const Navbar = () => {

    const [openMenu , setOpenMenu]=useState(false)
  return (
    
    <>


    <div className='navbar'>
        <div className='menu'  onClick={()=>{
            setOpenMenu(!openMenu)

        }} >
            <span></span>
            <span></span>
            <span></span>

        </div>


        <div className='nav-part'>
          
          {/* <h2>Portfolio</h2> */}

          <img src={farewell} alt="Profile photo" />
      

         <ul className={openMenu ? "open" :""} >
            <li><a href="/">Home</a></li>
            <li><a href="#Memories">Memories</a></li>
            <li><a href="#Timeline">Timeline</a></li>
            <li><a href="#Farewell">Farewell</a></li>
          
         </ul>

</div>

    </div>

    </>
  )
}

export default Navbar