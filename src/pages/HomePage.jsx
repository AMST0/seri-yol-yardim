import Hero from '../components/Hero';
import UrgentBanner from '../components/UrgentBanner';
import Services from '../components/Services';
import './pages.css';

const HomePage = () => {
    return (
        <>
            <Hero />
            <UrgentBanner />
            <Services />
        </>
    );
};

export default HomePage;
