import { useEffect, useRef, useCallback } from "react";

interface Drop {
  x: number;
  y: number;
  r: number;
  maxR: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  age: number;
  maxAge: number;
  splashed: boolean;
  splashChildren: Splatter[];
}

interface Splatter {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  age: number;
  maxAge: number;
}

const BRAND_COLORS = [
  "rgba(201,169,110,",   // gold
  "rgba(139,115,85,",    // brown
  "rgba(45,52,53,",      // dark
  "rgba(90,96,97,",      // muted grey
  "rgba(180,145,90,",    // warm gold
];

function randomColor() {
  return BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function HeroInkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<Drop[]>([]);
  const splattersRef = useRef<Splatter[]>([]);
  const animRef = useRef<number>(0);
  const lastDropTimeRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const lastMouseDropRef = useRef<number>(0);

  const spawnDrop = useCallback((x?: number, y?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    const cx = x ?? randomBetween(w * 0.05, w * 0.95);
    const cy = y ?? randomBetween(-60, -10);
    const color = randomColor();
    const maxR = randomBetween(20, 60);
    dropsRef.current.push({
      x: cx,
      y: cy,
      r: randomBetween(3, 8),
      maxR,
      color,
      alpha: randomBetween(0.08, 0.22),
      vx: randomBetween(-0.4, 0.4),
      vy: randomBetween(1.5, 3.5),
      age: 0,
      maxAge: randomBetween(120, 220),
      splashed: false,
      splashChildren: [],
    });
  }, []);

  const spawnMouseDrop = useCallback((x: number, y: number) => {
    const color = randomColor();
    dropsRef.current.push({
      x,
      y,
      r: randomBetween(2, 5),
      maxR: randomBetween(8, 22),
      color,
      alpha: randomBetween(0.06, 0.14),
      vx: randomBetween(-0.6, 0.6),
      vy: randomBetween(-0.4, 0.8),
      age: 0,
      maxAge: randomBetween(80, 140),
      splashed: false,
      splashChildren: [],
    });
  }, []);

  // Draw a fluid ink blob using bezier curves
  function drawBlob(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    color: string,
    alpha: number
  ) {
    const pts = 8;
    const angleStep = (Math.PI * 2) / pts;
    ctx.beginPath();
    for (let i = 0; i <= pts; i++) {
      const angle = i * angleStep;
      // Slightly irregular radius for organic feel
      const jitter = r * randomBetween(0.75, 1.25);
      const px = x + Math.cos(angle) * jitter;
      const py = y + Math.sin(angle) * jitter;
      if (i === 0) ctx.moveTo(px, py);
      else {
        const prevAngle = (i - 1) * angleStep;
        const cpR = r * randomBetween(0.9, 1.1);
        const cpx = x + Math.cos(prevAngle + angleStep / 2) * cpR * 1.4;
        const cpy = y + Math.sin(prevAngle + angleStep / 2) * cpR * 1.4;
        ctx.quadraticCurveTo(cpx, cpy, px, py);
      }
    }
    ctx.closePath();

    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `${color}${alpha})`);
    grad.addColorStop(0.6, `${color}${alpha * 0.7})`);
    grad.addColorStop(1, `${color}0)`);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  function drawTail(
    ctx: CanvasRenderingContext2D,
    drop: Drop
  ) {
    // Draw a thin drip tail above the drop
    const tailLen = Math.min(drop.age * drop.vy * 0.5, 40);
    if (tailLen < 4) return;
    const grad = ctx.createLinearGradient(drop.x, drop.y - tailLen, drop.x, drop.y);
    grad.addColorStop(0, `${drop.color}0)`);
    grad.addColorStop(1, `${drop.color}${drop.alpha * 0.5})`);
    ctx.beginPath();
    ctx.moveTo(drop.x - drop.r * 0.3, drop.y - tailLen);
    ctx.bezierCurveTo(
      drop.x - drop.r * 0.5, drop.y - tailLen * 0.5,
      drop.x + drop.r * 0.5, drop.y - tailLen * 0.3,
      drop.x, drop.y
    );
    ctx.lineWidth = drop.r * 0.6;
    ctx.strokeStyle = grad;
    ctx.lineCap = "round";
    ctx.stroke();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Seed initial drops scattered across the canvas
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        if (!canvas) return;
        const w = canvas.width;
        const h = canvas.height;
        dropsRef.current.push({
          x: randomBetween(w * 0.03, w * 0.97),
          y: randomBetween(h * 0.05, h * 0.9),
          r: randomBetween(10, 50),
          maxR: randomBetween(30, 80),
          color: randomColor(),
          alpha: randomBetween(0.05, 0.14),
          vx: 0,
          vy: 0,
          age: 60,
          maxAge: 200,
          splashed: true,
          splashChildren: [],
        });
      }, i * 120);
    }

    const tick = (now: number) => {
      const w = canvas.width;
      const h = canvas.height;

      // Spawn drops periodically
      if (now - lastDropTimeRef.current > 1800) {
        lastDropTimeRef.current = now;
        spawnDrop();
        if (Math.random() > 0.5) spawnDrop();
      }

      // Mouse-driven drops
      if (mouseRef.current && now - lastMouseDropRef.current > 120) {
        lastMouseDropRef.current = now;
        if (Math.random() > 0.4) {
          spawnMouseDrop(mouseRef.current.x, mouseRef.current.y);
        }
      }

      ctx.clearRect(0, 0, w, h);

      // Draw splatters
      splattersRef.current = splattersRef.current.filter((s) => {
        s.age++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05;
        s.vx *= 0.96;
        const progress = s.age / s.maxAge;
        const a = s.alpha * (1 - progress);
        if (a <= 0) return false;
        ctx.save();
        ctx.globalAlpha = 1;
        drawBlob(ctx, s.x, s.y, s.r, s.color, a);
        ctx.restore();
        return s.age < s.maxAge;
      });

      // Draw main drops
      dropsRef.current = dropsRef.current.filter((drop) => {
        drop.age++;
        const progress = drop.age / drop.maxAge;

        if (!drop.splashed) {
          // Falling phase
          drop.x += drop.vx;
          drop.y += drop.vy;
          drop.vy += 0.12; // gravity
          drop.vx *= 0.99;

          ctx.save();
          drawTail(ctx, drop);
          drawBlob(ctx, drop.x, drop.y, drop.r, drop.color, drop.alpha);
          ctx.restore();

          // Splash when reaching canvas bottom portion or after time
          if (drop.y > h * 0.92 || drop.age > 80) {
            drop.splashed = true;
            // Create splatter children
            const numSplats = Math.floor(randomBetween(3, 8));
            for (let i = 0; i < numSplats; i++) {
              const angle = randomBetween(0, Math.PI * 2);
              const speed = randomBetween(1, 5);
              splattersRef.current.push({
                x: drop.x,
                y: drop.y,
                r: randomBetween(2, drop.r * 0.5),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                alpha: drop.alpha * randomBetween(0.5, 0.9),
                color: drop.color,
                age: 0,
                maxAge: randomBetween(40, 80),
              });
            }
          }
        } else {
          // Spreading / fading phase
          const expandProgress = Math.min(progress * 2, 1);
          const r = drop.r + (drop.maxR - drop.r) * easeOut(expandProgress);
          const a = drop.alpha * (1 - Math.max(0, progress * 1.2 - 0.1));
          if (a <= 0) return false;

          ctx.save();
          drawBlob(ctx, drop.x, drop.y, r, drop.color, a);
          ctx.restore();
        }

        return drop.age < drop.maxAge;
      });

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [spawnDrop, spawnMouseDrop]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = null;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto", zIndex: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
