import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import { useRef, useState } from "react";
import { personalInfo } from "../data/portfolioData";
import avatarImg from "../assets/avatar.webp";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
    </svg>
  );
}

function Photo3D() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-18, 18]), springConfig);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 380, height: 420, perspective: "900px" }}
    >
      {/* Outer glow ring */}
      <motion.div
        style={{ position: "absolute", width: 370, height: 410, borderRadius: "50%", background: "radial-gradient(ellipse, transparent 55%, rgba(20,255,236,0.08) 70%, rgba(20,255,236,0.15) 80%, transparent 92%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Violet ring */}
      <motion.div
        style={{ position: "absolute", width: 340, height: 375, borderRadius: "50%", background: "radial-gradient(ellipse, transparent 58%, rgba(123,47,255,0.08) 73%, rgba(123,47,255,0.12) 83%, transparent 94%)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient glow beneath photo */}
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,255,236,0.1) 0%, rgba(123,47,255,0.06) 50%, transparent 70%)", filter: "blur(20px)" }} />

      {/* 3D Photo */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", width: 300, height: 340 }}
      >
        <motion.div
          style={{
            width: 300,
            height: 340,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: isHovered
              ? "0 0 50px rgba(20,255,236,0.3), 0 0 100px rgba(123,47,255,0.15), 0 30px 60px rgba(0,0,0,0.6)"
              : "0 0 30px rgba(20,255,236,0.15), 0 0 60px rgba(123,47,255,0.08), 0 20px 40px rgba(0,0,0,0.5)",
            border: "1.5px solid rgba(20,255,236,0.25)",
            transition: "box-shadow 0.4s ease",
          }}
        >
          {/* Actual photo */}
          <img
            src={avatarImg}
            alt={personalInfo.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} fetchpriority="high" loading="eager"
          />

          {/* Subtle teal overlay on hover */}
          <motion.div
            style={{ position: "absolute", inset: 0, borderRadius: 24, background: "linear-gradient(to bottom, transparent 50%, rgba(13,115,119,0.3) 100%)", opacity: isHovered ? 1 : 0.5, transition: "opacity 0.4s" }}
          />
        </motion.div>

        {/* Ground shadow */}
        <div style={{ position: "absolute", left: "50%", top: "100%", width: 200, height: 20, background: "radial-gradient(ellipse, rgba(20,255,236,0.2) 0%, transparent 70%)", filter: "blur(8px)", transform: "translateX(-50%) translateY(10px) translateZ(-40px)" }} />
      </motion.div>

      {/* Name badge floating below photo */}
      <motion.div
        style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", padding: "10px 24px", borderRadius: 999, background: "rgba(5,10,14,0.9)", border: "1px solid rgba(20,255,236,0.3)", backdropFilter: "blur(10px)", whiteSpace: "nowrap", zIndex: 10 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ background: "linear-gradient(135deg,#14ffec,#7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 13, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
          {personalInfo.name}
        </span>
        <span style={{ color: "#5a8080", fontSize: 11, marginLeft: 8 }}>· {personalInfo.title}</span>
      </motion.div>

      {/* Orbiting particle teal */}
      <motion.div style={{ position: "absolute", width: 360, height: 400 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <div style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: "#14ffec", top: "2%", left: "50%", boxShadow: "0 0 8px #14ffec" }} />
      </motion.div>

      {/* Orbiting particle violet */}
      <motion.div style={{ position: "absolute", width: 340, height: 380 }} animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        <div style={{ position: "absolute", width: 4, height: 4, borderRadius: "50%", background: "#7b2fff", bottom: "5%", right: "5%", boxShadow: "0 0 6px #7b2fff" }} />
      </motion.div>

      {/* Orbiting particle pink */}
      <motion.div style={{ position: "absolute", width: 350, height: 390 }} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 5 }}>
        <div style={{ position: "absolute", width: 3, height: 3, borderRadius: "50%", background: "#ff6eab", top: "15%", right: "2%", boxShadow: "0 0 5px #ff6eab" }} />
      </motion.div>

      {/* Infinity symbol */}
      <motion.div
        style={{ position: "absolute", fontSize: 26, color: "#14ffec", opacity: 0.2, bottom: "12%", right: "4%", userSelect: "none" }}
        animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ∞
      </motion.div>
    </div>
  );
}

function Hero() {
  const { ref: bgRef } = useParallax({ speed: -10 });

  const scrollToAbout = () => { document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); };
  const scrollToProjects = () => { document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#050a0e" }}>

      {/* Parallax nebula + stars */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <motion.div style={{ position: "absolute", width: 500, height: 400, top: "-10%", left: "-10%", background: "radial-gradient(ellipse, rgba(13,115,119,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div style={{ position: "absolute", width: 400, height: 350, bottom: "0%", right: "5%", background: "radial-gradient(ellipse, rgba(123,47,255,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
        <motion.div style={{ position: "absolute", width: 300, height: 280, bottom: "20%", left: "5%", background: "radial-gradient(ellipse, rgba(255,110,171,0.10) 0%, transparent 70%)", filter: "blur(35px)" }} animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }} />
        {[[8,8],[60,45],[130,20],[220,60],[330,15],[450,40],[580,25],[640,70],[30,140],[100,200],[180,160],[280,210],[400,170],[520,190],[620,140],[50,310],[160,380],[270,340],[380,420],[490,370],[600,400],[660,280],[20,470],[110,500],[230,460],[350,490],[470,510],[560,470],[630,500]].map(([x, y], i) => (
          <motion.div key={i} style={{ position: "absolute", left: x, top: y, width: i % 5 === 0 ? 2 : 1.2, height: i % 5 === 0 ? 2 : 1.2, borderRadius: "50%", background: "#fff" }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }} />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#14ffec 1px, transparent 1px), linear-gradient(90deg, #14ffec 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

      {/* Main layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">

        {/* Left: Text */}
        <motion.div className="flex flex-col items-start max-w-xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-6">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(13,115,119,0.15)", border: "1px solid rgba(20,255,236,0.3)", color: "#14ffec", fontSize: 13, fontWeight: 500 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#14ffec", display: "inline-block", animation: "pulse 2s infinite" }} />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 700, marginBottom: 12, lineHeight: 1.15, fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#e0fff4" }}>Hi, I&apos;m </span>
            <span style={{ background: "linear-gradient(135deg,#14ffec,#7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} style={{ fontSize: "clamp(1.1rem,2.5vw,1.4rem)", fontWeight: 500, color: "#8ab0b0", marginBottom: 20 }}>
            {personalInfo.title}
          </motion.h2>

          <motion.p variants={itemVariants} style={{ fontSize: 15, lineHeight: 1.85, color: "#5a8080", maxWidth: 440, marginBottom: 32 }}>
            {personalInfo.tagline} Crafting systems that reach beyond the infinite.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 36 }}>
            <motion.button onClick={scrollToProjects} style={{ padding: "12px 28px", borderRadius: 999, background: "linear-gradient(135deg,#0d7377,#7b2fff)", color: "#fff", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 0 25px rgba(20,255,236,0.2)", fontFamily: "inherit" }} whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(20,255,236,0.35)" }} whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.button>
            <motion.a href={"mailto:" + personalInfo.email} style={{ padding: "12px 28px", borderRadius: 999, border: "1px solid rgba(20,255,236,0.35)", color: "#14ffec", fontSize: 14, fontWeight: 500, textDecoration: "none" }} whileHover={{ scale: 1.06, backgroundColor: "rgba(20,255,236,0.08)" }} whileTap={{ scale: 0.95 }}>
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "flex", gap: 14 }}>
            {[
              { icon: <GithubIcon />, href: personalInfo.github, label: "GitHub" },
              { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <MailIcon />, href: "mailto:" + personalInfo.email, label: "Email" },
            ].map((s) => (
              <motion.a key={s.label} href={s.href} target={s.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={s.label}
                style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid rgba(20,255,236,0.2)", color: "#5a9090", textDecoration: "none" }}
                whileHover={{ scale: 1.2, color: "#14ffec", borderColor: "rgba(20,255,236,0.6)" }} whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Photo */}
        <motion.div initial={{ opacity: 0, scale: 0.8, x: 60 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="flex items-center justify-center shrink-0">
          <Photo3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button onClick={scrollToAbout} style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#3a7070" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} whileHover={{ color: "#14ffec" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDownIcon />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default Hero;
