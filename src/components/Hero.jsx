import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import truckVideo from '../assets/truck-animation.mp4';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={itemVariants}>
                        <span className="hero-badge-icon"></span>
                        7/24 Acil Yol Yardım Hizmeti
                    </motion.div>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Ataşehir <span className="highlight">Çekici</span> ve Yol Yardım Hizmeti
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        Ataşehir ve İçerenköy'de hızlı, güvenilir oto kurtarma ve yol yardım hizmeti.
                        Profesyonel ekibimiz her an yanınızda.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants}>
                        <a href="tel:05426216901" className="btn-primary">
                            <FaPhone />
                            Hemen Ara
                        </a>
                        <a
                            href="https://wa.me/905426216901?text=Merhaba,%20yol%20yardım%20hizmeti%20almak%20istiyorum."
                            className="btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>
                    </motion.div>

                    <motion.div className="hero-stats" variants={itemVariants}>
                        <div className="stat-item">
                            <span className="stat-value">15+</span>
                            <span className="stat-label">Yıllık Deneyim</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">5000+</span>
                            <span className="stat-label">Mutlu Müşteri</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">7/24</span>
                            <span className="stat-label">Kesintisiz Hizmet</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-image-container">
                        <div className="hero-image">
                            <video
                                className="hero-truck-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={truckVideo} type="video/mp4" />
                            </video>
                        </div>

                        <motion.div
                            className="floating-card card-1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className="floating-card-icon">
                                <FaClock />
                            </div>
                            <div className="floating-card-text">
                                <span className="floating-card-title">Hızlı Varış</span>
                                <span className="floating-card-subtitle">Ortalama 15-20 dakika</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="floating-card card-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <div className="floating-card-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="floating-card-text">
                                <span className="floating-card-title">Ataşehir Bölgesi</span>
                                <span className="floating-card-subtitle">Tüm mahallelere hizmet</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
