import React from 'react'
import { Roll } from 'react-awesome-reveal'
import { Typewriter } from 'react-simple-typewriter'

function ClentReview() {
  return (

     <Roll triggerOnce>
                    <h2 className="section-title mb-8 space-x-4">
                        <span>Our</span>
                        <span><Typewriter words={['Clent Review']} loop={true} cursor={false} typeSpeed={80} deleteSpeed={50} delaySpeed={1000} /></span>
                        <span>Say?</span>
                    </h2>
                </Roll>
   
  )
}

export default ClentReview
