import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import { useRef, useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import moonImg from "../assets/moon.jpg";
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

function Moon3D() {
  const containerRef = useRef(null);
  const [moonSize, setMoonSize] = useState(420);
  useEffect(() => {
    const updateMoonSize = () => {
      const screenWidth = window.innerWidth;
      let size;
      if (screenWidth < 640) {
        size = Math.min(280, screenWidth - 48); // Mobile
      } else if (screenWidth < 1024) {
        size = 320; // Tablet
      } else {
        size = 420; // Desktop
      }
      setMoonSize(size);
    };

    updateMoonSize();
    window.addEventListener("resize", updateMoonSize);
    return () => window.removeEventListener("resize", updateMoonSize);
  }, []);

  const handleMouseMove = (e) => {
    // Disabled - no hover effects
  };

  const handleMouseLeave = () => {
    // Disabled - no hover effects
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: moonSize, height: moonSize, perspective: "900px" }}
    >
      {/* Outer atmosphere ring 3 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: moonSize - 10,
          height: moonSize - 10,
          background: "radial-gradient(circle, transparent 48%, rgba(13,115,119,0.06) 65%, rgba(13,115,119,0.12) 75%, transparent 90%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Outer atmosphere ring 2 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: moonSize - 50,
          height: moonSize - 50,
          background: "radial-gradient(circle, transparent 52%, rgba(123,47,255,0.05) 68%, rgba(123,47,255,0.10) 78%, transparent 92%)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow beneath moon */}
      <div
        className="absolute rounded-full"
        style={{
          width: moonSize - 100,
          height: moonSize - 100,
          background: "radial-gradient(circle, rgba(20,255,236,0.08) 0%, rgba(13,115,119,0.06) 40%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />

      {/* 3D Moon container */}
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          width: moonSize - 120,
          height: moonSize - 120,
        }}
      >
        {/* Moon image */}
        <motion.div
          className="relative rounded-full overflow-hidden"
          style={{
            width: moonSize - 120,
            height: moonSize - 120,
            boxShadow: "0 0 40px rgba(20,255,236,0.15), 0 0 80px rgba(13,115,119,0.10), inset 0 0 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Real moon photo from NASA public domain */}
          <img
            src={moonImg}
            alt="Moon surface with craters"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.85) contrast(1.15) saturate(0.8) hue-rotate(160deg)",
              mixBlendMode: "normal",
            }}
          />

          {/* Teal color overlay for theme matching */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 35%, rgba(20,255,236,0.06) 0%, transparent 60%)",
              mixBlendMode: "screen",
            }}
          />

          {/* Shadow side overlay for 3D sphere feel */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 70% 65%, rgba(0,0,0,0.5) 0%, transparent 55%)",
            }}
          />
        </motion.div>

        {/* Floating shadow below moon for 3D depth */}
        <div
          className="absolute left-1/2"
          style={{
            width: (moonSize - 120) * 0.8,
            height: (moonSize - 120) * 0.08,
            background: "radial-gradient(ellipse, rgba(13,115,119,0.25) 0%, transparent 70%)",
            filter: "blur(8px)",
            transform: "translateX(-50%) translateY(16px) translateZ(-40px)",
            top: "100%",
          }}
        />
      </motion.div>

      {/* Orbiting particle 1 */}
      <motion.div
        className="absolute"
        style={{ width: moonSize - 40, height: moonSize - 40 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            background: "#14ffec",
            top: "2%",
            left: "50%",
            boxShadow: "0 0 8px #14ffec",
          }}
        />
      </motion.div>

      {/* Orbiting particle 2 */}
      <motion.div
        className="absolute"
        style={{ width: moonSize - 80, height: moonSize - 80 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            background: "#7b2fff",
            bottom: "5%",
            right: "8%",
            boxShadow: "0 0 6px #7b2fff",
          }}
        />
      </motion.div>

      {/* Orbiting particle 3 */}
      <motion.div
        className="absolute"
        style={{ width: moonSize - 60, height: moonSize - 60 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 3,
            height: 3,
            background: "#ff6eab",
            top: "15%",
            right: "3%",
            boxShadow: "0 0 5px #ff6eab",
          }}
        />
      </motion.div>

      {/* Infinity symbol floating near moon */}
      <motion.div
        className="absolute"
        style={{
          fontSize: 28,
          color: "#14ffec",
          opacity: 0.25,
          bottom: "8%",
          right: "6%",
          fontWeight: 300,
          letterSpacing: "-1px",
          userSelect: "none",
        }}
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ∞
      </motion.div>
    </div>
  );
}

function Hero() {
  const { ref: bgRef } = useParallax({ speed: -10 });

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050a0e" }}
    >
      {/* Parallax starfield + nebula bg */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        {/* Nebula blobs */}
        <motion.div
          className="absolute rounded-full"
          style={{ width: 500, height: 400, top: "-10%", left: "-10%", background: "radial-gradient(ellipse, rgba(13,115,119,0.18) 0%, transparent 70%)", filter: "blur(40px)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 400, height: 350, bottom: "0%", right: "5%", background: "radial-gradient(ellipse, rgba(123,47,255,0.15) 0%, transparent 70%)", filter: "blur(40px)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 300, height: 280, bottom: "20%", left: "5%", background: "radial-gradient(ellipse, rgba(255,110,171,0.10) 0%, transparent 70%)", filter: "blur(35px)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />

        {/* Stars */}
        {[
          [8,8],[60,45],[130,20],[220,60],[330,15],[450,40],[580,25],[640,70],
          [30,140],[100,200],[180,160],[280,210],[400,170],[520,190],[620,140],
          [50,310],[160,380],[270,340],[380,420],[490,370],[600,400],[660,280],
          [20,470],[110,500],[230,460],[350,490],[470,510],[560,470],[630,500],
        ].map(([x, y], i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: x, top: y, width: i % 5 === 0 ? 2 : 1.2, height: i % 5 === 0 ? 2 : 1.2 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#14ffec 1px, transparent 1px), linear-gradient(90deg, #14ffec 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Main layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">

        {/* Left: Text content */}
        <motion.div
          className="flex flex-col items-start max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "rgba(13,115,119,0.15)", border: "1px solid rgba(20,255,236,0.3)", color: "#14ffec" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#14ffec" }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: "#e0fff4" }}>Hi, I&apos;m </span>
            <span style={{ background: "linear-gradient(135deg, #14ffec, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium mb-5"
            style={{ color: "#8ab0b0" }}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#5a8080", maxWidth: 440 }}
          >
            {personalInfo.tagline} Crafting experiences that reach beyond the infinite.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <motion.button
              onClick={scrollToProjects}
              className="px-7 py-3 rounded-full font-medium text-sm cursor-pointer border-none outline-none"
              style={{ background: "linear-gradient(135deg, #0d7377, #7b2fff)", color: "#fff", boxShadow: "0 0 25px rgba(20,255,236,0.2)" }}
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(20,255,236,0.35)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href={"mailto:" + personalInfo.email}
              className="px-7 py-3 rounded-full font-medium text-sm"
              style={{ border: "1px solid rgba(20,255,236,0.35)", color: "#14ffec" }}
              whileHover={{ scale: 1.06, backgroundColor: "rgba(20,255,236,0.08)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {[
              { icon: <GithubIcon />, href: personalInfo.github, label: "GitHub" },
              { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <MailIcon />, href: "mailto:" + personalInfo.email, label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ border: "1px solid rgba(20,255,236,0.2)", color: "#5a9090" }}
                whileHover={{ scale: 1.2, color: "#14ffec", borderColor: "rgba(20,255,236,0.6)" }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Moon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center shrink-0"
        >
          <Moon3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none outline-none"
        style={{ color: "#3a7070" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        whileHover={{ color: "#14ffec" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "sans-serif" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownIcon />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default Hero;
