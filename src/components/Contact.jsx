import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="contact section" id="contact" ref={ref}>
            <div className="container">
                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.div className="contact-header" variants={itemVariants}>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>
                                <span className="text-gold">Bize</span> Ulaşın
                            </h2>
                            <p>
                                Ataşehir ve İçerenköy'de 7/24 hizmetinizdeyiz.
                                Herhangi bir sorunuzda veya acil yardım için bizi arayabilirsiniz.
                            </p>
                        </motion.div>

                        <div className="contact-items">
                            <motion.div className="contact-item" variants={itemVariants}>
                                <div className="contact-item-icon">
                                    <FaPhone />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">Telefon</span>
                                    <div className="contact-item-value contact-phones">
                                        <a href="tel:05426216901" className="phone-link">
                                            0542 621 69 01
                                            <span className="phone-type">Ana Hat</span>
                                        </a>
                                        <a href="tel:05312016010" className="phone-link">
                                            0531 201 60 10
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="contact-item" variants={itemVariants}>
                                <div className="contact-item-icon" style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}>
                                    <FaWhatsapp />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">WhatsApp</span>
                                    <div className="contact-item-value">
                                        <a
                                            href="https://wa.me/905426216901?text=Merhaba,%20yol%20yardım%20hizmeti%20almak%20istiyorum."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            0542 621 69 01
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="contact-item" variants={itemVariants}>
                                <div className="contact-item-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">Adres</span>
                                    <div className="contact-item-value">
                                        İçerenköy Mahallesi, Aşkent Sokak No:22
                                        <br />
                                        <span style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>Ataşehir / İstanbul</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="contact-item" variants={itemVariants}>
                                <div className="contact-item-icon">
                                    <FaClock />
                                </div>
                                <div className="contact-item-content">
                                    <span className="contact-item-label">Çalışma Saatleri</span>
                                    <div className="contact-item-value">
                                        7/24 Açık
                                        <br />
                                        <span style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>Hafta sonu dahil kesintisiz hizmet</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-map"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12042.890259772895!2d29.10!3d40.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7e8e33c9a47%3A0x7b8d6a6c8f9e3f12!2sİçerenköy%2C%20Ataşehir%2FIstanbul!5e0!3m2!1sen!2str!4v1704000000000!5m2!1sen!2str"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Seri Yol Yardım Konum"
                            ></iframe>
                            <div className="map-overlay">
                                <div className="map-overlay-text">
                                    <span className="map-overlay-title">SERİ YOL YARDIM</span>
                                    <span className="map-overlay-address">İçerenköy, Ataşehir</span>
                                </div>
                                <a
                                    href="https://www.google.com/maps/dir//İçerenköy+Mahallesi,+Aşkent+Sokak+No:22,+Ataşehir,+Istanbul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-overlay-btn"
                                >
                                    <FaDirections />
                                    Yol Tarifi
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
