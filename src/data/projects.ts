export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color?: string;
  role?: string;
  period?: string;
  description?: string;
  stack?: string[];
  tasks?: string[];
  metrics?: { label: string; value: string }[];
  url?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI資格家庭教師アプリ',
    category: 'AI',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    color: '#A78BFA',
    role: 'プロダクトオーナー / フルスタック開発',
    period: '2024 - 現在',
    description:
      'AIを活用した資格学習支援アプリ。ユーザーの学習状況に応じたパーソナライズされた指導を提供。',
    stack: [
      'TypeScript',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Claude API',
      'Gemini API',
      'Vertex AI',
      'Supabase',
      'Vercel',
    ],
    tasks: [
      'AIを活用した学習指導エンジンの設計・実装',
      'フルスタック開発（フロントエンド〜バックエンド〜インフラ）',
      'プロダクト企画・要件定義・UI/UX設計',
    ],
  },
  {
    id: 2,
    title: 'AIクローンアプリ',
    category: 'AI',
    image:
      'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=400&q=80',
    color: '#38BDF8',
    role: 'プロダクトオーナー / フルスタック開発',
    period: '2024 - 現在',
    description:
      'AIクローン技術を活用したアプリ。記憶管理にMem0を採用し、パーソナライズされた対話体験を実現。',
    stack: [
      'TypeScript',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Claude API',
      'Gemini API',
      'Mem0',
      'Supabase',
      'Vercel',
    ],
    tasks: [
      'AIクローンエンジンの設計・実装',
      '記憶管理システム（Mem0）の統合',
      'フルスタック開発・インフラ構築',
    ],
  },
  {
    id: 3,
    title: 'AIブラウザエージェント',
    category: 'AI',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80',
    color: '#F472B6',
    role: 'プロダクトオーナー / 開発リード',
    period: '2024',
    description:
      'ブラウザ常駐型のAIエージェント。チャット、検索、返信生成、ブラウジングを自動化。',
    stack: [
      'TypeScript',
      'Next.js',
      'Claude API',
      'Mastra AI',
      'Supabase',
      'Vercel',
    ],
    tasks: [
      'AIエージェントアーキテクチャの設計',
      'ブラウザ拡張との連携機能の実装',
      'チャット・検索・返信生成の自動化エンジン開発',
    ],
    url: 'https://stellajp.net/',
  },
  {
    id: 4,
    title: 'Ucart',
    category: 'EC',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
    color: '#F59E0B',
    role: '創業者 / プロダクトオーナー / フルスタック開発',
    period: '2019 - 2023',
    description:
      '韓国ECサイトの商品を日本から簡単に購入できるアプリ。裏側で自動代理購入処理を構築し、通常のオンラインショッピングと変わらない体験を提供。',
    stack: ['Flutter'],
    tasks: [
      'モバイルアプリの設計・開発',
      '自動代理購入処理システムの構築',
      '日本・台湾・タイ・米国への多国展開',
    ],
    metrics: [
      { label: '累計DL', value: '20万' },
      { label: '月間GMV最高', value: '1,200万円' },
      { label: '取扱ブランド', value: '10,000+' },
    ],
  },
  {
    id: 5,
    title: 'Fairs',
    category: 'EC',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=400&q=80',
    color: '#FB923C',
    role: 'プロダクトオーナー / フルスタック開発',
    description:
      '中国の商品を手軽に購入できるグローバルECプラットフォーム。国境を越えたショッピング体験を実現。',
    stack: ['Flutter'],
    tasks: [
      'モバイルアプリの設計・開発',
      '越境ECの決済・物流フローの構築',
      'プロダクト企画・UI/UX設計',
    ],
  },
  {
    id: 6,
    title: 'AIアプリ受託開発',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    color: '#34D399',
    role: 'プロジェクトリード / フルスタック開発',
    period: '2024 - 現在',
    description:
      '7年間の自社サービス開発で培った技術力とUI/UX設計力を活用したAIアプリケーションの受託開発。',
    stack: [
      'TypeScript',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Claude API',
      'Gemini API',
      'Vertex AI',
      'Mastra AI',
      'Supabase',
      'Vercel',
    ],
    tasks: [
      'クライアント要件のヒアリング・要件定義',
      'AIアプリケーションの設計・開発',
      'フルスタック開発・運用保守',
    ],
    url: 'https://stellajp.net/',
  },
];
