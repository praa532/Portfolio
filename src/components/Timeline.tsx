"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "./animations/ScrollReveal";
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2025 - Present",
    title: "Backend Architect",
    company: "Aviato Consulting",
    description: "Leading the architectural overhaul of a core multi-currency ledger system, processing $100M+ in monthly transactions.",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
  {
    year: "2023 - 2025",
    title: "Software Engineer",
    company: "Safhire.ai",
    description: "Designed and implemented high-performance FastAPI microservices and optimized PostgreSQL query performance for high-traffic endpoints.",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
  {
    year: "2022 - 2023",
    title: "Python Developer",
    company: "Wiftcap Solutions Pvt Ltd",
    description: "Early-stage engineer building secure payment integration APIs and real-time fraud detection systems.",
    icon: <Award className="w-5 h-5" />,
    type: "work",
  },
  {
    year: "2019 - 2021",
    title: "M.Tech in Mechatronics",
    company: "Centre for Advanced Studies, Lucknow",
    description: "Specialized in Distributed Systems and High-Performance Computing. Published thesis on Scalable Consensus Algorithms.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },

];

export function Timeline() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
              // Career Path
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Journey through <br />
              <span className="text-secondary neon-glow-purple">engineering excellence.</span>
            </h3>
          </ScrollReveal>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block">
            <div
              ref={lineRef}
              className="w-full h-full bg-primary origin-top"
              style={{ filter: "drop-shadow(0 0 10px #00E5FF)" }}
            />
          </div>

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass border border-primary/50 flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} width="100%">
                    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        {item.icon}
                      </div>
                      
                      <div className="flex items-center gap-3 text-primary font-mono text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                      
                      <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-secondary font-medium mb-4">{item.company}</p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
