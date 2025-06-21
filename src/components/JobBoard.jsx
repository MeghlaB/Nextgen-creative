import { useEffect, useState } from "react";
import { JackInTheBox, Roll } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="py-5 px-6  min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12  drop-shadow-lg">
      <Roll triggerOnce>
               <h2 className="section-title pt-5 space-x-4">
                 <span>Current </span>
                 <span>
                   <Typewriter
                     words={['Job']}
                     loop={true}
                     cursor={false}
                     typeSpeed={80}
                     deleteSpeed={50}
                     delaySpeed={1000}
                   />
                 </span>
                 <span> Openings </span>
               </h2>
             </Roll>
       
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {jobs.map((job) => (
        <JackInTheBox>
        <div
            key={job.id}
            className="  transition-all duration-300 p-6 rounded-2xl shadow-lg  hover:scale-[1.02]"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold  mb-1">{job.title}</h3>
              <p className="text-sm text-gray-700">
                 {job.location} &nbsp; | &nbsp;  {job.type}
              </p>
            </div>

            <p className="text-gray-900 text-sm mt-3 mb-6 leading-relaxed line-clamp-4">
              {job.description}
            </p>

          <Link to={'/application'}>
          <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 hover:bg-green-900 transition px-5 py-2 rounded-full text-white text-sm font-medium shadow-md"
            >
              Apply Now →
            </a>
          </Link>
          </div>
        </JackInTheBox>
        ))}
      </div>
    </section>
  );
};

export default JobBoard;
