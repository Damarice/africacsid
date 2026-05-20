"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faDownload, faEye, faFileText, faShare } from "@fortawesome/free-solid-svg-icons";
import { getNewsletters } from "@/lib/wordpress";
import { newsletters as staticNewsletters } from "@/data/newsletters";
import { useState, useEffect } from "react";
import type { WPNewsletter } from "@/lib/wordpress";

export default function NewslettersPage() {
  const [newsletters, setNewsletters] = useState<(WPNewsletter | typeof staticNewsletters[0])[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/wp/newsletters")
      .then(r => r.json())
      .then(data => { setNewsletters(data); setLoading(false); })
      .catch(() => { setNewsletters(staticNewsletters); setLoading(false); });
  }, []);

  const handleShare = async (newsletter: any) => {
    const shareUrl = `${window.location.origin}/resources/newsletters/${newsletter.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: newsletter.title, text: newsletter.description, url: shareUrl });
      } catch {
        copyToClipboard(shareUrl, newsletter.id);
      }
    } else {
      copyToClipboard(shareUrl, newsletter.id);
    }
  };

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Newsletters"
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
              Newsletters
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Stay updated with our quarterly newsletters and community updates
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map(i => (
                <div key={i} className="bg-gray-100 rounded-2xl h-80 animate-pulse" />
              ))}
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter) => (
              <article
                key={newsletter.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent group"
              >
                {/* PDF preview */}
                <div className="relative h-48 bg-gray-50 border-b border-gray-100">
                  {newsletter.downloadUrl !== "#" ? (
                    <>
                      <iframe
                        src={`${newsletter.downloadUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=50`}
                        className="w-full h-full border-0"
                        title={`${newsletter.title} Preview`}
                        loading="lazy"
                      />
                      <span className="absolute top-2 right-2 bg-neutral/70 text-white text-xs px-2 py-1 rounded">
                        PDF Preview
                      </span>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <FontAwesomeIcon icon={faFileText} className="text-3xl mb-2" />
                        <p className="text-sm">Preview not available</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FontAwesomeIcon icon={faCalendar} className="text-accent" />
                    <span>{newsletter.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {newsletter.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {newsletter.description}
                  </p>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Newsletter
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={newsletter.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 font-semibold text-xs hover:bg-gray-50 transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faEye} />
                      View
                    </a>
                    <a
                      href={newsletter.downloadUrl}
                      download={`${newsletter.slug}.pdf`}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-primary text-white font-semibold text-xs hover:bg-primary-dark transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      Download
                    </a>
                    <button
                      onClick={() => handleShare(newsletter)}
                      className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-accent text-accent font-semibold text-xs hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faShare} />
                      {copiedId === newsletter.id ? "Copied!" : "Share"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
