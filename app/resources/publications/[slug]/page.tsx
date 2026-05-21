import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faDownload, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getPublicationBySlug } from "@/lib/wordpress";
import { publications as staticPublications } from "@/data/publications";

export const revalidate = 60;

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wpPublication = await getPublicationBySlug(slug);
  const publication = wpPublication ?? staticPublications.find(p => p.slug === slug);

  if (!publication) notFound();

  return (
    <>
      <Navbar />
      
      <article className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <Link href="/resources/publications" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Publications
          </Link>
          
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
            {wpPublication ? (
              <div dangerouslySetInnerHTML={{ __html: wpPublication.content }} />
            ) : (
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {publication.description}
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
