import { useState, useRef, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgCard1 from "figma:asset/e7cc6693649691a7773a3f8d18c024ea486886f0.png";
import imgCard2 from "figma:asset/94998c724566ba2e3e3675b186fe6adbe8798e3d.png";
import imgCard3 from "figma:asset/600b231cafe8d7c1cc70c3170f0716e04fd15e13.png";
import imgCard4 from "figma:asset/b4e2ea9d35cbdfce887f2165ade305eb7fdd1c6c.png";
import imgCard5 from "figma:asset/8845dc2d97004ecc8cdf92187809c78cccdbb5c6.png";
import imgCard6 from "figma:asset/a9592ac7d57cdc6fc0a001f74af4ee981eb594b1.png";
import imgCard8 from "figma:asset/c60b822368f567d8071d645625f5a0157384bc78.png";
import imgCardApple from "figma:asset/1e653361af0520f62ad7c44083388c0a88547f94.png";
import imgCard9 from "figma:asset/a9c48d4b2061d6a81117ed7b43f24ef08f1e8cc6.png";
import imgCard10 from "figma:asset/4062550fa996c6cee62a0650505c08bc0a79483a.png";
import imgCard11 from "figma:asset/52d49efdbd7a887e041f087716cefa97c5af6a9f.png";
import imgCard12 from "figma:asset/dd5b1817d7af27f76463156487d533e3f43cb806.png";
import imgCard13 from "figma:asset/7298c081fa273d4b61a5198e8b2f49a3bf911582.png";
import imgCard14 from "figma:asset/a12b3ef101fa5812aa1bd73024992ead10b9ac1e.png";
import imgCard15 from "figma:asset/0501c98263f9690461a34df3738ef747864ce215.png";
import imgCard16 from "figma:asset/6acfa306e08b9d2433689933c856c9be3bba19c2.png";
import imgCard17 from "figma:asset/4ce9d6acc6a4ff2eec9f4a1130ed31911dbff61e.png";
import imgCard18 from "figma:asset/292421d8c6cc3f56a67aa05a672e676ce29a03e7.png";
import imgCard19 from "figma:asset/532cec51484408e5215acdfee5ebb5940de51994.png";
import imgCard20 from "figma:asset/963b432eb60c67e05a822874011e802c7a442677.png";

interface PortfolioItem {
  id: number;
  image: string;
  area: string;
  title: string;
  location: string;
  description: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    image: imgCard1,
    area: "150sqm",
    title: "Коттедж",
    location: "ХУДОЖЕСТВЕННАЯ РОСПИСЬ • МОСКВА",
    description: "Художественная роспись интерьера загородного коттеджа. Авторский рисунок, создающий особую атмосферу уюта и гармонии в жилом пространстве.",
  },
  {
    id: 2,
    image: imgCard2,
    area: "420sqm",
    title: 'Компания "ПИК"',
    location: "РИСУНОК В САНУЗЛЕ",
    description: "Прозрачный шар с эффектом стекла — плавный градиент от синего к розовому. Воздух и свет, застывшие на стене.",
  },
  {
    id: 3,
    image: imgCard3,
    area: "85sqm",
    title: 'Компания "ПИК"',
    location: "РИСУНОК В САНУЗЛЕ",
    description:
      "Морская ракушка во всю стену — объёмная роспись на чёрном фоне передаёт фактуру и глубину морского организма. Тёплые терракотово-янтарные тона контрастируют с красным полом, создавая эффектный драматичный санузел.",
  },
  {
    id: 4,
    image: imgCard4,
    area: "200sqm",
    title: "Рисунок на фасаде дома",
    location: "«РУССКИЕ ВИТЯЗИ» — МОСКВА",
    description:
      "Художественный рисунок на фасаде кирпичного многоэтажного дома.",
  },
  {
    id: 5,
    image: imgCard5,
    area: "850sqm",
    title: "Рисунок на фасаде дома",
    location: "РИСУНОК НЕФТЯНИКОВ ЗА РАБОТОЙ — КОГАЛЫМ",
    description:
      "Монументальная роспись на фасаде жилого дома: нефтяники в спецодежде на буровой платформе, детально прописанные фигуры и оборудование. Мурал создан в честь жителей Когалыма — города нефтяников на севере Западной Сибири.",
  },
  {
    id: 6,
    image: imgCard6,
    area: "320sqm",
    title: "Рисунок геометрических форм",
    location: "БРЕНДИРОВАНИЕ ОФИСА — МОСКВА",
    description:
      "Современная геометрическая роспись стен в офисном пространстве. Контрастные цветовые блоки и строгие линии визуально зонируют помещение и подчеркивают корпоративный стиль компании.",
  },
  {
    id: 7,
    image: imgCardApple,
    area: "150sqm",
    title: 'Коммерческий рисунок для компании "APPLE"',
    location: "ХУДОЖЕСТВЕННАЯ РОСПИСЬ ФАСАДА ЗДАНИЯ • МОСКВА",
    description:
      "Масштабный мурал на фасаде здания, отражающий инновации и технологии, выполненный в фирменном минималистичном стиле.",
  },
  {
    id: 8,
    image: imgCard8,
    area: "280sqm",
    title: "Рисунок на фасаде дома",
    location: "АРТ РАБОТА С ФЕСТИВАЛЯ «КВАРТАЛ НАСТАВНИКОВ»",
    description:
      "Монументальная портретная роспись на фасаде жилого дома, созданная в рамках фестиваля «Квартал Наставников» — арт-пространство под открытым небом.",
  },
  {
    id: 9,
    image: imgCard9,
    area: "95sqm",
    title: "«Художественный рисунок»",
    location: "ХУДОЖЕСТВЕННАЯ РОСПИСЬ • МОСКВА",
    description:
      "Монохромная 3D-иллюзия с эффектом драпировки и реалистичными текстурами. Современное искусство для оформления стильного интерьера.",
  },
  {
    id: 10,
    image: imgCard10,
    area: "1200sqm",
    title: "«РИСУНОК-ГРАФИКА»",
    location: "ХУДОЖЕСТВЕННЫЙ РИСУНОК В ЧАСТНОЙ КВАРТИРЕ • ЯРОСЛАВЛЬ",
    description:
      "Детализированная архитектурная графика с изображением храмового комплекса в интерьере частной квартиры, выполненная в монохромной технике.",
  },
  {
    id: 11,
    image: imgCard11,
    area: "340sqm",
    title: "«РИСУНОК СВЕТЯЩЕЙСЯ КРАСКОЙ»",
    location: "ХУДОЖЕСТВЕННЫЙ РИСУНОК СВЕТЯЩЕЙСЯ КРАСКОЙ В ТЕМНОТЕ • МОСКВА",
    description:
      "Завораживающая роспись стен светящейся краской, создающая эффект волшебного флуоресцентного леса. В темноте рисунок оживает и погружает в атмосферу неоновой сказки.",
  },
  {
    id: 12,
    image: imgCard12,
    area: "75sqm",
    title: "«ПОРТРЕТ НА ЗАКАЗ»",
    location: "Портрет на заказ • МОСКВА",
    description:
      "Реалистичный монохромный портрет с ысокой детализацией, выполненный по индивидуальному заказу. Тонкая проработка теней и черт лица.",
  },
  {
    id: 13,
    image: imgCard13,
    area: "460sqm",
    title: "«ОФИС»",
    location: "Рисунок в офисе • МОСКВА",
    description:
      "Яркая геометрическая роспись в переговорной комнате с интеграцией объемного элемента в виде рамки поста из Instagram. Стильное и современное решение для офисного пространства.",
  },
  {
    id: 14,
    image: imgCard14,
    area: "60sqm",
    title: "«РИСУНОК НА ФАСАДЕ ЗДАНИЯ»",
    location: "Рисунок а фасаде • КАГОЛЫМ",
    description:
      "Масштабная роспись фасада здания, преображающая городскую среду. Яркий и выразительный срит-арт, привлекающий внимание и создающий уникальный облик экстерьера.",
  },
  {
    id: 15,
    image: imgCard15,
    area: "220sqm",
    title: "«РИСУНОК В ДЕТСКОЙ»",
    location: "Рисунок в детской комнате • Санкт-Питербург",
    description:
      "Экспрессивная роспись в стиле киберпанк с неоновыми акцентами — среда, которая работает как арт-объект.",
  },
  {
    id: 16,
    image: imgCard16,
    area: "180sqm",
    title: "«РИСУНОК В ДЕТСКОЙ»",
    location: "Рисунок в детской комнате • Санкт-Питербург",
    description:
      "Литературные персонажи и цитаты классиков, вписанные в роспись залов — пространство, вдохновляющее на чтение.",
  },
  {
    id: 17,
    image: imgCard17,
    area: "130sqm",
    title: "«РИСУНОК В ДЕТСКОЙ»",
    location: "Рисунок в детской комнате • Санкт-Питербург",
    description:
      "Акварельная роспись в морском стиле: величественный кит, стайки рыб и коралловые заросли создают атмосферу подводного царства в детской комнате.",
  },
  {
    id: 18,
    image: imgCard18,
    area: "2400sqm",
    title: "«РИСУНОК НА ФАСАДЕ ЗДАНИЯ»",
    location: "Рисунок на фасаде здания • Санкт-Питербург",
    description:
      "Масштабный мурал «Жизнь леса» на фасаде жилого дома: медведь, волк, орёл, лось, лиса и другие обитатели русского леса в окружении рек и деревьев. Яркая роспись преображает городскую среду и напоминает о красоте дикой природы.",
  },
  {
    id: 19,
    image: imgCard19,
    area: "390sqm",
    title: "«Корабль в бутылке»",
    location: "ХУДОЖЕСТВЕННАЯ РОСПИСЬ • СОЧИ",
    description:
      "Масштабный мурал с гиперреалистичной росписью: парусник в бутылке с волнами, маяком и тропическими деревьями. Детальная проработка каждого элемента создаёт эффект объёма и живой картины на стене.",
  },
  {
    id: 20,
    image: imgCard20,
    area: "310sqm",
    title: "«Цифровой разум»",
    location: "ХУДОЖЕСТВЕННАЯ РОСПИСЬ • МОСКВА",
    description:
      "Геометрический мурал в московском офисе: абстрактная композиция из технологических схем, органических форм и многослойных фигур. Роспись создаёт вдохновляющую атмосферу для команды и подчёркивает инновационный дух компании.",
  },
];

const TOTAL = PORTFOLIO_ITEMS.length;
const pad = (n: number) => String(n).padStart(2, "0");

export function PortfolioSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sliderRef = useRef<Slider>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  // Используем ref чтобы не пересоздавать обработчик
  const scrollRafRef = useRef<number | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
        }
      },
    ]
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  // Mobile scroll helpers
  const mobileNext = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.min(mobileIndex + 1, TOTAL - 1);
    const cardWidth = el.scrollWidth / TOTAL;
    el.scrollTo({ left: cardWidth * newIndex, behavior: "smooth" });
    setMobileIndex(newIndex);
  };
  const mobilePrev = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.max(mobileIndex - 1, 0);
    const cardWidth = el.scrollWidth / TOTAL;
    el.scrollTo({ left: cardWidth * newIndex, behavior: "smooth" });
    setMobileIndex(newIndex);
  };

  // Синхронизация счётчика со свайпом через нативный scroll
  const handleMobileScroll = useCallback(() => {
    if (scrollRafRef.current !== null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      const el = mobileScrollRef.current;
      if (!el) return;
      const cardWidth = el.scrollWidth / TOTAL;
      if (cardWidth === 0) return;
      const rawIndex = el.scrollLeft / cardWidth;
      const index = Math.round(rawIndex);
      const clamped = Math.min(Math.max(index, 0), TOTAL - 1);
      setMobileIndex((prev) => (prev !== clamped ? clamped : prev));
    });
  }, []);

  const maxSlideApprox = TOTAL - 1;
  const progress = (currentSlide / maxSlideApprox) * 100;

  return (
    <div
      id="portfolio"
      className="flex flex-col gap-[64px] w-full"
      data-name="Section - Portfolio"
    >
      {/* ── Header row ── */}
      <div className="flex flex-col items-center gap-[24px] w-full px-[16px] sm:px-0">
        <div
          className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[28px] sm:text-[38px] lg:text-[48px] text-[#2d3435] text-center w-full leading-tight"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Избранные работы
        </div>
        <div className="font-['Manrope:Regular',sans-serif] text-[15px] sm:text-[16px] text-[#5a6061] text-center leading-[24px] max-w-[560px]">
          Реализуем проекты для частных и коммерческих пространств, создавая уникальную визуальную идентичность.
        </div>
      </div>

      {/* ── MOBILE: нативный CSS scroll-snap ── */}
      <div className="sm:hidden w-full overflow-x-auto flex gap-[12px] px-[16px] pb-[4px] snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        ref={mobileScrollRef}
        onScroll={handleMobileScroll}
      >
        {PORTFOLIO_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className="flex-none snap-start flex flex-col outline-none"
            style={{ width: "72vw", maxWidth: "280px" }}
          >
            {/* Image container */}
            <div
              className="relative overflow-hidden w-full group"
              style={{ paddingBottom: "133%" }}
            >
              <img
                src={item.image}
                alt={item.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(18,22,22,0.65) 0%, transparent 50%)",
                }}
              />
              {/* Index number */}
              <div className="absolute bottom-[14px] left-[16px]">
                <span className="font-['Manrope:Extra_Bold',sans-serif] text-[11px] tracking-[1px] text-white opacity-60">
                  {pad(i + 1)}
                </span>
              </div>
            </div>
            {/* Card info */}
            <div className="flex flex-col pt-[12px] gap-[4px]">
              <div
                className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[18px] text-[#2d3435] leading-[26px]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                {item.title}
              </div>
              <div className="font-['Manrope:Regular',sans-serif] text-[10px] tracking-[1.2px] text-[#8a9192] uppercase truncate">
                {item.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MOBILE controls ── */}
      <div className="sm:hidden flex items-center justify-between px-[16px]">
        {/* Counter */}
        <div className="font-['Manrope:Regular',sans-serif] text-[13px] text-[#2d3435] tracking-[0.5px] tabular-nums whitespace-nowrap">
          <span>{pad(mobileIndex + 1)}</span>
          <span className="text-[#adb3b4] mx-[6px]">/</span>
          <span className="text-[#adb3b4]">{pad(TOTAL)}</span>
        </div>
        {/* Arrows */}
        <div className="flex gap-[10px]">
          <button
            onClick={mobilePrev}
            disabled={mobileIndex === 0}
            className="flex items-center justify-center border border-[#2d3435] bg-transparent transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ width: "44px", height: "44px", cursor: mobileIndex === 0 ? "not-allowed" : "pointer" }}
            aria-label="Назад"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9L11 4" stroke="#2d3435" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={mobileNext}
            disabled={mobileIndex === TOTAL - 1}
            className="flex items-center justify-center border border-[#2d3435] bg-transparent transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ width: "44px", height: "44px", cursor: mobileIndex === TOTAL - 1 ? "not-allowed" : "pointer" }}
            aria-label="Вперёд"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="#2d3435" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── DESKTOP: react-slick ── */}
      <div className="hidden sm:block w-full relative overflow-hidden -mx-[14px]">
        <style>{`
          .slick-slide > div {
            margin: 0 14px;
          }
          .slick-list {
            padding-bottom: 20px;
          }
        `}</style>
        <Slider ref={sliderRef} {...settings}>
          {PORTFOLIO_ITEMS.map((item, i) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className="flex flex-col outline-none cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image container */}
                <div
                  className="relative overflow-hidden w-full group"
                  style={{ paddingBottom: "133%" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(18,22,22,0.78) 0%, rgba(18,22,22,0.18) 50%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-[24px] pb-[28px] opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out"
                  >
                    <p
                      className="font-['Manrope:Regular',sans-serif] text-[13px] text-white leading-[20px] m-0"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                    >
                      {item.description}
                    </p>
                    <div className="flex items-center gap-[8px] mt-[12px]">
                      <span className="font-['Manrope:Extra_Bold',sans-serif] text-[11px] tracking-[1px] text-white uppercase">
                        Смотреть проект
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[20px] left-[24px] opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-out"
                  >
                    <span className="font-['Manrope:Extra_Bold',sans-serif] text-[11px] tracking-[1px] text-white">
                      {pad(i + 1)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col pt-[18px] gap-[4px] px-[4px]">
                  <div
                    className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[22px] text-[#2d3435] leading-[30px]"
                    style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                  >
                    {item.title}
                  </div>
                  <div className="font-['Manrope:Regular',sans-serif] text-[11px] tracking-[1.2px] text-[#8a9192] uppercase truncate">
                    {item.location}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* ── Controls (desktop only) ── */}
      <div className="hidden sm:flex items-center justify-between mt-[10px] px-[14px]">
        <div className="flex items-center gap-[20px]">
          <div className="font-['Manrope:Regular',sans-serif] text-[13px] text-[#2d3435] tracking-[0.5px] tabular-nums whitespace-nowrap">
            <span className="inline-block transition-all duration-300">
              {pad(currentSlide + 1)}
            </span>
            <span className="text-[#adb3b4] mx-[6px]">/</span>
            <span className="text-[#adb3b4]">{pad(TOTAL)}</span>
          </div>
          <div className="relative bg-[#e4e8e8] overflow-hidden w-[160px] h-[1.5px]">
            <div
              className="absolute top-0 left-0 h-full bg-[#2d3435] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex gap-[10px]">
          <button
            onClick={prev}
            className="relative flex items-center justify-center overflow-hidden border border-[#2d3435] bg-transparent hover:bg-[#2d3435] transition-colors duration-300 group"
            style={{ width: "48px", height: "48px", cursor: "pointer" }}
            aria-label="Назад"
          >
            <span className="relative z-10 text-[#2d3435] group-hover:text-white transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <button
            onClick={next}
            className="relative flex items-center justify-center overflow-hidden border border-[#2d3435] bg-transparent hover:bg-[#2d3435] transition-colors duration-300 group"
            style={{ width: "48px", height: "48px", cursor: "pointer" }}
            aria-label="Вперёд"
          >
            <span className="relative z-10 text-[#2d3435] group-hover:text-white transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Dot indicators (desktop only) */}
      <div className="hidden sm:flex gap-[6px] mt-[4px] px-[14px] flex-wrap">
        {PORTFOLIO_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            aria-label={`Слайд ${i + 1}`}
            className="p-0 border-0 bg-transparent cursor-pointer"
            style={{
              width: i === currentSlide ? "28px" : "6px",
              height: "4px",
              borderRadius: "2px",
              backgroundColor: i === currentSlide ? "#2d3435" : "#cdd2d3",
              transition: "width 0.35s ease, background-color 0.35s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}