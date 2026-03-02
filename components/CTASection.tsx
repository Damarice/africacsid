"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-10 md:py-12 bg-primary text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div ref={ref} className="container-custom text-center relative z-10" style={{ WebkitTransform: 'translate3d(0, 0, 0)', transform: 'translate3d(0, 0, 0)' }}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          Join Us in Creating Change
        </h2>
        <p className={`text-lg md:text-xl mb-6 max-w-3xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-200`}>
          Partner with us to build a more inclusive and sustainable Africa
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-400`}>
          <Link
            href="/get-involved"
            className="bg-secondary hover:bg-secondary-dark text-neutral font-semibold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
