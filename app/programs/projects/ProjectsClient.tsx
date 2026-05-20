"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

interface Project {
  id: number;
  title: string;
  image: string;
  description?: string;
  content?: string;
  tags: string[];
  status: string;
  programArea?: string;
  location?: string;
  // static fallback fields
  alt?: string;
  paragraphs?: string[];
  partner?: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const isOngoing = project.status === "Ongoing";

  // Support both WP content and static paragraphs
  const hasWPContent = !!project.content && project.content.trim() !== "";
  const hasParagraphs = !!project.paragraphs && project.paragraphs.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-primary flex flex-col">
      <div className="relative h-56">
        <Image
          src={project.image}
          alt={project.alt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          quality={75}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

        <div className="text-gray-600 mb-4 leading-relaxed text-sm">
          {hasWPContent ? (
            expanded ? (
              <div dangerouslySetInnerHTML={{ __html: project.content! }} />
            ) : (
              <p>{project.description}</p>
            )
          ) : hasParagraphs ? (
            expanded ? (
              project.paragraphs!.map((para, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>{para}</p>
              ))
            ) : (
              <p>{project.paragraphs![0]}</p>
            )
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary hover:text-primary-dark font-semibold mb-4 transition-colors text-left text-sm"
        >
          {expanded ? "Read Less ↑" : "Read More ↓"}
        </button>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-auto">
          {project.partner && (
            <span><strong>Partner:</strong> {project.partner}</span>
          )}
          {project.location && (
            <span><strong>Location:</strong> {project.location}</span>
          )}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold ${
            isOngoing ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
          }`}>
            <span className={`w-2 h-2 rounded-full inline-block ${isOngoing ? "bg-green-500" : "bg-gray-400"}`} />
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <>
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image src="/hero.JPG" alt="Our Programs & Projects" fill sizes="100vw" className="object-cover" quality={75} priority />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Programs & Projects</h1>
            <p className="text-xl md:text-2xl text-white/95">Specific initiatives driving change across Africa</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our initiatives that are making a real difference across Africa's communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
