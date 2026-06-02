import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt, faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getEventBySlug } from "@/lib/wordpress";
import { events as staticEvents } from "@/data/events";

export const revalidate = 60;

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wpEvent = await getEventBySlug(slug);
  const event = wpEvent ?? staticEvents.find(e => e.slug === slug);

  if (!event) notFound();

  return (
    <>
      <Navbar />
      
      <article className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <Link href="/resources/events" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Events
          </Link>
          
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
          
          <div className="prose prose-lg prose-gray max-w-none">
            {wpEvent ? (
              <div dangerouslySetInnerHTML={{ __html: wpEvent.content }} />
            ) : (
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {event.description}
              </p>
            )}
          </div>
        </div>
      </article>
      
      <CTASection />
      <Footer />
    </>
  );
}
