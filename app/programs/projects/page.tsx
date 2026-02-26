"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Programs & Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Specific initiatives driving change across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Programs & Projects Coming Soon
            </h2>
            <p className="text-lg text-gray-700">
              We are currently updating this section with our specific programs and projects. 
              Please check back soon for detailed information about our ongoing initiatives.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  );
}
