import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Join Us in Creating Change
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Partner with us to build a more inclusive and sustainable Africa
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/get-involved"
            className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
