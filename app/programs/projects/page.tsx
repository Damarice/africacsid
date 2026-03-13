"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
  const [showFullText, setShowFullText] = useState(false);

  const fullProjectText = `In the pastoral landscapes of Baringo County and the fisheries of the Lake Victoria Basin, climate change has intensified resource scarcity, fueling conflict and straining social cohesion. Families are displaced, grazing lands are shrinking, and fish stocks are dwindling. Yet amid these challenges, women are leading informal reconciliation efforts through prayer, dialogue, and livelihood networks. They are stepping forward as powerful agents of peace and resilience.

With support from KAIROS Canada, Africa CSID is building on this momentum through the project Women, Faith, and Climate Security: Strengthening the Gender-Conflict-Climate Nexus Across Kenya's Fragile Ecosystems. This initiative seeks to institutionalize women-led peace committees, foster interfaith solidarity, and advance climate-resilient livelihoods. Rooted in faith and cultural values, it bridges pastoral and fisher contexts under a common peace-climate framework, aligning with Kenya's Security Strategy, the National Climate Change Action Plan, and global Women, Peace, and Security commitments.

Over the project's period, Africa CSID will strengthen existing Ilchamus-Pokot-Endorois peace committees in Baringo, establish fisherwomen peace committees in Migori and Homa Bay, and convene interfaith dialogues that weave together prayer, storytelling, and ecological justice. At the national level, the project hosted a Women, Faith & Climate Forum ahead of UNEA7, amplifying grassroots voices and showcasing community-driven models. Through multimedia campaigns under Justice and Renewal: Women, Faith, and Climate Peace, women's oral histories and peacebuilding journeys will be shared, linking local realities to global solidarity movements.

The project seeks to directly benefit 600 women, children, and youth, while also expecting more than 3,000 community members will experience improved peace and ecological stability. By centering women's leadership and intergenerational inclusion, the project seeks to not only strengthen local resilience but also elevate women's priorities into national and international climate-peace frameworks.

This partnership between Africa CSID and KAIROS embodies the Jubilee call for justice, renewal, and solidarity. It is a testament to the power of women, faith, and community in shaping a more peaceful and sustainable future for Kenya and beyond.`;

  const shortText = fullProjectText.substring(0, 400) + "...";

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Our Programs & Projects"
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
              Our Programs & Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Specific initiatives driving change across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our ongoing initiatives that are making a real difference across Africa's communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Women, Faith, and Climate Security Project */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
              <div className="relative h-64">
                <Image
                  src="/Women, Faith, and Climate Security.jpeg"
                  alt="Women, Faith, and Climate Security Project"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={75}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Women, Faith, and Climate Security: Strengthening the Gender-Conflict-Climate Nexus Across Kenya's Fragile Ecosystems
                </h3>
                
                <div className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                  {showFullText ? fullProjectText : shortText}
                </div>

                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="text-primary hover:text-primary-dark font-semibold mb-6 transition-colors"
                >
                  {showFullText ? "Read Less" : "Read More"}
                </button>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Climate Security</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Women's Leadership</span>
                  <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">Peace Building</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Interfaith Dialogue</span>
                </div>

                <div className="text-sm text-gray-500">
                  <strong>Partner:</strong> KAIROS Canada
                </div>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">More Projects Coming Soon</h3>
                <p className="text-gray-500">
                  We are continuously expanding our portfolio of impactful projects across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  );
}
