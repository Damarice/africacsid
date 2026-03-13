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
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
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
                  <a
                    href="/Women's agency in peacebuilding amid climate induced conflict.pdf"
                    download="Womens_Agency_Peacebuilding_Climate_Conflict.pdf"
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
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
      </section>

      <CTASection />

      <Footer />
    </>
  );
}