"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CallToAction() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative py-16 md:py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=600&fit=crop&q=80')",
      }}
    >
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=600&fit=crop&q=80')",
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/95" />
      
      {/* Animated floating elements - hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative container-custom text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up leading-tight">
          Join Us in Building a Better Africa
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          Partner with us to create lasting change in marginalized communities across the continent
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link
            href="/get-involved/partner"
            className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Partner With Us
          </Link>
          <Link
            href="/get-involved"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
