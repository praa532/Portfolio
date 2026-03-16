"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Architecture", href: "#architecture" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto">
        <div className={cn(
          "glass rounded-full px-6 py-3 flex items-center justify-between border border-white/10 transition-all duration-300",
          scrolled ? "bg-background/80" : "bg-transparent"
        )}>
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:bg-primary/40 transition-all">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tighter neon-glow-blue">
              Code<span className="text-secondary">Kaptaan</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
              Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[101]"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        className="fixed inset-0 z-[90] bg-background md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </motion.header>
  );
}
