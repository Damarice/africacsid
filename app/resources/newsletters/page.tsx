"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { newsletters } from "@/data/newsletters";

export default function NewslettersPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsletters.map((newsletter, index) => (
              <article
                key={newsletter.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={newsletter.image}
                    alt={newsletter.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-base md:text-lg text-gray-500 mb-4">
                    <FontAwesomeIcon icon={faCalendar} className="text-accent" />
                    <span>{newsletter.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {newsletter.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 mb-6 line-clamp-4 leading-relaxed">
                    {newsletter.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <a
                      href={newsletter.downloadUrl}
                      className="flex-1 inline-flex items-center justify-center bg-accent text-white font-semibold hover:bg-accent-dark transition-colors py-3 px-4 rounded-lg group/link"
                      download
                    >
                      <FontAwesomeIcon icon={faDownload} className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
