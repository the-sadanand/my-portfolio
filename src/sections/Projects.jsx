import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { personalInfo } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

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
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#FF6584", opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6C63FF] text-sm font-medium tracking-widest uppercase">
            What I have built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6C63FF, #FF6584)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-[#A0A0B0] mt-4 max-w-xl mx-auto">
            A selection of things I have designed, built, and shipped. Each project taught me something new.
          </p>
        </motion.div>

        {/* Featured tag row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-[#6C63FF]">
            <StarIcon />
          </span>
          <span className="text-white font-semibold">Featured Projects</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#A0A0B0] mb-6 text-lg">
            Want to see more? Check out my GitHub for all projects.
          </p>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-medium text-white transition-all duration-300"
            style={{ border: "1px solid rgba(108,99,255,0.5)", color: "#6C63FF" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6C63FF",
              color: "#fff",
              boxShadow: "0 0 25px rgba(108,99,255,0.4)",
            }}
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
