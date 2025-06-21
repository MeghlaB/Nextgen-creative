import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import meghlaImg from "../assets/web_meghla.png";
import arifImg from "../assets/arif.png";
import samihaImg from "../assets/smaia.png";

const teamMembers = [
  {
    name: "Mubaswira Rahman Samiha",
    role: "Team Lead & Web Developer",
    image: samihaImg,
    description:
      "As a MERN Stack Developer skilled in building scalable web applications. Leads teams, manages timelines, and ensures smooth project coordination to deliver quality solutions aligned with business goals.",
  },
  {
    name: "Md. Arif Hassan",
    role: "Web Developer",
    image: arifImg,
    description:
      "MERN Stack Developer focused on crafting full-stack applications with React, Next.js, and Firebase. Combines clean code with responsive design to build impactful and scalable digital products.",
  },
  {
    name: "Meghla Biswas",
    role: "Junior Developer",
    image: meghlaImg,
    description:
      "Front End Developer with skills in React.js and JavaScript. Dedicated to building responsive, user-friendly web apps with a strong focus on performance, accessibility, and continuous learning.",
  },
];

const TeamPage = () => {
  return (
    <div className="w-10/12 mx-auto max-lg:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {teamMembers.map((member, index) => (
          <JackInTheBox key={index}>
            <div className="flex flex-col justify-between h-full text-center shadow-lg p-6 rounded-lg border border-gray-300 border-primary transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_20px_theme(colors.primary.DEFAULT)] hover:cursor-pointer">
              <img
                src={member?.image}
                alt={member.name}
                className="w-48 h-48 object-cover border mx-auto border-gray-300 rounded-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
