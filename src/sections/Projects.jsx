import { motion } from "framer-motion";
import { projects, personalInfo } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

const TEAL = "#14ffec";
const VIOLET = "#7b2fff";
const TEXT = "#e0fff4";
const MUTED = "#5a8080";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ background: "#050a0e", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40%", right: "-5%", width: 400, height: 400, background: "radial-gradient(ellipse, rgba(255,110,171,0.07) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: TEAL, fontSize: 12, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}>What I have built</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT, marginTop: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
            My{" "}
            <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
          </h2>
          <p style={{ color: MUTED, marginTop: 14, maxWidth: 480, margin: "14px auto 0", fontSize: 15 }}>
            A selection of things I have designed, built, and shipped across the cosmos.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <span style={{ color: TEAL, fontSize: 18 }}>✦</span>
          <span style={{ color: TEXT, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>Featured Projects</span>
          <div style={{ flex: 1, height: 1, background: "rgba(20,255,236,0.08)" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ marginTop: 60, textAlign: "center" }}>
          <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>Want to see more? Check out my GitHub for all projects.</p>
          <motion.a
            href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 32px", borderRadius: 999, border: "1px solid rgba(20,255,236,0.3)", color: TEAL, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(20,255,236,0.08)", boxShadow: "0 0 30px rgba(20,255,236,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
