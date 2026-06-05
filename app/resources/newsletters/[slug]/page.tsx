"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendar, 
  faDownload, 
  faEye, 
  faShare, 
  faArrowLeft,
  faFileText 
} from "@fortawesome/free-solid-svg-icons";
import { newsletters } from "@/data/newsletters";
import { useState, useEffect } from "react";

export default function NewsletterDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [copied, setCopied] = useState(false);
  
  const newsletter = newsletters.find(n => n.slug === slug);
  
  // Set page title and meta description
  useEffect(() => {
    if (newsletter) {
      document.title = `${newsletter.title} | Africa CSID`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', newsletter.description);
      }
    }
  }, [newsletter]);
  
  if (!newsletter) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Newsletter Not Found</h1>
            <Link 
              href="/resources/newsletters"
              className="text-primary hover:text-primary-dark"
            >
              ← Back to Newsletters
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleShare = async () => {
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: newsletter.title,
          text: newsletter.description,
          url: shareUrl,
        });
      } catch (err) {
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <Image
          src="/Who we are.jpeg"
          alt={newsletter.title}
          fill
          sizes="100vw"
          className="object-cover" style={{ objectPosition: "center 20%" }}
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <Link 
              href="/resources/newsletters"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Newsletters
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {newsletter.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg text-white/95">
              <FontAwesomeIcon icon={faCalendar} />
              <span>{newsletter.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            
            {/* Newsletter Details Card */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden mb-8">
              <div className="flex flex-col lg:flex-row">
                
                {/* PDF Preview */}
                <div className="relative w-full lg:w-96 flex-shrink-0 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100">
                  {newsletter.downloadUrl !== "#" ? (
                    <>
                      <iframe
                        src={`${newsletter.downloadUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=75`}
                        className="w-full h-64 lg:h-96 border-0"
                        title={`${newsletter.title} Preview`}
                        loading="lazy"
                      />
                      <span className="absolute top-2 right-2 bg-neutral/70 text-white text-xs px-2 py-1 rounded">
                        PDF Preview
                      </span>
                    </>
                  ) : (
                    <div className="w-full h-64 lg:h-96 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <FontAwesomeIcon icon={faFileText} className="text-4xl mb-2" />
                        <p className="text-sm">Preview not available</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-base text-gray-500 mb-4">
                    <FontAwesomeIcon icon={faCalendar} className="text-accent" />
                    <span>{newsletter.date}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {newsletter.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {newsletter.description}
                  </p>
                  
                  {/* Type indicator */}
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Newsletter
                    </span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={newsletter.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faEye} />
                      View Full PDF
                    </a>
                    <a
                      href={newsletter.downloadUrl}
                      download={`${newsletter.slug}.pdf`}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      Download PDF
                    </a>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faShare} />
                      {copied ? 'Link Copied!' : 'Share Newsletter'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Newsletters */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Newsletters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsletters
                  .filter(n => n.id !== newsletter.id)
                  .slice(0, 3)
                  .map((relatedNewsletter) => (
                    <Link
                      key={relatedNewsletter.id}
                      href={`/resources/newsletters/${relatedNewsletter.slug}`}
                      className="block bg-white rounded-lg border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <FontAwesomeIcon icon={faCalendar} className="text-accent" />
                        <span>{relatedNewsletter.date}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                        {relatedNewsletter.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {relatedNewsletter.description}
                      </p>
                    </Link>
                  ))}
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