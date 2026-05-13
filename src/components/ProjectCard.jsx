import { motion } from "framer-motion";

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
      style={{
        background: "#1A1A2E",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(108,99,255,0.15)",
        borderColor: "rgba(108,99,255,0.4)",
      }}
    >
      {/* Top row: number + links */}
      <div className="flex items-start justify-between">
        <span
          className="text-4xl font-bold select-none"
          style={{ color: "rgba(108,99,255,0.2)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          {project.liveUrl && project.liveUrl !== "#" && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#A0A0B0] hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              whileHover={{ scale: 1.15, backgroundColor: "rgba(108,99,255,0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLinkIcon />
            </motion.a>
          )}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#A0A0B0] hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            whileHover={{ scale: 1.15, backgroundColor: "rgba(108,99,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
        </div>
      </div>

      {/* Title */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#6C63FF] transition-colors duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(108,99,255,0.15)", color: "#6C63FF", border: "1px solid rgba(108,99,255,0.3)" }}
            >
              Featured
            </span>
          )}
        </div>
        <p className="text-[#A0A0B0] text-sm leading-relaxed">{project.description}</p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full font-medium text-[#A0A0B0]"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
