"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHandshake, 
  faChartLine, 
  faLeaf, 
  faBullseye, 
  faSeedling, 
  faBalanceScale,
  faUsers,
  faHandHoldingHeart,
  faChartBar,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const focusAreas = [
  {
    title: "Peace and Conflict Transformation",
    icon: faHandshake,
    description: "The primary objective of this component is to promote and enhance resilience in conflict-affected communities by leveraging relevant architectures for peacebuilding.",
    fullDescription: "This will be achieved by adopting a comprehensive and integrated approach that prioritizes the identification and resolution of conflict drivers that exist within these communities. Additionally, the implementation of this component will be grounded in the principles of Do No Harm (DNH) and conflict sensitivity, which will ensure that all activities and interventions are executed in a manner that aligns with best practices in peacebuilding. By pursuing this multi-faceted approach, we aim to create sustainable and lasting change in communities that have been impacted by conflict, while equipping them with the tools and resources needed to better manage future conflicts and build a brighter future for all.",
    keyPrinciples: [
      "Do No Harm (DNH) approach",
      "Conflict sensitivity in all interventions",
      "Community-driven peacebuilding",
      "Sustainable conflict resolution"
    ]
  },
  {
    title: "Economic Empowerment",
    icon: faChartLine,
    description: "The Economic Empowerment component of our program is an integral part of our efforts towards improving the well-being, productivity and self-sufficiency of marginalized communities across different regions.",
    fullDescription: "Through our comprehensive approach, we aim to address the root causes of poverty and guide our communities towards a more prosperous future. We achieve this by providing access to education, training, and skills development programs that equip individuals with the necessary tools and expertise to break the cycle of poverty. We also prioritize innovation and creativity in our approach, actively seeking out new and innovative ways to reduce poverty, create jobs and diversify income streams for our communities. Our programs are designed to target all levels of society, from children, to youth, women and the elderly, ensuring that no one is left behind. Together, through our Economic Empowerment component, we can build a more resilient, self-sufficient, and prosperous future for all.",
    keyPrinciples: [
      "Education and skills development",
      "Innovation and creativity in poverty reduction",
      "Job creation and income diversification",
      "Inclusive programming for all demographics"
    ]
  },
  {
    title: "Climate Change",
    icon: faLeaf,
    description: "One of our objectives is to address the escalating impacts of climate change, particularly on marginalized communities, by enhancing their overall resilience and advocating for climate justice, biodiversity conservation, and sustainable food systems.",
    fullDescription: "We work closely with these communities to boost their capacity to adapt to the impacts of climate change. We also engage the communities in various emission reduction initiatives that encourage sustainable use of natural resources. We are confident that this integrative approach will contribute significantly toward enhancing the resilience of marginalized communities and reducing greenhouse gas emissions.",
    keyPrinciples: [
      "Climate justice advocacy",
      "Biodiversity conservation",
      "Sustainable food systems",
      "Community-based adaptation and emission reduction"
    ]
  }
];

const approaches = [
  {
    title: "Community-Centered Approach",
    description: "We work directly with communities, ensuring their voices, knowledge, and needs are at the center of all our initiatives.",
    icon: faUsers
  },
  {
    title: "Collaborative Partnerships",
    description: "Building strategic alliances with local organizations, government agencies, and international partners to amplify impact.",
    icon: faHandHoldingHeart
  },
  {
    title: "Evidence-Based Solutions",
    description: "Using research, data, and traditional knowledge to develop effective and culturally appropriate interventions.",
    icon: faChartBar
  },
  {
    title: "Capacity Building",
    description: "Strengthening local capabilities through training, mentorship, and institutional development programs.",
    icon: faGraduationCap
  }
];

export default function WhatWeDoPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="What We Do"
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 animate-fade-in-up">
              What We Do
            </h1>
            <p className="text-lg md:text-xl text-white/95 animate-fade-in-up animation-delay-200">
              Transforming communities through sustainable development, climate resilience, 
              and inclusive approaches that center equity and environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
              Our Mission in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in-up animation-delay-100">
              Africa CSID works at the intersection of climate action, food systems transformation, 
              and social justice. We believe that sustainable development must be inclusive, 
              community-driven, and rooted in both scientific evidence and traditional knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faBullseye} className="text-2xl text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 group-hover:text-primary-dark transition-colors duration-300">Targeted Impact</h3>
                <p className="text-gray-600 text-base md:text-lg">Focused interventions that address root causes of inequality and environmental degradation.</p>
              </div>
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faSeedling} className="text-2xl text-neutral" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2 group-hover:text-secondary-dark transition-colors duration-300">Sustainable Solutions</h3>
                <p className="text-gray-600 text-base md:text-lg">Long-term approaches that build resilience and promote regenerative practices.</p>
              </div>
              <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faBalanceScale} className="text-2xl text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2 group-hover:text-accent-dark transition-colors duration-300">Justice-Centered</h3>
                <p className="text-gray-600 text-base md:text-lg">Ensuring marginalized communities have equal access to resources and opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
              Our Areas of Focus
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
              We work across three interconnected areas that address the complex challenges 
              facing marginalized communities in Africa and beyond.
            </p>
          </div>

          <div className="space-y-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer transform transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 ${
                  hoveredCard === index ? 'scale-[1.01]' : ''
                } ${expandedCard === index ? 'ring-2 ring-primary/20' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => toggleExpanded(index)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Content Layout */}
                <div className="relative">
                  {/* Header Section */}
                  <div className="p-4 lg:p-6 border-b border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                      {/* Image */}
                      <div className="w-full lg:w-64 h-40 lg:h-48 flex-shrink-0 rounded-lg overflow-hidden relative">
                        <Image
                          src={index === 0 ? 
                            "/community-work-5.JPG" : 
                            index === 1 ? 
                            "/community-work-6.JPG" :
                            "/community-work-7.JPG"
                          }
                          alt={area.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 256px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          quality={70}
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                            <FontAwesomeIcon 
                              icon={area.icon} 
                              className="text-lg text-primary transition-all duration-300 group-hover:scale-110" 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                              {area.title}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-dark rounded-full text-xs font-medium group-hover:bg-secondary/30 transition-colors duration-300">
                              Core Focus Area
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-3">
                          {area.description}
                        </p>
                        
                        {/* Expand Indicator */}
                        <div className="flex items-center justify-between">
                          <div className={`text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                            hoveredCard === index ? 'translate-y-0' : 'translate-y-2'
                          }`}>
                            Click to {expandedCard === index ? 'collapse' : 'expand'} full details →
                          </div>
                          <div className={`w-6 h-6 flex items-center justify-center transform transition-transform duration-300 ${
                            expandedCard === index ? 'rotate-180' : 'group-hover:rotate-90'
                          }`}>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-4 lg:p-6 border-t border-gray-100 bg-gray-50/50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Full Description */}
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Our Approach
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-base md:text-lg">{area.fullDescription}</p>
                        </div>

                        {/* Key Principles */}
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="text-lg md:text-xl font-semibold text-secondary-dark mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            Key Principles & Methods
                          </h4>
                          <div className="space-y-2">
                            {area.keyPrinciples.map((principle, idx) => (
                              <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group/item">
                                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                                </div>
                                <span className="text-gray-700 font-medium leading-relaxed text-base md:text-lg">{principle}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
              How We Work
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
              Our methodology is grounded in participatory development principles, 
              ensuring sustainable and locally-owned solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 ${
                  index === 0 ? 'bg-primary' :
                  index === 1 ? 'bg-secondary' :
                  index === 2 ? 'bg-accent' :
                  'bg-primary-dark'
                }`}>
                  <FontAwesomeIcon icon={approach.icon} className={`text-lg ${
                    index === 1 ? 'text-neutral' : 'text-white'
                  }`} />
                </div>
                <h3 className={`text-lg md:text-xl font-semibold mb-3 transition-colors duration-300 ${
                  index === 0 ? 'text-primary group-hover:text-primary-dark' :
                  index === 1 ? 'text-secondary group-hover:text-secondary-dark' :
                  index === 2 ? 'text-accent group-hover:text-accent-dark' :
                  'text-primary-dark group-hover:text-primary'
                }`}>
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Join us in creating sustainable, inclusive communities that thrive in harmony with nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/get-involved"
                className="bg-secondary text-neutral font-semibold py-3 px-6 rounded-lg hover:bg-secondary-dark transition-colors duration-300 inline-block transform hover:scale-105 hover:shadow-xl"
              >
                Get Involved
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

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