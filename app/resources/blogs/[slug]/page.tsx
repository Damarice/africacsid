import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getBlogBySlug } from "@/lib/wordpress";
import { blogs as staticBlogs } from "@/data/blogs";

export const revalidate = 60;

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const wpBlog = await getBlogBySlug(params.slug);
  const blog = wpBlog ?? staticBlogs.find(b => b.slug === params.slug);

  if (!blog) notFound();

  return (
    <>
      <Navbar />
      
      <article className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <Link href="/resources/blogs" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Blogs
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-6 text-base md:text-lg text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} className="text-primary" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="text-primary" />
              {blog.author}
            </span>
          </div>
          
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            {wpBlog ? (
              // Render full WordPress content
              <div dangerouslySetInnerHTML={{ __html: wpBlog.content }} />
            ) : (
              // Static fallback
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {blog.excerpt}
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
