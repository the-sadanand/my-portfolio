import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const categories = ["Frontend", "Backend", "Tools"];

const categoryColors = {
  Frontend: { bg: "rgba(108,99,255,0.15)", border: "rgba(108,99,255,0.4)", text: "#6C63FF" },
  Backend:  { bg: "rgba(255,101,132,0.15)", border: "rgba(255,101,132,0.4)", text: "#FF6584" },
  Tools:    { bg: "rgba(52,211,153,0.15)",  border: "rgba(52,211,153,0.4)",  text: "#34D399" },
};

function SkillCard({ skill, index }) {
  const colors = categoryColors[skill.category];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default transition-shadow duration-300"
      style={{
        background: "#1A1A2E",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span className="text-3xl">{skill.icon}</span>
      <span className="text-white text-sm font-medium text-center">{skill.name}</span>
      <span
        className="text-xs px-2 py-0.5 rounded-full font-medium"
        style={{ background: colors.bg, color: colors.text, border: "1px solid " + colors.border }}
      >
        {skill.category}
      </span>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
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
          <span className="text-[#6C63FF] text-sm font-medium tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            My <span style={{ background: "linear-gradient(135deg, #6C63FF, #FF6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Skills</span>
          </h2>
          <p className="text-[#A0A0B0] mt-4 max-w-xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => {
            const colors = categoryColors[cat];
            return (
              <span
                key={cat}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: colors.bg, color: colors.text, border: "1px solid " + colors.border }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: colors.text }} />
                {cat}
              </span>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom bar - currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{ background: "#1A1A2E", border: "1px solid rgba(108,99,255,0.2)" }}
        >
          <div>
            <p className="text-white font-semibold text-lg">Currently Learning</p>
            <p className="text-[#A0A0B0] text-sm mt-1">Always expanding my skill set</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "GraphQL", "AWS", "Three.js"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#6C63FF]"
                style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.3)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
