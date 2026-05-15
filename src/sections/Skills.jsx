import { motion } from "framer-motion";
import { skills, currentlyLearning } from "../data/portfolioData";

const TEAL = "#14ffec";
const VIOLET = "#7b2fff";
const PINK = "#ff6eab";
const TEXT = "#e0fff4";
const MUTED = "#5a8080";
const SURFACE = "rgba(13,17,23,0.9)";

const categories = ["AI / ML", "Languages", "Tools"];

const categoryStyle = {
  "AI / ML":   { bg: "rgba(20,255,236,0.08)",  border: "rgba(20,255,236,0.25)",  text: TEAL },
  "Languages": { bg: "rgba(123,47,255,0.10)",  border: "rgba(123,47,255,0.3)",   text: VIOLET },
  "Tools":     { bg: "rgba(255,110,171,0.08)", border: "rgba(255,110,171,0.25)", text: PINK },
};

function SkillCard({ skill, index }) {
  const c = categoryStyle[skill.category] || categoryStyle["Tools"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.08, y: -5, boxShadow: "0 12px 30px rgba(20,255,236,0.10)" }}
      style={{ background: SURFACE, border: "1px solid rgba(20,255,236,0.07)", borderRadius: 16, padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "default", transition: "border-color 0.3s, box-shadow 0.3s" }}
    >
      <span style={{ fontSize: 28 }}>{skill.icon}</span>
      <span style={{ color: TEXT, fontSize: 12, fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>{skill.name}</span>
      <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 999, background: c.bg, color: c.text, border: `1px solid ${c.border}`, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {skill.category}
      </span>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ background: "#050a0e", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: 400, height: 400, background: "radial-gradient(ellipse, rgba(20,255,236,0.06) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 350, height: 350, background: "radial-gradient(ellipse, rgba(123,47,255,0.07) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: TEAL, fontSize: 12, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}>What I work with</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT, marginTop: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
            My{" "}
            <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Skills</span>
          </h2>
          <p style={{ color: MUTED, marginTop: 14, maxWidth: 500, margin: "14px auto 0", fontSize: 15 }}>
            Technologies I use to build intelligent systems — from model training to production deployment.
          </p>
        </motion.div>

        {/* Category legend */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 44 }}>
          {categories.map((cat) => {
            const c = categoryStyle[cat];
            return (
              <span key={cat} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 999, background: c.bg, color: c.text, border: `1px solid ${c.border}`, fontSize: 13, fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.text, display: "inline-block" }} />
                {cat}
              </span>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 12 }}>
          {skills.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i} />)}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: 48, borderRadius: 18, padding: "24px 32px", background: SURFACE, border: "1px solid rgba(20,255,236,0.12)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, justifyContent: "space-between" }}
        >
          <div>
            <p style={{ color: TEXT, fontWeight: 600, fontSize: 17, fontFamily: "'Space Grotesk', sans-serif" }}>Currently Learning</p>
            <p style={{ color: MUTED, fontSize: 13, marginTop: 4 }}>Always expanding into new frontiers ✦</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {currentlyLearning.map((item) => (
              <span key={item} style={{ padding: "8px 18px", borderRadius: 999, background: "rgba(20,255,236,0.06)", border: "1px solid rgba(20,255,236,0.2)", color: TEAL, fontSize: 13, fontWeight: 500 }}>
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
