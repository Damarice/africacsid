"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Reports"
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
              Reports
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Research findings and impact assessments from our work across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Reports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive reports documenting our research, impact assessments, and findings from our programs across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Women's Agency in Peacebuilding Report */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
              <div className="relative h-64 bg-gray-100">
                <iframe
                  src="/Women%E2%80%99s%20agency%20in%20peacebuilding%20amid%20climate%20induced%20conflict.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=75"
                  className="w-full h-full border-0"
                  title="Women's Agency in Peacebuilding Report Preview"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  PDF Preview
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Women's Agency in Peacebuilding Amid Climate Induced Conflict
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A comprehensive report examining the critical role of women in peacebuilding processes within the context of climate-induced conflicts across Africa.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Peacebuilding</span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Women's Leadership</span>
                  <span className="px-2 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">Climate Change</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Format:</span> PDF
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="/Women%E2%80%99s%20agency%20in%20peacebuilding%20amid%20climate%20induced%20conflict.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </a>
                    <a
                      href="/Women%E2%80%99s%20agency%20in%20peacebuilding%20amid%20climate%20induced%20conflict.pdf"
                      download="Womens_Agency_Peacebuilding_Climate_Conflict.pdf"
                      className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
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