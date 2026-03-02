"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faUsers, faTree } from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const areas = [
  {
    title: "The Peace and Conflict Transformation",
    description: "The primary objective of this component is to promote and enhance resilience in conflict-affected communities by leveraging relevant architectures for peacebuilding. This will be achieved by adopting a comprehensive and integrated approach that prioritizes the identification and resolution of conflict drivers that exist within these communities.",
    icon: faDove,
    link: "/programs/peace-conflict",
    bgColor: "bg-primary",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "The Economic Empowerment",
    description: "The Economic Empowerment component of our program is an integral part of our efforts towards improving the well-being, productivity and self-sufficiency of marginalized communities across different regions. Through our comprehensive approach, we aim to address the root causes of poverty and guide our communities towards a more prosperous future.",
    icon: faUsers,
    link: "/programs/economic",
    bgColor: "bg-accent",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "The Climate Change",
    description: "One of our objectives is to address the escalating impacts of climate change, particularly on marginalized communities, by enhancing their overall resilience and advocating for climate justice, biodiversity conservation, and sustainable food systems. We work closely with these communities to boost their capacity to adapt to the impacts of climate change.",
    icon: faTree,
    link: "/programs/climate",
    bgColor: "bg-gradient-to-br from-gold to-secondary",
    textColor: "text-neutral",
    iconColor: "text-neutral",
  },
];

export default function AreaOfFocus() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Area of Focus
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              At the Africa Centre for Sustainable and Inclusive Development (Africa CSID), our work is centered 
              around three core pillars: Peace and Conflict Transformation, Economic Empowerment, 
              and Climate Change. These pillars are supported by two critical enablers—governance and 
              gender-responsive solutions—which serve as overarching frameworks guiding our initiatives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Images side by side */}
          <div className="h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80"
              alt="Community work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80"
              alt="Agricultural training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={ref}>
          {areas.map((area, index) => (
            <div
              key={index}
              className={`${area.bgColor} rounded-lg shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden group p-6 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className={`${area.iconColor} text-4xl mb-4`}>
                <FontAwesomeIcon icon={area.icon} />
              </div>
              <h3 className={`text-xl font-bold ${area.textColor} mb-3 leading-tight`}>
                {area.title}
              </h3>
              <p className={`${area.textColor} mb-4 leading-relaxed text-base opacity-90`}>
                {area.description}
              </p>
              <Link
                href={area.link}
                className={`inline-flex items-center ${area.textColor} font-semibold hover:opacity-80 transition-opacity`}
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
