import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../data/portfolioData";

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050a0e]/90 backdrop-blur-md border-b border-[#14ffec]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — always visible */}
        <motion.button
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold cursor-pointer bg-transparent border-none outline-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ background: "linear-gradient(135deg,#14ffec,#7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {personalInfo.name.split(" ")[0]}
          </span>
          <span style={{ color: "#14ffec" }}>.</span>
        </motion.button>

        {/* Desktop Nav Links — hidden on mobile, visible on md+ */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className="bg-transparent border-none cursor-pointer text-sm font-medium relative group outline-none"
                style={{ color: "#5a8080", fontFamily: "inherit", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#14ffec"}
                onMouseLeave={e => e.currentTarget.style.color = "#5a8080"}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#14ffec] group-hover:w-full transition-all duration-300" />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Resume Button — hidden on mobile */}
        <motion.a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          style={{ border: "1px solid rgba(20,255,236,0.4)", color: "#14ffec", textDecoration: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(20,255,236,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          Resume ↗
        </motion.a>

        {/* Mobile Hamburger — visible only on mobile (hidden on md+) */}
        <motion.button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer bg-transparent border-none outline-none"
          style={{ color: "#14ffec" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <CloseIcon />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MenuIcon />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(5,10,14,0.97)", borderTop: "1px solid rgba(20,255,236,0.08)", backdropFilter: "blur(12px)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1 list-none m-0 p-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left bg-transparent border-none cursor-pointer py-3 px-2 rounded-lg text-base font-medium outline-none transition-all duration-200"
                    style={{ color: "#5a8080", fontFamily: "inherit", borderBottom: "1px solid rgba(20,255,236,0.05)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#14ffec"; e.currentTarget.style.paddingLeft = "12px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#5a8080"; e.currentTarget.style.paddingLeft = "8px"; }}
                  >
                    <span style={{ color: "#14ffec", marginRight: 10, fontSize: 12 }}>✦</span>
                    {link.label}
                  </button>
                </motion.li>
              ))}

              {/* Resume button in mobile menu */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="pt-3"
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                  style={{ border: "1px solid rgba(20,255,236,0.4)", color: "#14ffec", textDecoration: "none", background: "rgba(20,255,236,0.05)" }}
                >
                  Resume ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
