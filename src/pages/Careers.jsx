import React from "react";
import JobBoard from "../components/JobBoard";
import { Link } from "react-router-dom";
import { Roll } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

import meghlaImg from "../assets/web_meghla.png";
import arifImg from "../assets/arif.png";
import samihaImg from "../assets/smaia.png";

const CareerPage = () => {
  return (
    <div className="mt-20 text-black ">
      {/* Header */}
      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <p className="text-green-500 uppercase tracking-wide font-bold">Careers at Our Company</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Join our team. Create the future.</h1>
        <p className="mt-6 text-gray-500 text-lg">
          We’re always looking for curious minds, creative souls, and sharp thinkers to help us shape the future.
        </p>
        <Link to={'/contact'}>
       <button className="mt-6 bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded-full font-semibold">
          Let’s Build Together 🚀
        </button>
       </Link>
      </section>

    

      {/* Live Job Board Note */}
      <JobBoard/>
     

      {/* Animated Team Avatars */}
      <section className=" ">
        <h2 className="text-3xl font-bold text-center mb-10">
        <Roll triggerOnce>
         <h2 className="section-title pt-5 space-x-4">
           <span>  Meet Our Team </span>
         </h2>
       </Roll>
      
        
        
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
  {[
      {
        name: "Mubaswira Rahman Samiha",
        role: "Team Lead & Web Developer",
        image:samihaImg,
        description:
          "Experienced leader with 10+ years in tech, specializing in full-cycle solutions, clean architecture, and seamless project coordination.",
      },
      {
        name: "Md. Arif Hassan",
        role: "Web Developer",
        image: arifImg,
        description: "Builds scalable full-stack apps with React, Next.js, and Firebase, focusing on clean code, Web Developer, and seamless user experiences."
      },
      
      {
        name: "Meghla Biswas",
        role: "Junior Developer",
        image:meghlaImg,
        description:
          "Focused on crafting responsive, user-friendly interfaces with modern tools like React.js and Tailwind CSS.",
      },
  ].map((member, index) => (
    <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
      <img
        src={member.image}
        alt={member.name}
        className="rounded-full w-24 h-24 mx-auto object-cover"
      />
      <h3 className="mt-4 font-semibold text-lg text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>
    </div>
  ))}
</div>

      </section>

      {/* Scroll Animation */}
      <section className="py-12 text-center">
        <div className="animate-bounce">
         <Link to={'/'}>
         <span className="text-green-500 text-xl">↓ Scroll to explore</span>
         </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" py-5">
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-lg  italic text-center">
            “I've never worked with a more collaborative and encouraging team. We build awesome things — and enjoy the
            process!”
          </blockquote>
          <p className="text-green-700 text-center mt-4">— Meghla, Frontend Developer</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"><Roll triggerOnce>
         <h2 className="section-title pt-5 space-x-4">
           <span>Core </span>
           <span>
             <Typewriter
               words={['Values']}
               loop={true}
               cursor={false}
               typeSpeed={80}
               deleteSpeed={50}
               delaySpeed={1000}
             />
           </span>
         
         </h2>
       </Roll></h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Support Each Other",
                desc: "We have each other's backs. We celebrate wins and help each other through the tough stuff."
              },
              {
                title: "Be Honest",
                desc: "We speak clearly with our clients and team. No sugarcoating. Just the truth, respectfully told."
              },
              {
                title: "Grow Together",
                desc: "Our strength lies in collaboration. We challenge each other to become better every day."
              },
              {
                title: "Make It Fun",
                desc: "We’re serious about our work, but never too serious to laugh and enjoy the ride."
              },
              {
                title: "Do The Safe Space",
                desc: "Everyone is welcome here. We value diversity, equity, and inclusion — always."
              },
              {
                title: "Dream Big",
                desc: "We dream in bold colors and push limits — of tech, of design, and of ourselves."
              }
            ].map((value, idx) => (
              <div key={idx}>
                <h4 className="text-green-700 font-semibold">{value.title}</h4>
                <p className="text-gray-700 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 text-center">
        <h3 className="text-2xl font-semibold">Ready to build something great with us?</h3>
       <Link to={'/contact'}>
       <button className="mt-6 bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded-full font-semibold">
          Let’s Build Together 🚀
        </button>
       </Link>
      </section>
    </div>
  );
};

export default CareerPage;