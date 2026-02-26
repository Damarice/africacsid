import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Africa Centre for Sustainable and Inclusive Development
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                The Africa Centre for Sustainable and Inclusive Development (Africa CSID) is a leading African 
                NGO registered in Kenya, dedicated to supporting marginalized communities across the continent.
              </p>

              <p>
                Guided by its mission, Africa CSID addresses marginalization through two key dimensions: 
                geographical context and population context.
              </p>

              <p>
                Africa CSID is committed to fostering sustainable development and inclusivity, working 
                tirelessly to uplift underserved communities and create lasting change.
              </p>

              <button className="mt-6 bg-gold hover:bg-secondary text-gray-900 font-semibold px-8 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80"
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
