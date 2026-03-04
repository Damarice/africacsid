import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function PeaceConflictPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/Peace and Conflict Transformation.JPG"
          alt="Peace and Conflict Transformation"
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
              Peace and Conflict Transformation
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Building resilient communities through comprehensive peacebuilding
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The primary objective of this component is to promote and enhance resilience in conflict-affected 
            communities by leveraging relevant architectures for peacebuilding. This will be achieved by adopting 
            a comprehensive and integrated approach that prioritizes the identification and resolution of conflict 
            drivers that exist within these communities.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">Key Activities</h3>
          <ul className="space-y-3 text-lg md:text-xl text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Community dialogue and reconciliation programs
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Conflict early warning and response systems
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Peace education and training
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Support for local peace structures
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
