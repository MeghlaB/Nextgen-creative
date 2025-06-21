import React from "react";
import { Roll } from "react-awesome-reveal";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Portfolio from "./Hooks/Portfolio";

const ProjectCards = ({ projects }) => {
    return (
       <>
        <Portfolio className=""/>
        <div className="py-10 max-sm:overflow-hidden max-sm:overflow-x-scroll scrollbar-thin">
            <div className="container mx-auto xl:px-4">
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {projects.length > 0 &&  projects.map((project, index) => (
                        <Roll key={index}>
                            <div
                                key={index}
                                className="max-xl:w-96 max-sm:w-64 w-80 mx-auto transition-all bg-white hover:scale-105 border-2 border-gray-200 rounded-lg shadow-lg p-4 cursor-pointer duration-300 hover:shadow-xl hover:bg-gray-50 active:shadow-2xl active:scale-100"
                            >
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className="w-full h-48 object-cover bg-gray-100 rounded-lg"
                                />
                                <div className="flex justify-between items-center py-4">
                                    <div className="text-lg font-semibold text-gray-800">
                                        {project.title}
                                    </div>
                                    <Link
                                        to={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 !flex items-center space-x-2 py-2 text-white bg-green-800 hover:bg-green-700 rounded-lg"
                                    >
                                        <span>Live</span>
                                        <span><FaExternalLinkAlt /></span>
                                    </Link>
                                </div>
                            </div>
                        </Roll>
                    ))}
                </div>
            </div>
        </div>
       </>
    );
};

export default ProjectCards;
