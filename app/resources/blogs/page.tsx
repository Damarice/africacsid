"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const sampleBlogs = [
  {
    id: 1,
    title: "Seeds of Change: Agroecology Training in Nyatike",
    excerpt: "Africa CSID launches transformative agroecology training program in Nyatike, empowering local farmers with sustainable farming practices and climate resilience strategies.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80",
    date: "January 8, 2026",
    author: "Africa CSID Team",
    category: "Climate Change",
    categoryColor: "bg-primary",
    slug: "seeds-of-change-nyatike"
  },
  {
    id: 2,
    title: "Bridging the Gap: Africa CSID at COP30",
    excerpt: "Our participation in global climate discussions highlights the urgent need for inclusive climate action and the voices of marginalized communities in policy-making.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
    date: "October 14, 2025",
    author: "Policy Team",
    category: "Advocacy",
    categoryColor: "bg-accent",
    slug: "bridging-gap-cop30"
  },
  {
    id: 3,
    title: "KAIROS Canada Partnership: Strengthening Solidarity",
    excerpt: "Africa CSID joins KAIROS Canada solidarity partners meeting to strengthen collaborative efforts in peace-building and sustainable development across the continent.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
    date: "February 1, 2025",
    author: "Partnerships Team",
    category: "Partnerships",
    categoryColor: "bg-secondary",
    slug: "kairos-partnership"
  },
  {
    id: 4,
    title: "Women's Economic Empowerment in Migori County",
    excerpt: "Celebrating the success of women-led cooperatives in Migori County as they achieve financial independence through our economic empowerment programs.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80",
    date: "December 15, 2024",
    author: "Economic Team",
    category: "Economic Empowerment",
    categoryColor: "bg-accent",
    slug: "women-empowerment-migori"
  },
  {
    id: 5,
    title: "Peace-Building Success Stories from the Field",
    excerpt: "How community-led peace initiatives are transforming conflict-affected regions and creating lasting harmony through dialogue and reconciliation.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop&q=80",
    date: "November 20, 2024",
    author: "Peace Team",
    category: "Peace & Conflict",
    categoryColor: "bg-primary",
    slug: "peace-building-stories"
  },
  {
    id: 6,
    title: "Climate Resilience Training: Building Adaptive Capacity",
    excerpt: "Our latest climate resilience training equips communities with tools and knowledge to adapt to changing weather patterns and protect their livelihoods.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&q=80",
    date: "October 5, 2024",
    author: "Climate Team",
    category: "Climate Change",
    categoryColor: "bg-primary",
    slug: "climate-resilience-training"
  }
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=1080&fit=crop&q=80"
          alt="News & Blogs"
          className="absolute inset-0 w-full h-full object-cover"
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

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sampleBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-primary group"
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 ${blog.categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
