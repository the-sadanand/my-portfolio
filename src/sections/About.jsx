import { motion } from "framer-motion";
import { personalInfo, education, certifications } from "../data/portfolioData";
import avatarImg from "../assets/avatar.jpeg";

const TEAL = "#14ffec";
const VIOLET = "#7b2fff";
const TEXT = "#e0fff4";
const MUTED = "#5a8080";
const SURFACE = "rgba(13,17,23,0.9)";

function About() {
  const stats = [
    { value: "5+",    label: "ML Projects" },
    { value: "92.3%", label: "YOLOv8 mAP" },
    { value: "8.43",  label: "CGPA" },
    { value: "500ms", label: "RAG Latency" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" style={{ background: "#050a0e", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(ellipse, rgba(123,47,255,0.08) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 350, height: 350, background: "radial-gradient(ellipse, rgba(20,255,236,0.05) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: TEAL, fontSize: 12, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}>Get to know me</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT, marginTop: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
            About{" "}
            <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 52, alignItems: "start" }}>

          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.15 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>

            {/* Avatar */}
            <motion.div variants={itemVariants} style={{ position: "relative" }}>
              <div style={{ width: 180, height: 180, borderRadius: 90, overflow: "hidden", boxShadow: "0 0 60px rgba(20,255,236,0.12), 0 0 120px rgba(123,47,255,0.08)" }}>
                <img src={avatarImg} alt={personalInfo.name} style={{ width: "100%", height: "100%", objectFit: "cover", background: "#0d1117" }} loading="lazy" />
              </div>
              <motion.div
                style={{ position: "absolute", bottom: -14, right: -14, padding: "8px 14px", borderRadius: 12, background: "linear-gradient(135deg, #0d7377, #7b2fff)", color: TEXT, fontSize: 12, fontWeight: 600, boxShadow: "0 0 20px rgba(20,255,236,0.25)", whiteSpace: "nowrap" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Open to Work ✦
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", maxWidth: 280 }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: SURFACE, border: "1px solid rgba(20,255,236,0.08)", borderRadius: 14, padding: 16, textAlign: "center" }}>
                  <p style={{ fontSize: 22, fontWeight: 700, color: TEAL, margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</p>
                  <p style={{ fontSize: 10, color: MUTED, margin: "4px 0 0", textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Education card */}
            <motion.div variants={itemVariants} style={{ width: "100%", maxWidth: 280, background: SURFACE, border: "1px solid rgba(20,255,236,0.1)", borderRadius: 16, padding: "18px 20px" }}>
              <p style={{ color: TEAL, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Education</p>
              <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: "0 0 4px", lineHeight: 1.4 }}>{education.degree}</p>
              <p style={{ color: VIOLET, fontSize: 12, margin: "0 0 6px" }}>{education.specialisation}</p>
              <p style={{ color: MUTED, fontSize: 12, margin: "0 0 4px" }}>{education.institution}</p>
              <p style={{ color: MUTED, fontSize: 11, margin: 0 }}>{education.duration} · CGPA {education.cgpa}</p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.15 }} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            <motion.div variants={itemVariants}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: TEXT, marginBottom: 14, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.4 }}>
                An AI engineer who builds systems that think, learn, and scale
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.85, fontSize: 14.5 }}>{personalInfo.bio}</p>
            </motion.div>

            {/* Info rows */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Name",     value: personalInfo.name },
                { label: "Role",     value: personalInfo.title },
                { label: "Email",    value: personalInfo.email },
                { label: "Location", value: personalInfo.location },
                { label: "Status",   value: "Available for hire ✦" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", background: SURFACE, borderRadius: 10, border: "1px solid rgba(20,255,236,0.06)" }}>
                  <span style={{ color: TEAL, fontWeight: 600, fontSize: 12, minWidth: 56, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</span>
                  <span style={{ color: "#8ab0b0", fontSize: 13 }}>{item.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} style={{ background: SURFACE, border: "1px solid rgba(20,255,236,0.08)", borderRadius: 16, padding: "18px 20px" }}>
              <p style={{ color: TEAL, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Certifications & Achievements</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {certifications.map((cert) => (
                  <div key={cert} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: VIOLET, fontSize: 14 }}>✦</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a
                href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"
                style={{ padding: "12px 24px", borderRadius: 999, background: "linear-gradient(135deg, #0d7377, #7b2fff)", color: TEXT, fontWeight: 600, fontSize: 14, textDecoration: "none", boxShadow: "0 0 20px rgba(20,255,236,0.15)" }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                View Resume ↗
              </motion.a>
              <motion.a
                href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                style={{ padding: "12px 24px", borderRadius: 999, border: "1px solid rgba(20,255,236,0.3)", color: TEAL, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(20,255,236,0.08)" }} whileTap={{ scale: 0.95 }}
              >
                GitHub Profile
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
