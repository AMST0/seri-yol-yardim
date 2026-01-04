import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={footerVariants}
        >
            <div className="container">
                <div className="footer-container">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Seri Yol Yardım Logo" className="footer-logo-img" />
                        </Link>
                        <p className="footer-slogan">
                            Ataşehir ve İçerenköy'de 7/24 güvenilir oto kurtarma ve yol yardım hizmeti.
                            Profesyonel ekibimizle her an yanınızdayız.
                        </p>
                        <div className="footer-social">
                            <a
                                href="tel:05426216901"
                                className="footer-social-link"
                                aria-label="Telefon"
                            >
                                <FaPhone />
                            </a>
                            <a
                                href="https://wa.me/905426216901"
                                className="footer-social-link whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Hızlı Erişim</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#hero">
                                    <FaChevronRight size={10} />
                                    Ana Sayfa
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <FaChevronRight size={10} />
                                    Hizmetlerimiz
                                </a>
                            </li>
                            <li>
                                <a href="#advantages">
                                    <FaChevronRight size={10} />
                                    Neden Biz?
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <FaChevronRight size={10} />
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>İletişim</h4>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <FaPhone size={16} />
                            </div>
                            <div className="footer-contact-text">
                                <span className="footer-contact-label">Telefon</span>
                                <span className="footer-contact-value">
                                    <a href="tel:05426216901">0542 621 69 01</a>
                                </span>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <FaWhatsapp size={16} />
                            </div>
                            <div className="footer-contact-text">
                                <span className="footer-contact-label">WhatsApp</span>
                                <span className="footer-contact-value">
                                    <a
                                        href="https://wa.me/905426216901"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        0542 621 69 01
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <FaMapMarkerAlt size={16} />
                            </div>
                            <div className="footer-contact-text">
                                <span className="footer-contact-label">Adres</span>
                                <span className="footer-contact-value">
                                    Ataşehir / İstanbul
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} SERİ YOL YARDIM. Tüm hakları saklıdır.
                    </p>
                    <p className="footer-made-by">
                        Made by <a href="https://ataberkdudu.info" target="_blank" rel="noopener noreferrer">AMST</a>
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
