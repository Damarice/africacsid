"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faDownload, faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const samplePublications = [
  {
    id: 1,
    title: "Climate Justice and Gender-Responsive Action in Africa",
    description: "A comprehensive analysis of the intersection between climate change, gender equality, and social justice in African communities. This report examines policy frameworks and community-led initiatives.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80",
    date: "January 2026",
    type: "Research Report",
    typeColor: "bg-primary",
    pages: "45 pages",
    downloadUrl: "#",
    slug: "climate-justice-gender-responsive"
  },
  {
    id: 2,
    title: "Economic Empowerment Strategies for Marginalized Communities",
    description: "Best practices and case studies from our economic empowerment programs across Kenya and Tanzania, highlighting successful models for sustainable livelihoods.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
    date: "November 2025",
    type: "Case Study",
    typeColor: "bg-accent",
    pages: "32 pages",
    downloadUrl: "#",
    slug: "economic-empowerment-strategies"
  },
  {
    id: 3,
    title: "Peace-Building in Conflict-Affected Regions: A Community Approach",
    description: "Documenting successful peace-building initiatives and conflict resolution strategies implemented in partnership with local communities across East Africa.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
    date: "September 2025",
    type: "Policy Brief",
    typeColor: "bg-secondary",
    pages: "28 pages",
    downloadUrl: "#",
    slug: "peace-building-community-approach"
  },
  {
    id: 4,
    title: "Agroecology and Food Sovereignty: Lessons from the Field",
    description: "A practical guide to implementing agroecological practices for climate resilience and food security, based on our training programs and farmer experiences.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80",
    date: "July 2025",
    type: "Training Manual",
    typeColor: "bg-primary",
    pages: "68 pages",
    downloadUrl: "#",
    slug: "agroecology-food-sovereignty"
  },
  {
    id: 5,
    title: "Annual Impact Report 2024",
    description: "Our comprehensive annual report showcasing achievements, challenges, and impact across all program areas including peace-building, economic empowerment, and climate action.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    date: "March 2025",
    type: "Annual Report",
    typeColor: "bg-accent",
    pages: "52 pages",
    downloadUrl: "#",
    slug: "annual-impact-report-2024"
  },
  {
    id: 6,
    title: "Women's Leadership in Climate Action: A Regional Study",
    description: "Exploring the critical role of women leaders in driving climate action and building resilient communities across marginalized regions in Africa.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop&q=80",
    date: "December 2024",
    type: "Research Report",
    typeColor: "bg-secondary",
    pages: "38 pages",
    downloadUrl: "#",
    slug: "women-leadership-climate-action"
  }
];

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop&q=80"
          alt="Publications"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Publications
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Research, reports, and insights from our work across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {samplePublications.map((publication, index) => (
              <article
                key={publication.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-primary group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 ${publication.typeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {publication.type}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faFileAlt} />
                    {publication.pages}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FontAwesomeIcon icon={faCalendar} className="text-primary" />
                    <span>{publication.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {publication.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 mb-6 line-clamp-4 leading-relaxed">
                    {publication.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/resources/publications/${publication.slug}`}
                      className="flex-1 inline-flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors group/link border-2 border-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg"
                    >
                      View Details
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <a
                      href={publication.downloadUrl}
                      className="inline-flex items-center justify-center bg-primary text-white font-semibold hover:bg-primary-dark transition-colors py-2 px-4 rounded-lg"
                      download
                    >
                      <FontAwesomeIcon icon={faDownload} />
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
