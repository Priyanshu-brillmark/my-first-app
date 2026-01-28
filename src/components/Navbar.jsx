import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>🚀 My App</h2>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive("/")}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about")}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`nav-link ${isActive("/services")}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`nav-link ${isActive("/portfolio")}`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={`nav-link ${isActive("/features")}`}
              onClick={closeMenu}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`nav-link ${isActive("/blog")}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact")}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
