export const SITE = {
    name: 'SERİ YOL YARDIM',
    url: 'https://seriyolyardim.com',
    phoneDisplay: '0542 621 69 01',
    phoneHref: 'tel:05426216901',
    whatsappUrl: 'https://wa.me/905426216901',
    address: 'Fatih Mahallesi, 30042 Sk. No:4, Mezitli / Mersin',
    shortAddress: 'Fatih Mahallesi, Mezitli / Mersin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Fatih+Mahallesi+30042+Sk.+No%3A4+Mezitli+Mersin',
    mapEmbedUrl: 'https://www.google.com/maps?q=Fatih%20Mahallesi%2030042%20Sk.%20No%3A4%20Mezitli%20Mersin&output=embed',
};

export const SERVICE_AREAS = [
    'Mezitli',
    'Yenişehir',
    'Akdeniz',
    'Toroslar',
    'Tarsus',
    'Erdemli',
    'Silifke',
    'Anamur',
];

export const createWhatsappUrl = (message) => (
    `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`
);
