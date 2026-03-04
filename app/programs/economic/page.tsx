import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function EconomicPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/Economic Empowerment.JPG"
          alt="Economic Empowerment"
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-accent/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Economic Empowerment
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Building sustainable livelihoods and self-sufficiency
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The Economic Empowerment component of our program is an integral part of our efforts towards 
            improving the well-being, productivity and self-sufficiency of marginalized communities across 
            different regions. Through our comprehensive approach, we aim to address the root causes of 
            poverty and guide our communities towards a more prosperous future.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">Key Activities</h3>
          <ul className="space-y-3 text-lg md:text-xl text-gray-700">
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              Skills training and capacity building
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              Support for women-led cooperatives
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              Access to microfinance and savings groups
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              Market linkages and value chain development
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
