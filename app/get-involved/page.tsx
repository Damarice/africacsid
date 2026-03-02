"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faDonate, faUsers, faBullhorn } from "@fortawesome/free-solid-svg-icons";

const ways = [
  {
    title: "Partner With Us",
    description: "Collaborate with Africa CSID to amplify impact and create sustainable solutions for marginalized communities.",
    icon: faHandshake,
    color: "text-primary",
    link: "/get-involved/partner",
  },
  {
    title: "Donate",
    description: "Support our programs and help us reach more communities across Africa with your generous contribution.",
    icon: faDonate,
    color: "text-accent",
    link: "/get-involved/donate",
  },
  {
    title: "Volunteer",
    description: "Join our team of dedicated volunteers and contribute your skills to make a difference in communities.",
    icon: faUsers,
    color: "text-secondary-dark",
    link: "/get-involved/volunteer",
  },
  {
    title: "Advocate",
    description: "Raise awareness about our work and help amplify the voices of marginalized communities.",
    icon: faBullhorn,
    color: "text-primary-dark",
    link: "/get-involved/advocate",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80"
          alt="Get Involved"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get Involved
            </h1>
            <p className="text-xl text-white/95">
              Join us in creating lasting change across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {ways.map((way, index) => (
              <Link
                key={index}
                href={way.link}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary text-center transform hover:-translate-y-2"
              >
                <div className={`${way.color} text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
                  <FontAwesomeIcon icon={way.icon} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {way.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {way.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors">
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Contact us today to learn more about how you can get involved
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary-dark text-neutral font-semibold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
