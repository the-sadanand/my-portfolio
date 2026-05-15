import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const TEAL = "#14ffec";
const VIOLET = "#7b2fff";
const PINK = "#ff6eab";
const TEXT = "#e0fff4";
const MUTED = "#5a8080";
const SURFACE = "rgba(13,17,23,0.9)";

function MailIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function GithubIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function PhoneIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function Contact() {
  const contacts = [
    { icon: <MailIcon />,    label: "Email",    value: personalInfo.email,  href: "mailto:" + personalInfo.email, color: TEAL },
    { icon: <GithubIcon />,  label: "GitHub",   value: "github.com/the-sadanand", href: personalInfo.github, color: VIOLET },
    { icon: <LinkedinIcon />,label: "LinkedIn", value: "linkedin.com/in/sadanand-k7/", href: personalInfo.linkedin, color: PINK },
    { icon: <PhoneIcon />,   label: "Phone",    value: personalInfo.phone,  href: "tel:" + personalInfo.phone, color: "#FFD700" },
  ];

  return (
    <section id="contact" style={{ background: "#050a0e", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(123,47,255,0.07) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 48 }}>
          <span style={{ color: TEAL, fontSize: 12, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}>Let's connect</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT, marginTop: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
            Get In{" "}
            <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Touch</span>
          </h2>
          <p style={{ color: MUTED, marginTop: 16, fontSize: 15, lineHeight: 1.8, maxWidth: 500, margin: "16px auto 0" }}>
            Have a project, an opportunity, or just want to talk AI? I&apos;m always open. Based in Kakinada, AP — but building for the world.
          </p>
        </motion.div>

        {/* Infinity decoration */}
        <motion.div
          style={{ fontSize: 72, color: TEAL, opacity: 0.06, marginBottom: 40, userSelect: "none", lineHeight: 1 }}
          animate={{ opacity: [0.04, 0.10, 0.04], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ∞
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 14, marginBottom: 48 }}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" && c.label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${c.color}18`, borderColor: `${c.color}40` }}
              style={{ background: SURFACE, border: "1px solid rgba(20,255,236,0.07)", borderRadius: 18, padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textDecoration: "none", transition: "all 0.3s", cursor: "pointer" }}
            >
              <div style={{ width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${c.color}12`, border: `1px solid ${c.color}30`, color: c.color }}>
                {c.icon}
              </div>
              <div>
                <p style={{ color: TEXT, fontWeight: 600, fontSize: 14, margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>{c.label}</p>
                <p style={{ color: MUTED, fontSize: 11, margin: "4px 0 0", wordBreak: "break-all" }}>{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <motion.a
            href={"mailto:" + personalInfo.email}
            style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", borderRadius: 999, background: "linear-gradient(135deg, #0d7377, #7b2fff)", color: TEXT, fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 0 40px rgba(20,255,236,0.15)", fontFamily: "'Space Grotesk', sans-serif" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(20,255,236,0.25)" }}
            whileTap={{ scale: 0.97 }}
          >
            <MailIcon size={18} />
            Say Hello ✦
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
