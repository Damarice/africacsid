"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faProjectDiagram, faHandshake, faHeart, faBalanceScale, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const metrics = [
  { value: 500, label: "Communities Reached", suffix: "+", icon: faUsers, color: "text-primary", borderColor: "border-primary" },
  { value: 15, label: "Projects Delivered", suffix: "+", icon: faProjectDiagram, color: "text-accent", borderColor: "border-accent" },
  { value: 50, label: "Partners Engaged", suffix: "+", icon: faHandshake, color: "text-secondary", borderColor: "border-secondary" },
  { value: 10000, label: "People Impacted", suffix: "+", icon: faHeart, color: "text-primary", borderColor: "border-primary" },
  { value: 25, label: "Policy Influences", suffix: "+", icon: faBalanceScale, color: "text-accent", borderColor: "border-accent" },
  { value: 100, label: "Events Hosted", suffix: "+", icon: faCalendarAlt, color: "text-secondary", borderColor: "border-secondary" },
];

function Counter({ end, duration = 2000, suffix = "", color = "text-primary" }: { end: number; duration?: number; suffix?: string; color?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={`text-4xl md:text-5xl font-bold ${color}`}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function ImpactCounter() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact At a Glance
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Measuring our commitment to sustainable and inclusive development across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 ${metric.borderColor} group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${metric.color} text-5xl mb-6 transform transition-all duration-300 group-hover:scale-110`}>
                <FontAwesomeIcon icon={metric.icon} />
              </div>
              <div className="mb-5 transform transition-transform duration-300">
                <Counter end={metric.value} suffix={metric.suffix} color={metric.color} />
              </div>
              <div className={`text-lg font-semibold text-gray-700 group-hover:${metric.color} transition-colors duration-300`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
