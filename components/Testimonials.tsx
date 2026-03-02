"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote: "Africa CSID's work in our community has transformed lives. Their approach to sustainable development is truly remarkable.",
    author: "Community Leader",
    location: "Nyatike, Kenya",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop&q=80",
    borderColor: "border-primary",
  },
  {
    quote: "The climate resilience training provided by Africa CSID has empowered our farmers to adapt to changing weather patterns.",
    author: "Agricultural Coordinator",
    location: "Zanzibar, Tanzania",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&q=80",
    borderColor: "border-accent",
  },
  {
    quote: "Through their economic empowerment programs, we've seen real change in our community's self-sufficiency.",
    author: "Women's Group Leader",
    location: "Migori County, Kenya",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop&q=80",
    borderColor: "border-gold",
  },
  {
    quote: "The peace-building initiatives have brought our divided communities together and created lasting harmony.",
    author: "Peace Ambassador",
    location: "Migori, Kenya",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop&q=80",
    borderColor: "border-secondary",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerSlide;
    return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full animate-float animation-delay-300"></div>
      
      <div className="container-custom relative z-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Voices from the Field
          </h2>
          <p className="text-lg md:text-xl text-gray-700 animate-fade-in-up animation-delay-100">
            Stories of impact and transformation
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Testimonial Cards */}
          <div className="relative min-h-[450px]">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCurrentTestimonials().map((testimonial, index) => (
                  <div
                    key={currentIndex * testimonialsPerSlide + index}
                    className={`bg-white rounded-2xl p-8 shadow-xl border-l-4 ${testimonial.borderColor} flex flex-col justify-between transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="text-3xl text-primary/30 mb-4"
                      />
                      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-cover bg-center border-4 ${testimonial.borderColor} flex-shrink-0`}
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      />
                      <div>
                        <div className="font-bold text-base md:text-lg text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-base md:text-lg text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
