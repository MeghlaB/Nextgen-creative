import Reveal, { Bounce, Fade, JackInTheBox, Zoom } from "react-awesome-reveal";

export default ({ title, skills, isOther }) => (
    <div className="mt-10 text-center">
        <div className="text-xl font-bold ">{title}</div>
        <div className="flex xl:flex-wrap xl:justify-center mt-6 xl:gap-8 max-xl:gap-4 max-xl:overflow-x-scroll max-xl:overflow-y-visible max-xl:pb-4 scrollbar-thin">
            {skills.map((skill, index) => (
                <Fade    key={index}>
                    <Bounce>
                        <div
                            onClick={() => window.open(`https://www.google.com/search?q=${skill.name}`)}
                            className={`${isOther?"w-32 ":"w-48 "} max-xl:w-32 transition-all flex flex-col items-center bg-white xl:hover:scale-110 xl:backdrop-blur-sm border-2 border-white rounded-lg shadow-lg p-4   cursor-pointer duration-300 xl:drop-shadow-[0_0_1px_theme(colors.primary.DEFAULT)] xl:hover:drop-shadow-[0_0_10px_theme(colors.primary.DEFAULT)] hover:bg-gray-200 xl:active:drop-shadow-[0_0_20px_theme(colors.primary.DEFAULT)] xl:active:scale-105`}
                        >
                            <img src={skill.image} alt={skill.name} className={`${isOther?"w-12 h-12":"w-16 h-16"} mb-4 max-xl:w-8 max-xl:h-8 object-contain`} />
                            <span className={`${isOther?"text-sm":"text-lg "} max-xl:text-sm font-medium`}>{skill.name}</span>
                        </div>
                    </Bounce>
                </Fade>
            ))}
        </div>
    </div>
);