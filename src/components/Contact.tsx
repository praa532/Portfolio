"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";
import { Send, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-12">
            <ScrollReveal>
              <h2 className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
                {"// Connect"}
              </h2>
              <h3 className="text-4xl font-black tracking-tight mb-8">
                Initiate <br />
                <span className="text-secondary neon-glow-purple">handshake.</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Available for high-impact backend consulting, architectural reviews, and 
                strategic engineering leadership roles.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "prashant@codekaptaan.com", href: "mailto:prashant@codekaptaan.com" },
                { icon: Github, label: "GitHub", value: "github.com/praa532", href: "https://github.com/praa532" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/prashantkrprasad", href: "https://linkedin.com/in/prashantkrprasad" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <a 
                    href={item.href} 
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <ScrollReveal width="100%">
              <div className="glass-card p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MessageSquare className="w-32 h-32" />
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-24"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 mx-auto mb-6">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Transmission Successful</h4>
                    <p className="text-muted-foreground">I&apos;ll get back to you within 24 business hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Identity</label>
                        <Input
                          placeholder="What's your name?"
                          required
                          className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Frequency</label>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          required
                          className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Payload</label>
                      <Textarea
                        placeholder="Project details or inquiry..."
                        required
                        className="bg-white/5 border-white/10 min-h-[200px] rounded-2xl focus:border-primary transition-all resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] text-sm group relative overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <div className="flex items-center gap-3">
                          SEND TRANSMISSION
                          <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-white/5 text-center text-muted-foreground text-sm font-mono">
        <p>© 2026 CODEKAPTAAN // ARCHITECTED WITH PRECISION</p>
      </footer>
    </section>
  );
}
