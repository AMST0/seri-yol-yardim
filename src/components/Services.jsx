import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTruckPickup, FaWrench, FaTruck, FaBolt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: <FaTruckPickup />,
            title: 'Oto Kurtarma',
            description: 'Kazalı veya arızalı araçlarınızı güvenle kurtarıyoruz. Profesyonel ekipmanlarla hasarsız taşıma garantisi.',
        },
        {
            icon: <FaWrench />,
            title: 'Yol Yardım',
            description: 'Lastik değişimi, akü takviyesi, yakıt ikmali gibi acil yol yardım hizmetleri.',
        },
        {
            icon: <FaTruck />,
            title: 'Çekici Hizmeti',
            description: 'Her tip araç için profesyonel çekici hizmeti. Şehir içi ve şehirler arası taşıma.',
        },
        {
            icon: <FaBolt />,
            title: 'Acil Müdahale',
            description: '7/24 acil durum hattımız ile hızlı müdahale. Ortalama 15-20 dakikada yanınızdayız.',
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
                        <span className="text-gold">Profesyonel</span> Hizmetlerimiz
                    </h2>
                    <div className="separator" style={{ marginBottom: '20px' }}></div>
                    <p className="section-subtitle">
                        Ataşehir ve çevresinde güvenilir oto kurtarma ve yol yardım hizmetleri sunuyoruz.
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
            </div>
        </section>
    );
};

export default Services;
