import { FaHome, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';
import './pages.css';

const NotFoundPage = () => {
    usePageMeta({
        title: 'Sayfa Bulunamadı | SERİ YOL YARDIM',
        description: 'Aradığınız sayfa bulunamadı. SERİ YOL YARDIM ana sayfasına dönebilir veya 7/24 destek için bizi arayabilirsiniz.',
        path: '/404',
        robots: 'noindex, follow',
    });

    return (
        <div className="page not-found-page">
            <section className="not-found-content">
                <span className="not-found-code">404</span>
                <h1>Aradığınız Sayfa Bulunamadı</h1>
                <p>Bağlantı değişmiş veya sayfa kaldırılmış olabilir.</p>
                <div className="cta-buttons">
                    <Link to="/" className="btn-primary">
                        <FaHome aria-hidden="true" /> Ana Sayfaya Dön
                    </Link>
                    <a href={SITE.phoneHref} className="btn-secondary">
                        <FaPhone aria-hidden="true" /> Hemen Ara
                    </a>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;
