import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPhone, FaShieldAlt, FaCog, FaLink, FaTools, FaTruck, FaCheckCircle } from 'react-icons/fa';
import './Fleet.css';

const Fleet = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeHotspot, setActiveHotspot] = useState(null);

    const hotspots = [
        {
            id: 1,
            icon: <FaCog />,
            title: 'Vinç Sistemi',
            description: 'Hidrolik vinç ile 3 tona kadar kaldırma kapasitesi.',
            position: { top: '15%', left: '38%' },
        },
        {
            id: 2,
            icon: <FaTools />,
            title: 'Kaldırma Kabloları',
            description: 'Çelik halatlar ile güvenli araç kaldırma.',
            position: { top: '35%', left: '65%' },
        },
        {
            id: 3,
            icon: <FaLink />,
            title: 'Platform & Kayışlar',
            description: 'Tehlike şeritli platform, endüstriyel sabitleme.',
            position: { top: '68%', left: '55%' },
        },
        {
            id: 4,
            icon: <FaShieldAlt />,
            title: 'Güvenlik Ekipmanları',
            description: 'Reflektör, uyarı lambası ve tam donanım.',
            position: { top: '45%', left: '18%' },
        },
    ];

    const features = [
        { icon: <FaTruck />, title: 'Modern Filo', subtitle: '5+ profesyonel çekici araç' },
        { icon: <FaCheckCircle />, title: 'Sigortalı Taşıma', subtitle: 'Araç güvence altında' },
        { icon: <FaShieldAlt />, title: 'Hasarsız Kurtarma', subtitle: 'Özel sabitleme sistemleri' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const handleHotspotClick = (id) => {
        setActiveHotspot(activeHotspot === id ? null : id);
    };

    return (
        <section className="fleet" id="fleet" ref={ref}>
            <div className="fleet-fog"></div>

            <div className="container">
                <div className="fleet-container">
                    {/* Content Side */}
                    <motion.div
                        className="fleet-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.div className="fleet-badge" variants={itemVariants}>
                            <FaTruck />
                            Profesyonel Ekipman
                        </motion.div>

                        <motion.h2 className="fleet-title" variants={itemVariants}>
                            Ataşehir'de <span className="text-gold">Profesyonel Çekici</span> Araçlarımız
                        </motion.h2>

                        <motion.p className="fleet-description" variants={itemVariants}>
                            Modern donanımlı çekici araçlarımız ile Ataşehir ve İçerenköy'de 7/24 güvenli
                            oto kurtarma hizmeti sunuyoruz. Araçlarınız özel sabitleme sistemleri ile
                            zarar görmeden taşınır.
                        </motion.p>

                        <motion.div className="fleet-features" variants={containerVariants}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="fleet-feature"
                                    variants={itemVariants}
                                >
                                    <div className="fleet-feature-icon">{feature.icon}</div>
                                    <div className="fleet-feature-text">
                                        <span className="fleet-feature-title">{feature.title}</span>
                                        <span className="fleet-feature-subtitle">{feature.subtitle}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div className="fleet-cta" variants={itemVariants}>
                            <a href="tel:05426216901" className="btn-primary">
                                <FaPhone />
                                Hemen Ara
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Truck Visual Side */}
                    <motion.div
                        className="fleet-visual"
                        initial={{ opacity: 0, x: 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    >
                        <div className="truck-container">
                            <div className="truck-glow"></div>
                            <div className="truck-shadow"></div>

                            {/* SVG Tow Truck with Crane Lifting Car */}
                            <svg
                                className="truck-svg"
                                viewBox="0 0 450 220"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* ===== CRANE ARM (L-shaped, Gold) ===== */}
                                {/* Vertical part of crane */}
                                <rect x="145" y="55" width="14" height="70" rx="3" fill="#D4A64E" />
                                {/* Horizontal part of crane */}
                                <rect x="145" y="45" width="130" height="14" rx="3" fill="#D4A64E" />
                                {/* Crane joint */}
                                <circle cx="152" cy="52" r="8" fill="#A97C2A" stroke="#D4A64E" strokeWidth="2" />
                                {/* Crane tip */}
                                <rect x="265" y="42" width="15" height="20" rx="2" fill="#A97C2A" />

                                {/* ===== CABLES/STRAPS ===== */}
                                <line x1="272" y1="62" x2="272" y2="95" stroke="#D4A64E" strokeWidth="2" strokeDasharray="4 2" />
                                <line x1="320" y1="62" x2="320" y2="95" stroke="#D4A64E" strokeWidth="2" strokeDasharray="4 2" />
                                {/* Hook connectors */}
                                <circle cx="272" cy="95" r="4" fill="#D4A64E" />
                                <circle cx="320" cy="95" r="4" fill="#D4A64E" />

                                {/* ===== LIFTED CAR ===== */}
                                {/* Car body */}
                                <rect x="250" y="100" width="90" height="30" rx="4" fill="#444" stroke="#666" strokeWidth="1" />
                                {/* Car roof */}
                                <path d="M265 100 L275 80 L325 80 L335 100" fill="#444" stroke="#666" strokeWidth="1" />
                                {/* Car windows */}
                                <path d="M270 98 L278 82 L295 82 L295 98 Z" fill="rgba(212, 166, 78, 0.15)" stroke="#D4A64E" strokeWidth="0.5" />
                                <path d="M298 98 L298 82 L315 82 L322 98 Z" fill="rgba(212, 166, 78, 0.15)" stroke="#D4A64E" strokeWidth="0.5" />
                                {/* Car lights */}
                                <rect x="252" y="108" width="6" height="4" rx="1" fill="#D4A64E" />
                                <rect x="332" y="108" width="6" height="4" rx="1" fill="#ff4444" />
                                {/* Car wheels (hanging) */}
                                <circle cx="270" cy="135" r="12" fill="#222" stroke="#444" strokeWidth="2" />
                                <circle cx="270" cy="135" r="4" fill="#D4A64E" />
                                <circle cx="322" cy="135" r="12" fill="#222" stroke="#444" strokeWidth="2" />
                                <circle cx="322" cy="135" r="4" fill="#D4A64E" />

                                {/* ===== FLATBED/PLATFORM ===== */}
                                {/* Main platform */}
                                <rect x="110" y="145" width="160" height="12" rx="2" className="truck-body" />
                                {/* Platform stripes (hazard) */}
                                <g opacity="0.6">
                                    <rect x="115" y="148" width="8" height="6" fill="#D4A64E" />
                                    <rect x="130" y="148" width="8" height="6" fill="#1F1F1F" />
                                    <rect x="145" y="148" width="8" height="6" fill="#D4A64E" />
                                    <rect x="160" y="148" width="8" height="6" fill="#1F1F1F" />
                                    <rect x="175" y="148" width="8" height="6" fill="#D4A64E" />
                                    <rect x="190" y="148" width="8" height="6" fill="#1F1F1F" />
                                    <rect x="205" y="148" width="8" height="6" fill="#D4A64E" />
                                    <rect x="220" y="148" width="8" height="6" fill="#1F1F1F" />
                                    <rect x="235" y="148" width="8" height="6" fill="#D4A64E" />
                                    <rect x="250" y="148" width="8" height="6" fill="#1F1F1F" />
                                </g>
                                {/* Platform edge */}
                                <rect x="265" y="145" width="8" height="18" rx="2" className="truck-body" />

                                {/* ===== TRUCK FRAME ===== */}
                                <rect x="40" y="155" width="235" height="10" rx="2" className="truck-body" />

                                {/* ===== TRUCK CABIN ===== */}
                                {/* Cabin body */}
                                <rect x="35" y="95" width="80" height="65" rx="6" className="truck-cabin" />
                                {/* Cabin front curve */}
                                <path d="M35 130 Q25 130 25 145 L25 155 L40 155 L40 130 Z" className="truck-cabin" />
                                {/* Windshield */}
                                <path d="M45 105 L55 85 L100 85 L108 105 Z" fill="rgba(212, 166, 78, 0.2)" stroke="#D4A64E" strokeWidth="1" />
                                {/* Side window */}
                                <rect x="55" y="108" width="50" height="25" rx="3" fill="rgba(212, 166, 78, 0.15)" stroke="#D4A64E" strokeWidth="0.5" />
                                {/* Door line */}
                                <line x1="80" y1="105" x2="80" y2="155" className="truck-detail" strokeWidth="1" />
                                {/* Door handle */}
                                <rect x="70" y="125" width="8" height="3" rx="1" fill="#D4A64E" />
                                {/* Headlight */}
                                <rect x="28" y="140" width="10" height="8" rx="2" fill="#D4A64E" opacity="0.9" />
                                {/* Grill */}
                                <rect x="28" y="150" width="12" height="4" rx="1" fill="#333" stroke="#D4A64E" strokeWidth="0.5" />
                                {/* Warning light on top */}
                                <rect x="50" y="80" width="12" height="6" rx="2" fill="#D4A64E">
                                    <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
                                </rect>
                                {/* Warning light 2 */}
                                <rect x="100" y="80" width="12" height="6" rx="2" fill="#D4A64E">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
                                </rect>

                                {/* ===== CRANE BASE ===== */}
                                <rect x="115" y="120" width="35" height="28" rx="4" className="truck-body" />
                                <circle cx="132" cy="134" r="8" fill="#333" stroke="#D4A64E" strokeWidth="2" />

                                {/* ===== TRUCK WHEELS ===== */}
                                {/* Front wheel */}
                                <g className="truck-wheel-group" style={{ transformOrigin: '60px 178px' }}>
                                    <circle cx="60" cy="178" r="22" className="truck-wheel" />
                                    <circle cx="60" cy="178" r="14" fill="#333" />
                                    <circle cx="60" cy="178" r="6" className="truck-wheel-rim" />
                                </g>

                                {/* Rear wheel 1 */}
                                <g className="truck-wheel-group" style={{ transformOrigin: '190px 178px' }}>
                                    <circle cx="190" cy="178" r="22" className="truck-wheel" />
                                    <circle cx="190" cy="178" r="14" fill="#333" />
                                    <circle cx="190" cy="178" r="6" className="truck-wheel-rim" />
                                </g>

                                {/* Rear wheel 2 */}
                                <g className="truck-wheel-group" style={{ transformOrigin: '240px 178px' }}>
                                    <circle cx="240" cy="178" r="22" className="truck-wheel" />
                                    <circle cx="240" cy="178" r="14" fill="#333" />
                                    <circle cx="240" cy="178" r="6" className="truck-wheel-rim" />
                                </g>

                                {/* ===== COMPANY LOGO AREA ===== */}
                                <rect x="45" y="135" width="28" height="12" rx="2" fill="rgba(212, 166, 78, 0.1)" stroke="#D4A64E" strokeWidth="0.5" />
                                <text x="59" y="144" fontSize="6" fill="#D4A64E" textAnchor="middle" fontWeight="bold">SERİ</text>
                            </svg>

                            {/* Interactive Hotspots */}
                            {hotspots.map((hotspot) => (
                                <div
                                    key={hotspot.id}
                                    className={`hotspot ${activeHotspot === hotspot.id ? 'active' : ''}`}
                                    style={{ top: hotspot.position.top, left: hotspot.position.left }}
                                    onClick={() => handleHotspotClick(hotspot.id)}
                                    onMouseEnter={() => setActiveHotspot(hotspot.id)}
                                    onMouseLeave={() => setActiveHotspot(null)}
                                >
                                    <motion.div
                                        className="hotspot-dot"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.8 + hotspot.id * 0.1 }}
                                    >
                                        {hotspot.id}
                                    </motion.div>
                                    <div className="hotspot-card">
                                        <div className="hotspot-card-icon">{hotspot.icon}</div>
                                        <h4 className="hotspot-card-title">{hotspot.title}</h4>
                                        <p className="hotspot-card-text">{hotspot.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Fleet;
