"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10" style={{ WebkitTransform: 'translate3d(0, 0, 0)', transform: 'translate3d(0, 0, 0)' }}>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700 ease-out flex flex-col`}>
            <p className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Africa Centre for Sustainable and Inclusive Development
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg flex-1">
              <p>
                Africa CSID is a Kenya-registered African non-governmental organization committed to advancing 
                inclusive and sustainable development across the continent. We focus on addressing the structural 
                drivers of marginalization, recognizing that exclusion is shaped by both geographical disadvantages, 
                including underserved and hardship regions, and population-based vulnerabilities affecting specific groups.
              </p>

              <p>
                We believe that meaningful and lasting transformation happens when communities lead the design and 
                delivery of solutions that affect their lives.
              </p>

              {/* Expandable content */}
              <div
                className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>
                  Africa CSID was founded by Salome Owuonda, whose lived experience growing up in Nyatike, an arid 
                  and historically marginalised region of Kenya, deeply shapes the mission of the organisation. As a 
                  young girl, she experienced and witnessed the realities of marginalization: long distances walked in 
                  search of water and education, impacts of drought and famine, and the prevalence of early marriages 
                  and teenage pregnancies. These challenges were often compounded by resource-based conflicts, 
                  reinforcing cycles of vulnerability and exclusion.
                </p>

                <p>
                  These experiences shaped Salome&apos;s understanding that marginalization is multi-dimensional and 
                  interconnected, requiring responses that are practical, locally grounded, and scalable. Africa CSID 
                  was therefore established to turn this belief into action. We place communities at the centre of 
                  development as active agents, not passive beneficiaries — ensuring that solutions reflect local 
                  realities, are integrated, and lead to sustained long-term change.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-primary font-semibold underline underline-offset-4 hover:text-primary/70 transition-colors duration-200"
                >
                  {expanded ? "Read Less ↑" : "Read More ↓"}
                </button>
                <Link href="/about/whoweare">
                  <button className="bg-gold hover:bg-secondary-dark text-neutral font-semibold px-8 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 ease-out delay-300`}>
            <Image
              src="/HomeAbout Us.JPG"
              alt="Africa CSID community work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
