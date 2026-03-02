"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const sampleEvents = [
  {
    id: 1,
    title: "Community Climate Resilience Workshop",
    description: "Join us for a comprehensive workshop on building climate resilience in rural communities. Learn practical strategies for sustainable agriculture and water management.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
    date: "March 15, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Nyatike Community Center, Migori County",
    type: "Workshop",
    typeColor: "bg-primary",
    status: "upcoming",
    slug: "climate-resilience-workshop"
  },
  {
    id: 2,
    title: "Women's Economic Empowerment Summit",
    description: "A gathering of women entrepreneurs and leaders to share experiences, build networks, and explore opportunities for economic growth and financial independence.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80",
    date: "April 22, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Kisumu Conference Hall, Kenya",
    type: "Summit",
    typeColor: "bg-accent",
    status: "upcoming",
    slug: "women-empowerment-summit"
  },
  {
    id: 3,
    title: "Peace-Building Dialogue Forum",
    description: "An open forum bringing together community leaders, youth, and stakeholders to discuss peace-building strategies and conflict resolution in our regions.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
    date: "May 10, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Migori Peace Center, Kenya",
    type: "Forum",
    typeColor: "bg-secondary",
    status: "upcoming",
    slug: "peace-building-forum"
  },
  {
    id: 4,
    title: "Agroecology Training Program - Cohort 2",
    description: "Hands-on training in sustainable farming practices, soil health management, and climate-smart agriculture techniques for local farmers.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80",
    date: "January 20, 2026",
    time: "8:00 AM - 3:00 PM",
    location: "GBAC Kenya Model Farm, Thika",
    type: "Training",
    typeColor: "bg-primary",
    status: "past",
    slug: "agroecology-training-cohort-2"
  },
  {
    id: 5,
    title: "Annual Partners Meeting 2025",
    description: "Our annual gathering with partners and stakeholders to review achievements, share learnings, and plan for the year ahead.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
    date: "December 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Nairobi Conference Center, Kenya",
    type: "Meeting",
    typeColor: "bg-accent",
    status: "past",
    slug: "annual-partners-meeting-2025"
  },
  {
    id: 6,
    title: "Youth Leadership in Climate Action",
    description: "Empowering young leaders with knowledge and tools to drive climate action in their communities through innovative solutions.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop&q=80",
    date: "November 18, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Kisumu Youth Center, Kenya",
    type: "Workshop",
    typeColor: "bg-primary",
    status: "past",
    slug: "youth-climate-leadership"
  }
];

export default function EventsPage() {
  const upcomingEvents = sampleEvents.filter(e => e.status === "upcoming");
  const pastEvents = sampleEvents.filter(e => e.status === "past");

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&q=80"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover"
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
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-accent group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 ${event.typeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {event.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pastEvents.map((event, index) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-gray-400 group opacity-90"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {event.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
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
