"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faUsers, faTree } from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const areas = [
  {
    title: "Peace and Conflict Transformation",
    shortDescription: "Promoting resilience in conflict-affected communities through comprehensive peacebuilding approaches.",
    fullDescription: "The primary objective of this component is to promote and enhance resilience in conflict-affected communities by leveraging relevant architectures for peacebuilding. This will be achieved by adopting a comprehensive and integrated approach that prioritizes the identification and resolution of conflict drivers that exist within these communities.",
    icon: faDove,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&q=60",
    bgColor: "bg-primary",
    activities: [
      "Community dialogue and reconciliation programs",
      "Conflict early warning and response systems",
      "Peace education and training",
      "Support for local peace structures"
    ]
  },
  {
    title: "Economic Empowerment",
    shortDescription: "Improving well-being and self-sufficiency of marginalized communities through sustainable economic solutions.",
    fullDescription: "The Economic Empowerment component of our program is an integral part of our efforts towards improving the well-being, productivity and self-sufficiency of marginalized communities across different regions. Through our comprehensive approach, we aim to address the root causes of poverty and guide our communities towards a more prosperous future.",
    icon: faUsers,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&q=60",
    bgColor: "bg-accent",
    activities: [
      "Skills training and capacity building",
      "Support for women-led cooperatives",
      "Access to microfinance and savings groups",
      "Market linkages and value chain development"
    ]
  },
  {
    title: "Climate Change",
    shortDescription: "Enhancing resilience and advocating for climate justice, biodiversity conservation, and sustainable food systems.",
    fullDescription: "One of our objectives is to address the escalating impacts of climate change, particularly on marginalized communities, by enhancing their overall resilience and advocating for climate justice, biodiversity conservation, and sustainable food systems. We work closely with these communities to boost their capacity to adapt to the impacts of climate change.",
    icon: faTree,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop&q=60",
    bgColor: "bg-secondary",
    activities: [
      "Climate resilience training and agroecology",
      "Sustainable food systems and biodiversity conservation",
      "Climate justice advocacy and policy engagement",
      "Community-based adaptation strategies"
    ]
  },
];

export default function AreaOfFocus() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
      {/* Animated background elements - hidden on mobile to prevent shaking */}
      <div className="hidden md:block absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow will-change-transform" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow will-change-transform" style={{ animationDelay: '1.5s', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-primary mb-2 font-semibold">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas of Focus
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Three core pillars supported by governance and gender-responsive solutions
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={ref}>
          {areas.map((area, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-lg active:shadow-2xl md:hover:shadow-2xl transition-all duration-500 will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${expandedCard === index ? 'md:col-span-3' : ''}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transition: 'all 0.6s ease-out',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div className={`flex ${expandedCard === index ? 'flex-col md:flex-row' : 'flex-col'}`}>
                {/* Image Section */}
                <div className={`relative ${expandedCard === index ? 'h-64 md:h-auto md:w-1/2' : 'h-96 md:h-[500px]'} overflow-hidden`}>
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110 will-change-transform"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 ${area.bgColor} ${expandedCard === index ? 'opacity-60' : 'opacity-85'} transition-opacity duration-300`}></div>
                  
                  {/* Icon and Title on Image (when collapsed) */}
                  {expandedCard !== index && (
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-center text-center text-white">
                      <div className="text-5xl mb-6 transform md:group-hover:scale-110 transition-transform duration-300 will-change-transform">
                        <FontAwesomeIcon icon={area.icon} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                        {area.title}
                      </h3>
                      <p className="text-base md:text-lg mb-8 leading-relaxed max-w-md">
                        {area.shortDescription}
                      </p>
                      
                      {/* Read More Button - Centered */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpanded(index);
                        }}
                        className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold active:bg-gray-100 md:hover:bg-gray-100 transition-all duration-300 transform active:scale-95 md:hover:scale-105 shadow-lg will-change-transform"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        Read More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
                  
                  {/* Icon only when expanded */}
                  {expandedCard === index && (
                    <div className="absolute top-8 left-8 text-6xl text-white">
                      <FontAwesomeIcon icon={area.icon} />
                    </div>
                  )}
                </div>

                {/* Content Section (visible when expanded) */}
                {expandedCard === index && (
                  <div className="p-8 md:w-1/2 bg-white">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                      {area.fullDescription}
                    </p>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Key Activities</h4>
                    <ul className="space-y-3 mb-6">
                      {area.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-base md:text-lg text-gray-700">
                          <span className={`${area.bgColor.replace('bg-', 'text-')} mr-3 mt-1`}>•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Show Less Button (only when expanded) */}
              {expandedCard === index && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="absolute bottom-8 right-8 inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold active:bg-gray-100 md:hover:bg-gray-100 transition-all duration-300 transform active:scale-95 md:hover:scale-105 shadow-lg z-10 will-change-transform"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Show Less
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-base md:text-lg text-gray-600 italic">
            Guided by governance and gender-responsive frameworks
          </p>
        </div>
      </div>
    </section>
  );
}
