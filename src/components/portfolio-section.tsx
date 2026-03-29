'use client';

import React from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            作品集
          </h2>
        </div>
      </div>

      <RadialScrollGallery
        baseRadius={400}
        mobileRadius={250}
        visiblePercentage={50}
        scrollDuration={2000}
      >
        {(hoveredIndex) =>
          projects.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div
                key={project.id}
                className="group relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] overflow-hidden rounded-xl bg-card border border-border shadow-lg"
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive
                        ? 'scale-110 blur-0'
                        : 'scale-100 blur-[1px] grayscale-[30%]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0 bg-background/80 backdrop-blur"
                    >
                      {project.category}
                    </Badge>
                    <div
                      className={`w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? 'opacity-100 rotate-0'
                          : 'opacity-0 -rotate-45'
                      }`}
                    >
                      <ArrowUpRight size={12} />
                    </div>
                  </div>

                  <div
                    className={`transition-transform duration-500 ${
                      isActive ? 'translate-y-0' : 'translate-y-2'
                    }`}
                  >
                    <h3 className="text-xl font-bold leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <div
                      className={`h-0.5 bg-primary mt-2 transition-all duration-500 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>
    </section>
  );
}
