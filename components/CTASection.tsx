import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Join Us in Creating Change
        </h2>
        <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto">
          Partner with us to build a more inclusive and sustainable Africa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-involved"
            className="bg-secondary hover:bg-secondary-dark text-neutral font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
