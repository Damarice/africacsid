"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHandshake, faSeedling, faLeaf, faCloudSun, faUsers } from "@fortawesome/free-solid-svg-icons";

const platforms = [
  {
    name: "Africa Food Systems Transformation Coalition (AFSTC)",
    description: "Working to transform food systems across Africa for sustainability and food security.",
    icon: faGlobe,
    color: "text-primary",
  },
  {
    name: "Joint Resilience Team (JRT)",
    description: "Building community resilience through collaborative approaches to development challenges.",
    icon: faHandshake,
    color: "text-accent",
  },
  {
    name: "Inclusive Sustainable Food and Agriculture Alliance (ISFAA)",
    description: "Promoting inclusive and sustainable agricultural practices across the continent.",
    icon: faSeedling,
    color: "text-secondary-dark",
  },
  {
    name: "Climate Smart Agriculture Multi-Stakeholder Platform (CSA MSP)",
    description: "Advancing climate-smart agricultural solutions through multi-stakeholder engagement.",
    icon: faLeaf,
    color: "text-primary",
  },
  {
    name: "Kenya Climate Change Working Group (KCCWG)",
    description: "Coordinating climate action and advocacy efforts in Kenya.",
    icon: faCloudSun,
    color: "text-accent",
  },
  {
    name: "Community Development Networks",
    description: "Connecting grassroots organizations for greater collective impact.",
    icon: faUsers,
    color: "text-secondary-dark",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop&q=80"
          alt="Our Platforms & Partnerships"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-900/80" />
        
        <div className="relative h-full flex items-center justify-start px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Platforms & Partnerships
            </h1>
            <p className="text-xl text-white/95">
              Collaborating for greater impact across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Africa CSID actively participates in and leads various platforms and networks to amplify 
              our impact and foster collaboration across sectors and borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
              >
                <div className={`${platform.color} text-5xl mb-6`}>
                  <FontAwesomeIcon icon={platform.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 leading-relaxed">{platform.description}</p>
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
