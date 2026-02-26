"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[50vh] min-h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/80 via-primary-dark/70 to-neutral/80" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Publications
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Research, reports, and insights from our work
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-xl text-gray-600">Publications coming soon...</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
