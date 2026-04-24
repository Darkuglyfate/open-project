import { useEffect, useRef } from "react";

interface Stroke {
  d: string;
  color: string;
  width: number;
  duration: number;
  delay: number;
  opacity: number;
}

const strokes: Stroke[] = [
  {
    d: "M 60 180 C 120 120, 200 90, 320 140",
    color: "#c9a96e",
    width: 2.5,
    duration: 2.2,
    delay: 0.2,
    opacity: 0.35,
  },
  {
    d: "M 80 320 C 160 260, 280 300, 380 240",
    color: "#8b7355",
    width: 1.8,
    duration: 2.8,
    delay: 0.8,
    opacity: 0.25,
  },
  {
    d: "M 20 500 Q 140 420 260 480 T 440 440",
    color: "#2d3435",
    width: 1.5,
    duration: 3.2,
    delay: 1.4,
    opacity: 0.15,
  },
  {
    d: "M 50 650 C 180 580, 300 640, 420 590",
    color: "#c9a96e",
    width: 2.0,
    duration: 2.6,
    delay: 2.0,
    opacity: 0.3,
  },
  {
    d: "M 30 80 Q 100 40 200 70 T 380 50",
    color: "#8b7355",
    width: 1.2,
    duration: 2.4,
    delay: 0.5,
    opacity: 0.2,
  },
  // right side
  {
    d: "M 1860 200 C 1750 150, 1640 180, 1520 140",
    color: "#c9a96e",
    width: 2.2,
    duration: 2.5,
    delay: 0.3,
    opacity: 0.3,
  },
  {
    d: "M 1900 380 C 1780 320, 1660 360, 1540 300",
    color: "#2d3435",
    width: 1.6,
    duration: 3.0,
    delay: 1.0,
    opacity: 0.18,
  },
  {
    d: "M 1880 560 Q 1760 490 1640 540 T 1480 510",
    color: "#8b7355",
    width: 1.9,
    duration: 2.8,
    delay: 1.8,
    opacity: 0.25,
  },
  {
    d: "M 1920 720 C 1800 660, 1680 700, 1560 650",
    color: "#c9a96e",
    width: 1.4,
    duration: 2.3,
    delay: 2.4,
    opacity: 0.22,
  },
  {
    d: "M 1850 100 Q 1740 60 1640 90 T 1480 70",
    color: "#8b7355",
    width: 1.1,
    duration: 2.6,
    delay: 0.7,
    opacity: 0.18,
  },
];

export function BrushStrokes() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll<SVGPathElement>("path[data-animated]");
    if (!paths) return;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      // trigger reflow
      path.getBoundingClientRect();
      const delay = parseFloat(path.getAttribute("data-delay") || "0");
      const duration = parseFloat(path.getAttribute("data-duration") || "2");
      path.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s`;
      path.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1920 921"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {strokes.map((s, i) => (
        <path
          key={i}
          data-animated
          data-delay={s.delay}
          data-duration={s.duration}
          d={s.d}
          stroke={s.color}
          strokeWidth={s.width}
          strokeLinecap="round"
          fill="none"
          opacity={s.opacity}
        />
      ))}
    </svg>
  );
}
