import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../data/portfolioData";

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
  window.scrollTo({ top, behavior: "smooth" });
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleMobileClick = (href) => {
    setIsOpen(false);
    setTimeout(() => scrollToSection(href), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(5,10,14,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(20,255,236,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo — always visible */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", padding: 0 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            <span style={{ background: "linear-gradient(135deg,#14ffec,#7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {personalInfo.name.split(" ")[0]}
            </span>
            <span style={{ color: "#14ffec" }}>.</span>
          </motion.button>

          {/* Desktop nav — only rendered on desktop */}
          {!isMobile && (
            <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#5a8080", fontSize: 14, fontWeight: 500, fontFamily: "inherit", padding: "4px 0" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#14ffec"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5a8080"}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Desktop resume — only rendered on desktop */}
          {!isMobile && (
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank" rel="noopener noreferrer"
              style={{ padding: "8px 20px", borderRadius: 999, border: "1px solid rgba(20,255,236,0.4)", color: "#14ffec", fontSize: 13, fontWeight: 500, textDecoration: "none" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(20,255,236,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Resume ↗
            </motion.a>
          )}

          {/* Mobile hamburger — only rendered on mobile */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(prev => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#14ffec", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          )}
        </div>
      </motion.header>

      {/* Mobile fullscreen menu — only on mobile */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                zIndex: 99,
                background: "rgba(5,10,14,0.98)",
                backdropFilter: "blur(16px)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 8,
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleMobileClick(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "#8ab0b0", fontSize: 28, fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    padding: "12px 32px", borderRadius: 12,
                    width: "100%", maxWidth: 300, textAlign: "center",
                  }}
                  whileHover={{ color: "#14ffec", scale: 1.05 }}
                  whileTap={{ scale: 0.95, color: "#14ffec" }}
                >
                  <span style={{ color: "#14ffec", marginRight: 12, fontSize: 16 }}>✦</span>
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                style={{
                  marginTop: 24, padding: "14px 40px", borderRadius: 999,
                  border: "1px solid rgba(20,255,236,0.4)", color: "#14ffec",
                  fontSize: 16, fontWeight: 600, textDecoration: "none",
                  background: "rgba(20,255,236,0.05)",
                }}
              >
                Resume ↗
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

export default Navbar;
