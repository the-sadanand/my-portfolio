import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headerClass = scrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0F0F0F] backdrop-blur-md border-b border-white/10 shadow-lg"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={headerClass}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ background: "linear-gradient(135deg, #6C63FF, #FF6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {personalInfo.name.split(" ")[0]}
          </span>
          <span style={{ color: "#6C63FF" }}>.</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#A0A0B0] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] group-hover:w-full transition-all duration-300" />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={personalInfo.resumeUrl}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#6C63FF] text-[#6C63FF] text-sm font-medium hover:bg-[#6C63FF] hover:text-white transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A1A2E] border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block text-[#A0A0B0] hover:text-white font-medium py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  className="inline-flex px-5 py-2 rounded-full border border-[#6C63FF] text-[#6C63FF] text-sm font-medium hover:bg-[#6C63FF] hover:text-white transition-all duration-300"
                >
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
