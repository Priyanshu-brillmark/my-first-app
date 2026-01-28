import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  navbarVariants,
  menuItemVariants,
  mobileMenuVariants,
  bounceIn,
} from "../animations/variants";
import { useScrollPosition } from "../animations/hooks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");

      if (
        navMenu &&
        hamburger &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/destinations", label: "Destinations" },
    { path: "/blog", label: "Travel Blog" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0.95)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.15)"
          : "0 2px 20px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          variants={bounceIn}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>🏔️ Uttarakhand Travel</h2>
        </motion.div>
        <motion.ul
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <motion.li
                key={item.path}
                variants={menuItemVariants}
                custom={index}
                initial="hidden"
                animate={isMenuOpen ? "visible" : "hidden"}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path)}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        className="nav-link-indicator"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <motion.div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
