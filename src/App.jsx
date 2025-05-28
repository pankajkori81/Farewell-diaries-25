

import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Memories from './Component/Memories/Memories';
import Messages from './Component/Messages/Messages';
import Fun from './Component/Fun/Fun';
import Timeline from './Component/Timeline/Timeline';
import Videosection from './Component/Videosection/Videosection';
import Footer from './Component/Footer/Footer';
import Loading from './Component/Loading/Loading';

function App() {

  const [isLoading , setIsLoading ]=useState(true);



  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false);
    },2000)

  })

  return (

    <>
    <div class="gradient"></div>
   
    <div>

         {
          isLoading ? <Loading/> : <div> 

              
         {/* Navbar */}
         <Navbar/>

          {/*Header */}
          <Header/>   

          {/* Memories */}
          <Memories/>

         
         {/* Timeline */}
          <Timeline/>

           {/* VideoSection */}

           <Videosection/>



          {/* Massages */}
          <Messages/>

          {/* memes */}
         
      
          {/* Fun */}
          <Fun/>

          {/* Footer  */}
          <Footer/>
          </div>
         }
         
    </div>

     </>
  )
}

export default App;


