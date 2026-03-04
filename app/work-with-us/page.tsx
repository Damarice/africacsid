"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { vacancies } from "@/data/vacancies";

export default function WorkWithUsPage() {
  return (
    <>
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/hero.JPG"
          alt="Work With Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Work With Us
            </h1>
            <p className="text-lg md:text-xl text-white/95">
              Join our team and make a difference in communities across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Current Vacancies
            </h2>
          </div>

          {vacancies.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {vacancies.map((vacancy) => (
                <Link
                  key={vacancy.id}
                  href={`/work-with-us/${vacancy.slug}`}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {vacancy.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-base md:text-lg text-gray-600">
                        <span>📍 {vacancy.location}</span>
                        <span>💼 {vacancy.type}</span>
                        <span>📅 Deadline: {vacancy.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 line-clamp-2">
                    {vacancy.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                No Current Vacancies
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                We don't have any open positions at the moment, but we're always looking for talented individuals who share our passion for sustainable development.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Check back soon or send us your CV at{" "}
                <a href="mailto:careers@africacsid.org" className="text-primary font-semibold hover:text-primary-dark">
                  careers@africacsid.org
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Meaningful Impact</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Collaborative Culture</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Professional Growth</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
