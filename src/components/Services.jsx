import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTruckPickup, FaWrench, FaTruck, FaCar, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import './Services.css';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: <FaTruckPickup />,
            title: 'Oto Kurtarma',
            description: 'Kazalı, arızalı veya hareket kabiliyeti azalmış araçlar için uygun ekipmanla güvenli kurtarma.',
        },
        {
            icon: <FaWrench />,
            title: 'Yerinde Yol Yardım',
            description: 'Akü, lastik ve yakıt gibi yerinde çözülebilecek sorunlarda önce yol yardım desteği.',
        },
        {
            icon: <FaTruck />,
            title: 'Çekici Hizmeti',
            description: 'Binek, SUV, motosiklet ve hafif ticari araçlar için şehir içi ve şehirler arası taşıma.',
        },
        {
            icon: <FaCar />,
            title: 'Özel Araç Transferi',
            description: 'Dijital kilitli, otomatik, elektrikli, 4x4 ve tekerlekleri dönmeyen araçlara özel aparatlarla taşıma.',
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
                <Motion.div
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
                        Araç tipine ve bulunduğunuz konuma uygun çözümü belirleyip süreci açıkça paylaşıyoruz.
                    </p>
                </Motion.div>

                <Motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {services.map((service, index) => (
                        <Motion.article
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </Motion.article>
                    ))}
                </Motion.div>

                <Motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p>Tüm hizmetlerimizi inceleyin veya hemen bizi arayın.</p>
                    <div className="services-cta-buttons">
                        <Link to="/hizmetler" className="btn-secondary">Tüm Hizmetler</Link>
                        <a href={SITE.phoneHref} className="btn-primary">
                            <FaPhone /> Şimdi Ara
                        </a>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Services;
