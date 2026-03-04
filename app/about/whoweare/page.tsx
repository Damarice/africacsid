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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Who We Are
            </h1>
            <p className="text-xl text-white/95">
              Africa Centre for Sustainable and Inclusive Development
            </p>
          </div>
        </div>
      </section>

      {/* About with Image and Text Side by Side */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/community-work-1.JPG"
                alt="Community work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl shadow-2xl"
                quality={75}
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                About the Organization
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong>Africa Centre for Sustainable and Inclusive Development (Africa CSID)</strong>
                </p>
                <p>
                  is an African NGO, registered in Kenya, working with the marginalized communities in Africa. 
                  Informed by the organization's mandate, marginalization is defined by two interrelated parameters 
                  namely geographical and population context of marginalization. The geographical context of 
                  marginalization is defined by country-specific categorization of hardship areas. The population 
                  context is defined using global indices and parameters that define different groups as marginalized 
                  or vulnerable.
                </p>
                <p>
                  The organization works on three areas; Peace and Conflict Transformation, Economic Empowerment, 
                  and Climate Change with governance and gender-responsive solutions as enablers and overarching 
                  actions in undertaking these three components. Africa CSID's work is underpinned by three 
                  interlinked approaches to work namely voice, capacity and influence with all interventions 
                  focusing on amplifying the voices of the marginalized communities, actions to strengthen local 
                  capacities and effecting change through policy influence at local, national and continental levels.
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
              <Image
                src="/community-work-2.JPG"
                alt="Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                quality={75}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/80 to-accent/60" />
              <div className="relative h-full flex flex-col justify-end p-10 text-white">
                <FontAwesomeIcon icon={faEye} className="text-6xl mb-6" />
                <h3 className="text-4xl font-bold mb-4">VISION</h3>
                <p className="text-xl">
                  Development actions that protect current and future generations
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/community-work-4.JPG"
                alt="Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                quality={75}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/95 via-gold/80 to-gold/60" />
              <div className="relative h-full flex flex-col justify-end p-10 text-neutral">
                <FontAwesomeIcon icon={faBullseye} className="text-6xl mb-6" />
                <h3 className="text-4xl font-bold mb-4">MISSION</h3>
                <p className="text-xl">
                  Advocate for development that considers specific needs and interests of the marginalized communities without compromising the needs of the future generations in Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives - Simple List with Image Background */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "To enhance evidence-based policy making, accountable governance and inclusive, pro-marginalized sustainable development through advocacy",
              "To conduct rigorous research on marginalized communities and people, and facilitate multi-stakeholder engagement on the outcomes of such research",
              "To develop and strengthen capacity of non-state actors to influence and shape the conduct of public policy; demand accountability from government; and identify and advance marginalized communities and people interests",
              "Amplify the voice of the marginalized communities on effective, sustainable development",
              "Support innovative and practical people led development actions among marginalized communities"
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl"
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-700 text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Image Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Integrity and ethics", img: "/community-work-3.JPG" },
              { name: "Respect", img: "/community-work-5.JPG" },
              { name: "Innovation", img: "/community-work-6.JPG" },
              { name: "Trust", img: "/community-work-7.JPG" },
              { name: "Ingenuity", img: "/community-work-9.JPG" },
              { name: "Accountability", img: "/community-work-10.JPG" },
              { name: "Value-centricity", img: "/community-work-11.JPG" }
            ].map((value, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image
                  src={value.img}
                  alt={value.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={70}
                  loading="lazy"
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
