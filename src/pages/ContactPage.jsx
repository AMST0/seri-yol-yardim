import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './pages.css';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Telefon',
            lines: ['0542 621 69 01', '0531 201 60 10'],
            href: 'tel:05426216901',
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            lines: ['0542 621 69 01'],
            href: 'https://wa.me/905426216901',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Hizmet Bölgesi',
            lines: ['Ataşehir, İçerenköy', 'Kadıköy, Ümraniye'],
            href: null,
        },
        {
            icon: <FaClock />,
            title: 'Çalışma Saatleri',
            lines: ['7 Gün 24 Saat', 'Kesintisiz Hizmet'],
            href: null,
        },
    ];

    return (
        <div className="page contact-page">
            {/* Hero Section */}
            <section className="page-hero">
                <motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>İletişim</h1>
                    <p>7/24 bize ulaşabilirsiniz</p>
                </motion.div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Cards */}
                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-card"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {info.href ? (
                                        <a href={info.href} className="contact-card-inner" target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                            <div className="contact-card-icon">{info.icon}</div>
                                            <div className="contact-card-text">
                                                <h3>{info.title}</h3>
                                                {info.lines.map((line, i) => (
                                                    <p key={i}>{line}</p>
                                                ))}
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="contact-card-inner">
                                            <div className="contact-card-icon">{info.icon}</div>
                                            <div className="contact-card-text">
                                                <h3>{info.title}</h3>
                                                {info.lines.map((line, i) => (
                                                    <p key={i}>{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Map */}
                        <motion.div
                            className="contact-map"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1547.4566373780517!2d29.102377035650146!3d40.970188683515865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64455555555%3A0x1234567890abcdef!2zScOnZXJlbmvDtnksIEFWc2tlbnQgU2suIE5vOjIyLCAzNDc1MiBBdGHFn2VoaXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1709664654321!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '20px', minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="İçerenköy Mahallesi Aşkent Sokak No:22 Harita"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="contact-cta"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Acil Yardım İçin Hemen Arayın!</h2>
                        <div className="cta-buttons">
                            <a href="tel:05426216901" className="btn-primary btn-large">
                                <FaPhone /> Hemen Ara
                            </a>
                            <a
                                href="https://wa.me/905426216901?text=Merhaba,%20yol%20yardım%20hizmeti%20almak%20istiyorum."
                                className="btn-secondary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp /> WhatsApp ile Yaz
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
