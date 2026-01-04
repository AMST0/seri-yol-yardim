import { motion } from 'framer-motion';
import { FaPhone, FaExclamationTriangle } from 'react-icons/fa';
import './UrgentBanner.css';

const UrgentBanner = () => {
    return (
        <motion.section
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
                    <h3>Yolda Kaldıysanız Zaman Kaybetmeyin!</h3>
                    <p>Tek bir arama ile <strong>15 dakika içinde</strong> yanınızdayız.</p>
                </div>
                <a href="tel:05426216901" className="urgent-cta">
                    <FaPhone />
                    <span>0542 621 69 01</span>
                </a>
            </div>
        </motion.section>
    );
};

export default UrgentBanner;
