"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBullseye,
  faUsers,
  faFlask,
  faNetworkWired,
  faBuilding,
  faLeaf,
  faHandshake,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type Tab = { label: string; subtitle: string; items: string[]; dot: string };
function TabPanel({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === i
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          {tabs[active].subtitle}
        </p>
        <ul className="space-y-3">
          {tabs[active].items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-small text-gray-600">
              <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${tabs[active].dot}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

const objectives = [
  "Enhance evidence-based policy making, accountable governance, and inclusive, pro-marginalised sustainable development through advocacy.",
  "Conduct rigorous research on marginalised communities and facilitate multi-stakeholder engagement on the outcomes of such research.",
  "Develop and strengthen capacity of non-state actors to influence public policy, demand accountability from government, and advance marginalised communities' interests.",
  "Amplify the voice of marginalised communities on effective, sustainable development.",
  "Support innovative and practical people-led development actions among marginalised communities.",
];

const values = [
  { name: "Integrity & Ethics", color: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" },
  { name: "Respect", color: "bg-secondary/10 text-secondary-dark border-secondary/20 hover:bg-secondary hover:text-neutral" },
  { name: "Innovation", color: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white" },
  { name: "Trust", color: "bg-gold/10 text-secondary-dark border-gold/20 hover:bg-gold hover:text-neutral" },
  { name: "Ingenuity", color: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" },
  { name: "Accountability", color: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white" },
  { name: "Value-centricity", color: "bg-secondary/10 text-secondary-dark border-secondary/20 hover:bg-secondary hover:text-neutral" },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/hero.JPG"
          alt="Who We Are"
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Who We Are</h1>
            <p className="text-subtitle text-white/95">
              Building and scaling practical, community-driven solutions for
              peace, economic security, and climate action across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Organisation intro + Vision / Mission */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Our Organisation
            </p>
            <h2 className="text-gray-900 mb-4">
              Africa Centre for Sustainable and Inclusive Development
            </h2>
            <p className="text-gray-500 max-w-3xl mb-10">
              Africa CSID recognises that sustainable impact requires addressing
              challenges together rather than in isolation — social cohesion,
              resilient livelihoods, and climate adaptation are deeply linked in
              people&apos;s daily lives.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={100}>
              <div className="h-full rounded-2xl bg-primary/5 border border-primary/15 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEye} className="text-primary text-sm" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Vision
                  </span>
                </div>
                <h4 className="text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-500 text-small">
                  Development actions that protect current and future generations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-2xl bg-secondary/5 border border-secondary/20 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBullseye} className="text-secondary-dark text-sm" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary-dark">
                    Mission
                  </span>
                </div>
                <h4 className="text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-500 text-small">
                  To build and scale practical, community-driven solutions that
                  enable marginalised communities across Africa to achieve peace,
                  economic security, and effective climate action — while
                  generating evidence and partnerships that drive lasting systems
                  change.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Create Impact */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <Reveal className="lg:col-span-2">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                Our Approach
              </p>
              <h2 className="text-gray-900 mb-4">How We Create Impact</h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-3">
              <div className="space-y-4">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </span>
                    <p className="text-gray-500 text-small">{obj}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Belief banner */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                  Our Core Belief
                </p>
                <h2 className="text-white">Sustainable Change Starts Here</h2>
              </div>
              <div className="md:col-span-3 border-l border-white/20 pl-6 space-y-3">
                <p className="text-white/75 text-small">
                  Marginalised communities face overlapping challenges — conflict,
                  economic exclusion, climate shocks, weak governance, and
                  gendered inequalities. These reinforce each other. Addressing
                  them one at a time does not create lasting change.
                </p>
                <p className="text-white font-semibold text-small">
                  Sustainable, inclusive development happens when communities lead
                  the change and when peace, livelihoods, climate resilience and
                  mitigation, governance, and gender equality are addressed
                  together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do + Theory of Change */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                In Practice
              </p>
              <h2 className="text-gray-900 mb-6">What We Do</h2>
              <TabPanel
                tabs={[
                  {
                    label: "Enablers of Change",
                    subtitle: "We invest in",
                    dot: "bg-primary",
                    items: [
                      "Community organising and local leadership",
                      "Gender-responsive tools and participatory processes",
                      "Conflict-sensitive and climate-smart practices",
                      "Evidence generation, learning, and adaptation",
                      "Partnerships with state and non-state actors",
                    ],
                  },
                  {
                    label: "How We Create Change",
                    subtitle: "We support communities to",
                    dot: "bg-accent",
                    items: [
                      "Build peace and strengthen social cohesion",
                      "Improve livelihoods and economic opportunities",
                      "Adapt to climate shocks and manage natural resources",
                      "Participate in decision-making and hold institutions accountable",
                      "Elevate women's and youth leadership",
                      "Generate evidence that shapes policies and systems",
                    ],
                  },
                ]}
              />
            </Reveal>

            <Reveal delay={150}>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                Our Theory of Change
              </p>
              <h2 className="text-gray-900 mb-6">From Action to Impact</h2>
              <TabPanel
                tabs={[
                  {
                    label: "Progress Markers",
                    subtitle: "Early shifts we envisage",
                    dot: "bg-primary",
                    items: [
                      "Communities co-design and own solutions",
                      "Community groups gain skills and confidence",
                      "Trust-building and dialogue spaces become more active and inclusive",
                      "Livelihood and climate-resilient practices improve",
                      "Gender and governance gaps begin to narrow",
                    ],
                  },
                  {
                    label: "Transformation",
                    subtitle: "Medium-term changes",
                    dot: "bg-secondary-dark",
                    items: [
                      "Social cohesion deepens and communities resolve conflict more constructively",
                      "Economic security improves and livelihood opportunities expand",
                      "Climate resilience strengthens and natural resources are better stewarded",
                      "Governance becomes more participatory and accountable",
                      "Women and youth hold greater influence in community decisions",
                    ],
                  },
                  {
                    label: "Long-Term Impact",
                    subtitle: "The ultimate change Africa CSID aims to contribute to",
                    dot: "bg-accent",
                    items: [
                      "Communities become resilient, peaceful, and economically secure — supported by strong, inclusive institutions and development pathways that protect both current and future generations.",
                    ],
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              What Guides Us
            </p>
            <h2 className="text-gray-900 mb-8">Our Core Values</h2>
            <div className="flex flex-wrap gap-3">
              {values.map((v, i) => (
                <span
                  key={i}
                  className={`px-5 py-2 rounded-full border text-sm font-semibold cursor-default transition-all duration-200 ${v.color}`}
                >
                  {v.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
