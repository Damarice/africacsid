"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700 ease-out`}>
            <p className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Africa Centre for Sustainable and Inclusive Development
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg md:text-xl">
              <p>
                The Africa Centre for Sustainable and Inclusive Development (Africa CSID) is a leading African 
                NGO registered in Kenya, dedicated to supporting marginalized communities across the continent.
              </p>

              <p>
                Guided by its mission, Africa CSID addresses marginalization through two key dimensions: 
                geographical context and population context.
              </p>

              <p>
                Africa CSID is committed to fostering sustainable development and inclusivity, working 
                tirelessly to uplift underserved communities and create lasting change.
              </p>

              <button className="mt-6 bg-gold hover:bg-secondary-dark text-neutral font-semibold px-8 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 ease-out delay-300`}>
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80"
              alt="Community gathering"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
