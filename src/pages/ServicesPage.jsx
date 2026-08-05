import { motion as Motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaTruck, FaCarBattery, FaTools, FaRoad, FaMotorcycle, FaShuttleVan, FaCarCrash, FaKey, FaCar } from 'react-icons/fa';
import { SITE, createWhatsappUrl } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';
import './pages.css';

const ServicesPage = () => {
    usePageMeta({
        title: 'Hizmetlerimiz | Mezitli Çekici - SERİ YOL YARDIM',
        description: 'Mersin ve Mezitli\'de 7/24 oto çekici, akü takviyesi, stepne değişimi, kaza kurtarma, motosiklet ve özel araç transferi hizmetleri.',
        path: '/hizmetler',
    });
    const services = [
        {
            icon: <FaTruck />,
            title: '7/24 Oto Çekici',
            description: 'Mezitli merkezli ekibimizle Mersin genelinde gece gündüz çekici desteği sağlıyoruz.',
            features: ['Kayar platform', 'Araca uygun ekipman', 'Mersin geneli'],
        },
        {
            icon: <FaCarBattery />,
            title: 'Akü Takviye',
            description: 'Akü kaynaklı çalışmama durumlarında aracı yerinde değerlendirip uygun takviyeyi uyguluyoruz.',
            features: ['Yerinde değerlendirme', 'Akü takviyesi', 'Gerekirse çekici'],
        },
        {
            icon: <FaTools />,
            title: 'Lastik Değişimi',
            description: 'Kullanılabilir stepneniz varsa yerinde değişim yapıyor, ağır hasarda aracı servise taşıyoruz.',
            features: ['Stepne değişimi', 'Jant kontrolü', 'Gerekirse taşıma'],
        },
        {
            icon: <FaCarCrash />,
            title: 'Kaza Kurtarma',
            description: 'Hareket kabiliyeti azalan kazalı araçları durumuna uygun yöntemle platforma alıyoruz.',
            features: ['Hasarlı araç yükleme', 'Özel sabitleme', 'Servise taşıma'],
        },
        {
            icon: <FaRoad />,
            title: 'Uzun Mesafe Taşıma',
            description: 'Mersin çıkışlı veya Mersin varışlı şehirler arası araç transferi planlıyoruz.',
            features: ['Şehirler arası', 'Adresten adrese', 'Önceden fiyat bilgisi'],
        },
        {
            icon: <FaMotorcycle />,
            title: 'Motosiklet Çekici',
            description: 'Motosikletleri iki tekerli araçlara uygun bağlantı ve sabitleme ekipmanlarıyla taşıyoruz.',
            features: ['Özel sabitleme', 'Uygun bağlantı noktaları', 'Güvenli transfer'],
        },
        {
            icon: <FaShuttleVan />,
            title: 'Ticari Araç Çekici',
            description: 'Minibüs, kamyonet ve hafif ticari araçlar için profesyonel çekici hizmeti.',
            features: ['Araç ölçüsüne uygun seçim', 'Yük bilgisi kontrolü', 'Güvenli sabitleme'],
        },
        {
            icon: <FaKey />,
            title: 'Araçta Kilitli Kalma',
            description: 'Anahtarın araç içinde kaldığı durumlarda model ve kilit sistemine uygun çözüm uyguluyoruz.',
            features: ['Model değerlendirmesi', 'Uygun açma yöntemi', 'Yerinde destek'],
        },
        {
            icon: <FaCar />,
            title: 'Özel Araç Transferi',
            description: 'Dijital kilitli, otomatik, elektrikli, 4x4 veya tekerlekleri dönmeyen araçları özel aparatlarla taşıyoruz.',
            features: ['Oto transfer aparatları', 'Aktarma sistemini koruma', 'Platformlu taşıma'],
        },
    ];

    return (
        <div className="page services-page">
            {/* Hero Section */}
            <section className="page-hero">
                <Motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Hizmetlerimiz</h1>
                    <p>Mezitli ve Mersin'de 7/24 profesyonel yol yardım hizmetleri</p>
                </Motion.div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <h2 className="visually-hidden">Yol yardım ve araç taşıma hizmetleri</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Motion.article
                                key={index}
                                className="service-card-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="service-card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </Motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <Motion.div
                        className="cta-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Yol Yardıma mı İhtiyacınız Var?</h2>
                        <p>Konumunuzu ve araç bilgilerini paylaşın; uygun ekipmanı yönlendirelim.</p>
                        <div className="cta-buttons">
                            <a href={SITE.phoneHref} className="btn-primary btn-large">
                                <FaPhone /> {SITE.phoneDisplay}
                            </a>
                            <a
                                href={createWhatsappUrl('Merhaba, yol yardım hizmeti almak istiyorum.')}
                                className="btn-secondary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
