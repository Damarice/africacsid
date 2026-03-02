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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const statsSlides = [
  {
    title: "Community Empowerment",
    stats: [
      { icon: faUsers, value: "500+", label: "Communities Reached", color: "text-primary", bgColor: "from-primary/10 to-primary/5" },
      { icon: faGraduationCap, value: "2,500+", label: "People Trained", color: "text-accent", bgColor: "from-accent/10 to-accent/5" },
      { icon: faHandHoldingHeart, value: "10,000+", label: "Lives Impacted", color: "text-secondary", bgColor: "from-secondary/10 to-secondary/5" },
    ],
  },
  {
    title: "Environmental Impact",
    stats: [
      { icon: faTree, value: "50,000+", label: "Trees Planted", color: "text-primary", bgColor: "from-primary/10 to-primary/5" },
      { icon: faWater, value: "30+", label: "Water Projects", color: "text-accent", bgColor: "from-accent/10 to-accent/5" },
      { icon: faHome, value: "100+", label: "Villages Supported", color: "text-secondary", bgColor: "from-secondary/10 to-secondary/5" },
    ],
  },
];

export default function StatsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % statsSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Content */}
        <div ref={ref} className="relative min-h-[300px]">
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
                    className={`bg-gradient-to-br ${stat.bgColor} border-2 border-${stat.color.replace('text-', '')}/20 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 150}ms`,
                      transition: 'all 0.6s ease-out'
                    }}
                  >
                    <div className={`${stat.color} text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
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
