# Site İnceleme ve Yayın Notları

Bu sürüm; içerik, kullanıcı deneyimi, mobil uyumluluk, erişilebilirlik, SEO, performans ve kod kalitesi açısından gözden geçirilmiştir.

## Yapılan başlıca iyileştirmeler

- S.S.S. sayfası 33 potansiyel müşteri sorusuyla genişletildi ve arama motorlarına uygun FAQ şeması eklendi.
- Dijital sistemi kilitlenen, tekerlekleri dönmeyen, otomatik, elektrikli, 4x4 ve alçak araçların özel transfer aparatlarıyla taşınması açıklandı.
- Ana sayfa, hizmetler, hakkımızda, iletişim ve mobil menü düzenlendi.
- Doğrulanamayan sıralama, müşteri sayısı, puan ve kesin varış garantileri kaldırıldı.
- Telefon, WhatsApp, adres ve bölge bilgileri tek merkezden yönetilebilir hâle getirildi.
- Her sayfaya ayrı başlık, açıklama, canonical, Open Graph ve Twitter meta bilgisi eklendi.
- Yerel işletme yapılandırılmış verisi sadeleştirildi; yanlış veya doğrulanamayan alanlar kaldırıldı.
- Klavye odağı, içerik atlama bağlantısı, hareket azaltma tercihi ve mobil menü erişilebilirliği geliştirildi.
- 404 sayfası, `llms.txt`, güncel site haritası ve güvenlik başlıkları eklendi.
- Kullanılmayan dosyalar kaldırıldı; logo ve favicon boyutları küçültüldü.
- Bağımlılıklar güncellendi; kod kalite ve üretim derleme kontrolleri tamamlandı.

## Yayına almadan önce işletme sahibinin doğrulaması gerekenler

- Fatih Mahallesi, 30042 Sokak No:4, Mezitli/Mersin adresi ve harita pini.
- 2009 kuruluş yılı.
- Sunulan hizmetlerin tamamı ve kullanılan özel aparatların güncel durumu.
- Ödeme seçenekleri, sigorta/güvence kapsamı ve fiyatlandırma koşulları.
- Hizmet verilen ilçeler ve şehirler arası taşıma kapsamı.
- Google İşletme Profili ve sosyal medya bağlantıları; mevcut olduğunda yapılandırılmış veride `sameAs` alanına eklenmeli.

## Teknik not

`npm audit`, React Router'ın yalnızca RSC (React Server Components) sunucu eylemleri kullanıldığında etkili olan iki güvenlik bildirimini göstermektedir. Bu proje istemci taraflı `BrowserRouter` kullanır; RSC veya sunucu eylemi içermez. Bu nedenle ilgili kod yolu bu sitede çalışmamaktadır. Paketler yine de yeni güvenli sürümler çıktığında güncel tutulmalıdır; zorla sürüm düşürme yapılmamalıdır.

## Yayın

Proje Vite tabanlıdır. `npm install` ve `npm run build` komutlarından sonra oluşan `dist` klasörü statik yayın çıktısıdır. Vercel yapılandırması SPA yönlendirmelerini ve temel güvenlik başlıklarını içerir.
