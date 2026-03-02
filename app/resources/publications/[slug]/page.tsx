"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { publications } from "@/data/publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFileAlt, faDownload, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PublicationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const publication = publications.find(p => p.slug === slug);
  
  if (!publication) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Publication Not Found</h1>
            <Link href="/resources/publications" className="text-primary hover:text-primary-dark">
              Back to Publications
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <article className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <Link href="/resources/publications" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Publications
          </Link>
          
          <div className={`inline-block ${publication.typeColor} text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold mb-4`}>
            {publication.type}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {publication.title}
          </h1>
          
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
            <div className="flex flex-wrap gap-6 text-lg md:text-xl mb-6">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} className="text-primary" />
                {publication.date}
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFileAlt} className="text-primary" />
                {publication.pages}
              </span>
            </div>
            
            <a
              href={publication.downloadUrl}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-primary-dark transition-colors"
              download
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Publication
            </a>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {publication.description}
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Additional publication details will be populated from WordPress. Full document information, abstract, and download links will appear here once integrated with your content management system.
            </p>
          </div>
        </div>
      </article>
      
      <CTASection />
      <Footer />
    </>
  );
}
