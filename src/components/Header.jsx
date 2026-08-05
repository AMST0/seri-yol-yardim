import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { SITE } from '../data/site';
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

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.classList.add('menu-open');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navItems = [
    { label: 'Ana Sayfa', to: '/' },
    { label: 'Hakkımızda', to: '/hakkimizda' },
    { label: 'Hizmetler', to: '/hizmetler' },
    { label: 'S.S.S.', to: '/sss' },
    { label: 'İletişim', to: '/iletisim' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-container">
        <Link to="/" className="logo" aria-label="SERİ YOL YARDIM ana sayfa">
          <img src={logo} alt="SERİ YOL YARDIM" className="logo-img" width="320" height="283" />
        </Link>

        {/* Mobile Brand Name - Only visible on mobile */}
        <div className="mobile-brand-name">
          <span className="brand-text-seri">SERİ YOL</span>
          <span className="brand-text-yardim">YARDIM</span>
        </div>

        <nav className="nav" aria-label="Ana menü">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={SITE.phoneHref} className="header-cta">
            <FaPhone />
            Hemen Ara
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FaTimes size={24} color="#D4A64E" /> : <FaBars size={24} color="#D4A64E" />}
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mobile-menu open"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil ana menü"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
              aria-current={isActive(item.to) ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="btn-primary mobile-menu-call">
            <FaPhone />
            Hemen Ara
          </a>
        </div>
      )}
    </Motion.header>
  );
};

export default Header;
