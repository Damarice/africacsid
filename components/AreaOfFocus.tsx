"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faUsers, faTree } from "@fortawesome/free-solid-svg-icons";

const areas = [
  {
    title: "The Peace and Conflict transformation",
    description: "component seeks to build resilience in conflict contexts by developing and strengthening relevant architectures for peace to address conflict",
    icon: faDove,
    link: "/programs/peace-conflict",
    bgColor: "bg-primary",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "The Economic Empowerment",
    description: "focuses on improving the communities' productivity and self-sufficiency through education, training and skills development, and exploiting",
    icon: faUsers,
    link: "/programs/economic",
    bgColor: "bg-accent",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "Climate Change",
    description: "focuses on increasing resilience of the target population to the impacts of climate change, engaging the communities in emission reduction initiatives",
    icon: faTree,
    link: "/programs/climate",
    bgColor: "bg-gold",
    textColor: "text-gray-900",
    iconColor: "text-gray-900",
  },
];

export default function AreaOfFocus() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`${area.bgColor} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group p-6`}
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
