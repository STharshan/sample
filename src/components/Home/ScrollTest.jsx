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
    quote: "My brother has just had his car done, very professional, excellent service, would highly recommend them.",
    author: "tracey lloyd",
  },
  {
    quote:
      "Excellent service had 2 cars in there and no problems as of yet got my next car ready to go in",
    author: "BMJ Killeen",
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
