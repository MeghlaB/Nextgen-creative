import { Fade } from "react-awesome-reveal";
import SkillCategory from "../components/SkillCategory";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

const AboutUs = ({ details }) => {
    return (
        <Fade cascade={true} className="w-11/12 md:w-10/12 mx-auto bg-gray-100 flex items-center justify-center p-4 md:p-6">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 md:p-6">

                <p className="text-gray-600 mb-4 text-center text-sm md:text-base">
                    Welcome to our platform! We are dedicated to providing the best services and
                    solutions for our customers. Our mission is to deliver high-quality
                    products that make life easier and more enjoyable.
                </p>

                <div className="w-full">
                    {/* Header Section */}
                    <div className="bg-green-200 text-green-700 py-10 md:py-16 px-4 md:px-6 text-center">
                        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg">
                            We specialize in developing <b>high-quality</b> and <b>scalable</b> software solutions,
                            including <b>Android, iOS, React Native, Java (Android Studio), and Web Development</b>.
                            Our mission is to empower businesses with <b>cutting-edge technology</b>.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="w-full px-4 md:px-6 py-8 md:py-12 bg-gray-100">
                        <div>
                            <h2 className="text-xl md:text-2xl text-center font-semibold text-green-700 mb-3">What We Do</h2>
                            <p className="text-gray-700 text-sm md:text-base">
                                Our team provides <b>custom software development</b> services to
                                create powerful applications for mobile and web platforms.
                            </p>
                            <ul className="mt-4 list-disc list-inside text-gray-700 text-sm md:text-base">
                                <li><span className="font-semibold text-gray-600">Android Development:</span> Java, Kotlin, Android Studio</li>
                                <li><span className="font-semibold text-gray-600">iOS Development:</span> Swift, Objective-C</li>
                                <li><span className="font-semibold text-gray-600">Cross-Platform Apps:</span> React Native, Flutter</li>
                                <li><span className="font-semibold text-gray-600">Web Development:</span> React.js, Node.js, PHP</li>
                                <li><span className="font-semibold text-gray-600">Backend & Database:</span> MySQL, Firebase, MongoDB</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="bg-gray-50 pt-8 md:pt-12 px-4 md:px-6 text-center">
                        <h2 className="text-xl md:text-2xl font-semibold text-green-800">Technologies We Use</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-sm md:text-base">
                            We work with the latest tools and frameworks to deliver <b>secure, scalable, and
                                high-performance</b> software solutions.
                        </p>

                        {"skills" in details &&
                            <div className="flex flex-wrap justify-center gap-4 mt-6">
                                <section className="px-2 md:px-8 pb-8 md:pb-16 w-full" id="skills">
                                    <SkillCategory title="Front-end" skills={details.skills.frontend} />
                                    <SkillCategory title="Back-end" skills={details.skills.backend} />
                                    <SkillCategory title="Graphics & Animation" skills={details.skills.graphics} isOther={true} />
                                    <SkillCategory title="Other" skills={details.skills.other} isOther={true} />
                                </section>
                            </div>
                        }
                    </div>
                </div>

                {/* Vision, Values, Team */}
                <div className="px-2 md:px-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-6 mb-2 mt-8">Our Vision</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        We aim to revolutionize the industry by incorporating innovative technology
                        and user-centric designs that enhance productivity and efficiency.
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-6 mb-2">Our Values</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        We believe in honesty, integrity, and transparency. We strive to build
                        long-lasting relationships with our customers by providing exceptional
                        service and support.
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-6 mb-2">Our Team</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Our team is made up of talented and experienced professionals who are
                        passionate about what they do. We work together to create innovative
                        solutions that meet the needs of our customers.
                    </p>
                </div>
            </div>
        </Fade>
    );
};

export default AboutUs;
