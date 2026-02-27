"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=1080&fit=crop&q=80"
          alt="News & Blogs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-900/80" />
        
        <div className="relative h-full flex items-center justify-start px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              News & Blogs
            </h1>
            <p className="text-xl text-white/95">
              Latest stories and updates from the field
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-xl text-gray-600">Blog posts coming soon...</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
