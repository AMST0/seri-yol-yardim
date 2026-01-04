import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaTruck, FaCarBattery, FaTools, FaRoad, FaMotorcycle, FaShuttleVan, FaCarCrash, FaKey } from 'react-icons/fa';
import './pages.css';

const ServicesPage = () => {
    const services = [
        {
            icon: <FaTruck />,
            title: '7/24 Oto Çekici',
            description: 'Gece gündüz demeden, her an yanınızdayız. Ataşehir ve çevresinde 15-20 dakikada ulaşıyoruz.',
            features: ['Acil müdahale', 'Sigortalı taşıma', 'Flatbed çekici'],
        },
        {
            icon: <FaCarBattery />,
            title: 'Akü Takviye',
            description: 'Aracınız çalışmıyor mu? Akü takviye hizmetimizle hemen yardıma geliyoruz.',
            features: ['Yerinde servis', 'Tüm araç markaları', 'Hızlı müdahale'],
        },
        {
            icon: <FaTools />,
            title: 'Lastik Değişimi',
            description: 'Patlak lastik mi? Stepne takma veya lastik onarım hizmeti sunuyoruz.',
            features: ['Stepne montajı', 'Lastik tamiri', '7/24 hizmet'],
        },
        {
            icon: <FaCarCrash />,
            title: 'Kaza Kurtarma',
            description: 'Kaza sonrası araç kurtarma ve çekici hizmeti. Sigorta işlemlerinde yardımcı oluyoruz.',
            features: ['Kaza sonrası destek', 'Sigorta koordinasyonu', 'Güvenli çekim'],
        },
        {
            icon: <FaRoad />,
            title: 'Uzun Mesafe Taşıma',
            description: 'Şehirler arası araç taşıma hizmeti. Aracınızı güvenle istediğiniz şehre taşıyoruz.',
            features: ['Şehirler arası', 'Kapalı araç taşıma', 'Takip sistemi'],
        },
        {
            icon: <FaMotorcycle />,
            title: 'Motosiklet Çekici',
            description: 'Motosikletiniz için özel çekici hizmeti. Hasar vermeden güvenle taşıyoruz.',
            features: ['Özel sabitleme', 'Her marka', 'Dikkatli taşıma'],
        },
        {
            icon: <FaShuttleVan />,
            title: 'Ticari Araç Çekici',
            description: 'Minibüs, kamyonet ve hafif ticari araçlar için profesyonel çekici hizmeti.',
            features: ['Ağır yük kapasitesi', 'Ticari filolar', 'Kurumsal hizmet'],
        },
        {
            icon: <FaKey />,
            title: 'Araçta Kilitli Kalma',
            description: 'Anahtarınız arabada mı kaldı? Hasarsız kapı açma hizmeti sunuyoruz.',
            features: ['Hasarsız açım', 'Hızlı çözüm', 'Tüm modeller'],
        },
    ];

    return (
        <div className="page services-page">
            {/* Hero Section */}
            <section className="page-hero">
                <motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Hizmetlerimiz</h1>
                    <p>Ataşehir ve İçerenköy'de 7/24 profesyonel yol yardım hizmetleri</p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="service-card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <motion.div
                        className="cta-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Yol Yardıma mı İhtiyacınız Var?</h2>
                        <p>Hemen arayın, 15-20 dakika içinde yanınızda olalım!</p>
                        <div className="cta-buttons">
                            <a href="tel:05426216901" className="btn-primary btn-large">
                                <FaPhone /> 0542 621 69 01
                            </a>
                            <a
                                href="https://wa.me/905426216901"
                                className="btn-secondary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
