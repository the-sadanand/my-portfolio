import { motion } from "framer-motion";

const TEAL = "#14ffec";
const VIOLET = "#7b2fff";
const TEXT = "#e0fff4";
const MUTED = "#5a8080";
const SURFACE = "rgba(13,17,23,0.9)";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(20,255,236,0.08)", borderColor: "rgba(20,255,236,0.2)" }}
      style={{ background: SURFACE, border: "1px solid rgba(20,255,236,0.07)", borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", gap: 18, transition: "border-color 0.3s, box-shadow 0.3s", cursor: "default" }}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: 38, fontWeight: 700, color: "rgba(20,255,236,0.12)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          {project.liveUrl && project.liveUrl !== "#" && (
            <motion.a
              href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
              style={{ width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,255,236,0.06)", border: "1px solid rgba(20,255,236,0.15)", color: MUTED, textDecoration: "none" }}
              whileHover={{ scale: 1.15, backgroundColor: "rgba(20,255,236,0.15)", color: TEAL }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalIcon />
            </motion.a>
          )}
          <motion.a
            href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            style={{ width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,255,236,0.06)", border: "1px solid rgba(20,255,236,0.15)", color: MUTED, textDecoration: "none" }}
            whileHover={{ scale: 1.15, backgroundColor: "rgba(20,255,236,0.15)", color: TEAL }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
        </div>
      </div>

      {/* Title + desc */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: TEXT, margin: 0, fontFamily: "'Space Grotesk', sans-serif", transition: "color 0.3s" }}>
            {project.title}
          </h3>
          {project.featured && (
            <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 999, background: "rgba(20,255,236,0.08)", color: TEAL, border: "1px solid rgba(20,255,236,0.2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Featured
            </span>
          )}
        </div>
        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{project.description}</p>
      </div>

      <div style={{ height: 1, background: "rgba(20,255,236,0.06)" }} />

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.techStack.map((tech) => (
          <span key={tech} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(20,255,236,0.08)", color: "#8ab0b0", fontWeight: 500 }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
