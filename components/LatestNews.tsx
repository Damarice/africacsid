import Link from "next/link";
import Image from "next/image";

const news = [
  {
    title: "Seeds of Change in Nyatike",
    excerpt: "Agroecology training builds climate resilience and food sovereignty in local communities.",
    date: "Jan 8, 2026",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80",
    slug: "seeds-of-change-nyatike",
  },
  {
    title: "Bridging the Gap at COP30",
    excerpt: "Africa CSID's participation in global climate discussions and the fight for inclusion.",
    date: "Oct 14, 2025",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
    slug: "bridging-gap-cop30",
  },
  {
    title: "KAIROS Canada Partnership",
    excerpt: "Africa CSID joins solidarity partners meeting to strengthen collaborative efforts.",
    date: "Feb 1, 2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
    slug: "kairos-partnership",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Insights
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Stay updated with our latest stories and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="text-base text-gray-500 mb-3">{item.date}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                <Link
                  href={`/resources/blog/${item.slug}`}
                  className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors group"
                >
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
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

        <div className="text-center mt-16">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center text-primary font-semibold text-xl hover:text-primary-dark transition-colors"
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
