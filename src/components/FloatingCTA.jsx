import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { SITE, createWhatsappUrl } from '../data/site';
import './FloatingCTA.css';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(() => (
        typeof window !== 'undefined' && window.scrollY > 420
    ));

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 420);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Motion.div
            className={`floating-cta ${isVisible ? 'is-visible' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <a href={SITE.phoneHref} className="floating-cta-btn phone-btn" aria-label="SERİ YOL YARDIM'ı ara">
                <FaPhone />
                <span>Hemen Ara</span>
            </a>
            <a
                href={createWhatsappUrl('Merhaba, acil yol yardım hizmeti almak istiyorum.')}
                className="floating-cta-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SERİ YOL YARDIM'a WhatsApp üzerinden yaz"
            >
                <FaWhatsapp />
                <span>WhatsApp</span>
            </a>
        </Motion.div>
    );
};

export default FloatingCTA;
