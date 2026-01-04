import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './FloatingCTA.css';

const FloatingCTA = () => {
    return (
        <motion.div
            className="floating-cta"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <a href="tel:05426216901" className="floating-cta-btn phone-btn">
                <FaPhone />
                <span>Hemen Ara</span>
            </a>
            <a
                href="https://wa.me/905426216901?text=Merhaba,%20acil%20yol%20yardım%20istiyorum."
                className="floating-cta-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp />
                <span>WhatsApp</span>
            </a>
        </motion.div>
    );
};

export default FloatingCTA;
