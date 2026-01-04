import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaClock, FaBolt, FaUsers, FaTag, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Advantages.css';

const Advantages = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const advantages = [
        {
            icon: <FaClock />,
            title: '7/24 Hizmet',
            description: 'Gece gündüz, hafta sonu dahil kesintisiz hizmet.',
        },
        {
            icon: <FaBolt />,
            title: 'Hızlı Müdahale',
            description: 'Ortalama 15-20 dakikada konumunuza ulaşıyoruz.',
        },
        {
            icon: <FaUsers />,
            title: 'Güvenilir Ekip',
            description: '15+ yıl deneyimli, profesyonel ekibimiz.',
        },
        {
            icon: <FaTag />,
            title: 'Uygun Fiyat',
            description: 'Rekabetçi fiyatlar, sürpriz ücret yok.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="advantages section" id="advantages" ref={ref}>
            <div className="container">
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Neden <span className="text-gold">Bizi Tercih Etmelisiniz?</span>
                    </h2>
                    <div className="separator" style={{ marginBottom: '20px' }}></div>
                    <p className="section-subtitle">
                        Ataşehir'in en güvenilir yol yardım hizmeti olarak müşteri memnuniyetini ön planda tutuyoruz.
                    </p>
                </motion.div>

                <motion.div
                    className="advantages-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            className="advantage-item"
                            variants={itemVariants}
                        >
                            <div className="advantage-icon">{advantage.icon}</div>
                            <h3 className="advantage-title">{advantage.title}</h3>
                            <p className="advantage-description">{advantage.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="cta-banner"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="cta-content">
                        <h3 className="cta-title">Acil Yol Yardımı mı Gerekiyor?</h3>
                        <p className="cta-text">Hemen arayın, en kısa sürede yanınızda olalım!</p>
                    </div>
                    <div className="cta-buttons">
                        <a href="tel:05426216901" className="cta-btn">
                            <FaPhone />
                            0542 621 69 01
                        </a>
                        <a
                            href="https://wa.me/905426216901?text=Merhaba,%20acil%20yol%20yardımı%20istiyorum."
                            className="cta-btn whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Advantages;
