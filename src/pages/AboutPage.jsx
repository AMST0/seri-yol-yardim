import { motion as Motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaHistory, FaUsers, FaAward, FaTruck, FaShieldAlt, FaClock } from 'react-icons/fa';
import { SITE } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';
import './pages.css';

const AboutPage = () => {
    usePageMeta({
        title: 'Hakkımızda | Mezitli Çekici - SERİ YOL YARDIM',
        description: '2009 yılından bu yana Mezitli ve Mersin genelinde 7/24 oto kurtarma, güvenli araç taşıma ve yol yardım hizmeti sunuyoruz.',
        path: '/hakkimizda',
    });

    const stats = [
        { icon: <FaHistory />, value: '2009', label: 'Kuruluş Yılı' },
        { icon: <FaUsers />, value: 'Mersin', label: 'İl Geneli Hizmet' },
        { icon: <FaTruck />, value: 'Güvenli', label: 'Araç Transferi' },
        { icon: <FaAward />, value: '7/24', label: 'Kesintisiz Hizmet' },
    ];

    const values = [
        { icon: <FaShieldAlt />, title: 'Güvenilirlik', description: 'Taşıma yöntemi ve güvence kapsamı hizmet öncesinde açıkça paylaşılır.' },
        { icon: <FaClock />, title: 'Hızlı Yönlendirme', description: 'Konum ve trafik durumuna göre en uygun ekip yönlendirilir.' },
        { icon: <FaAward />, title: 'Profesyonellik', description: 'Deneyimli ekip ve modern ekipman.' },
    ];

    return (
        <div className="page about-page">
            {/* Hero Section */}
            <section className="page-hero">
                <Motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Hakkımızda</h1>
                    <p>2009'dan beri Mezitli ve Mersin'de yol yardım hizmeti</p>
                </Motion.div>
            </section>

            {/* About Content */}
            <section className="about-content">
                <div className="container">
                    <div className="about-grid">
                        <Motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>SERİ YOL YARDIM</h2>
                            <p>
                                2009 yılından bu yana <strong>Mezitli ve Mersin</strong> bölgesinde profesyonel oto kurtarma ve
                                yol yardım hizmeti sunuyoruz. Modern araç filomuz ve deneyimli ekibimizle
                                7/24 yanınızdayız.
                            </p>
                            <p>
                                Merkez lokasyonumuz Mezitli olmak üzere; Yenişehir, Akdeniz, Toroslar,
                                Tarsus, Erdemli, Silifke, Anamur ve Mersin geneline hizmet sağlıyoruz.
                            </p>
                            <p>
                                Her talepte araç tipi, konum ve yol koşullarını değerlendiriyor; uygun ekipmanı
                                yönlendirerek aracınızı istediğiniz noktaya güvenle taşıyoruz. Taşıma sürecinde
                                profesyonel yükleme ve sabitleme yöntemleri kullanıyoruz.
                            </p>

                            <div className="about-cta">
                                <a href={SITE.phoneHref} className="btn-primary">
                                    <FaPhone /> Hemen Ara
                                </a>
                                <a
                                    href={SITE.whatsappUrl}
                                    className="btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </a>
                            </div>
                        </Motion.div>

                        <Motion.div
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
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title">Neden <span className="text-gold">Bizi Seçmelisiniz?</span></h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <Motion.div
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
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
