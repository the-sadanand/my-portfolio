import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Inline GitHub SVG to avoid lucide-react naming issues
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Inline LinkedIn SVG
function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FloatingOrb({ style, delay }) {
  return (
    <motion.div
      style={style}
      className="absolute rounded-full blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 6, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    />
  );
}

function Hero() {
  const { ref: orbRef } = useParallax({ speed: -15 });

  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const socials = [
    { icon: <GithubIcon />, href: personalInfo.github, label: "GitHub" },
    { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:" + personalInfo.email, label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Parallax background orbs */}
      <div ref={orbRef} className="absolute inset-0 pointer-events-none">
        <FloatingOrb
          style={{ width: 384, height: 384, background: "#6C63FF", opacity: 0.2, top: "25%", left: -80 }}
          delay={0}
        />
        <FloatingOrb
          style={{ width: 320, height: 320, background: "#FF6584", opacity: 0.2, bottom: "25%", right: -40 }}
          delay={2}
        />
        <FloatingOrb
          style={{ width: 256, height: 256, background: "#6C63FF", opacity: 0.15, top: "75%", left: "33%" }}
          delay={4}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#6C63FF 1px, transparent 1px), linear-gradient(90deg, #6C63FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C63FF]/40 bg-[#6C63FF]/10 text-[#6C63FF] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white">
          Hi, I&apos;m{" "}
          <span style={{ background: "linear-gradient(135deg, #6C63FF, #FF6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-[#A0A0B0] mb-6">
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#A0A0B0] max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <motion.button
            onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full text-white font-medium text-base transition-all duration-300 cursor-pointer"
            style={{ background: "#6C63FF", boxShadow: "0 0 30px rgba(108, 99, 255, 0.3)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href={"mailto:" + personalInfo.email}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium text-base hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-[#A0A0B0] hover:text-white hover:border-[#6C63FF] transition-all duration-300"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A0A0B0] hover:text-white transition-colors cursor-pointer bg-transparent border-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default Hero;
