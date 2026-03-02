"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    const gap = 32; // gap between items in pixels

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmount += scrollSpeed;
      
      // Get the width of one item plus gap
      const itemWidth = scrollContainer.scrollWidth / (partners.length * 2);
      
      // Reset when we've scrolled through half the items (since we duplicated them)
      if (scrollAmount >= itemWidth * partners.length) {
        scrollAmount = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners & Platforms
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Collaborating for greater impact across Africa
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling content */}
          <div 
            ref={scrollRef}
            className="flex gap-8 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 flex flex-col items-center justify-center p-8 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 group transform hover:-translate-y-2 hover:shadow-xl border-2 border-gray-100 hover:border-primary/30"
              >
                <div className="relative w-full h-24 mb-4 transition-all duration-500 transform group-hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={partner.acronym}
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-contain"
                  />
                </div>
                <div className="text-base md:text-lg font-semibold text-gray-700 text-center group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/platforms"
            className="inline-flex items-center text-primary font-semibold text-xl hover:text-primary-dark transition-colors group"
          >
            View All Partners
            <svg
              className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300"
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
