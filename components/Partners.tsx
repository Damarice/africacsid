"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const partners = [
  { name: "AFSTC", logo: "/images/AFSTC.png", acronym: "African Food Systems Transformation Collective" },
  { name: "JRT", logo: "/images/JRT.png", acronym: "Just Rural Transition" },
  { name: "ISFAA", logo: "/images/ISFAA.png", acronym: "Intersectoral Forum on Agrobiodiversity and Agroecology" },
  { name: "CSA MSP", logo: "/images/CSA MSP.png", acronym: "Kenya Climate Smart Agriculture Multi Stakeholder Platform" },
  { name: "KCCWG", logo: "/images/KCCWG.jpeg", acronym: "Kenya Climate Change Working Group" },
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Reduced speed for smoother iOS performance

    const scroll = () => {
      if (!scrollContainer || isPaused) {
        animationFrameRef.current = requestAnimationFrame(scroll);
        return;
      }
      
      scrollAmount += scrollSpeed;
      
      // Get the width of one item plus gap
      const itemWidth = scrollContainer.scrollWidth / (partners.length * 2);
      
      // Reset when we've scrolled through half the items (since we duplicated them)
      if (scrollAmount >= itemWidth * partners.length) {
        scrollAmount = 0;
      }
      
      // Use translate3d for better iOS performance
      scrollContainer.style.transform = `translate3d(-${scrollAmount}px, 0, 0)`;
      scrollContainer.style.webkitTransform = `translate3d(-${scrollAmount}px, 0, 0)`;
      
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container-custom relative z-10" style={{ WebkitTransform: 'translate3d(0, 0, 0)', transform: 'translate3d(0, 0, 0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}>
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners & Platforms
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Collaborating for greater impact across Africa
          </p>
        </div>

        {/* Slideshow Container */}
        <div 
          className="relative overflow-hidden py-8"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling content */}
          <div 
            ref={scrollRef}
            className="flex gap-8"
            style={{ 
              willChange: 'transform',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitTransform: 'translate3d(0, 0, 0)',
              transform: 'translate3d(0, 0, 0)',
              WebkitPerspective: '1000px',
              perspective: '1000px'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 flex flex-col items-center justify-center p-8 bg-white rounded-2xl active:bg-gradient-to-br active:from-primary/10 active:to-secondary/10 md:hover:bg-gradient-to-br md:hover:from-primary/10 md:hover:to-secondary/10 transition-all duration-500 group transform active:scale-95 md:hover:-translate-y-2 md:hover:shadow-xl border-2 border-gray-100 active:border-primary/30 md:hover:border-primary/30 will-change-transform"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  transform: 'translate3d(0, 0, 0)'
                }}
              >
                <div 
                  className="relative w-full h-24 mb-4 transition-all duration-500 transform md:group-hover:scale-110 will-change-transform"
                  style={{ 
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.acronym}
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-contain"
                    style={{ 
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                </div>
                <div className="text-base md:text-lg font-semibold text-gray-700 text-center md:group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/platforms"
            className="inline-flex items-center text-primary font-semibold text-xl active:text-primary-dark md:hover:text-primary-dark transition-colors group"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            View All Partners
            <svg
              className="w-6 h-6 ml-2 md:group-hover:translate-x-2 transition-transform duration-300 will-change-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
