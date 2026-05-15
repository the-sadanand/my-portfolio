import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../data/portfolioData";

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(5,10,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(20,255,236,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav style={{ maxWidth: 1152, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <motion.button
          onClick={() => handleNavClick("#home")}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ background: "linear-gradient(135deg,#14ffec,#7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {personalInfo.name.split(" ")[0]}
          </span>
          <span style={{ color: "#14ffec" }}>.</span>
        </motion.button>

        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {navLinks.map((link, i) => (
            <motion.li key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#5a8080", fontSize: 14, fontWeight: 500, fontFamily: "inherit", transition: "color 0.2s", position: "relative" }}
                onMouseEnter={e => e.target.style.color = "#14ffec"}
                onMouseLeave={e => e.target.style.color = "#5a8080"}
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={personalInfo.resumeUrl}
          className="hidden md:inline-flex"
          style={{ padding: "8px 20px", borderRadius: 999, border: "1px solid rgba(20,255,236,0.4)", color: "#14ffec", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.3s" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(20,255,236,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#14ffec", padding: 8 }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "rgba(5,10,14,0.97)", borderTop: "1px solid rgba(20,255,236,0.08)" }}
            className="md:hidden"
          >
            <ul style={{ display: "flex", flexDirection: "column", padding: "16px 24px", gap: 8, listStyle: "none" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#5a8080", fontSize: 15, fontWeight: 500, fontFamily: "inherit", padding: "10px 0", width: "100%", textAlign: "left" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href={personalInfo.resumeUrl} style={{ display: "inline-block", marginTop: 8, padding: "8px 20px", borderRadius: 999, border: "1px solid rgba(20,255,236,0.4)", color: "#14ffec", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
