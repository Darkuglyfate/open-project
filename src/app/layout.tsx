import type { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ARTALYANS",
  url: "https://artalyans.com/",
  description:
    "Художественная роспись стен и фасадов для квартир, домов, офисов и коммерческих объектов по России.",
  telephone: "+7-968-377-27-70",
  email: "info@newartalyans.ru",
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  knowsAbout: [
    "Роспись стен",
    "Роспись фасадов",
    "Художественная роспись интерьеров",
    "Декоративная роспись коммерческих объектов",
  ],
  sameAs: ["https://t.me/newartalyans", "https://instagram.com/art.alyanz"],
};

const metrikaScript = `
  (function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108978468', 'ym');

  ym(108978468, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <title>ARTALYANS — роспись стен и фасадов на заказ по России</title>
        <meta
          name="description"
          content="Художественная роспись стен и фасадов для квартир, домов, офисов и коммерческих объектов. ARTALYANS: эскиз, расчет, договор и реализация под ключ по России."
        />
        <meta name="robots" content="index, follow" />
        <meta name="yandex-verification" content="15502df6718af06f" />
        <meta name="yandex-verification" content="2a9f8ed2c0633be4" />
        <meta name="theme-color" content="#2d3435" />
        <link rel="canonical" href="https://artalyans.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="ARTALYANS" />
        <meta property="og:title" content="ARTALYANS — роспись стен и фасадов на заказ по России" />
        <meta
          property="og:description"
          content="Художественная роспись стен и фасадов для квартир, домов, офисов и коммерческих объектов. Эскиз, расчет, договор и реализация под ключ по России."
        />
        <meta property="og:url" content="https://artalyans.com/" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ARTALYANS — роспись стен и фасадов на заказ по России" />
        <meta
          name="twitter:description"
          content="Художественная роспись стен и фасадов для квартир, домов, офисов и коммерческих объектов. Эскиз, расчет, договор и реализация под ключ по России."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: metrikaScript }} />
        <style dangerouslySetInnerHTML={{ __html: "html, body { height: 100%; margin: 0; }" }} />
      </head>
      <body>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108978468"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
