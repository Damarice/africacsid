import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ClimatePage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop&q=60"
          alt="Climate Change"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Climate Change
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Enhancing resilience and advocating for climate justice
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            One of our objectives is to address the escalating impacts of climate change, particularly on 
            marginalized communities, by enhancing their overall resilience and advocating for climate justice, 
            biodiversity conservation, and sustainable food systems. We work closely with these communities to 
            boost their capacity to adapt to the impacts of climate change.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">Key Activities</h3>
          <ul className="space-y-3 text-lg md:text-xl text-gray-700">
            <li className="flex items-start">
              <span className="text-secondary mr-3">•</span>
              Climate resilience training and agroecology
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3">•</span>
              Sustainable food systems and biodiversity conservation
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3">•</span>
              Climate justice advocacy and policy engagement
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3">•</span>
              Community-based adaptation strategies
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
