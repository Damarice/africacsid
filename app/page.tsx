import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AreaOfFocus from "@/components/AreaOfFocus";
import ImpactCounter from "@/components/ImpactCounter";
import LatestNews from "@/components/LatestNews";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <AreaOfFocus />
      <ImpactCounter />
      <LatestNews />
      <Testimonials />
      <Partners />
      <CallToAction />
      <Footer />
    </main>
  );
}
