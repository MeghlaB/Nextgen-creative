import { Slide } from "react-slideshow-image";
import { Bounce, JackInTheBox, Zoom, Fade } from 'react-awesome-reveal';
import ClentReview from "../pages/ClentReview";

export default ({ }) => {

    const testimonials = [
        { 
            name: "Alice Johnson", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_52ohYMqFwf18gOAaAwpLdIH_Qf54wq0ybk_py8EkNjnss9KfpSo1YuQCdvpT7Rp_rwguoAsBgQ9uP03agZY0w", 
            rating: 5, 
            text: "Outstanding development team! They built a robust and scalable solution for our business." 
        },
        { 
            name: "Bob Smith", 
            image: "https://innovation.gwu.edu/sites/g/files/zaxdzs4966/files/2023-01/bobheadshotrect.jpg", 
            rating: 4, 
            text: "Professional service with great attention to detail. Our website turned out amazing!" 
        },
        { 
            name: "Clara Davis", 
            image: "https://media.licdn.com/dms/image/v2/C5103AQGXAV2-OR0E6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516985328996?e=2147483647&v=beta&t=n48mZ9IChQ07ZO1OUmbqu6z7IuGH3dTtjniDbOmajsk", 
            rating: 5, 
            text: "Exceptional UI/UX design and seamless functionality. Highly recommended!" 
        },
        { 
            name: "Daniel Carter", 
            image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.8, 
            text: "A top-tier development team that delivered beyond expectations!" 
        },
        { 
            name: "Emily Roberts", 
            image: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.5, 
            text: "Highly skilled developers who turned our vision into reality seamlessly." 
        },
        { 
            name: "Franklin Adams", 
            image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.9, 
            text: "Their innovative solutions and commitment to quality were impressive!" 
        },
        { 
            name: "Grace Williams", 
            image: "https://images.pexels.com/photos/5257554/pexels-photo-5257554.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.7, 
            text: "Excellent service with great attention to detail and user experience." 
        },
        { 
            name: "Henry Turner", 
            image: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.6, 
            text: "Their expertise in software development helped us scale quickly." 
        },
        { 
            name: "Isabella Morgan", 
            image: "https://images.pexels.com/photos/5920774/pexels-photo-5920774.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 5.0, 
            text: "One of the best development experiences we've had—highly recommended!" 
        },
        { 
            name: "Jack Nelson", 
            image: "https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.4, 
            text: "Reliable, professional, and efficient team. Loved working with them!" 
        },
        { 
            name: "Kelly Brooks", 
            image: "https://images.pexels.com/photos/4511649/pexels-photo-4511649.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.8, 
            text: "Seamless development process with clear communication and execution." 
        },
        { 
            name: "Liam Foster", 
            image: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.3, 
            text: "They built our web app with precision and delivered on time!" 
        },
        { 
            name: "Mia Evans", 
            image: "https://images.pexels.com/photos/6084178/pexels-photo-6084178.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 5.0, 
            text: "An outstanding team with deep technical expertise and creativity!" 
        },
        { 
            name: "Noah Bennett", 
            image: "https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.9, 
            text: "Their solutions were tailored to our needs and performed exceptionally well." 
        },
        { 
            name: "Olivia Reed", 
            image: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.2, 
            text: "Great development experience with top-notch quality and support!" 
        },
        { 
            name: "Patrick Simmons", 
            image: "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.7, 
            text: "They modernized our system with the latest technology seamlessly!" 
        },
        { 
            name: "Quinn Howard", 
            image: "https://images.pexels.com/photos/7328501/pexels-photo-7328501.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.6, 
            text: "Highly responsive team with exceptional problem-solving skills!" 
        },
        { 
            name: "Rachel Carter", 
            image: "https://images.pexels.com/photos/3799772/pexels-photo-3799772.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.9, 
            text: "Their work exceeded expectations—our platform is now more robust than ever!" 
        },
        { 
            name: "Samuel White", 
            image: "https://images.pexels.com/photos/4350097/pexels-photo-4350097.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.5, 
            text: "Reliable and innovative, they provided solutions that optimized our workflow!" 
        },
        { 
            name: "Tina Green", 
            image: "https://images.pexels.com/photos/8636600/pexels-photo-8636600.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.8, 
            text: "Their UI/UX expertise transformed our website into a user-friendly experience!" 
        },
        { 
            name: "Ulysses Brown", 
            image: "https://images.pexels.com/photos/14438790/pexels-photo-14438790.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.4, 
            text: "From planning to execution, their development process was seamless." 
        },
        { 
            name: "Victoria King", 
            image: "https://images.pexels.com/photos/5726691/pexels-photo-5726691.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.7, 
            text: "Amazing team! They delivered our project ahead of schedule with perfection." 
        },
        { 
            name: "William Lee", 
            image: "https://images.pexels.com/photos/3677094/pexels-photo-3677094.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.9, 
            text: "Great problem-solvers! They tackled every challenge efficiently." 
        },
        { 
            name: "Xavier Young", 
            image: "https://images.pexels.com/photos/6873954/pexels-photo-6873954.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.3, 
            text: "Professional and dedicated developers with outstanding support." 
        },
        { 
            name: "Yvonne Scott", 
            image: "https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.5, 
            text: "They built a scalable and high-performance solution for our business!" 
        },
        { 
            name: "Zachary Hill", 
            image: "https://images.pexels.com/photos/5257495/pexels-photo-5257495.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.8, 
            text: "Their development expertise ensured our project was a huge success!" 
        },
        { 
            name: "Alice Johnson", 
            image: "https://images.pexels.com/photos/5257499/pexels-photo-5257499.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 5.0, 
            text: "Best development experience ever! Highly skilled and professional team." 
        },
        { 
            name: "Bob Smith", 
            image: "https://images.pexels.com/photos/5920753/pexels-photo-5920753.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.6, 
            text: "Their commitment to excellence made our project a seamless success." 
        },
        { 
            name: "Clara Davis", 
            image: "https://images.pexels.com/photos/14596539/pexels-photo-14596539.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.7, 
            text: "Amazing web development team! Delivered exactly what we envisioned." 
        },
        { 
            name: "Daniel Carter", 
            image: "https://images.pexels.com/photos/7242901/pexels-photo-7242901.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.9, 
            text: "They delivered a top-quality solution with perfect execution!" 
        },
        { 
            name: "Emily Roberts", 
            image: "https://images.pexels.com/photos/4498509/pexels-photo-4498509.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.5, 
            text: "Exceptional web development service, highly recommended!" 
        },
        { 
            name: "Franklin Adams", 
            image: "https://images.pexels.com/photos/6084049/pexels-photo-6084049.jpeg?auto=compress&cs=tinysrgb&w=600", 
            rating: 4.8, 
            text: "Their tech expertise and customer service were top-notch!" 
        }
    ];
    // alert(testimonials.length)


    return <section className="mt-20 text-center max-w-4xl mx-auto" id="reviews">
        <h2 className="section-title mb-8">
            <ClentReview/>
        </h2>
        <Slide pauseOnHover={true} autoplay={true} duration={1000} infinite canSwipe arrows={true} >
            {testimonials.map((testimonial, index) => (
                <div key={index} className="mx-auto flex flex-col items-center max-w-3xl bg-black/5 shadow-lg p-6 rounded-lg select-none cursor-grab active:cursor-grabbing">
                    {index == 0 ?
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                        />
                        :
                        <JackInTheBox delay={200} >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                            />
                        </JackInTheBox>}
                    <Bounce delay={300}>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    </Bounce>
                    <Zoom delay={300}>
                        <div className="flex mb-2">
                            {Array.from({ length: testimonial.rating }, (_, i) => (
                                <span key={i} className="text-yellow-500">★</span>
                            ))}
                        </div>
                    </Zoom>
                    <Fade delay={500}>
                        <p className="text-sm text-gray-600">{testimonial.text}</p>
                    </Fade>
                </div>
            ))}
        </Slide>
    </section>;
}