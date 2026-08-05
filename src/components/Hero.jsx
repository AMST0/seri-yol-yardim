import { motion as Motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { SITE, createWhatsappUrl } from '../data/site';
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
                <Motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Motion.div className="hero-badge" variants={itemVariants}>
                        <span className="hero-badge-icon"></span>
                        Mezitli ve Mersin'de 7/24 Yol Yardım
                    </Motion.div>

                    <Motion.h1 className="hero-title" variants={itemVariants}>
                        Aracınız Yolda mı Kaldı? <span className="highlight">Hızla</span> Yanınızdayız
                    </Motion.h1>

                    <Motion.p className="hero-subtitle" variants={itemVariants}>
                        Mezitli merkezli ekibimizle Mersin genelinde çekici, oto kurtarma ve
                        yerinde yol yardım hizmeti sunuyoruz. <strong>Gece gündüz, 7/24 ulaşabilirsiniz.</strong>
                    </Motion.p>

                    <Motion.div className="hero-buttons" variants={itemVariants}>
                        <a href={SITE.phoneHref} className="btn-primary btn-large">
                            <FaPhone />
                            Şimdi Ara
                        </a>
                        <a
                            href={createWhatsappUrl('Merhaba, yol yardım hizmeti almak istiyorum. Konumumu paylaşacağım.')}
                            className="btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                            WhatsApp ile Konum Gönder
                        </a>
                    </Motion.div>

                    <Motion.div className="hero-stats" variants={itemVariants}>
                        <div className="stat-item">
                            <span className="stat-value">7/24</span>
                            <span className="stat-label">Kesintisiz Hizmet</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">Mersin</span>
                            <span className="stat-label">İl Geneli Destek</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">Güvenli</span>
                            <span className="stat-label">Uygun Ekipman</span>
                        </div>
                    </Motion.div>
                </Motion.div>

                <Motion.div
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
                                preload="metadata"
                                aria-hidden="true"
                            >
                                <source src={truckVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;
