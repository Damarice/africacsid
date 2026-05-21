"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUsers, faHandshake, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CF7_VOLUNTEER_ID = "04290a6";
const WP_URL = "https://resources.africacsid.org";

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
  const [formData, setFormData] = useState({
    "full-name": "",
    "your-email": "",
    "your-phone": "",
    "your-location": "",
    "area-of-interest": "",
    "why-volunteer": "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      const res = await fetch(
        `${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_VOLUNTEER_ID}/feedback`,
        { method: "POST", body }
      );
      const data = await res.json();

      if (data.status === "mail_sent") {
        setStatus("success");
        setMessage("Thank you for applying! We will be in touch soon.");
        setFormData({
          "full-name": "",
          "your-email": "",
          "your-phone": "",
          "your-location": "",
          "area-of-interest": "",
          "why-volunteer": "",
        });
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to submit application. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Volunteer With Us"
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
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

          {/* Success / Error message */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
              {message}
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
              {message}
            </div>
          )}
          
          <form
            className="bg-white border-2 border-gray-200 rounded-xl p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="full-name"
                  value={formData["full-name"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="your-email"
                  value={formData["your-email"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="your-phone"
                  value={formData["your-phone"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">Location</label>
                <input
                  type="text"
                  name="your-location"
                  value={formData["your-location"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Area of Interest</label>
              <select
                name="area-of-interest"
                value={formData["area-of-interest"]}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              >
                <option value="">Select an area</option>
                <option value="Community Outreach">Community Outreach</option>
                <option value="Research & Documentation">Research & Documentation</option>
                <option value="Skills-Based Volunteering">Skills-Based Volunteering</option>
                <option value="Event Support">Event Support</option>
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Why do you want to volunteer?</label>
              <textarea
                name="why-volunteer"
                value={formData["why-volunteer"]}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
