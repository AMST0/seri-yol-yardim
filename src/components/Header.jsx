import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Ana Sayfa', to: '/' },
    { label: 'Hakkımızda', to: '/hakkimizda' },
    { label: 'Hizmetler', to: '/hizmetler' },
    { label: 'İletişim', to: '/iletisim' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Seri Yol Yardım Logo" className="logo-img" />
        </Link>

        {/* Mobile Brand Name - Only visible on mobile */}
        <div className="mobile-brand-name">
          <span className="brand-text-seri">SERİ YOL</span>
          <span className="brand-text-yardim">YARDIM</span>
        </div>

        <nav className="nav">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href="tel:05426216901" className="header-cta">
            <FaPhone />
            Hemen Ara
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? <FaTimes size={24} color="#D4A64E" /> : <FaBars size={24} color="#D4A64E" />}
          </button>
        </nav>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a href="tel:05426216901" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <FaPhone />
          Hemen Ara
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
