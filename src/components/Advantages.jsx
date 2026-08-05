import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaClock, FaBolt, FaUsers, FaTag, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { SITE, createWhatsappUrl } from '../data/site';
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
            title: 'Doğru Ekipman',
            description: 'Araç ve konum bilgisine göre uygun çekici ve aparat yönlendirilir.',
        },
        {
            icon: <FaUsers />,
            title: 'Yerel Ekip',
            description: 'Mezitli merkezli olarak Mersin genelinde hizmet veriyoruz.',
        },
        {
            icon: <FaTag />,
            title: 'Net Bilgilendirme',
            description: 'Konum, araç ve taşıma koşullarına göre hizmet öncesi fiyat paylaşılır.',
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
                <Motion.div
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
                        Mezitli'nin en güvenilir yol yardım hizmeti olarak müşteri memnuniyetini ön planda tutuyoruz.
                    </p>
                </Motion.div>

                <Motion.div
                    className="advantages-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {advantages.map((advantage, index) => (
                        <Motion.div
                            key={index}
                            className="advantage-item"
                            variants={itemVariants}
                        >
                            <div className="advantage-icon">{advantage.icon}</div>
                            <h3 className="advantage-title">{advantage.title}</h3>
                            <p className="advantage-description">{advantage.description}</p>
                        </Motion.div>
                    ))}
                </Motion.div>

                <Motion.div
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
                        <a href={SITE.phoneHref} className="cta-btn">
                            <FaPhone />
                            {SITE.phoneDisplay}
                        </a>
                        <a
                            href={createWhatsappUrl('Merhaba, acil yol yardımı almak istiyorum.')}
                            className="cta-btn whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Advantages;
