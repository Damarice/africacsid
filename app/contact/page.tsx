"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[50vh] min-h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/80 via-primary-dark/70 to-neutral/80" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+254113909961</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@africacsid.org</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
