import { useEffect, useRef, useState } from "react";

export function BrushCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Цветные элементы, которые меняются при pointer-hover
  const bristleBodyRef = useRef<SVGEllipseElement>(null);
  const bristleTipRef = useRef<SVGPathElement>(null);
  const inkDropRef = useRef<SVGCircleElement>(null);

  const [inkDrops, setInkDrops] = useState<{ id: number; x: number; y: number }[]>([]);

  // Мутабельный стейт — без useState, не вызывает перерисовку
  const state = useRef({
    x: -300,
    y: -300,
    visible: false,
    isPointer: false,
    rafScheduled: false,
  });

  const dropId = useRef(0);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    // Скрыть системный курсор
    const style = document.createElement("style");
    style.id = "brush-cursor-hide";
    style.textContent = `@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }`;
    document.head.appendChild(style);

    // Применяем позицию и угол напрямую в DOM — zero React re-renders
    const applyTransform = () => {
      const s = state.current;
      const el = cursorRef.current;
      const svg = svgRef.current;
      if (!el || !svg) return;

      el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      el.style.opacity = s.visible ? "1" : "0";

      // угол SVG — фиксированный, без вращения
      // кончик кисти (cx=13, cy=2) совмещён с точкой курсора
      svg.style.transform = `translate(-13px, -2px)`;

      // цвет кисти при наведении на кликабельный элемент
      const color = s.isPointer ? "#c01010" : "#2d3435";
      const colorDark = s.isPointer ? "#a00000" : "#1a1e1e";
      if (bristleBodyRef.current) bristleBodyRef.current.setAttribute("fill", color);
      if (bristleTipRef.current) bristleTipRef.current.setAttribute("fill", colorDark);
      if (inkDropRef.current) inkDropRef.current.setAttribute("fill", color);

      s.rafScheduled = false;
    };

    const scheduleRender = () => {
      if (!state.current.rafScheduled) {
        state.current.rafScheduled = true;
        requestAnimationFrame(applyTransform);
      }
    };

    const handleMove = (e: MouseEvent) => {
      const s = state.current;

      s.x = e.clientX;
      s.y = e.clientY;
      s.visible = true;

      const el = e.target as Element;
      s.isPointer =
        el.closest("button, a, [role='button'], input, textarea, select, label") !== null;

      scheduleRender();
    };

    const handleClick = (e: MouseEvent) => {
      const id = dropId.current++;
      setInkDrops((prev) => [...prev.slice(-5), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setInkDrops((prev) => prev.filter((d) => d.id !== id));
      }, 650);
    };

    const handleLeave = () => {
      state.current.visible = false;
      scheduleRender();
    };
    const handleEnter = () => {
      state.current.visible = true;
      scheduleRender();
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      document.getElementById("brush-cursor-hide")?.remove();
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {/* Чернильные брызги при клике — через React state (редко обновляются) */}
      {inkDrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute"
          style={{
            left: drop.x,
            top: drop.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="2" fill="#2d3435" opacity="0.7">
              <animate attributeName="r" values="2;11" dur="0.42s" fill="freeze" />
              <animate attributeName="opacity" values="0.7;0" dur="0.58s" fill="freeze" />
            </circle>
            <circle cx="10" cy="13" r="1" fill="#2d3435" opacity="0.5">
              <animate attributeName="r" values="1;4.5" dur="0.36s" fill="freeze" />
              <animate attributeName="opacity" values="0.5;0" dur="0.55s" fill="freeze" />
            </circle>
            <circle cx="32" cy="14" r="0.5" fill="#2d3435" opacity="0.4">
              <animate attributeName="r" values="0.5;3.5" dur="0.3s" fill="freeze" />
              <animate attributeName="opacity" values="0.4;0" dur="0.5s" fill="freeze" />
            </circle>
            <circle cx="14" cy="32" r="0.5" fill="#2d3435" opacity="0.35">
              <animate attributeName="r" values="0.5;3" dur="0.38s" fill="freeze" />
              <animate attributeName="opacity" values="0.35;0" dur="0.55s" fill="freeze" />
            </circle>
          </svg>
        </div>
      ))}

      {/* 
        Кисточка — позиция и угол применяются напрямую через DOM ref,
        без React setState → ноль лишних рендеров → нет дёргания.
      */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          willChange: "transform, opacity",
          /* Сглаживание ТОЛЬКО opacity, не позиции */
          transition: "opacity 0.12s ease",
        }}
      >
        <svg
          ref={svgRef}
          width="26"
          height="56"
          viewBox="0 0 26 56"
          fill="none"
          style={{
            display: "block",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
          }}
        >
          {/* Рукоятка */}
          <rect x="9" y="28" width="8" height="24" rx="2.5" fill="#7B4A28" />
          <rect x="10.5" y="30" width="2" height="20" rx="1" fill="rgba(255,255,255,0.18)" />
          {/* Обойма */}
          <rect x="8" y="23" width="10" height="7" rx="2" fill="#A8A8A8" />
          <rect x="9" y="24" width="8" height="1.5" rx="0.75" fill="rgba(255,255,255,0.35)" />
          {/* Тело щетины */}
          <ellipse
            ref={bristleBodyRef}
            cx="13" cy="19" rx="6.5" ry="4"
            fill="#2d3435"
          />
          {/* Кончик — сужается */}
          <path
            ref={bristleTipRef}
            d="M6.5 19 C8 14 10 8 13 3 C16 8 18 14 19.5 19 C17 15 13 10 13 3 C13 10 9 15 6.5 19Z"
            fill="#1a1e1e"
          />
          {/* Блик влажной краски */}
          <ellipse cx="13" cy="4.5" rx="1.8" ry="2.5" fill="rgba(255,255,255,0.28)" />
          {/* Капля на кончике */}
          <circle
            ref={inkDropRef}
            cx="13" cy="2" r="1.8"
            fill="#2d3435"
          />
        </svg>
      </div>
    </div>
  );
}