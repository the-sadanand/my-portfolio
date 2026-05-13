import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

function About() {
  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
    { value: "2+", label: "Years Learning" },
    { value: "100%", label: "Passion" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#6C63FF", opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6C63FF] text-sm font-medium tracking-widest uppercase">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            About <span style={{ background: "linear-gradient(135deg, #6C63FF, #FF6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar + stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar */}
            <motion.div variants={itemVariants} className="relative">
              <div
                className="w-56 h-56 rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(108,99,255,0.4)", boxShadow: "0 0 40px rgba(108,99,255,0.2)" }}
              >
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover bg-[#1A1A2E]"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-sm font-medium text-white"
                style={{ background: "#6C63FF", boxShadow: "0 0 20px rgba(108,99,255,0.4)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Open to Work
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-2xl font-bold" style={{ color: "#6C63FF" }}>{stat.value}</p>
                  <p className="text-xs text-[#A0A0B0] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Bio text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">
                A developer who loves building things that matter
              </h3>
              <p className="text-[#A0A0B0] leading-relaxed text-base">
                {personalInfo.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              {[
                { label: "Name", value: personalInfo.name },
                { label: "Role", value: personalInfo.title },
                { label: "Email", value: personalInfo.email },
                { label: "Status", value: "Available for hire" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-[#6C63FF] font-medium w-16 shrink-0">{item.label}:</span>
                  <span className="text-[#A0A0B0]">{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <motion.a
                href={personalInfo.resumeUrl}
                className="px-6 py-3 rounded-full text-white font-medium transition-all duration-300"
                style={{ background: "#6C63FF", boxShadow: "0 0 20px rgba(108,99,255,0.3)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#A0A0B0" }}
                whileHover={{ scale: 1.05, color: "#fff", borderColor: "#6C63FF" }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
