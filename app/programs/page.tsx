"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faChartLine, faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[50vh] min-h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&h=1080&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/80 via-primary-dark/70 to-neutral/80" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Building sustainable solutions across three core pillars
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link href="/programs/peace-conflict" className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary">
                <div className="text-primary text-6xl mb-6 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faDove} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Peace & Conflict Transformation</h3>
                <p className="text-gray-600 mb-6">Building resilience in conflict contexts through peace architectures.</p>
                <span className="text-primary font-semibold">Learn More →</span>
              </div>
            </Link>

            <Link href="/programs/economic" className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-accent">
                <div className="text-accent text-6xl mb-6 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Empowerment</h3>
                <p className="text-gray-600 mb-6">Improving productivity through education and skills development.</p>
                <span className="text-accent font-semibold">Learn More →</span>
              </div>
            </Link>

            <Link href="/programs/climate" className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary-dark">
                <div className="text-secondary-dark text-6xl mb-6 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faSeedling} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Change</h3>
                <p className="text-gray-600 mb-6">Increasing resilience to climate impacts and emission reduction.</p>
                <span className="text-secondary-dark font-semibold">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  );
}
