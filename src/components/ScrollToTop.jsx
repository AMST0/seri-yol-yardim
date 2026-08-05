import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.getElementById('main-content')?.focus({ preventScroll: true });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
