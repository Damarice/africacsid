"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote: "Africa CSID's work in our community has transformed lives. Their approach to sustainable development is truly remarkable.",
    author: "Community Leader",
    location: "Nyatike, Kenya",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop&q=80",
    borderColor: "border-primary",
  },
  {
    quote: "The climate resilience training provided by Africa CSID has empowered our farmers to adapt to changing weather patterns.",
    author: "Agricultural Coordinator",
    location: "Zanzibar, Tanzania",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&q=80",
    borderColor: "border-accent",
  },
  {
    quote: "Through their economic empowerment programs, we've seen real change in our community's self-sufficiency.",
    author: "Women's Group Leader",
    location: "Migori County, Kenya",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop&q=80",
    borderColor: "border-gold",
  },
  {
    quote: "The peace-building initiatives have brought our divided communities together and created lasting harmony.",
    author: "Peace Ambassador",
    location: "Migori, Kenya",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop&q=80",
    borderColor: "border-secondary",
  },
];

export default function Testimonials() {

  return (
    <section className="py-16 md:py-20 bg-sand">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voices from the Field
          </h2>
          <p className="text-lg text-gray-700">
            Stories of impact and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${testimonial.borderColor}`}
            >
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-2xl text-primary/30 mb-4"
              />
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-cover bg-center border-2 ${testimonial.borderColor} flex-shrink-0`}
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <div className="font-bold text-sm text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
