import { Code2, ExternalLink, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; 2026 {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          <ArrowUp className="w-4 h-4" />
          トップに戻る
        </a>
      </div>
    </footer>
  );
}
