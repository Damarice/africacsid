"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="News & Blogs"
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
              News & Blogs
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Latest stories, insights, and updates from the field
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className={`absolute top-4 left-4 ${blog.categoryColor} text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold`}>
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-base md:text-lg text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} className="text-primary" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faUser} className="text-primary" />
                      {blog.author}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <Link
                    href={`/resources/blogs/${blog.slug}`}
                    className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors group/link"
                  >
                    Read More
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
