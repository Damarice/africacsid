"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const platforms = [
  {
    name: "African Food Systems Transformation Collective",
    acronym: "AFSTC",
    logo: "/images/AFSTC.png",
    description: "The Africa Centre for Sustainable Development (Africa CSID) is honored to join the African Food Systems Transformation Collective (AFSTC) as a member of the Advisory Committee of Experts. The AFSTC serves the purpose of informing philanthropic strategies, acting as a repository for local multidisciplinary research, and supporting advocacy initiatives.",
    details: "It is convened by the Africa Climate Foundation (ACF), chaired by UNESCO, and hosted by the DSI-NRF Centre of Excellence in Food Security at the University of the Western Cape. Since joining the collective, Africa CSID has actively contributed to shaping inclusive, sustainable food systems through collaborative policy development and stakeholder engagement. Africa CSID remains deeply committed to its role within AFSTC, contributing to the development of transformative strategies that center on biodiversity, equity, and sustainability. As the collective charts its path forward, Africa CSID looks ahead with optimism and resolve to help shape resilient food systems for future generations.",
  },
  {
    name: "Just Rural Transition",
    acronym: "JRT",
    logo: "/images/JRT.png",
    description: "The Just Rural Transition (JRT) initiative serves as a collaborative platform that unites various stakeholders, including food producers, governments, businesses, investors, civil society organisations, and rural and indigenous communities, with the shared goal of championing fair and equitable solutions to address the challenges within food systems.",
    details: "Their mission revolves around cultivating a global community of both public and private sector participants. This community collectively designs, implements, and scales comprehensive and inclusive approaches to tackle the issues faced by food systems. It is a response to the recognition that, despite the current record-high food production, food systems are falling short in terms of delivering benefits for people, nature, and the climate. The JRT initiative emphasises the importance of transforming food systems while considering the social implications of this transformation. The vision and objectives of the JRT initiative closely align with those of the Africa Centre for Sustainable and Inclusive Development (Africa CSID). In light of this alignment, Africa CSID has officially endorsed the JRT's 2030 vision statement.",
    objectives: [
      "Supporting farming, fishing, livestock-keeping, and indigenous communities in adapting to challenges and realizing the potential of responsible land, ocean, and natural resource management to enhance resilience and mitigate climate change.",
      "Providing sustainable, nutritious, and affordable food for all, with a focus on culturally-appropriate food systems.",
      "Reducing global food loss and waste by half compared to 2019 levels.",
      "Recognizing the full value of natural capital in promoting human health and well-being.",
      "Halting the degradation of critical ecosystems and the loss of biodiversity.",
      "Contributing to a substantial portion of the required global carbon emissions reduction.",
      "Mobilizing substantial public and private financial support in pursuit of their vision."
    ],
    endorsementLink: "https://justruraltransition.org/wp-content/uploads/sites/12/2022/03/JRT-_Endorsements_StatementsOfSupport-1.pdf"
  },
  {
    name: "Intersectoral Forum on Agrobiodiversity and Agroecology",
    acronym: "ISFAA",
    logo: "/images/ISFAA.png",
    description: "The Africa Centre for Sustainable Development is an active member of the Intersectoral Forum on Agrobiodiversity and Agroecology (ISFAA). ISFAA serves as a diverse and inclusive platform that brings together a wide array of stakeholders, including government entities, farmer organizations, civil society organizations (CSOs), private sector representatives, researchers, academicians, and development partners.",
    details: "The primary objective of ISFAA is to facilitate constructive discussions and collaborative efforts aimed at overcoming the challenges and constraints that our current food system encounters. ISFAA focuses on safeguarding agrobiodiversity and embracing agroecology as a unifying principle. This approach is aimed at addressing the limitations posed by traditional agricultural methods and fostering the transition towards sustainable food and nutrition security. By dismantling barriers between different stakeholder actions, the platform strategically works to promote sustainable agricultural policies, research initiatives, and practices. The overarching goal is to integrate biodiversity and environmental preservation seamlessly into both agriculture and the broader food system. Africa CSID's involvement in ISFAA is driven by our shared principles including the commitment to promoting sustainability in agriculture and ensuring the harmonious coexistence of diverse stakeholders.",
  },
  {
    name: "Kenya Climate Smart Agriculture Multi Stakeholder Platform",
    acronym: "CSA MSP",
    logo: "/images/CSA MSP.png",
    description: "The Africa Centre for Sustainable Development (Africa CSID) is a member of the Kenya Climate Smart Agriculture Multi Stakeholder Platform (CSA MSP). This platform serves as a network of organizations dedicated to promoting Climate Smart Agriculture practices. Its primary objective revolves around facilitating collaboration among stakeholders engaged in Climate Smart Agriculture initiatives.",
    details: "The establishment of this platform is rooted in Kenya's commitment to implementing Climate Smart Agriculture measures to mitigate the effects of climate change and fulfill its obligations under the Paris Agreement. These commitments are outlined in Kenya's Nationally Determined Contribution (NDC). The operations of the Multi Stakeholder Platform draw support from the Kenya Climate Smart Agriculture Strategy (KCSAS), which serves as an implementation framework for realizing the goals outlined in the NDC. This platform comprises five thematic working groups, each focusing on specific aspects: Knowledge Sharing, Credibility in Coordination and Reporting, Networking and Collaboration, Policy Development and Implementation, and Social Inclusivity. Africa CSID is a member of Social Inclusivity Thematic Working Group, aligning with its mission to work with marginalized communities within the realm of food systems.",
  },
  {
    name: "Kenya Climate Change Working Group",
    acronym: "KCCWG",
    logo: "/images/KCCWG.jpeg",
    description: "Efforts to confront the consequences of climate change require a collaborative approach to ensure the effectiveness of our actions. This collaboration involves enhancing the resilience of communities while simultaneously reducing greenhouse gas emissions. With this motivation in mind, the Kenya Climate Change Working Group was established in April 2009.",
    details: "This platform brings together members from diverse civil society organizations, donor partners, government departments, and agencies, all dedicated to addressing climate change and advocating for climate justice. Its primary objectives are to foster synergy, harmonize efforts, and bolster activities related to climate change, as well as to lobby for favorable national policies that promote climate justice for all. Among the distinguished members of this group is the Africa Centre for Sustainable and Inclusive Development (Africa CSID). Africa CSID's involvement is driven by its specific focus on climate resilience, climate justice, biodiversity conservation, and sustainable food systems within marginalized communities.",
    thematicGroups: [
      "Mitigation",
      "Technology Transfer", 
      "Adaptation",
      "Gender and Capacity Building",
      "Youth and Marginalized Communities",
      "Climate Change Science and Negotiations",
      "Climate Finance and Transparency",
      "Wildlife and Tourism"
    ]
  },
];

export default function PlatformsPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop&q=80"
          alt="Our Platforms & Partnerships"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 animate-fade-in-up">
              Our Platforms & Partnerships
            </h1>
            <p className="text-lg text-white/95 animate-fade-in-up animation-delay-200">
              Collaborating across networks to transform food systems and build climate resilience
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
              Strategic Collaborative Platforms
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
              Africa CSID actively participates in various platforms and networks to amplify our impact 
              and foster collaboration across sectors and borders.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer transform transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 ${
                  hoveredCard === index ? 'scale-[1.02]' : ''
                } ${expandedCard === index ? 'ring-2 ring-primary/20' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => toggleExpanded(index)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Platform Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={
                      index === 0 ? "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80" :
                      index === 1 ? "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop&q=80" :
                      index === 2 ? "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80" :
                      index === 3 ? "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop&q=80" :
                      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80"
                    }
                    alt={platform.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Logo Overlay on Image */}
                  {platform.logo && (
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-lg p-2 shadow-lg">
                      <img 
                        src={platform.logo} 
                        alt={`${platform.acronym} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
                
                {/* Platform Header */}
                <div className="relative p-6 border-b border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                          {platform.name}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-base font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300">
                            {platform.acronym}
                          </span>
                        </div>
                      </div>
                      <div className={`w-8 h-8 flex items-center justify-center transform transition-transform duration-300 ${
                        expandedCard === index ? 'rotate-180' : 'group-hover:rotate-90'
                      }`}>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-dark rounded-full text-sm font-medium group-hover:bg-secondary/30 transition-colors duration-300">
                        Member Organization
                      </span>
                    </div>
                  </div>
                </div>

                {/* Platform Preview Content */}
                <div className="relative p-6">
                  <div className="prose prose-base max-w-none">
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-base md:text-lg">
                      {platform.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className={`mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                      hoveredCard === index ? 'translate-y-0' : 'translate-y-2'
                    }`}>
                      Click to {expandedCard === index ? 'collapse' : 'expand'} full details →
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 border-t border-gray-100">
                    {platform.details && (
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-lg p-6 mb-6 mt-6 transform transition-all duration-300 hover:shadow-md">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          About the Platform
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{platform.details}</p>
                      </div>
                    )}

                    {/* JRT Objectives */}
                    {platform.objectives && (
                      <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-md">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          2030 Vision Objectives
                        </h4>
                        <div className="space-y-3">
                          {platform.objectives.map((objective, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-xs font-bold">{idx + 1}</span>
                              </div>
                              <span className="text-gray-700 leading-relaxed">{objective}</span>
                            </div>
                          ))}
                        </div>
                        {platform.endorsementLink && (
                          <div className="mt-6 pt-4 border-t border-green-200">
                            <p className="text-sm text-gray-600">
                              <strong>Endorsement Document:</strong>{" "}
                              <a 
                                href={platform.endorsementLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-dark underline hover:no-underline transition-all duration-200 font-medium"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View Africa CSID's Official Endorsement ↗
                              </a>
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* KCCWG Thematic Groups */}
                    {platform.thematicGroups && (
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-md">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          Thematic Working Groups
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {platform.thematicGroups.map((group, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200 group/item">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                              <span className="text-gray-700 font-medium group-hover/item:text-blue-700 transition-colors duration-200">{group}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-4 italic bg-white/30 p-3 rounded-lg">
                          Each thematic group plays a crucial role in advancing collective efforts to combat climate change and its far-reaching impacts.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
