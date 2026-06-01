import { ITimelineItem, ISkill, IValue, ISocial } from "@/types";
import { Briefcase, Code2, Heart, Zap } from "lucide-react";


export const petTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Pet',
    title: 'Freelance CRM',
    subtitle: ['Next.js 16', 'TypeScript' , 'Prisma ORM', 'SQLite (local)', 'Turso/libSQL (production)', 'NextAuth.js v5', 'Tailwind CSS 4', 'Radix UI' ,'shadcn/ui', 'Recharts', 'Framer Motion', 'Gemini API', 'exchangerate-api.com'],
    description: 'A modern financial management CRM I built for freelancers to track projects, income, subscriptions, and get AI-powered insights.',
    code: 'https://github.com/M1g3l14Ka/freelance-crm',
    link: 'https://crm.mkfox.tech/',
    img:'/petImg/freelance-crm.webp',
    isInProgress: false,
  },
  {
    id: 2,
    category: 'Pet',
    title: 'Lite-shop',
    subtitle: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'Zustand + persist middleware', 'DummyJSON API', 'use-debounce'],
    description: 'This is a minimalist online store with simulated purchases. I created it as a pet project to improve my skills in modern frontend development, state management, and API interactions. The essence is clear from its name - lightweight, fast, and focused on the shopping experience.',
    code: 'https://github.com/M1g3l14Ka/lite-shop',
    link: 'https://shop.mkfox.tech/',
    img:'/petImg/lite-shop.webp',
    isInProgress: false,
  },
  {
    id: 3,
    category: 'Pet',
    title: 'Seller cars',
    subtitle: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Playwright', 'Resend'],
    description: 'Premium used cars from South Korea - scraped from ENCAR.com',
    code: 'https://github.com/M1g3l14Ka/sellercars',
    link: 'https://sellercars.mkfox.tech/',
    img:'/petImg/million-cars.webp',
    isInProgress: false,
  },
  {
    id: 4,
    category: 'Pet',
    title: 'The Nexus Portal',
    subtitle: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Framer Motion'],
    description: 'Creative portal with complex animations, glassmorphism UI and interactive background tiles.',
    code: 'https://github.com/M1g3l14Ka/the-nexus-portal',
    link: '/',
    img:'/petImg/nexus-portal.webp',
    isInProgress: true,
  },
];

export const workTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Work',
    date: 'July 2023 - July 2024',
    title: 'PJSC «Rosseti North-West»',
    subtitle: 'Analytics and monitoring',
    description: 'Analytics and monitoring of company resources, reporting on the work done, working with databases.',
    img:'/',
    link:'/',
  },
  {
    id: 2,
    category: 'Work',
    date: 'July 2024 - Mar 2026',
    title: 'Megafon Retail JSC',
    subtitle: 'Sales Manager / CRM Operator',
    description: 'Developed communication skills and worked with internal corporate software under high pressure.',
    img:'/',
    link:'/',
  },
  {
    id: 3,
    category: 'Work',
    date: 'Sep 2024 - Present',
    title: 'Freelance',
    subtitle: 'Frontend/FullStack Developer',
    description: 'Development from a simple website to a small CRM system',
    img:'/',
    link:'/',
  },
];

export const headerTitleBtns = [
  { id: 'Pet', label: 'Projects' },
  { id: 'Work', label: 'Work' },
];


export const headerTiles = [
  { id: 1, src: '/tilesImg/html.webp', alt: 'HTML' },
  { id: 2, src: '/tilesImg/css.webp', alt: 'CSS' },
  { id: 3, src: '/tilesImg/js.webp', alt: 'JavaScript' },
  { id: 4, src: '/tilesImg/typeScript.webp', alt: 'TypeScript' },
  { id: 5, src: '/tilesImg/react.webp', alt: 'React' },
  { id: 6, src: '/tilesImg/next.webp', alt: 'Next.js' },
  { id: 7, src: '/tilesImg/tailwind.webp', alt: 'Tailwind' },
  { id: 8, src: '/tilesImg/gitHub.webp', alt: 'GitHub' },
  { id: 9, src: '/tilesImg/docker.webp', alt: 'Docker' },
  { id: 10, src: '/tilesImg/node.webp', alt: 'Node.js' },
  { id: 11, src: '/tilesImg/vuejs.webp', alt: 'Vue.js' },
];


export const hireBtns = [
  { id: 1, title:'Telegram', url:'https://t.me/M1g3L14Ka' },
  { id: 2, title:'Vkontakte', url:'https://vk.com/mi4aejl' },
  { id: 3, title:'GitHub', url:'https://github.com/M1g3L14Ka' }
]

export const socials: ISocial[] = [
  { id: 1, name: "Telegram", url: "https://t.me/M1g3L14Ka", icon: "✈️" },
  { id: 2, name: "VK", url: "https://vk.com/mi4aejl", icon: "💬" },
  { id: 3, name: "GitHub", url: "https://github.com/M1g3L14Ka", icon: "🐙" },
  { id: 4, name: "Email", url: "mailto:kasionma@gmail.com", icon: "📧" },
];

export const skills: ISkill[] = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js / Express", level: 80 },
  { name: "Prisma ORM", level: 75 },
  { name: "PostgreSQL / SQLite", level: 70 },
  { name: "Docker", level: 65 },
  { name: "Framer Motion", level: 85 },
];

export const values: IValue[] = [
  { icon: <Zap className="w-6 h-6" />, title: "Speed", desc: "Optimized code, fast loading, SSR/SSG where it matters." },
  { icon: <Code2 className="w-6 h-6" />, title: "Clean Code", desc: "TypeScript, typing, reusable components, SOLID principles." },
  { icon: <Heart className="w-6 h-6" />, title: "Passion", desc: "Every project is personal. Animations, UX, attention to detail." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Reliability", desc: "Deadlines are law. Communication is transparent, results are predictable." },
];