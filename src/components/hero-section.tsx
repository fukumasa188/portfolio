'use client';

import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      gsap.from('[data-hero-animate]', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-8"
    >
      <div className="text-center space-y-6">
        <div data-hero-animate>
          <Badge variant="outline" className="text-xs tracking-widest uppercase">
            ポートフォリオ
          </Badge>
        </div>

        <h1
          data-hero-animate
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
        >
          山田 太郎
        </h1>

        <p
          data-hero-animate
          className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto"
        >
          デザインとテクノロジーの交差点で、美しい体験を創造するクリエイティブデベロッパー。
        </p>
      </div>

      <div
        data-hero-animate
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#portfolio" aria-label="作品集へスクロール">
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
}
