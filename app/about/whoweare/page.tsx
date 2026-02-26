"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />
      
      {/* Hero with Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop&q=80"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/80 via-primary-dark/70 to-neutral/80" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Who We Are
            </h1>
            <p className="text-2xl text-white/95">
              Africa Centre for Sustainable and Inclusive Development
            </p>
          </div>
        </div>
      </section>

      {/* About with Image and Text Side by Side */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop&q=80"
                alt="Community work"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Africa CSID
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  is an African NGO, registered in Kenya, working with the marginal communities across the continent. 
                  Informed by the marginalization typologies, marginalization is defined by two dimensions parameters 
                  namely geographical and population context.
                </p>
                <p>
                  It is against this background that Africa CSID has developed a strategic plan that focuses on three 
                  core pillars namely Peace and Conflict Transformation, Economic Empowerment, and Climate Change. 
                  These pillars are supported by two critical enablers—governance and gender-responsive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=800&fit=crop&q=80"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/80 to-accent/60" />
              <div className="relative h-full flex flex-col justify-end p-10 text-white">
                <FontAwesomeIcon icon={faEye} className="text-6xl mb-6" />
                <h3 className="text-4xl font-bold mb-4">VISION</h3>
                <p className="text-xl">
                  Sustainable societies that promote access and finance generations
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=800&fit=crop&q=80"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/95 via-gold/80 to-gold/60" />
              <div className="relative h-full flex flex-col justify-end p-10 text-neutral">
                <FontAwesomeIcon icon={faBullseye} className="text-6xl mb-6" />
                <h3 className="text-4xl font-bold mb-4">MISSION</h3>
                <p className="text-xl">
                  To facilitate the empowerment that promotes equality, peace and livelihood of the 
                  marginalized communities through sustainable and inclusive development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives - Simple List with Image Background */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Enhance evidence-based policy-making",
              "Promote conflict-sensitive approaches",
              "Promote research on marginalized communities",
              "Facilitate civil society engagement",
              "Promote gender-responsive management",
              "Promote sustainable financing",
              "Promote partnerships and networking",
              "Promote people-led development",
              "Put communities first"
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl"
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Image Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Inclusiveness", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&q=80" },
              { name: "Integrity", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop&q=80" },
              { name: "Transparency", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop&q=80" },
              { name: "Equity", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop&q=80" },
              { name: "Accountability", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop&q=80" },
              { name: "Sustainability", img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=400&fit=crop&q=80" }
            ].map((value, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={value.img}
                  alt={value.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 group-hover:from-primary to-primary/60 transition-all duration-300" />
                <div className="relative h-full flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{value.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  );
}
