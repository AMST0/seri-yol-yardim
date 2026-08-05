import { useEffect } from 'react';
import { SITE } from '../data/site';

const setMetaContent = (selector, content) => {
    document.querySelector(selector)?.setAttribute('content', content);
};

const usePageMeta = ({ title, description, path = '/', robots = 'index, follow' }) => {
    useEffect(() => {
        const pageUrl = new URL(path, SITE.url).toString();

        document.title = title;
        setMetaContent('meta[name="title"]', title);
        setMetaContent('meta[name="description"]', description);
        setMetaContent('meta[name="robots"]', robots);
        setMetaContent('meta[property="og:title"]', title);
        setMetaContent('meta[property="og:description"]', description);
        setMetaContent('meta[property="og:url"]', pageUrl);
        setMetaContent('meta[property="twitter:title"]', title);
        setMetaContent('meta[property="twitter:description"]', description);
        setMetaContent('meta[property="twitter:url"]', pageUrl);
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
    }, [description, path, robots, title]);
};

export default usePageMeta;
