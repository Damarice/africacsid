"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, 
  faGraduationCap, 
  faHandHoldingHeart, 
  faTree,
  faWater,
  faHome
} from "@fortawesome/free-solid-svg-icons";

const statsSlides = [
  {
    title: "Community Empowerment",
    stats: [
      { icon: faUsers, value: "500+", label: "Communities Reached" },
      { icon: faGraduationCap, value: "2,500+", label: "People Trained" },
      { icon: faHandHoldingHeart, value: "10,000+", label: "Lives Impacted" },
    ],
  },
  {
    title: "Environmental Impact",
    stats: [
      { icon: faTree, value: "50,000+", label: "Trees Planted" },
      { icon: faWater, value: "30+", label: "Water Projects" },
      { icon: faHome, value: "100+", label: "Villages Supported" },
    ],
  },
];

export default function StatsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % statsSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom">
        {/* Content */}
        <div className="relative min-h-[300px]">
          {statsSlides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`transition-opacity duration-700 ${
                slideIndex === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {slide.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {slide.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-primary text-4xl mb-4">
                      <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {statsSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 h-3 bg-primary rounded-full"
                  : "w-3 h-3 bg-gray-300 rounded-full hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
