"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faChartLine, faSeedling } from "@fortawesome/free-solid-svg-icons";

const programs = [
  {
    title: "Peace & Conflict Transformation",
    description: "Building resilience in conflict contexts by developing and strengthening relevant architectures for peace.",
    icon: faDove,
    link: "/programs/peace-conflict",
    color: "bg-primary",
  },
  {
    title: "Economic Empowerment",
    description: "Improving communities' productivity and self-sufficiency through education, training, and skills development.",
    icon: faChartLine,
    link: "/programs/economic",
    color: "bg-primary",
  },
  {
    title: "Climate Change",
    description: "Increasing resilience to climate impacts and engaging communities in emission reduction initiatives.",
    icon: faSeedling,
    link: "/programs/climate",
    color: "bg-primary",
  },
];

export default function Programs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Building sustainable solutions across three core pillars, supported by governance and gender-responsive frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border-t-4 border-primary"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${program.color} h-1 transition-all duration-300 group-hover:h-2`} />
              <div className="p-10">
                <div className="text-primary text-6xl mb-8 transform transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon icon={program.icon} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-5 transition-colors duration-300 group-hover:text-primary">
                  {program.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {program.description}
                </p>
                <Link
                  href={program.link}
                  className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors group/link"
                >
                  Learn More
                  <svg
                    className="w-6 h-6 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
