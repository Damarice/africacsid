"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGlobe, 
  faHandshake, 
  faSeedling, 
  faLeaf, 
  faCloudSun,
  faLink,
  faBriefcase,
  faNetworkWired,
  faLandmark,
  faBullseye,
  faChartBar,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const partners = [
  { name: "AFSTC", icon: faGlobe, color: "text-primary" },
  { name: "JRT", icon: faHandshake, color: "text-secondary" },
  { name: "ISFAA", icon: faSeedling, color: "text-accent" },
  { name: "CSA MSP", icon: faLeaf, color: "text-primary" },
  { name: "KCCWG", icon: faCloudSun, color: "text-secondary" },
  { name: "Partner 6", icon: faLink, color: "text-accent" },
  { name: "Partner 7", icon: faBriefcase, color: "text-primary" },
  { name: "Partner 8", icon: faNetworkWired, color: "text-secondary" },
  { name: "Partner 9", icon: faLandmark, color: "text-accent" },
  { name: "Partner 10", icon: faBullseye, color: "text-primary" },
  { name: "Partner 11", icon: faChartBar, color: "text-secondary" },
  { name: "Partner 12", icon: faStar, color: "text-accent" },
];

export default function Partners() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-transparent to-sand/30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners & Platforms
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Collaborating for greater impact across Africa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-cream hover:to-sand transition-all duration-500 group transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`${partner.color} text-6xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12`}>
                <FontAwesomeIcon icon={partner.icon} />
              </div>
              <div className="text-base font-semibold text-gray-700 text-center group-hover:text-primary transition-colors duration-300">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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
