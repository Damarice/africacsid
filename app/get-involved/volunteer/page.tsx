"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUsers, faHandshake, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const volunteerOpportunities = [
  {
    title: "Community Outreach Volunteer",
    description: "Help us engage with local communities, organize events, and support grassroots initiatives.",
    icon: faUsers,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Research & Documentation",
    description: "Assist in research projects, data collection, and documenting our impact stories.",
    icon: faGraduationCap,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Skills-Based Volunteering",
    description: "Share your professional expertise in areas like IT, communications, finance, or legal support.",
    icon: faHandshake,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Event Support",
    description: "Help organize and facilitate workshops, training sessions, and community events.",
    icon: faHeart,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/hero.JPG"
          alt="Volunteer With Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Volunteer With Us
            </h1>
            <p className="text-lg md:text-xl text-white/95">
              Make a difference by sharing your time, skills, and passion for sustainable development
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Volunteer Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {volunteerOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`${opportunity.bgColor} rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`${opportunity.color} text-5xl mb-4`}>
                  <FontAwesomeIcon icon={opportunity.icon} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Requirements
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">Passion for social change</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">Reliable and committed</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">Team player</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-700">Culturally sensitive</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Apply to Volunteer
          </h2>
          
          <form className="bg-white border-2 border-gray-200 rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none" required />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none" required />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Location</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none" required />
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Area of Interest</label>
              <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none" required>
                <option value="">Select an area</option>
                <option>Community Outreach</option>
                <option>Research & Documentation</option>
                <option>Skills-Based Volunteering</option>
                <option>Event Support</option>
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Why do you want to volunteer?</label>
              <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none" required></textarea>
            </div>
            
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
