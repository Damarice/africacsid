"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
            <Link href="/resources/blogs" className="text-primary hover:text-primary-dark">
              Back to Blogs
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
          <Link href="/resources/blogs" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Blogs
          </Link>
          
          <div className={`inline-block ${blog.categoryColor} text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold mb-4`}>
            {blog.category}
          </div>
          
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
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {blog.excerpt}
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              This content will be populated from WordPress. The full article details, images, and formatting will appear here once integrated with your content management system.
            </p>
          </div>
        </div>
      </article>
      
      <CTASection />
      <Footer />
    </>
  );
}
