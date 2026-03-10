"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    name: "Salome Owuonda",
    position: "Executive Director",
    image: null, // Add photo later
    bio: "Leading Africa CSID's mission to support marginalized communities across Africa through sustainable and inclusive development.",
  },
  {
    name: "Hezborn Ouma",
    position: "Programme and Operations Coordinator",
    image: null, // Add photo later
    bio: "Coordinating program implementation and operations across peace, economic, and climate initiatives.",
  },
  {
    name: "Clifford Odero",
    position: "Monitoring, Evaluation, Accountability & Learning (MEAL) Officer",
    image: null, // Add photo later
    bio: "Ensuring program effectiveness through comprehensive monitoring, evaluation, and learning frameworks.",
  },
  {
    name: "Marylyne",
    position: "Communication & Programs Support Assistant",
    image: "/Marylyne.jpeg",
    bio: "Supporting communications and program activities to amplify our impact and reach.",
  },
  {
    name: "Eliakim",
    position: "Accounts & Finance Officer",
    image: null, // Add photo later
    bio: "Managing financial operations and ensuring transparency and accountability in all projects.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Our Team"
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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Meet the dedicated professionals driving change across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-primary"
              >
                {member.image ? (
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      quality={75}
                    />
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="text-8xl text-primary/30" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-base md:text-lg mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                    </a>
                  </div>
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
