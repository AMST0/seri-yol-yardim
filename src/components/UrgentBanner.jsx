import { motion as Motion } from 'framer-motion';
import { FaPhone, FaExclamationTriangle } from 'react-icons/fa';
import { SITE } from '../data/site';
import './UrgentBanner.css';

const UrgentBanner = () => {
    return (
        <Motion.section
            className="urgent-banner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="urgent-banner-content">
                <div className="urgent-icon">
                    <FaExclamationTriangle />
                </div>
                <div className="urgent-text">
                    <h2>Yolda Kaldıysanız Zaman Kaybetmeyin!</h2>
                    <p>Konumunuzu paylaşın; uygun ekipmanı yönlendirip tahmini varış süresini bildirelim.</p>
                </div>
                <a href={SITE.phoneHref} className="urgent-cta">
                    <FaPhone />
                    <span>{SITE.phoneDisplay}</span>
                </a>
            </div>
        </Motion.section>
    );
};

export default UrgentBanner;
