"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const projects = [
  {
    id: 2,
    title: "Women, Faith, and Climate Security Project",
    image: "/KAIROS Canada Partnership.JPG",
    alt: "Women Faith and Climate Security - KAIROS Canada",
    tags: ["Gender-Conflict-Climate Nexus", "Women's Leadership", "Peace Building", "Climate Resilience"],
    partner: "KAIROS Canada",
    status: "Ongoing" as const,
    paragraphs: [
      `Africa CSID, with support from KAIROS Canada, is committed to strengthening the gender‑conflict‑climate nexus through the Women, Faith, and Climate Security Project.`,
      `This is a transformative initiative aimed at strengthening the gender‑conflict‑climate nexus across Kenya's fragile ecosystems. Implemented in pastoral communities in Baringo and the fisher communities of the Lake Victoria Basin, the project seeks to empower women as agents of peace and resilience amid climate‑driven resource scarcity and conflict.`,
      `By institutionalizing women‑led peace committees, fostering interfaith solidarity, and advancing climate‑resilient livelihoods, the project bridges pastoral and fisher contexts under a common peace‑climate framework. It aligns with Kenya's Security Strategy, the National Climate Change Action Plan, and global Women, Peace, and Security commitments.`,
      `Directly benefiting 600 women, children, and youth, and reaching over 3,000 community members—the project seeks to elevate grassroot voices through forums, interfaith dialogues, and multimedia campaigns under Justice and Renewal: Women, Faith, and Climate Peace.`,
      `Rooted in faith and cultural values, it showcases the power of women, faith, and community in shaping a more peaceful and sustainable future for Kenya and beyond.`,
    ],
  },
  {
    id: 3,
    title: "Capacity Building for Gender Mainstreaming in Climate Action and Dissemination of the NGCCAP 2025-2027 Report",
    image: "/Climate Change.JPG",
    alt: "NGCCAP Gender Mainstreaming Project",
    tags: ["Gender Mainstreaming", "Climate Governance", "Capacity Building", "NDC Partnership"],
    partner: "NDC Partnership, State Department for Gender and Affirmative Action, State Department for Environment and Climate Action",
    status: "Completed" as const,
    paragraphs: [
      `Africa CSID is committed to advancing gender‑responsive climate governance.`,
      `Implemented across five regions in Kenya — Pwani, LREB, Mount Kenya & Aberdares, North Rift, and South Eastern — the project reached 25 counties with support from the NDC Partnership, the State Department for Gender and Affirmative Action, and the State Department for Environment and Climate Action.`,
      `The initiative directly engaged over 300 participants, including county gender officers, planners, and disaster risk reduction focal points. Through participatory workshops and training, stakeholders were equipped with updated tools and a Gender Mainstreaming Guideline tailored to county contexts.`,
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  const isOngoing = project.status === "Ongoing";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-primary flex flex-col">
      <div className="relative h-56">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          quality={75}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

        <div className="text-gray-600 mb-4 leading-relaxed text-sm">
          {expanded ? (
            project.paragraphs.map((para, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>{para}</p>
            ))
          ) : (
            <p>{project.paragraphs[0]}</p>
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
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-auto">
          <span>
            <strong>Partner:</strong> {project.partner}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold ${
              isOngoing
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full inline-block ${
                isOngoing ? "bg-green-500" : "bg-gray-400"
              }`}
            />
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Our Programs & Projects"
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
              Our Programs & Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Specific initiatives driving change across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h2>
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
