"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In the pastoral landscapes of Baringo County and the fisheries of the Lake Victoria Basin, climate change has intensified resource scarcity, fueling conflict and straining social cohesion. With support from KAIROS Canada, this initiative seeks to institutionalize women-led peace committees, foster interfaith solidarity, and advance climate-resilient livelihoods.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Focus Areas:</h4>
                    <ul className="text-gray-600 space-y-1 ml-4">
                      <li>• Strengthening Ilchamus-Pokot-Endorois peace committees in Baringo</li>
                      <li>• Establishing fisherwomen peace committees in Migori and Homa Bay</li>
                      <li>• Convening interfaith dialogues weaving prayer, storytelling, and ecological justice</li>
                      <li>• Multimedia campaigns under "Justice and Renewal: Women, Faith, and Climate Peace"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Impact:</h4>
                    <ul className="text-gray-600 space-y-1 ml-4">
                      <li>• Directly benefit 600 women, children, and youth</li>
                      <li>• Improve peace and ecological stability for 3,000+ community members</li>
                      <li>• Elevate women's priorities into national and international climate-peace frameworks</li>
                    </ul>
                  </div>
                </div>

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
