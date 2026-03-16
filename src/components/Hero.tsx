"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./animations/MagneticButton";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as any} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00E5FF"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 opacity-20"
        >
          <Terminal className="w-12 h-12 text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 opacity-20"
        >
          <div className="w-20 h-20 rounded-xl border border-secondary bg-secondary/10" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-mono tracking-widest uppercase text-sm mb-4">
            CodeKaptaan // Systems Architect
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            ENGINEERING <span className="text-primary neon-glow-blue">SCALABLE</span> <br />
            FINTECH SYSTEMS.
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-12 h-8">
            <TypeAnimation
              sequence={[
                "FastAPI Architect",
                2000,
                "Fintech Infrastructure Builder",
                2000,
                "Backend Systems Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <a
                href="#projects"
                className="group relative flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                <span>CONTACT</span>
              </a>
            </MagneticButton>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors py-4"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-widest">Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
