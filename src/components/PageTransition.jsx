import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import truckVideo from '../assets/truck-animation.mp4';
import './PageTransition.css';

const PageTransition = () => {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);
    const prevPathRef = useRef(location.pathname);
    const isFirstRender = useRef(true);
    const videoRef = useRef(null);

    useEffect(() => {
        // İlk render'da animasyon gösterme
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // Sadece farklı sayfaya gidince animasyon göster
        if (location.pathname !== prevPathRef.current) {
            prevPathRef.current = location.pathname;
            setIsAnimating(true);

            // Video bitince veya timeout sonra kapat
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (isAnimating && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [isAnimating]);

    if (!isAnimating) return null;

    return (
        <div className="page-transition-overlay">
            <video
                ref={videoRef}
                className="transition-truck-video"
                autoPlay
                muted
                playsInline
                onEnded={() => setIsAnimating(false)}
            >
                <source src={truckVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default PageTransition;
