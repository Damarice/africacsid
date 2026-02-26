"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop&q=80",
    title: "Kawino Women Group in Nyatike, Migori County",
    description: "We are excited about what lies ahead and deeply grateful for the opportunity to co-create change. The Seeds of Change project begins, rooted in community and driven by purpose."
  },
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80",
    title: "Why gender-responsive action must anchor Africa's Climate Summit",
    description: "Advancing gender equality and climate action through inclusive policy and community engagement"
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&h=1080&fit=crop&q=80",
    title: "Learning, Growing, and Sowing Seeds of Change",
    description: "The Africa CSID team had the privilege of visiting the Grow Biointensive Agriculture Center of Kenya model farm in Thika, a vibrant hub of agroecological innovation and grassroots resilience."
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70" />

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
                <Link href="/about" className="bg-gold hover:bg-secondary text-gray-900 font-semibold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
