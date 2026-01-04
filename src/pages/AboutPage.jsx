import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaChevronDown, FaHistory, FaUsers, FaAward, FaTruck, FaShieldAlt, FaClock } from 'react-icons/fa';
import './pages.css';

const AboutPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const stats = [
        { icon: <FaHistory />, value: '15+', label: 'Yıllık Deneyim' },
        { icon: <FaUsers />, value: '5000+', label: 'Mutlu Müşteri' },
        { icon: <FaTruck />, value: '10+', label: 'Profesyonel Araç' },
        { icon: <FaAward />, value: '7/24', label: 'Kesintisiz Hizmet' },
    ];

    const values = [
        { icon: <FaShieldAlt />, title: 'Güvenilirlik', description: 'Aracınız sigortalı ve güvence altında taşınır.' },
        { icon: <FaClock />, title: 'Hız', description: '15-20 dakika içinde yanınızdayız.' },
        { icon: <FaAward />, title: 'Profesyonellik', description: 'Deneyimli ekip ve modern ekipman.' },
    ];

    const faqs = [
        {
            question: 'Çekici ücreti nasıl belirlenir?',
            answer: 'Ücretlendirme mesafe, araç tipi ve hizmet saatine göre belirlenir. Aradığınızda net fiyat bilgisi verilir, sürpriz ücret olmaz.'
        },
        {
            question: '4x4 ve AWD araçları çekebilir misiniz?',
            answer: 'Evet! Flatbed çekicilerimiz ve özel donanımlarımız sayesinde 4 tekerlekten çekişli araçları güvenle taşıyoruz.'
        },
        {
            question: 'Kapalı otoparktan araç çekebilir misiniz?',
            answer: 'Evet, düşük tavan yüksekliği olan otoparklar için özel ekipmanlarımız mevcuttur.'
        },
        {
            question: 'Çekici ne kadar sürede gelir?',
            answer: 'Ataşehir ve İçerenköy bölgesinde ortalama 15-20 dakika içinde yanınızda oluyoruz.'
        },
        {
            question: 'Taşıma sırasında araca zarar gelir mi?',
            answer: 'Hayır, profesyonel sabitleme sistemlerimiz ve deneyimli ekibimiz sayesinde aracınız hasarsız taşınır. Ayrıca tüm taşımalar sigorta kapsamındadır.'
        },
        {
            question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
            answer: 'Nakit, kredi kartı ve banka havalesi ile ödeme yapabilirsiniz.'
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="page about-page">
            {/* Hero Section */}
            <section className="page-hero">
                <motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Hakkımızda</h1>
                    <p>Ataşehir'de 15+ yıldır güvenilir yol yardım hizmeti</p>
                </motion.div>
            </section>

            {/* About Content */}
            <section className="about-content">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>SERİ YOL YARDIM</h2>
                            <p>
                                2009 yılından bu yana Ataşehir ve İçerenköy bölgesinde profesyonel oto kurtarma ve
                                yol yardım hizmeti sunuyoruz. Modern araç filomuz ve deneyimli ekibimizle
                                7/24 yanınızdayız.
                            </p>
                            <p>
                                Müşteri memnuniyetini ön planda tutarak, her çağrıya en kısa sürede ulaşıyor
                                ve aracınızı güvenle istediğiniz noktaya taşıyoruz. Sigortalı taşımacılık
                                anlayışımızla aracınız her zaman güvence altındadır.
                            </p>

                            <div className="about-cta">
                                <a href="tel:05426216901" className="btn-primary">
                                    <FaPhone /> Hemen Ara
                                </a>
                                <a
                                    href="https://wa.me/905426216901"
                                    className="btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-card-icon">{stat.icon}</div>
                                    <div className="stat-card-value">{stat.value}</div>
                                    <div className="stat-card-label">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title">Neden <span className="text-gold">Bizi Seçmelisiniz?</span></h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Sık Sorulan <span className="text-gold">Sorular</span></h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <FaChevronDown className="faq-icon" />
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
