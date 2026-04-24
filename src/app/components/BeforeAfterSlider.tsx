import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";

// After images from portfolio (figma:asset)
import imgAfter1 from "figma:asset/e7cc6693649691a7773a3f8d18c024ea486886f0.png"; // Cottage interior mural
import imgAfter2 from "figma:asset/a9592ac7d57cdc6fc0a001f74af4ee981eb594b1.png"; // Geometric office mural
import imgAfter3 from "figma:asset/b4e2ea9d35cbdfce887f2165ade305eb7fdd1c6c.png"; // Facade mural
import imgBefore1 from "figma:asset/35e187ee10fa55e53ffdb3022b4e53d9c6f6040d.png"; // Загородный коттедж — до
import imgBefore2 from "figma:asset/0bba08110576ae00c161c54dd5f0340df68cc86f.png"; // Офисное пространство — до
import imgBefore3 from "figma:asset/dfff980f04d0ed1eb126cf37e7ed20e86760b49f.png"; // Фасад жилого дома — до

const PAIRS = [
  {
    id: 1,
    before: imgBefore1,
    after: imgAfter1,
    title: "Загородный коттедж",
    type: "ХУДОЖЕСТВЕННАЯ РОСПИСЬ • МОСКВА",
    area: "150 м²",
  },
  {
    id: 2,
    before: imgBefore2,
    after: imgAfter2,
    title: "Офисное пространство",
    type: "БРЕНДИРОВАНИЕ ОФИСА • МОСКВА",
    area: "320 м²",
  },
  {
    id: 3,
    before: imgBefore3,
    after: imgAfter3,
    title: "Фасад жилого дома",
    type: "РОСПИСЬ ФАСАДА • МОСКВА",
    area: "200 м²",
  },
];

interface SliderProps {
  before: string;
  after: string;
}

function CompareSlider({ before, after }: SliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setPosition(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
      style={{ aspectRatio: "4/3", cursor: "col-resize" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* BEFORE — full width baseline */}
      <img
        src={before}
        alt="До"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Label ДО */}
      <div className="absolute top-[16px] left-[16px] z-10 pointer-events-none">
        <span className="bg-white/90 font-['Manrope:Extra_Bold',sans-serif] text-[11px] tracking-[2px] uppercase text-[#2d3435] px-[10px] py-[5px]">
          До
        </span>
      </div>

      {/* AFTER — clipped to right of handle */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={after}
          alt="После"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Label ПОСЛЕ */}
        <div className="absolute top-[16px] right-[16px] pointer-events-none">
          <span className="bg-[#2d3435]/90 font-['Manrope:Extra_Bold',sans-serif] text-[11px] tracking-[2px] uppercase text-white px-[10px] py-[5px]">
            После
          </span>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />

        {/* Drag handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-auto cursor-col-resize">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <path d="M6 7H1M1 7L4 4M1 7L4 10" stroke="#2d3435" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 7H21M21 7L18 4M21 7L18 10" stroke="#2d3435" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <div className="relative w-full bg-[#1c2021]" data-name="Section - BeforeAfter">
      {/* Декоративная кисть в углу */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.03] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <path d="M50,280 Q120,180 200,120 Q240,90 280,40" stroke="white" strokeWidth="60" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col items-center px-[16px] sm:px-[48px] lg:px-[96px] py-[64px] sm:py-[100px] lg:py-[140px] max-w-[1536px] mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-[16px] w-full mb-[48px] sm:mb-[80px]"
        >
          <div
            className="font-['Manrope:Semi_Bold',sans-serif] text-[11px] tracking-[3px] uppercase text-[#757c7d]"
          >
            Результат
          </div>
          <h2
            className="font-['Noto_Serif:Regular',sans-serif] font-normal text-white text-[28px] sm:text-[36px] lg:text-[48px] text-center leading-tight"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Трансформация пространства
          </h2>
          <p className="font-['Manrope:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#6b7475] text-center max-w-[500px] leading-[1.6]">
            Перетащите разделитель, чтобы увидеть, как роспись преображает любое пространство.
          </p>
        </motion.div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 gap-[24px] lg:gap-[32px] w-full">
          {PAIRS.map((pair, i) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col gap-[16px]"
            >
              <CompareSlider before={pair.before} after={pair.after} />
              <div className="flex flex-col gap-[6px]">
                <div
                  className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[18px] text-white leading-[26px]"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  {pair.title}
                </div>
                <div className="flex items-center gap-[10px]">
                  <span className="font-['Manrope:Regular',sans-serif] text-[10px] tracking-[1.5px] text-[#6b7475] uppercase">
                    {pair.type}
                  </span>
                  <span className="w-[1px] h-[10px] bg-[#3a4445]" />
                  <span className="font-['Manrope:Extra_Bold',sans-serif] text-[10px] tracking-[1px] text-[#6b7475] uppercase">
                    {pair.area}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}