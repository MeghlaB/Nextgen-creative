import React from 'react'
import { Roll } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

function Contact() {
  return (
   <div>
     <Roll triggerOnce>
        <h2 className="section-title space-x-4 pt-4">
          <span>Tell   </span>
          <span>
            <Typewriter
              words={["Us How We Can "]}
              loop={true}
              cursor={false}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span>Help You</span>
        </h2>
        
      </Roll>
     
   </div>
    );
  
}

export default Contact
