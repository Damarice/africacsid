"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faChartLine,
  faLeaf,
  faBullseye,
  faSeedling,
  faBalanceScale,
  faUsers,
  faFlask,
  faNetworkWired,
  faMicrophone,
  faArrowsAlt,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
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

// ── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: faHandshake,
    title: "Peace Building",
    color: "bg-primary/10 text-primary border-primary/20",
    iconBg: "bg-primary/10",
    description:
      "Strengthening social cohesion, dialogue, and local capacities to prevent and address conflict.",
  },
  {
    icon: faChartLine,
    title: "Inclusive Economic Empowerment",
    color: "bg-accent/10 text-accent border-accent/20",
    iconBg: "bg-accent/10",
    description:
      "Supporting pathways for livelihoods, resilience, and dignity, especially among marginalised groups.",
  },
  {
    icon: faLeaf,
    title: "Climate Action",
    color: "bg-secondary/10 text-secondary-dark border-secondary/20",
    iconBg: "bg-secondary/10",
    description:
      "Helping communities adapt to climate shocks, steward natural resources, and strengthen resilience.",
  },
];

const approaches = [
  {
    icon: faUsers,
    title: "Community-driven Action",
    color: "bg-primary/10 text-primary border-primary/20",
    description:
      "We work directly with communities to co-create and deliver solutions that reflect their realities and strengthen their agency.",
  },
  {
    icon: faFlask,
    title: "Evidence and Learning",
    color: "bg-accent/10 text-accent border-accent/20",
    description:
      "We generate actionable evidence to ensure that our interventions are effective, adaptable, and scalable.",
  },
  {
    icon: faNetworkWired,
    title: "Systems Change",
    color: "bg-secondary/10 text-secondary-dark border-secondary/20",
    description:
      "We collaborate with communities, civil society, governments, and academic institutions to translate community-proven solutions into broader policy impact.",
  },
];

const priorities = [
  {
    icon: faBullseye,
    title: "Delivering Actionable Solutions",
    desc: "Designing, implementing, and scaling community-driven solutions that address drivers of conflict, economic exclusion, and climate vulnerability.",
  },
  {
    icon: faFlask,
    title: "Strengthening Evidence for Impact",
    desc: "Generating and applying evidence that strengthens the effectiveness, adaptability, and scale of community-led development interventions.",
  },
  {
    icon: faMicrophone,
    title: "Voice and Co-Creation",
    desc: "Enabling marginalised communities to lead the design, implementation, and evaluation of development solutions that directly affect their lives.",
  },
  {
    icon: faArrowsAlt,
    title: "Driving Systems-level Change",
    desc: "Translating proven community-level solutions into policy, institutional, and market changes through advocacy and multi-stakeholder engagement.",
  },
  {
    icon: faBuilding,
    title: "Building Local Capacity for Sustainability",
    desc: "Strengthening community institutions, civil society organisations, and local actors to deliver, sustain, and scale development solutions.",
  },
  {
    icon: faGraduationCap,
    title: "Organisational Learning and Growth",
    desc: "Investing in systems for learning, accountability, and partnership that enable Africa CSID to adapt, grow, and sustain impact across diverse contexts.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/Who we are.jpeg"
          alt="What We Do"
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">What We Do</h1>
            <p className="text-subtitle text-white/95">
              Transforming communities through sustainable development, climate
              resilience, and inclusive approaches that centre equity and
              environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission snapshot */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Our Mission
            </p>
            <h2 className="text-gray-900 mb-4">Mission in Action</h2>
            <p className="text-gray-500 max-w-3xl mb-10">
              Africa CSID works at the intersection of climate action, food
              systems transformation, and social justice — grounded in both
              scientific evidence and traditional knowledge.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: faBullseye,
                bg: "bg-primary",
                title: "Targeted Impact",
                text: "Focused interventions that address root causes of inequality and environmental degradation.",
              },
              {
                icon: faSeedling,
                bg: "bg-secondary",
                title: "Sustainable Solutions",
                text: "Long-term approaches that build resilience and promote regenerative practices.",
                iconColor: "text-neutral",
              },
              {
                icon: faBalanceScale,
                bg: "bg-accent",
                title: "Justice-Centred",
                text: "Ensuring marginalised communities have equal access to resources and opportunities.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group h-full">
                  <div
                    className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`text-lg ${item.iconColor ?? "text-white"}`}
                    />
                  </div>
                  <h4 className="text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-small">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Our Pillars
            </p>
            <h2 className="text-gray-900 mb-4">Our Pillars</h2>
            <p className="text-gray-500 max-w-3xl mb-10">
              Africa CSID works across three interconnected pillars. Africa CSID
              recognises that sustainable impact requires addressing these
              challenges together rather than in isolation, since social
              cohesion, resilient livelihoods, and climate adaptation are deeply
              linked in people&apos;s daily lives.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {pillars.map((pillar, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={`h-full rounded-2xl border p-6 hover:shadow-md transition-all duration-300 ${pillar.color}`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${pillar.iconBg} bg-white/60 flex items-center justify-center mb-4`}
                  >
                    <FontAwesomeIcon icon={pillar.icon} className="text-base" />
                  </div>
                  <h4 className="text-gray-900 mb-2">{pillar.title}</h4>
                  <p className="text-gray-600 text-small">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Governance & Gender notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={100}>
              <div className="rounded-2xl bg-white border border-gray-100 p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faBuilding} className="text-primary text-sm" />
                  </div>
                  <h4 className="text-gray-900">Governance</h4>
                </div>
                <p className="text-gray-500 text-small">
                  Governance is central to this work. By strengthening
                  accountable, transparent, and participatory systems at
                  community and institutional levels, the organisation helps
                  ensure that solutions are not only effective but also
                  institutionalised, locally owned, and sustainable over time.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl bg-white border border-gray-100 p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faUsers} className="text-accent text-sm" />
                  </div>
                  <h4 className="text-gray-900">Gender Responsiveness</h4>
                </div>
                <p className="text-gray-500 text-small">
                  Gender responsiveness is embedded across all interventions to
                  guarantee that development processes are inclusive, equitable,
                  and responsive to the priorities of women, men, and young
                  people.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Three Approaches */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              How We Work
            </p>
            <h2 className="text-gray-900 mb-4">
              Three Mutually Reinforcing Approaches
            </h2>
            <p className="text-gray-500 max-w-3xl mb-10">
              Africa CSID&apos;s work is grounded in three approaches that work
              together to create lasting change.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {approaches.map((a, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={`h-full rounded-2xl border p-6 hover:shadow-md transition-all duration-300 ${a.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={a.icon} className="text-base" />
                  </div>
                  <h4 className="text-gray-900 mb-2">{a.title}</h4>
                  <p className="text-gray-600 text-small">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Direction
            </p>
            <h2 className="text-gray-900 mb-4">Our Strategic Priorities</h2>
            <p className="text-gray-500 max-w-3xl mb-10">
              Six priorities that guide how we invest our resources and
              partnerships.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {priorities.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 group h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={p.icon}
                      className="text-primary text-sm"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-small">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
