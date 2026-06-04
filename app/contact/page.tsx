"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const CF7_CONTACT_ID = "65c91f3";
const WP_URL = "https://resources.africacsid.org";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    "your-name": "",
    "your-email": "",
    "your-subject": "",
    "your-message": "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        `${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_CONTACT_ID}/feedback`,
        { method: "POST", body }
      );
      const data = await res.json();

      if (data.status === "mail_sent") {
        setStatus("success");
        setMessage("Thank you! Your message has been sent successfully.");
        setFormData({ "your-name": "", "your-email": "", "your-subject": "", "your-message": "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/Who we are.jpeg"
          alt="Contact"
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {/* Success / Error message */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  {message}
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {message}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="your-name"
                    value={formData["your-name"]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="your-email"
                    value={formData["your-email"]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="your-subject"
                    value={formData["your-subject"]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="your-message"
                    value={formData["your-message"]}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
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
