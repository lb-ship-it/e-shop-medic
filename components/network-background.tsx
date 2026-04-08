"use client";

import { useEffect, useRef } from "react";

const GREEN = "#00ff9d";
const BLUE = "#00aaff";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    radius: 1.5 + Math.random() * 2,
    color: Math.random() > 0.5 ? GREEN : BLUE,
  };
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let frameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 768 ? 26 : 45;
      particles = Array.from({ length: count }, () => createParticle(width, height));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));
      }

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i];

        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 140) {
            const opacity = (1 - distance / 140) * 0.22;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.strokeStyle =
              first.color === GREEN
                ? `rgba(0, 255, 157, ${opacity})`
                : `rgba(0, 170, 255, ${opacity})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle =
          particle.color === GREEN
            ? "rgba(0, 255, 157, 0.42)"
            : "rgba(0, 170, 255, 0.42)";
        context.fill();
      }
    };

    const animate = () => {
      draw();
      frameId = window.requestAnimationFrame(animate);
    };

    resize();

    if (prefersReducedMotion) {
      draw();
    } else {
      animate();
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(78%_58%_at_50%_0%,rgba(255,255,255,0.026)_0%,rgba(255,255,255,0.012)_28%,transparent_76%)]" />
      <div className="absolute left-[-24rem] top-[-14rem] h-[42rem] w-[56rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.1)_0%,rgba(0,255,157,0.05)_30%,rgba(0,255,157,0.016)_58%,transparent_88%)] blur-[120px]" />
      <div className="absolute right-[-24rem] top-[4rem] h-[44rem] w-[58rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,170,255,0.11)_0%,rgba(0,170,255,0.05)_32%,rgba(0,170,255,0.016)_60%,transparent_88%)] blur-[128px]" />
      <div className="absolute left-1/2 top-[36%] h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.03)_0%,rgba(0,170,255,0.025)_34%,transparent_82%)] blur-[140px]" />
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,0.04),rgba(7,9,12,0.14)_38%,rgba(7,9,12,0.28)_100%)]" />
    </div>
  );
}
