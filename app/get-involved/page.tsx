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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/80 via-primary-dark/70 to-neutral/80" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Join us in creating lasting change across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              There are many ways you can support our mission and make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ways.map((way, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary"
              >
                <div className={`${way.color} text-6xl mb-6`}>
                  <FontAwesomeIcon icon={way.icon} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{way.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{way.description}</p>
                <Link
                  href={way.link}
                  className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors group"
                >
                  Learn More
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Contact us today to learn more about how you can get involved
          </p>
          <Link
            href="/contact"
            className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
