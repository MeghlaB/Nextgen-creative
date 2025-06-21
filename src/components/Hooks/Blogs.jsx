import React from 'react'
import { Roll } from 'react-awesome-reveal'
import { Typewriter } from 'react-simple-typewriter'

function Blogs() {
  return (
    <Roll triggerOnce>
         <h2 className="section-title pt-5 space-x-4">
           <span>Our </span>
           <span>
             <Typewriter
               words={['Latest Blog']}
               loop={true}
               cursor={false}
               typeSpeed={80}
               deleteSpeed={50}
               delaySpeed={1000}
             />
           </span>
           <span> Posts </span>
         </h2>
       </Roll>
  )
}

export default Blogs
