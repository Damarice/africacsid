"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogs } from "@/data/blogs";

export default function LatestNews() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  // Get only the first 3 blogs for homepage
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-accent/5 to-primary/5 relative overflow-hidden">
      {/* Floating background elements - optimized for mobile */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float will-change-transform"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float will-change-transform" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container-custom relative z-10" style={{ WebkitTransform: 'translate3d(0, 0, 0)', transform: 'translate3d(0, 0, 0)' }}>
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Stay updated with our latest stories and impact
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestBlogs.map((item, index) => (
            <article
              key={item.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg active:shadow-2xl md:hover:shadow-2xl transition-all duration-500 transform active:scale-95 md:hover:-translate-y-2 border-t-4 ${item.categoryColor} will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transition: 'all 0.6s ease-out',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div className="relative h-56 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110 will-change-transform"
                />
              </div>
              <div className="p-8">
                <div className="text-base md:text-lg text-gray-500 mb-3">{item.date}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 md:hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                <Link
                  href={`/resources/blogs/${item.slug}`}
                  className="inline-flex items-center text-primary font-semibold text-lg md:text-xl active:text-primary-dark md:hover:text-primary-dark transition-colors group"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 md:group-hover:translate-x-2 transition-transform duration-300 will-change-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center bg-gold hover:bg-secondary-dark text-neutral font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300 transform active:scale-95 md:hover:scale-105 md:hover:shadow-lg will-change-transform"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            View All News
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
