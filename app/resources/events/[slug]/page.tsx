"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { events } from "@/data/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt, faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const event = events.find(e => e.slug === slug);
  
  if (!event) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Not Found</h1>
            <Link href="/resources/events" className="text-primary hover:text-primary-dark">
              Back to Events
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
          <Link href="/resources/events" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Events
          </Link>
          
          <div className={`inline-block ${event.typeColor} text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold mb-4`}>
            {event.type}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {event.title}
          </h1>
          
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8">
            <div className="space-y-4 text-lg md:text-xl">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCalendar} className="text-accent text-2xl" />
                <span className="font-semibold">{event.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faClock} className="text-accent text-2xl" />
                <span className="font-semibold">{event.time}</span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent text-2xl mt-1" />
                <span className="font-semibold">{event.location}</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {event.description}
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Additional event details will be populated from WordPress. Full event information, registration details, and agenda will appear here once integrated with your content management system.
            </p>
          </div>
        </div>
      </article>
      
      <CTASection />
      <Footer />
    </>
  );
}
