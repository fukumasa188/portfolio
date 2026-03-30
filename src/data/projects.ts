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
  badges?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI資格家庭教師アプリ',
    category: 'AI',
    image: '/images/que.png',
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
    badges: ['PO', 'Frontend', 'Backend', 'Design'],
  },
  {
    id: 2,
    title: 'AIクローンアプリ',
    category: 'AI',
    image: '/images/pal.png',
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
    badges: ['PO', 'Frontend', 'Backend', 'Design'],
  },
  {
    id: 3,
    title: 'EC WORKSPACE',
    category: 'SaaS',
    image: '/images/ec-workspace.png',
    color: '#38BDF8',
    role: 'プロダクトオーナー / フルスタック開発',
    period: '2024 - 現在',
    description:
      'BtoB向けEC運用自動化のオールインワンSaaS。ECモールの商品登録から受注処理、カスタマーサポートまで、EC運用の業務を効率化。',
    stack: [
      'TypeScript',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase',
      'Vercel',
    ],
    tasks: [
      'プロダクト企画・要件定義・UI/UX設計',
      'フルスタック開発（フロントエンド〜バックエンド〜インフラ）',
      'EC運用業務の自動化機能の設計・実装',
    ],
    badges: ['PO', 'Frontend', 'Backend', 'Design'],
  },
  {
    id: 4,
    title: 'Ucart',
    category: 'EC',
    image: '/images/ucart.png',
    color: '#F59E0B',
    role: '創業者 / プロダクトオーナー',
    period: '2019 - 2023',
    description:
      '韓国ECサイトの商品を日本から簡単に購入できるアプリ。裏側で自動代理購入処理を構築し、通常のオンラインショッピングと変わらない体験を提供。',
    stack: ['Flutter'],
    tasks: [
      'プロダクト企画・要件定義・UI/UX設計',
      '開発ディレクション・プロジェクト管理',
      '日本・台湾・タイ・米国への多国展開・マーケティング',
    ],
    metrics: [
      { label: '累計DL', value: '20万' },
      { label: '月間GMV最高', value: '1,200万円' },
      { label: '取扱ブランド', value: '10,000+' },
    ],
    badges: ['PO', 'Design', 'Marketing'],
  },
  {
    id: 5,
    title: 'Fairs',
    category: 'EC',
    image: '/images/fairs.png',
    color: '#FB923C',
    role: 'プロダクトオーナー',
    description:
      '中国の商品を手軽に購入できるグローバルECプラットフォーム。国境を越えたショッピング体験を実現。',
    stack: ['Flutter'],
    tasks: [
      'プロダクト企画・要件定義・UI/UX設計',
      '開発ディレクション・プロジェクト管理',
      'マーケティング戦略の立案・実行',
    ],
    badges: ['PO', 'Design', 'Marketing'],
  },
  {
    id: 6,
    title: 'Wuu',
    category: 'EC',
    image: '/images/wuu.png',
    color: '#F59E0B',
    role: 'プロダクトオーナー',
    description:
      'ゲーマー向け通販アプリ。ゲームをたくさんプレイするとポイントが貯まり、お得にお買い物ができる。',
    stack: ['Flutter'],
    tasks: [
      'プロダクト企画・要件定義・UI/UX設計',
      '開発ディレクション・プロジェクト管理',
      'ポイントシステムの企画・設計',
    ],
    badges: ['PO', 'Design'],
  },
  {
    id: 7,
    title: '受託開発',
    category: 'Web & Mobile',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    color: '#34D399',
    role: 'プロジェクトリード / フルスタック開発',
    period: '2024 - 現在',
    description:
      '7年間の自社サービス開発で培った技術力とUI/UX設計力を活用した、Web・モバイルアプリの受託開発。',
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
      'Web・モバイルアプリの設計・開発',
      'フルスタック開発・運用保守',
    ],
    url: 'https://stellajp.net/',
    badges: ['PO', 'Frontend', 'Backend', 'Design'],
  },
  {
    id: 8,
    title: 'Synchro',
    category: 'SNS',
    image: '/images/synchro.png',
    color: '#E879F9',
    role: 'プロダクトオーナー',
    description:
      '友達と一緒に動画を楽しむ新しいソーシャル体験。リアルタイムで同期した視聴を可能にし、チャット機能を通じて感想を共有できます。',
    stack: ['Flutter'],
    tasks: [
      'プロダクト企画・要件定義・UI/UX設計',
      '開発ディレクション・プロジェクト管理',
      'リアルタイム同期視聴機能の企画・設計',
    ],
    badges: ['PO', 'Design'],
  },
];
