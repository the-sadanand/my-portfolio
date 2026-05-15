import { motion } from "framer-motion";
import { personalInfo, navLinks } from "../data/portfolioData";

const TEAL = "#14ffec";
const VIOLET = "#7b2fff";
// const TEXT = "#e0fff4";
const MUTED = "#3a6060";

function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#020508", borderTop: "1px solid rgba(20,255,236,0.06)", padding: "40px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, marginBottom: 32 }}>
          <div>
            <button
              onClick={() => scrollTo("#home")}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {personalInfo.name.split(" ")[0]}
              </span>
              <span style={{ color: TEAL }}>.</span>
            </button>
            <p style={{ color: MUTED, fontSize: 13, marginTop: 6 }}>Building experiences across the infinite cosmos.</p>
          </div>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{ background: "none", border: "none", cursor: "pointer", color: MUTED, fontSize: 13, fontFamily: "inherit", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = TEAL}
                onMouseLeave={e => e.target.style.color = MUTED}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div style={{ borderTop: "1px solid rgba(20,255,236,0.05)", paddingTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ color: MUTED, fontSize: 12 }}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <motion.p
            style={{ color: MUTED, fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Built with ✦ React + Vite + Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
