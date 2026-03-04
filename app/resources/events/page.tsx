"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { events } from "@/data/events";

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const pastEvents = events.filter(e => e.status === "past");

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Events"
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
              Events
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Join us in creating positive change through community engagement
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className={`absolute top-4 left-4 ${event.typeColor} text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold`}>
                    {event.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-2 text-base md:text-lg text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} className="text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faClock} className="text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent mt-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Link
                    href={`/resources/events/${event.slug}`}
                    className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group/link"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pastEvents.map((event, index) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-gray-400 group opacity-90"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold">
                    {event.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-2 text-base md:text-lg text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mt-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Link
                    href={`/resources/events/${event.slug}`}
                    className="inline-flex items-center text-gray-700 font-semibold hover:text-gray-900 transition-colors group/link"
                  >
                    View Details
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
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
