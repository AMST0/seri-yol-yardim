import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTruckPickup, FaWrench, FaTruck, FaBolt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: <FaTruckPickup />,
            title: 'Oto Kurtarma',
            description: 'Kazalı veya arızalı aracınızı çizik bile olmadan kurtarıyoruz. Sigortalı ve garantili hizmet.',
        },
        {
            icon: <FaWrench />,
            title: 'Yerinde Yol Yardım',
            description: 'Aküsü biten, lastiği patlayan, yakıtı biten araçlara yerinde çözüm. Çekiciye gerek yok!',
        },
        {
            icon: <FaTruck />,
            title: 'Çekici Hizmeti',
            description: 'Binek, SUV, hafif ticari - her araç tipi için profesyonel çekici. Uzun mesafede bile uygun fiyat.',
        },
        {
            icon: <FaBolt />,
            title: '15 Dakika Müdahale',
            description: 'Aramadan itibaren ortalama 15 dakikada yanınızdayız. Bölgedeki en hızlı ekip biziz.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <section className="services section" id="services" ref={ref}>
            <div className="container">
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Neden <span className="text-gold">Bizi</span> Tercih Etmelisiniz?
                    </h2>
                    <div className="separator" style={{ marginBottom: '20px' }}></div>
                    <p className="section-subtitle">
                        15 yıllık tecrübe. 5000+ kurtarılan araç. Bölgenin en güvenilir yol yardım firması.
                    </p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p>Tüm hizmetlerimizi inceleyin veya hemen bizi arayın.</p>
                    <div className="services-cta-buttons">
                        <Link to="/hizmetler" className="btn-secondary">Tüm Hizmetler</Link>
                        <a href="tel:05426216901" className="btn-primary">
                            <FaPhone /> Şimdi Ara
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
