"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/homehero1.JPG",
    title: "Kawino Women Group in Nyatike, Migori County",
    description: "We are excited about what lies ahead and deeply grateful for the opportunity to co-create change. The Seeds of Change project begins, rooted in community and driven by purpose."
  },
  {
    image: "/homehero2.JPG",
    title: "Why gender-responsive action must anchor Africa's Climate Summit",
    description: "Advancing gender equality and climate action through inclusive policy and community engagement"
  },
  {
    image: "/homehero3.JPG",
    title: "Learning, Growing, and Sowing Seeds of Change",
    description: "The Africa CSID team had the privilege of visiting the Grow Biointensive Agriculture Center of Kenya model farm in Thika, a vibrant hub of agroecological innovation and grassroots resilience."
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on client side only
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

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
    <section 
      className="relative h-screen w-full overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ 
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ 
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)'
          }}
        >
          {/* Background Image with Parallax - optimized with Next.js Image */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{ 
              transform: isMobile ? 'scale(1.1)' : `translate3d(0, ${scrollY * 0.5}px, 0) scale(1.1)`,
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden'
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              quality={80}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/60" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl animate-fade-in-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-left">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right animation-delay-200">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <Link 
                  href="/about" 
                  className="bg-secondary hover:bg-secondary-dark text-neutral font-semibold py-3 px-8 rounded transition-all duration-300 transform active:scale-95 md:hover:scale-105 md:hover:shadow-lg will-change-transform"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 active:bg-white/75 md:hover:bg-white/75"
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
