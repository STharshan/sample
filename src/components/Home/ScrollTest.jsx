import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "y brother has just had his car done, very professional, excellent service, would highly recommend them.tracey lloydGoogle Revi",
    author: "Sarah Mason",
  },
  {
    quote:
      "y brother has just had his car done, very professional, excellent service, would highly recommend them.tracey lloydGoogle Revi",
    author: "Andrew Beveridge",
  },
  {
    quote: "I've been using DT Valeting for my car cleaning needs, and I can't recommend them enough. Dan does an amazing job every single time, ensuring my car looks its absolute best. He's not only meticulous with cleaning but has also carried out machine polishes and ceramic coatings with exceptional skill. Dan is the only person I trust with my vehicle now. So much so, I have him look after my car every month without fail. If you want someone reliable and skilled to take care of your car, DT Valeting is the way to go.",
    author: "tracey lloyd",
  },
  {
    quote:
      " Danny has valeted both mine and my husband’s cars. He was punctual, works hard and does a very thorough job. Both cars were immaculate by the time Danny had finished working on them. We will definitely be booking him in the future.",
    author: "Julia Ingham",
  },

 
];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
