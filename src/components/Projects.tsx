"use client";

import { ScrollReveal } from "./animations/ScrollReveal";
import { TiltCard } from "./animations/TiltCard";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "Fintech Wallet Infrastructure",
    description: "Highly scalable digital wallet engine with double-entry accounting and real-time ledger consistency.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Kafka"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "AI Developer Assistant",
    description: "Cloud-native AI agent for automated code review and architectural pattern detection in Python systems.",
    tech: ["Python", "OpenAI", "Vector DB", "Docker"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "FX Rate Engine",
    description: "Real-time foreign exchange rate processing engine with sub-millisecond latency for multi-currency platforms.",
    tech: ["Go", "gRPC", "InfluxDB", "AWS"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1611974717482-9961783023e3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Real-time Payment Gateway",
    description: "Custom payment orchestration layer supporting dynamic routing across multiple payment providers.",
    tech: ["FastAPI", "Stripe API", "Firebase", "GCP"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <ScrollReveal>
            <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
              {"// Selected Work"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Architecting solutions for <br />
              <span className="text-primary neon-glow-blue">global scale.</span>
            </h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1} width="100%">
              <TiltCard>
                <div className="group relative glass-card rounded-3xl overflow-hidden">
                  {/* Image Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-30">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex gap-4">
                        <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 text-xs py-1">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary group-hover:neon-glow-blue transition-all"
                    >
                      Case Study <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-3xl transition-all duration-500 pointer-events-none" />
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
