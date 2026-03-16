"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";
import { TiltCard } from "./animations/TiltCard";
import { 
  Database, 
  Layers, 
  Cloud, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap,
  Container,
  CreditCard,
  Binary
} from "lucide-react";

const skills = [
  {
    name: "FastAPI",
    icon: <Zap className="w-6 h-6" />,
    description: "High-performance async APIs",
    color: "text-primary",
  },
  {
    name: "Python",
    icon: <Binary className="w-6 h-6" />,
    description: "Enterprise backend logic",
    color: "text-secondary",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-6 h-6" />,
    description: "Relational data modeling",
    color: "text-primary",
  },
  {
    name: "Redis",
    icon: <Cpu className="w-6 h-6" />,
    description: "High-speed caching layer",
    color: "text-secondary",
  },
  {
    name: "Docker",
    icon: <Container className="w-6 h-6" />,
    description: "Microservices orchestration",
    color: "text-primary",
  },
  {
    name: "Cloud Run",
    icon: <Cloud className="w-6 h-6" />,
    description: "Serverless deployments",
    color: "text-secondary",
  },
  {
    name: "Firebase",
    icon: <Globe className="w-6 h-6" />,
    description: "Real-time infrastructure",
    color: "text-primary",
  },
  {
    name: "Payments APIs",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Stripe/Razorpay integration",
    color: "text-secondary",
  },
  {
    name: "Security",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "OAuth2 & JWT Auth",
    color: "text-primary",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <ScrollReveal>
            <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
              // Technical Arsenal
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Powered by a modern <br />
              <span className="text-secondary neon-glow-purple">backend stack.</span>
            </h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.1}>
              <TiltCard>
                <div className="glass-card p-6 rounded-2xl h-full flex flex-col gap-4 group">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
