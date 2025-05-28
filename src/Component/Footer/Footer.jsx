import React from 'react'

import './Footer.css';



import farewellimg from "../../assets/trip/farewell-diaries.png";


import profile from  "../../assets/trip/Pankaj.jpeg";

const Footer = () => {


  const date=new Date();

  const currentDate=date.getFullYear();


  return (
   
    <>
    

  <div className='footer'>

    <div className='foot-top'>
     
      <img  src={farewellimg} alt="Profile photo" />
           <img  className='profile' src={profile} alt="" />

      

    </div>


    <div className='foot-mid'>

       <div className='sub-lists'>

      
      <h3>Support</h3>
        <p>Contact Us</p>
        <p>Help Center</p>
        <p>FAQ</p>
      </div>


      <div className='sub-lists'>

                
          <h3>Media</h3>
            <p>Twitter</p>
            <p>Github</p>
            <p>Instagram</p>
          
          </div>


          <div className='sub-lists'>

                            
            <h3>Partner</h3>
            <p> Distributions</p>
             <p>Partner Log In</p> 
             <p>Marketing Solutions</p> 
            </div>


      

   
    </div>


     
    <div className='foot-down'>

      <div className='down-part'>

        <p>Copyright @{currentDate} Pankajkori. All Rights Reserved</p>


      </div>

      <div className='notices'>

         <p>Legal Notice</p>

         <p>Privacy Policy</p>
         
         <p> Cookies</p>
         
         <p>Terms & Conditions </p>
         

      </div>

    </div>

    </div>



    </>
  )
}

export default Footer