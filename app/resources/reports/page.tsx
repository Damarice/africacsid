"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const PDF_URL =
  "/Women%E2%80%99s%20agency%20in%20peacebuilding%20amid%20climate%20induced%20conflict.pdf";

export default function ReportsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
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
            <h1 className="text-white mb-6">Reports</h1>
            <p className="text-subtitle text-white/95">
              Research findings and impact assessments from our work across Africa
            </p>
          </div>
        </div>
      </section>

      {/* ── Section header ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Publications
            </p>
            <h2 className="text-gray-900 mb-3">Our Reports</h2>
            <p className="text-gray-500 max-w-2xl">
              Comprehensive reports documenting our research, impact assessments,
              and findings from our programs across Africa.
            </p>
          </Reveal>

          {/* ── Report card ── */}
          <Reveal delay={100} className="mt-10">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              {/* Two-column layout: preview left, content right */}
              <div className="flex flex-col md:flex-row">

                {/* PDF preview */}
                <div className="relative w-full md:w-72 flex-shrink-0 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
                  <iframe
                    src={`${PDF_URL}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=75`}
                    className="w-full h-56 md:h-full border-0"
                    title="Women's Agency in Peacebuilding Report Preview"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-neutral/70 text-white text-xs px-2 py-1 rounded">
                    PDF Preview
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 md:p-8 flex-1">
                  {/* Top: title + tags + description */}
                  <div>
                    <h3 className="text-gray-900 mb-3">
                      Women&apos;s Agency in Peacebuilding Amid Climate Induced Conflict
                    </h3>

                    <p className="text-gray-500">
                      A comprehensive report examining the critical role of women in
                      peacebuilding processes within the context of climate-induced
                      conflicts across Africa.
                    </p>
                  </div>

                  {/* Bottom: meta + actions */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-small text-gray-400">
                      {/* Format badge */}
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF Document
                      </span>
                      {/* Category */}
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Research Report
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <a
                        href={PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-semibold text-small hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </a>
                      <a
                        href={PDF_URL}
                        download="Womens_Agency_Peacebuilding_Climate_Conflict.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-small hover:bg-primary-dark transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
