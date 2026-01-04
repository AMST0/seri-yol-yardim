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
                        Bölgenin 1 Numaralı Yol Yardım Firması
                    </motion.div>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Aracınız Yolda mı Kaldı? <span className="highlight">15 Dakikada</span> Yanınızdayız!
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        Ataşehir ve çevresinde en hızlı, en güvenilir çekici hizmeti.
                        <strong> Hızlıyız. Güveniliriz. 7/24 Buradayız.</strong>
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants}>
                        <a href="tel:05426216901" className="btn-primary btn-large">
                            <FaPhone />
                            Şimdi Ara - Hemen Geliyoruz
                        </a>
                        <a
                            href="https://wa.me/905426216901?text=Merhaba,%20acil%20yol%20yardım%20istiyorum.%20Konum%20göndereceğim."
                            className="btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                            WhatsApp ile Konum Gönder
                        </a>
                    </motion.div>

                    <motion.div className="hero-stats" variants={itemVariants}>
                        <div className="stat-item">
                            <span className="stat-value">15+</span>
                            <span className="stat-label">Yıllık Tecrübe</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">5000+</span>
                            <span className="stat-label">Kurtarılan Araç</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">15 dk</span>
                            <span className="stat-label">Ortalama Varış</span>
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
