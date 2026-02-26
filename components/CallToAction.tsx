import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative py-28 md:py-36 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=600&fit=crop&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/95" />
      
      <div className="relative container-custom text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up leading-tight">
          Join Us in Building a Better Africa
        </h2>
        <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          Partner with us to create lasting change in marginalized communities across the continent
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
          <Link
            href="/get-involved/partner"
            className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-5 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Partner With Us
          </Link>
          <Link
            href="/get-involved"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-5 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
