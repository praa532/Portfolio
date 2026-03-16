"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { User, Code2, Rocket, Zap } from "lucide-react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

function Counter({ value, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal width="100%">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Profile Card */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">CodeKaptaan</h3>
                      <p className="text-primary text-sm font-mono uppercase">Senior Backend Architect</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    I design resilient backend systems, fintech infrastructure, and scalable APIs 
                    powering modern financial products. With a deep focus on performance and 
                    reliability, I bridge the gap between complex financial requirements and 
                    high-performance engineering.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Code2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">Clean Code Architecture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Rocket className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-sm font-medium">Fintech Scale Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Detailed Info */}
            <div className="w-full md:w-1/2 space-y-12">
              <div className="space-y-4">
                <h2 className="text-primary font-mono uppercase tracking-widest text-sm">
                  // Professional Summary
                </h2>
                <h3 className="text-4xl font-bold tracking-tight">
                  Crafting the future of <br />
                  <span className="text-secondary neon-glow-purple">financial infrastructure.</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                  Over the years, I've specialized in building high-concurrency systems using 
                  FastAPI, Python, and cloud-native technologies. My mission is to build systems 
                  that are not just functional, but architecturally sound and future-proof.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 p-8 glass-card rounded-2xl">
                <Counter value={50} label="Projects Built" suffix="+" />
                <Counter value={100} label="APIs Developed" suffix="M+" />
                <Counter value={8} label="Years Exp" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">Trusted by leading fintechs</span>
                  <p className="text-muted-foreground">Architecting global payment engines.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
