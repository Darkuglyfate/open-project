/**
 * HeroPaintOverlay — анимированные мазки кисти в Hero-секции.
 * Чисто CSS + SVG: stroke-dashoffset draw-анимация + opacity fade.
 * Не требует canvas, не нагружает CPU, поддерживает prefers-reduced-motion.
 */
export function HeroPaintOverlay() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <style>{`
        /* ── Общий keyframe: прорисовка + пауза + угасание ── */
        @keyframes brushDraw {
          0%   { stroke-dashoffset: var(--len); opacity: 0; }
          8%   { opacity: 1; }
          55%  { stroke-dashoffset: 0; opacity: 1; }
          80%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        /* Ken-Burns на текстуре бетона */
        @keyframes kenBurns {
          0%   { transform: scale(1)    translate(0, 0); }
          50%  { transform: scale(1.04) translate(-1%, 0.5%); }
          100% { transform: scale(1)    translate(0, 0); }
        }

        .hero-texture-kb {
          animation: kenBurns 14s ease-in-out infinite;
          transform-origin: center center;
        }

        /* Мазки */
        .bs1 { --len: 2400px; stroke-dasharray: 2400; stroke-dashoffset: 2400;
          animation: brushDraw 12s ease-in-out infinite 0s; }
        .bs2 { --len: 1600px; stroke-dasharray: 1600; stroke-dashoffset: 1600;
          animation: brushDraw 10s ease-in-out infinite 3s; }
        .bs3 { --len: 1900px; stroke-dasharray: 1900; stroke-dashoffset: 1900;
          animation: brushDraw 11s ease-in-out infinite 6.5s; }
        .bs4 { --len: 900px;  stroke-dasharray: 900;  stroke-dashoffset: 900;
          animation: brushDraw 8s  ease-in-out infinite 2s; }
        .bs5 { --len: 1200px; stroke-dasharray: 1200; stroke-dashoffset: 1200;
          animation: brushDraw 9s  ease-in-out infinite 9s; }

        @media (prefers-reduced-motion: reduce) {
          .bs1, .bs2, .bs3, .bs4, .bs5 { animation: none; opacity: 0; }
          .hero-texture-kb { animation: none; }
        }
      `}</style>

      {/* SVG слой с мазками */}
      <svg
        viewBox="0 0 1440 860"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
          {/* Мазок 1 — широкий горизонтальный, серединная зона */}
          <path
            className="bs1"
            d="M-80,380 C150,340 400,420 720,370 S1100,310 1520,390"
            fill="none"
            stroke="rgba(160,110,50,1)"
            strokeWidth="52"
            strokeLinecap="round"
          />
          {/* Мазок 2 — диагональ, верхняя часть */}
          <path
            className="bs2"
            d="M180,80 C350,160 550,110 750,200 S1000,310 1200,180"
            fill="none"
            stroke="rgba(140,85,40,1)"
            strokeWidth="36"
            strokeLinecap="round"
          />
          {/* Мазок 3 — нижняя дуга */}
          <path
            className="bs3"
            d="M-60,640 C200,600 500,670 760,630 S1050,580 1300,650 L1500,620"
            fill="none"
            stroke="rgba(170,120,55,1)"
            strokeWidth="44"
            strokeLinecap="round"
          />
          {/* Мазок 4 — короткий акцент, верхний правый */}
          <path
            className="bs4"
            d="M950,40 C1050,120 1150,80 1280,160"
            fill="none"
            stroke="rgba(130,75,35,1)"
            strokeWidth="28"
            strokeLinecap="round"
          />
          {/* Мазок 5 — нижний левый штрих */}
          <path
            className="bs5"
            d="M0,720 C120,680 280,740 420,700 S580,660 680,720"
            fill="none"
            stroke="rgba(150,100,45,1)"
            strokeWidth="32"
            strokeLinecap="round"
          />
      </svg>
    </div>
  );
}

/**
 * Экспортирует CSS-класс для применения Ken-Burns к изображению текстуры.
 * Используй: className="... hero-texture-kb"
 */
export const HERO_TEXTURE_KB_CLASS = "hero-texture-kb";
