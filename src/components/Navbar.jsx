import React, { useState, useEffect } from 'react';
import '../styles.css';

/**
 * Navbar Component
 * Sticky navigation with responsive mobile menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Director', href: '#about' },
    { name: 'Programs', href: '#courses' },
    { name: 'Updates', href: '#updates' },
    { name: 'Notices', href: '#notices' }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="nav-brand">
            SIET
          </a>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-quick-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta" onClick={closeMobileMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
