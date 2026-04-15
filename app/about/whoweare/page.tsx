"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ── reusable scroll-reveal wrapper ── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── accordion item ── */
function AccordionItem({ number, text }: { number: number; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
    >
      <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
        {number}
      </span>
      <p className="flex-1 text-gray-700">{text}</p>
      <FontAwesomeIcon
        icon={open ? faChevronUp : faChevronDown}
        className="text-gray-400 mt-1 flex-shrink-0 transition-transform duration-300"
      />
    </button>
  );
}

/* ── tab panel ── */
type Tab = { label: string; subtitle: string; items: string[]; color: string };
function TabPanel({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === i
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{tabs[active].subtitle}</p>
        <ul className="space-y-3">
          {tabs[active].items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-700"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${tabs[active].color}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <Image src="/hero.JPG" alt="Community" fill sizes="100vw" className="object-cover" quality={75} priority />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-white/70 mb-3 font-medium">About Us</p>
            <h1 className="text-white">Who We Are</h1>
          </Reveal>
        </div>
      </section>

      {/* ── Intro + Vision/Mission ── */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Our Organisation</p>
            <h2 className="text-gray-900 mb-5">
              Africa Centre for Sustainable and Inclusive Development (Africa CSID)
            </h2>
            <p className="text-gray-600 max-w-3xl mb-12">
              Africa CSID recognises that sustainable impact requires addressing these challenges together rather
              than in isolation, since social cohesion, resilient livelihoods, and climate adaptation are deeply
              linked in people&apos;s daily lives.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={100}>
              <div className="h-full rounded-2xl bg-primary/5 border border-primary/15 p-7 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEye} className="text-primary text-sm" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Vision</span>
                </div>
                <p className="text-gray-800 font-medium">
                  Development actions that protect current and future generations
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-2xl bg-gold/5 border border-gold/20 p-7 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBullseye} className="text-gold text-sm" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">Mission</span>
                </div>
                <p className="text-gray-800 font-medium">
                  To build and scale practical, community-driven solutions that enable marginalized communities
                  across Africa to achieve peace, economic security, and effective climate action, while generating
                  evidence and partnerships that drive lasting systems change.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How We Create Impact ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <Reveal className="lg:col-span-2">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Our Approach</p>
              <h2 className="text-gray-900 leading-tight">How We Create Impact</h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-3">
              <div className="space-y-4 text-gray-600">
                <p>
                  Africa CSID believes that meaningful and lasting change is strongest when it is rooted in the
                  lived realities, leadership, and aspirations of the communities we serve — and when development
                  challenges are addressed together rather than in isolation.
                </p>
                <p>
                  Our work begins by working directly with communities to surface their priorities and codesign
                  solutions that address interconnected challenges: building peace and social cohesion,
                  strengthening economic security, and enhancing climate resilience while reducing greenhouse gas
                  emissions. These locally led solutions are reinforced through gender-responsive practices and
                  strong local governance.
                </p>
                <p>
                  As community-led actions take shape, we generate evidence of what is changing and why. We
                  partner with state and non-state actors to embed resources and scale approaches proven at
                  community level.
                </p>
                <p>
                  Through this process, local action becomes the foundation for stronger, more resilient
                  communities — and over time, these gains contribute to broader system change that supports
                  inclusive and sustainable development for current and future generations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Core Belief banner ── */}
      <section className="py-14 bg-primary">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Our Impact</p>
                <h2 className="text-white">Our Core Belief</h2>
              </div>
              <div className="md:col-span-3 border-l border-white/20 pl-6 space-y-3">
                <p className="text-white/75">
                  Marginalised communities face overlapping challenges — conflict, economic exclusion, climate
                  shocks, weak governance, and gendered inequalities. These reinforce each other. Addressing them
                  one at a time does not create lasting change.
                </p>
                <p className="text-white font-semibold">
                  Sustainable, inclusive development happens when communities lead the change and when peace,
                  livelihoods, climate resilience, governance, and gender equality are addressed together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What We Do + Theory of Change — one row ── */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: What We Do */}
            <Reveal>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">In Practice</p>
              <h2 className="text-gray-900 mb-6">What We Do</h2>
              <TabPanel
                tabs={[
                  {
                    label: "Enablers of Change",
                    subtitle: "We invest in",
                    color: "bg-primary",
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
                    color: "bg-accent",
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

            {/* Right: Theory of Change */}
            <Reveal delay={150}>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">Our Theory of Change</p>
              <h2 className="text-gray-900 mb-6">From Action to Impact</h2>
              <TabPanel
                tabs={[
                  {
                    label: "Progress Markers",
                    subtitle: "Early shifts we envisage",
                    color: "bg-primary",
                    items: [
                      "Community co-design and own solutions",
                      "Community groups and institutions gain skills and confidence",
                      "Trust-building and dialogue spaces become more active and inclusive",
                      "Livelihood and climate-resilient practices improve",
                      "Gender and governance gaps begin to narrow",
                    ],
                  },
                  {
                    label: "Transformation We Seek",
                    subtitle: "Medium-term changes",
                    color: "bg-gold",
                    items: [
                      "Social cohesion deepens and communities resolve conflict more constructively",
                      "Economic security improves and livelihood opportunities expand",
                      "Climate resilience strengthens and natural resources are better stewarded",
                      "Governance becomes more participatory and accountable",
                      "Women and youth hold greater influence and leadership in community decisions",
                    ],
                  },
                  {
                    label: "Long-Term Impact",
                    subtitle: "The ultimate change Africa CSID aims to contribute to",
                    color: "bg-accent",
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

      {/* ── Objectives (accordion) ── */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">What We Aim For</p>
            <h2 className="text-gray-900 mb-8">Our Objectives</h2>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
              {[
                "To enhance evidence-based policy making, accountable governance and inclusive, pro-marginalized sustainable development through advocacy",
                "To conduct rigorous research on marginalized communities and people, and facilitate multi-stakeholder engagement on the outcomes of such research",
                "To develop and strengthen capacity of non-state actors to influence and shape the conduct of public policy; demand accountability from government; and identify and advance marginalized communities and people interests",
                "Amplify the voice of the marginalized communities on effective, sustainable development",
                "Support innovative and practical people led development actions among marginalized communities",
              ].map((obj, i) => (
                <AccordionItem key={i} number={i + 1} text={obj} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">What Guides Us</p>
            <h2 className="text-gray-900 mb-8">Our Core Values</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Integrity & Ethics", color: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" },
                { name: "Respect", color: "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary hover:text-white" },
                { name: "Innovation", color: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white" },
                { name: "Trust", color: "bg-gold/10 text-gold border-gold/20 hover:bg-gold hover:text-white" },
                { name: "Ingenuity", color: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" },
                { name: "Accountability", color: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white" },
                { name: "Value-centricity", color: "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary hover:text-white" },
              ].map((v, i) => (
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
