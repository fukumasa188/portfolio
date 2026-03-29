'use client';

import { useEffect, useState } from 'react';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';
import { HeroExpandDialog, useHeroExpandDialog } from '@/components/ui/hero-expand-dialog';
import { projects, Project } from '@/data/projects';

const cardItems: CardStackItem[] = projects.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.category,
  imageSrc: p.image,
  href: p.url,
  tag: p.category,
}));

function useCardDimensions() {
  const [dims, setDims] = useState({ width: 480, height: 300 });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 480) {
        const w = Math.min(vw - 48, 340);
        setDims({ width: w, height: Math.round(w * 0.65) });
      } else if (vw < 768) {
        setDims({ width: 360, height: 240 });
      } else {
        setDims({ width: 480, height: 300 });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return dims;
}

export default function PortfolioSection() {
  const { width, height } = useCardDimensions();
  const { selectedProject, cardRect, dialogOpen, open, close } = useHeroExpandDialog();

  // Body scroll lock
  useEffect(() => {
    if (dialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [dialogOpen]);

  const handleCardClick = (item: CardStackItem, rect: DOMRect) => {
    const project = projects.find((p) => p.id === item.id);
    if (project) {
      open(project, rect);
    }
  };

  return (
    <section id="portfolio" className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            実績
          </h2>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4">
        <CardStack
          items={cardItems}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          cardWidth={width}
          cardHeight={height}
          maxVisible={5}
          overlap={width < 400 ? 0.55 : 0.48}
          spreadDeg={width < 400 ? 35 : 48}
          onCardClick={handleCardClick}
        />
      </div>

      {selectedProject && cardRect && (
        <HeroExpandDialog
          project={selectedProject}
          cardRect={cardRect}
          isOpen={dialogOpen}
          onClose={close}
        />
      )}
    </section>
  );
}
