"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollReveal } from "./animations/ScrollReveal";
import { User, Server, Database, Globe, CreditCard, Shield } from "lucide-react";

export function Architecture() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 1.5, ease: "power1.inOut" }
      });

      tl.fromTo(".path-line", { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 2, stagger: 0.5 });
    });
    return () => ctx.revert();
  }, []);

  interface NodeProps {
    icon: React.ElementType;
    label: string;
    color?: string;
  }

  const Node = ({ icon: Icon, label, color = "primary" }: NodeProps) => (
    <div className="flex flex-col items-center gap-4 z-10">
      <div className={`w-16 h-16 rounded-2xl glass border border-${color}/50 flex items-center justify-center group-hover:bg-${color}/10 transition-all duration-300 relative`}>
        <Icon className={`w-8 h-8 text-${color}`} />
        <div className={`absolute inset-0 bg-${color}/20 blur-xl opacity-0 group-hover:opacity-50 transition-all`} />
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <section id="architecture" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
              {"// System Design"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Blueprint for <br />
              <span className="text-primary neon-glow-blue">resilient infrastructure.</span>
            </h3>
          </ScrollReveal>
        </div>

        <div className="relative glass-card rounded-[40px] p-12 md:p-24 overflow-hidden">
          {/* Animated Background SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 5px rgba(0,229,255,0.2))" }}>
            <path
              className="path-line"
              d="M 200 400 L 400 400 M 600 400 L 800 400 M 1000 400 L 1200 400"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 10"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            <Node icon={User} label="User Agent" />
            
            <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-primary/50 to-secondary/50" />
            
            <Node icon={Globe} label="API Gateway" color="secondary" />
            
            <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-secondary/50 to-primary/50" />
            
            <Node icon={Server} label="FastAPI Services" />
            
            <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-primary/50 to-secondary/50" />
            
            <div className="flex flex-col gap-12">
              <Node icon={Database} label="Firestore / PSQL" color="secondary" />
              <Node icon={Shield} label="Redis Cache" color="primary" />
            </div>
            
            <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-secondary/50 to-primary/50" />
            
            <Node icon={CreditCard} label="Payment APIs" />
          </div>

          {/* Description Overlay */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-white font-bold">High Concurrency</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Async architecture designed to handle thousands of requests per second with minimal latency.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold">Data Integrity</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Double-entry accounting patterns and ACID compliant transactions for financial accuracy.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold">Scalable Cache</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Distributed caching layer using Redis to offload database pressure and speed up responses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
