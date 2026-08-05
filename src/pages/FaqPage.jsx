import { useEffect, useState } from 'react';
import { FaChevronDown, FaPhone, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa';
import { SITE, createWhatsappUrl } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';
import './pages.css';

const faqGroups = [
    {
        id: 'acil-yardim',
        title: 'Acil Yol Yardım ve Ulaşım',
        description: 'Hizmet saatleri, bölge, ulaşım süresi ve yardım talebiyle ilgili sorular.',
        items: [
            {
                question: 'SERİ YOL YARDIM 7/24 hizmet veriyor mu?',
                answer: 'Evet. Gece, gündüz, hafta sonu ve resmî tatiller dahil olmak üzere 7 gün 24 saat çekici ve yol yardım hizmeti veriyoruz.',
            },
            {
                question: 'Mezitli\'de en yakın çekiciye nasıl ulaşabilirim?',
                answer: '0542 621 69 01 numaralı telefonu arayabilir veya aynı numaraya WhatsApp üzerinden konum gönderebilirsiniz. Araç tipi ve arızanın kısa açıklamasını paylaşmanız doğru ekipmanın yönlendirilmesini hızlandırır.',
            },
            {
                question: 'Mersin\'in hangi bölgelerine çekici gönderiyorsunuz?',
                answer: 'Merkezimiz Mezitli\'dedir. Mezitli başta olmak üzere Yenişehir, Akdeniz, Toroslar, Tarsus, Erdemli, Silifke, Anamur ve Mersin genelinde hizmet veriyoruz.',
            },
            {
                question: 'Çekici ne kadar sürede gelir?',
                answer: 'Mezitli ve yakın bölgelerde ortalama ulaşım süremiz 15-20 dakikadır. Trafik yoğunluğu, hava koşulları, aracın konumu ve ekiplerin o anki durumuna göre süre değişebilir; talep sırasında tahmini varış süresi paylaşılır.',
            },
            {
                question: 'Çekici çağırırken hangi bilgileri vermeliyim?',
                answer: 'Bulunduğunuz konumu, aracın marka-modelini, araç tipini, arıza veya kaza durumunu, tekerleklerin hareket edip etmediğini ve gidilecek adresi paylaşmanız yeterlidir. Kapalı otopark, dar alan veya kırık tekerlek gibi özel bir durum varsa mutlaka belirtin.',
            },
            {
                question: 'Konumumu WhatsApp üzerinden gönderebilir miyim?',
                answer: 'Evet. WhatsApp üzerinden canlı konum veya konum pini gönderebilirsiniz. Aracın ve bulunduğu alanın fotoğrafını eklemek, ekibin uygun çekici ve aparatla gelmesine yardımcı olur.',
            },
        ],
    },
    {
        id: 'ariza-kaza',
        title: 'Arıza, Kaza ve Yerinde Yardım',
        description: 'Aracın çalışmaması, kaza, akü, lastik ve yakıt sorunlarında uygulanabilecek çözümler.',
        items: [
            {
                question: 'Aracım çalışmıyor; hemen çekici mi gerekir?',
                answer: 'Her zaman gerekmez. Sorun akü, lastik veya yakıt gibi yerinde çözülebilecek bir nedense önce yol yardım uygulanabilir. Araç güvenli şekilde çalıştırılamıyorsa uygun çekiciyle servise taşınır.',
            },
            {
                question: 'Aküsü biten araca takviye yapıyor musunuz?',
                answer: 'Evet. Uygun durumdaki binek, SUV ve hafif ticari araçlara yerinde akü takviye hizmeti veriyoruz. Takviye sonrasında araç çalışmazsa çekici seçeneği değerlendirilir.',
            },
            {
                question: 'Lastiğim patladı, bulunduğum yerde değiştirebilir misiniz?',
                answer: 'Evet. Kullanılabilir bir stepneniz varsa yerinde lastik değişimi yapılabilir. Stepne yoksa veya jant ve süspansiyonda hasar varsa araç uygun ekipmanla lastikçiye ya da servise taşınır.',
            },
            {
                question: 'Aracımın yakıtı bitti, yardımcı oluyor musunuz?',
                answer: 'Evet. Konum ve araç bilgisi alındıktan sonra durumunuza uygun yol yardım çözümü belirlenir. Aracın güvenli biçimde yeniden çalıştırılamadığı durumlarda çekici desteği sağlanır.',
            },
            {
                question: 'Kaza yapan araç nasıl çekilir?',
                answer: 'Önce aracın tekerlek, direksiyon ve süspansiyon durumu değerlendirilir. Hareket kabiliyeti azalan kazalı araçlar, uygun yükleme ve sabitleme ekipmanları kullanılarak güvenli biçimde platforma alınır.',
            },
            {
                question: 'Yoldan çıkan veya sıkışan aracı kurtarabilir misiniz?',
                answer: 'Araç ve zemin koşulları değerlendirilerek uygun kurtarma yöntemi belirlenir. Konumla birlikte birkaç fotoğraf göndermeniz, gereken ekipmanın önceden seçilmesini kolaylaştırır.',
            },
            {
                question: 'Anahtar araç içinde kaldıysa kapıyı açabilir misiniz?',
                answer: 'Evet. Araçta kilitli kalma durumlarında, araç modeli ve kilit sistemi değerlendirildikten sonra hasarsız kapı açma hizmeti sunuyoruz.',
            },
        ],
    },
    {
        id: 'arac-turleri',
        title: 'Araç Türleri ve Özel Durumlar',
        description: 'Dijital, otomatik, elektrikli, 4x4, alçak ve hareket kabiliyeti olmayan araçların taşınması.',
        items: [
            {
                question: 'Dijital sistemleri kilitlenen araçları taşıyabiliyor musunuz?',
                answer: 'Evet. Dijital arıza nedeniyle vitesi boşa alınamayan, elektronik park freni çözülmeyen veya tekerlekleri kilitli kalan araçları özel oto transfer aparatlarıyla taşıyabiliyoruz. Bu aparatlar aracın aktarma organlarını zorlamadan platforma alınmasına yardımcı olur.',
            },
            {
                question: 'Araç kendini kilitledi ve tekerlekler dönmüyor; zarar görmeden çekilebilir mi?',
                answer: 'Evet. Tekerleklerin dönmediği durumlarda araç sürüklenmez. Özel oto transfer aparatları ve uygun yükleme yöntemi kullanılarak araç güvenli biçimde platforma alınır ve zarar vermeden taşınır.',
            },
            {
                question: 'Otomatik vitesli araç çekiciyle nasıl taşınır?',
                answer: 'Otomatik araçlarda şanzımanı zorlayacak şekilde tekerlekler üzerinde çekme yapılmaz. Araç, durumuna ve üretici taşıma gerekliliklerine uygun biçimde kayar platformlu çekiciye alınır; gerekirse transfer aparatları kullanılır.',
            },
            {
                question: 'Elektrikli veya hibrit araçları taşıyor musunuz?',
                answer: 'Evet. Elektrikli ve hibrit araçlarda çekiş sistemi, elektronik park freni ve üreticinin taşıma koşulları dikkate alınır. Marka-model bilgisini önceden paylaşmanız, doğru ekipmanın hazırlanmasını sağlar.',
            },
            {
                question: '4x4 ve AWD araçları çekebilir misiniz?',
                answer: 'Evet. Dört tekerlekten çekişli araçlar, aktarma sistemini korumak için uygun platform ve özel donanımlar kullanılarak dört tekerleği de yerden kesilecek biçimde taşınır.',
            },
            {
                question: 'Alçak şaseli veya spor araçları taşıyabiliyor musunuz?',
                answer: 'Evet. Tampon, marşpiyel ve aracın alt kısmının platforma temas etmemesi için düşük yaklaşma açısı ve uygun yükleme aparatları kullanılır. Aracın yerden yüksekliğini önceden belirtmeniz faydalıdır.',
            },
            {
                question: 'Tekerleği kırılmış veya direksiyonu kilitlenmiş araç taşınabilir mi?',
                answer: 'Evet. Kırık tekerlek, kilitli direksiyon veya hasarlı süspansiyon gibi durumlarda araç zorlanmadan, ek transfer ve sabitleme aparatlarıyla platforma yüklenebilir.',
            },
            {
                question: 'Kapalı veya alçak tavanlı otoparktan araç çıkarabilir misiniz?',
                answer: 'Evet. Otoparkın giriş yüksekliği, rampası ve manevra alanı değerlendirilerek düşük alanlara uygun ekipman kullanılır. Giriş yüksekliği ile aracın bulunduğu katı önceden paylaşmanız gerekir.',
            },
            {
                question: 'Motosiklet çekici hizmetiniz var mı?',
                answer: 'Evet. Motosikletler, iki tekerli araçlara uygun bağlantı noktaları ve özel sabitleme ekipmanları kullanılarak taşınır.',
            },
            {
                question: 'SUV, minibüs veya hafif ticari araçları çekiyor musunuz?',
                answer: 'Evet. SUV, kamyonet, minibüs ve hafif ticari araçlarda aracın ölçüsü, ağırlığı ve mevcut yükü öğrenilerek yeterli taşıma kapasitesine sahip çekici yönlendirilir.',
            },
        ],
    },
    {
        id: 'tasima-guvenlik',
        title: 'Araç Taşıma ve Güvenlik',
        description: 'Yükleme, sabitleme, şehirler arası transfer ve teslim noktasıyla ilgili sorular.',
        items: [
            {
                question: 'Taşıma sırasında araca zarar gelir mi?',
                answer: 'Araç; durumuna uygun yükleme yöntemi, profesyonel sabitleme sistemleri ve deneyimli ekip kullanılarak taşınır. Taşıma yöntemi ve varsa sigorta kapsamı hizmet öncesinde teyit edilir.',
            },
            {
                question: 'Araç halatla mı yoksa platform üzerinde mi taşınıyor?',
                answer: 'Araç tipine ve durumuna göre uygun yöntem seçilir. Otomatik, 4x4, elektrikli, kazalı veya tekerlekleri kilitli araçlarda aktarma sistemini koruyan platformlu taşıma ve gerektiğinde özel aparatlar tercih edilir.',
            },
            {
                question: 'Şehirler arası araç taşıma hizmeti veriyor musunuz?',
                answer: 'Evet. Mersin çıkışlı veya Mersin varışlı şehirler arası araç taşıma planlanabilir. Fiyat ve uygun araç, çıkış-varış adresi ile araç bilgisine göre belirlenir.',
            },
            {
                question: 'Aracımı istediğim servise veya adrese götürebilir misiniz?',
                answer: 'Evet. Araç; seçtiğiniz yetkili servis, özel servis, lastikçi, otopark veya uygun teslim adresine taşınabilir. Gidilecek adresi talep sırasında belirtmeniz yeterlidir.',
            },
            {
                question: 'Araçta eşya veya yük varsa çekiciye bilgi vermeli miyim?',
                answer: 'Evet. Özellikle ağır, hareketli veya ticari yükler aracın toplam ağırlığını ve güvenli sabitleme şeklini etkileyebilir. Araçtaki yükü önceden bildirmeniz, doğru kapasitede çekici seçilmesini sağlar.',
            },
        ],
    },
    {
        id: 'fiyat-odeme',
        title: 'Fiyat, Ödeme ve Kasko',
        description: 'Çekici ücretinin hesaplanması, teklif, ödeme ve sigorta süreçleri.',
        items: [
            {
                question: 'Çekici ücreti nasıl belirlenir?',
                answer: 'Ücret; çıkış ve varış mesafesi, araç tipi ve ağırlığı, hizmet saati, yükleme koşulları ve gerekli ekipmana göre belirlenir. Konum ve araç bilgisi verildiğinde hizmet öncesinde net fiyat paylaşılır.',
            },
            {
                question: 'WhatsApp üzerinden çekici fiyatı alabilir miyim?',
                answer: 'Evet. Konumunuzu, gidilecek adresi, araç marka-modelini ve varsa arıza ya da hasar fotoğraflarını WhatsApp üzerinden göndererek fiyat bilgisi alabilirsiniz.',
            },
            {
                question: 'Gece veya hafta sonu çekici ücreti değişir mi?',
                answer: 'Hizmet saati fiyatı etkileyebilir. Gece, hafta sonu veya tatil talebinde uygulanacak ücret, araç yönlendirilmeden önce açıkça paylaşılır.',
            },
            {
                question: 'Kasko veya trafik sigortası çekici ücretini karşılar mı?',
                answer: 'Bu durum poliçenizdeki yol yardım teminatına ve limitlere bağlıdır. Hizmet almadan önce sigorta şirketinizden kapsamı doğrulamanız önerilir; kaza sonrası gerekli yönlendirme ve koordinasyonda yardımcı oluruz.',
            },
            {
                question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
                answer: 'Kullanılabilen ödeme seçenekleri hizmet talebi sırasında paylaşılır. Size uygun yöntemi araç yönlendirilmeden önce teyit edebilirsiniz.',
            },
        ],
    },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

const FaqPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    usePageMeta({
        title: 'Sıkça Sorulan Sorular | Mezitli Çekici - SERİ YOL YARDIM',
        description: 'Mezitli ve Mersin çekici hizmeti; fiyat, ulaşım süresi, dijital kilitli araç, otomatik, elektrikli ve 4x4 araç taşıma hakkında sıkça sorulan sorular.',
        path: '/sss',
    });

    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        };
        const schemaScript = document.createElement('script');
        schemaScript.id = 'faq-page-schema';
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);

        return () => schemaScript.remove();
    }, []);

    const toggleFaq = (id) => {
        setOpenFaq((current) => (current === id ? null : id));
    };

    return (
        <div className="page faq-page">
            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Sıkça Sorulan Sorular</h1>
                    <p>Çekici, oto kurtarma ve yol yardım hakkında açık ve güncel yanıtlar</p>
                </div>
            </section>

            <section className="faq-section faq-page-section">
                <div className="container">
                    <div className="faq-page-intro">
                        <span className="faq-page-badge">
                            <FaQuestionCircle aria-hidden="true" />
                            {allFaqs.length} Soruya Yanıt
                        </span>
                        <h2>Çekici ve Yol Yardım Hakkında Merak Edilenler</h2>
                        <p>
                            SERİ YOL YARDIM, Mezitli merkezli olarak Mersin genelinde 7/24
                            çekici, oto kurtarma, akü takviyesi, lastik değişimi ve araç taşıma
                            hizmeti verir. En çok merak edilen konuları aşağıda doğrudan yanıtladık.
                        </p>
                    </div>

                    <nav className="faq-category-nav" aria-label="Sıkça sorulan soru kategorileri">
                        {faqGroups.map((group) => (
                            <a key={group.id} href={`#${group.id}`}>{group.title}</a>
                        ))}
                    </nav>

                    <div className="faq-groups">
                        {faqGroups.map((group) => (
                            <section
                                key={group.id}
                                id={group.id}
                                className="faq-category"
                                aria-labelledby={`${group.id}-title`}
                            >
                                <div className="faq-category-heading">
                                    <h2 id={`${group.id}-title`}>{group.title}</h2>
                                    <p>{group.description}</p>
                                </div>

                                <div className="faq-list">
                                    {group.items.map((faq, index) => {
                                        const faqId = `${group.id}-${index}`;
                                        const isOpen = openFaq === faqId;
                                        const questionId = `faq-question-${faqId}`;
                                        const answerId = `faq-answer-${faqId}`;

                                        return (
                                            <article
                                                key={faq.question}
                                                className={`faq-item ${isOpen ? 'open' : ''}`}
                                            >
                                                <h3>
                                                    <button
                                                        id={questionId}
                                                        className="faq-question"
                                                        type="button"
                                                        aria-expanded={isOpen}
                                                        aria-controls={answerId}
                                                        onClick={() => toggleFaq(faqId)}
                                                    >
                                                        <span>{faq.question}</span>
                                                        <FaChevronDown className="faq-icon" aria-hidden="true" />
                                                    </button>
                                                </h3>
                                                <div
                                                    id={answerId}
                                                    className="faq-answer"
                                                    role="region"
                                                    aria-labelledby={questionId}
                                                    hidden={!isOpen}
                                                >
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-support-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Aradığınız Yanıtı Bulamadınız mı?</h2>
                        <p>Ekibimiz 7/24 sorularınızı yanıtlamak ve yol yardım desteği vermek için hazır.</p>
                        <div className="cta-buttons">
                            <a href={SITE.phoneHref} className="btn-primary btn-large">
                                <FaPhone /> Hemen Ara
                            </a>
                            <a
                                href={createWhatsappUrl('Merhaba, yol yardım hizmetleri hakkında bilgi almak istiyorum.')}
                                className="btn-secondary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp /> WhatsApp ile Sor
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaqPage;
