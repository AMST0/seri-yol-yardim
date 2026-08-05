import Hero from '../components/Hero';
import UrgentBanner from '../components/UrgentBanner';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import usePageMeta from '../hooks/usePageMeta';
import './pages.css';

const HomePage = () => {
    usePageMeta({
        title: 'Mezitli Çekici | 7/24 Yol Yardım - SERİ YOL YARDIM',
        description: 'Mezitli ve Mersin genelinde 7/24 oto çekici, oto kurtarma, akü takviyesi, lastik değişimi ve özel araç transferi. Hemen arayın: 0542 621 69 01.',
        path: '/',
    });

    return (
        <>
            <Hero />
            <UrgentBanner />
            <Services />
            <Advantages />
        </>
    );
};

export default HomePage;
