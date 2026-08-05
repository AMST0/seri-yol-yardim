import { motion as Motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';
import { SITE, createWhatsappUrl } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';
import './pages.css';

const ContactPage = () => {
    usePageMeta({
        title: 'İletişim | Mezitli Çekici - SERİ YOL YARDIM',
        description: `SERİ YOL YARDIM iletişim ve konum bilgileri. ${SITE.address}. 7/24 destek: ${SITE.phoneDisplay}.`,
        path: '/iletisim',
    });
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Telefon',
            lines: [SITE.phoneDisplay],
            href: SITE.phoneHref,
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            lines: [SITE.phoneDisplay],
            href: createWhatsappUrl('Merhaba, yol yardım hizmeti almak istiyorum.'),
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Adres',
            lines: ['Fatih Mahallesi, Mezitli', 'Mersin'],
            href: SITE.directionsUrl,
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
                <Motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>İletişim</h1>
                    <p>Mezitli ve Mersin genelinde 7/24 bize ulaşabilirsiniz</p>
                </Motion.div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <h2 className="visually-hidden">İletişim seçenekleri ve konum</h2>
                    <div className="contact-grid">
                        {/* Contact Cards */}
                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <Motion.div
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
                                </Motion.div>
                            ))}
                        </div>

                        {/* Map */}
                        <Motion.div
                            className="contact-map"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <iframe
                                src={SITE.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '20px', minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Fatih Mahallesi 30042 Sk. No:4 Mezitli/Mersin Harita"
                            ></iframe>
                        </Motion.div>
                    </div>

                    {/* CTA */}
                    <Motion.div
                        className="contact-cta"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Acil Yardım İçin Hemen Arayın!</h2>
                        <div className="cta-buttons">
                            <a href={SITE.phoneHref} className="btn-primary btn-large">
                                <FaPhone /> Hemen Ara
                            </a>
                            <a
                                href={createWhatsappUrl('Merhaba, yol yardım hizmeti almak istiyorum.')}
                                className="btn-secondary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp /> WhatsApp ile Yaz
                            </a>
                            <a
                                href={SITE.directionsUrl}
                                className="btn-secondary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDirections /> Yol Tarifi
                            </a>
                        </div>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
