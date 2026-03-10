"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />
      
      {/* Hero with Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Community"
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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Africa Centre for Sustainable and Inclusive Development
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Compact */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About the Organization
          </h2>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              <strong>Africa Centre for Sustainable and Inclusive Development (Africa CSID)</strong> is an African NGO, registered in Kenya, working with the marginalized communities in Africa. 
              Informed by the organization's mandate, marginalization is defined by two interrelated parameters 
              namely geographical and population context of marginalization.
            </p>
            <p>
              The organization works on three areas; Peace and Conflict Transformation, Economic Empowerment, 
              and Climate Change with governance and gender-responsive solutions as enablers and overarching 
              actions in undertaking these three components.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Compact Side by Side */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white border-l-4 border-accent p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faEye} className="text-2xl text-accent" />
                <h3 className="text-2xl font-bold text-gray-900">VISION</h3>
              </div>
              <p className="text-gray-700">
                Development actions that protect current and future generations
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border-l-4 border-gold p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faBullseye} className="text-2xl text-gold" />
                <h3 className="text-2xl font-bold text-gray-900">MISSION</h3>
              </div>
              <p className="text-gray-700">
                Advocate for development that considers specific needs and interests of the marginalized communities without compromising the needs of the future generations in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives - Compact */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Objectives
          </h2>
          
          <div className="space-y-3">
            {[
              "To enhance evidence-based policy making, accountable governance and inclusive, pro-marginalized sustainable development through advocacy",
              "To conduct rigorous research on marginalized communities and people, and facilitate multi-stakeholder engagement on the outcomes of such research",
              "To develop and strengthen capacity of non-state actors to influence and shape the conduct of public policy; demand accountability from government; and identify and advance marginalized communities and people interests",
              "Amplify the voice of the marginalized communities on effective, sustainable development",
              "Support innovative and practical people led development actions among marginalized communities"
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Compact Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Integrity and ethics", color: "border-primary" },
              { name: "Respect", color: "border-secondary" },
              { name: "Innovation", color: "border-accent" },
              { name: "Trust", color: "border-gold" },
              { name: "Ingenuity", color: "border-primary-dark" },
              { name: "Accountability", color: "border-accent-dark" },
              { name: "Value-centricity", color: "border-secondary-dark" }
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-white border-l-4 ${value.color} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
              >
                <h3 className="text-base font-bold text-gray-900 text-center">{value.name}</h3>
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
