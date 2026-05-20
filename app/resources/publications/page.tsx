import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faDownload, faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getPublications } from "@/lib/wordpress";
import { publications as staticPublications } from "@/data/publications";

export const revalidate = 60;

export default async function PublicationsPage() {
  const wpPublications = await getPublications(12);
  const publications = wpPublications.length > 0 ? wpPublications : staticPublications;

  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Publications"
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
              Publications
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Research, reports, and insights from our work across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {publications.map((publication, index) => (
              <article
                key={publication.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={publication.image}
                    alt={publication.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-base md:text-lg text-gray-500 mb-4">
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
