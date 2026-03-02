"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % statsSlides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + statsSlides.length) % statsSlides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 relative overflow-hidden" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
      {/* Animated background elements - reduced for mobile performance */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float will-change-transform" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float will-change-transform" style={{ animationDelay: '1.5s', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Content */}
        <div 
          ref={ref} 
          className="relative min-h-[300px] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
        >
          {statsSlides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`transition-opacity duration-700 will-change-opacity ${
                slideIndex === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
              style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {slide.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {slide.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${stat.bgColor} border-2 border-${stat.color.replace('text-', '')}/20 rounded-xl p-8 text-center active:shadow-xl transition-all duration-500 transform active:scale-95 md:hover:shadow-xl md:hover:-translate-y-2 md:hover:scale-105 group will-change-transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 150}ms`,
                      transition: 'all 0.6s ease-out',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    <div className={`${stat.color} text-5xl mb-4 transform transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-6 will-change-transform`}>
                      <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-base md:text-lg text-gray-600 font-medium">
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
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              className={`transition-all duration-300 touch-manipulation ${
                index === currentSlide
                  ? "w-12 h-3 bg-primary rounded-full"
                  : "w-3 h-3 bg-gray-300 rounded-full active:bg-primary/50 md:hover:bg-primary/50"
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
