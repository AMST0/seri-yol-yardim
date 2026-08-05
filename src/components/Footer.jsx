import { motion as Motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SITE } from '../data/site';
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
        <Motion.footer
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
                            <img src={logo} alt="SERİ YOL YARDIM" className="footer-logo-img" width="320" height="283" loading="lazy" />
                        </Link>
                        <p className="footer-slogan">
                            Mezitli ve Mersin'de 7/24 güvenilir oto kurtarma ve yol yardım hizmeti.
                            Profesyonel ekibimizle her an yanınızdayız.
                        </p>
                        <div className="footer-social">
                            <a
                                href={SITE.phoneHref}
                                className="footer-social-link"
                                aria-label="Telefon"
                            >
                                <FaPhone />
                            </a>
                            <a
                                href={SITE.whatsappUrl}
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
                                <Link to="/">
                                    <FaChevronRight size={10} />
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link to="/hakkimizda">
                                    <FaChevronRight size={10} />
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link to="/hizmetler">
                                    <FaChevronRight size={10} />
                                    Hizmetlerimiz
                                </Link>
                            </li>
                            <li>
                                <Link to="/sss">
                                    <FaChevronRight size={10} />
                                    S.S.S.
                                </Link>
                            </li>
                            <li>
                                <Link to="/iletisim">
                                    <FaChevronRight size={10} />
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Hizmet Bölgelerimiz</h4>
                        <p className="footer-service-areas">
                            <strong>Merkez:</strong> Mezitli, Fatih Mahallesi
                        </p>
                        <p className="footer-service-areas secondary">
                            Yenişehir, Akdeniz, Toroslar, Tarsus, Erdemli, Silifke, Anamur ve tüm Mersin
                        </p>
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
                                    <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
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
                                        href={SITE.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {SITE.phoneDisplay}
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
                                    <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
                                        {SITE.shortAddress}
                                    </a>
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
        </Motion.footer>
    );
};

export default Footer;
