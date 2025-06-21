import { AttentionSeeker, Bounce, Flip, Hinge, JackInTheBox, Roll } from "react-awesome-reveal";
import whyUsImage from "../assets/image.png";
import { Typewriter } from "react-simple-typewriter";
export default function WhyChooseUsSection({ }) {
    return <section className="mt-20 px-6" id="why-choose-us">
        <div className="mx-auto text-center">
            <Roll triggerOnce>
                <h2 className="section-title mb-8 space-x-4">
                    <span>Why</span>
                    <span><Typewriter words={['Choose', 'From', 'Try']} loop={true} cursor={false} typeSpeed={80} deleteSpeed={50} delaySpeed={1000} /></span>
                    <span>Us?</span>
                </h2>
            </Roll>
            <div className="md:flex block w-full justify-center items-center">
                <div className="md:w-[50%] w-full text-justify text-lg leading-relaxed">
                    <span className="block">
                        Elevate your digital presence with our cutting-edge software and web development solutions. We specialize in crafting scalable, high-performance applications tailored to meet your business needs.
                    </span>
                    <ul className="list-disc list-inside my-2 text-sm font-light">
                        <li><span className="font-bold">Custom Solutions</span>: Tailored Web & Software Development</li>
                        <li><span className="font-bold">Scalable Architecture</span>: Future-Proof & High-Performance</li>
                        <li><span className="font-bold">Agile Development</span>: Rapid & Flexible Iterations</li>
                        <li><span className="font-bold">24/7 Support</span>: Dedicated Assistance Anytime</li>
                        <li><span className="font-bold">Transparent Pricing</span>: No Hidden Costs</li>
                    </ul>
                    <span className="block">
                        Partner with us to transform your ideas into reality. Our expert team ensures seamless execution, innovation, and long-term success.
                    </span>
                </div>

                <div className="md:w-[50%] w-full overflow-hidden">
                    <Bounce>
                        <img
                            src={whyUsImage}
                            alt="Car Illustration"
                            className="mx-auto  rounded-xl"
                        />
                    </Bounce>
                </div>
            </div>
        </div>
    </section>;
}