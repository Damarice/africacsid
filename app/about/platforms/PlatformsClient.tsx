"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

interface Platform {
  id?: number;
  name: string;
  acronym?: string;
  logo: string;
  description: string;
  content?: string;
  details?: string;
  endorsementLink?: string;
  platformType?: string;
  objectives?: string[];
  thematicGroups?: string[];
}

export default function PlatformsClient({ platforms }: { platforms: Platform[] }) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image src="/Who we are.jpeg" alt="Our Platforms & Partnerships" fill sizes="100vw" className="object-cover" style={{ objectPosition: "center 20%" }} quality={75} priority />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Platforms & Partnerships</h1>
            <p className="text-xl md:text-2xl text-white/95">
              Collaborating across networks to transform food systems and build climate resilience
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Strategic Collaborative Platforms</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Africa CSID actively participates in various platforms and networks to amplify our impact
              and foster collaboration across sectors and borders.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 ${
                  hoveredCard === index ? "scale-[1.02]" : ""
                } ${expandedCard === index ? "ring-2 ring-primary/20" : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="relative p-6 border-b border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      {platform.logo && (
                        <div className="w-20 h-20 bg-white rounded-lg p-2 shadow-md flex-shrink-0">
                          <img src={platform.logo} alt={`${platform.acronym || platform.name} Logo`} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                          {platform.name}
                        </h3>
                        {platform.acronym && (
                          <span className="text-base font-semibold text-primary">{platform.acronym}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-dark rounded-full text-sm font-medium">
                        Member Organization
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preview */}
                <div className="relative p-6">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg line-clamp-3">
                    {platform.description}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpanded(index); }}
                    className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    {expandedCard === index ? (
                      <>Show Less <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
                    ) : (
                      <>Read More <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
                    )}
                  </button>
                </div>

                {/* Expanded */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCard === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-6 border-t border-gray-100">
                    {/* WP full content */}
                    {platform.content && platform.content.trim() !== "" ? (
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-lg p-6 mt-6">
                        <div className="prose prose-base max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: platform.content }} />
                        {platform.endorsementLink && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <a href={platform.endorsementLink} target="_blank" rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark underline font-medium">
                              View Official Endorsement ↗
                            </a>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Static fallback expanded content
                      <>
                        {platform.details && (
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-lg p-6 mb-6 mt-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              About the Platform
                            </h4>
                            <p className="text-gray-700 leading-relaxed">{platform.details}</p>
                          </div>
                        )}
                        {platform.objectives && (
                          <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-lg p-6 mb-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              2030 Vision Objectives
                            </h4>
                            <div className="space-y-3">
                              {platform.objectives.map((obj, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50">
                                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-primary text-xs font-bold">{idx + 1}</span>
                                  </div>
                                  <span className="text-gray-700 leading-relaxed">{obj}</span>
                                </div>
                              ))}
                            </div>
                            {platform.endorsementLink && (
                              <div className="mt-6 pt-4 border-t border-green-200">
                                <a href={platform.endorsementLink} target="_blank" rel="noopener noreferrer"
                                  className="text-primary hover:text-primary-dark underline font-medium">
                                  View Africa CSID's Official Endorsement ↗
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                        {platform.thematicGroups && (
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg p-6 mb-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              Thematic Working Groups
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {platform.thematicGroups.map((group, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                  <span className="text-gray-700 font-medium">{group}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
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
