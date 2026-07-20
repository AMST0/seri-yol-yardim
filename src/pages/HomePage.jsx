import { useEffect } from 'react';
import Hero from '../components/Hero';
import UrgentBanner from '../components/UrgentBanner';
import Services from '../components/Services';
import './pages.css';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Mezitli Çekici | 7/24 Yol Yardım Hizmeti - SERİ YOL YARDIM';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Mezitli ve Mersin\'de 7/24 oto kurtarma, çekici ve yol yardım hizmeti. Profesyonel ekip, hızlı müdahale, uygun fiyat. Hemen arayın: 0542 621 69 01');
    }, []);
    return (
        <>
            <Hero />
            <UrgentBanner />
            <Services />
        </>
    );
};

export default HomePage;
