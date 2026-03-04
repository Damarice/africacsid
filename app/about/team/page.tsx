"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Dr. Jane Doe",
    position: "Executive Director",
    image: "/community-work-3.JPG",
    bio: "Leading Africa CSID with over 15 years of experience in sustainable development.",
  },
  {
    name: "John Smith",
    position: "Program Director",
    image: "/community-work-5.JPG",
    bio: "Overseeing program implementation across peace, economic, and climate initiatives.",
  },
  {
    name: "Mary Johnson",
    position: "Finance Manager",
    image: "/community-work-6.JPG",
    bio: "Managing financial operations and ensuring transparency in all projects.",
  },
  {
    name: "David Brown",
    position: "Communications Lead",
    image: "/community-work-7.JPG",
    bio: "Building partnerships and amplifying our impact through strategic communications.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/hero.JPG"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Team
            </h1>
            <p className="text-xl text-white/95">
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
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
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
