import React from "react";
import { Roll } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

function Services() {
  return (
    <Roll triggerOnce>
      <h2 className="section-title mb-8 space-x-4">
        <span>All </span>
        <span>
          <Typewriter
            words={["Type OF"]}
            loop={true}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <span>Services</span>
      </h2>
    </Roll>
  );
}

export default Services;
