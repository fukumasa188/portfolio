export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  url?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: '星雲',
    category: 'アート',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: '廃墟',
    category: '写真',
    image:
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: '海洋',
    category: '自然',
    image:
      'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'ネオン',
    category: 'テック',
    image:
      'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: '砂漠',
    category: '旅行',
    image:
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=400&q=80',
  },
];
