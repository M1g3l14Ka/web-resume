'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const tabs = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
];

const content = {
    about: `Frontend Developer specializing in the React ecosystem (Next.js, TypeScript). I build high-performance SPA and SSR applications with modern UI/UX, focusing on smooth animations and pixel-perfect layouts.

I excel at solving complex technical challenges — from hydration bugs to advanced filtering logic — and transforming them into reliable, maintainable code.

Currently seeking remote opportunities in a product-driven team to leverage my skills and continue professional growth.`,

    skills: `Core Stack:
• JavaScript (ES6+), TypeScript, HTML5, CSS3

Frontend:
• React 19, Next.js 16
• Zustand, React Hook Form, Zod
• Tailwind CSS v4, shadcn/ui, Framer Motion

Backend & DB:
• Node.js, SQLite, Prisma ORM, NextAuth

AI & Tools:
• Gemini API, Generative UI
• Figma, Git, Vercel

Languages:
• Russian (Native)
• English (B1/B2 — fluent in technical documentation)`,

    experience: `Frontend Developer (Freelance) | Sep 2025 – Present
• Full-cycle web development: architecture design to deployment on Vercel/Netlify
• Delivered 4+ production-ready projects for clients and portfolio
• REST API integration, async data flow management, adaptive UI with Tailwind

AI & Big Data Expert Mentor | 2025
• Consulted and evaluated participants at IT championship
• Gained deep understanding of neural networks and applied AI
• Currently applying AI-driven development practices

IT Championship Winner | 2024
• 1st place "High Technologies Championship" (Mobile Game Dev)
• Proven ability to work under tight deadlines
• Complex interactive logic and rendering optimization

Previous Experience (2023–2025):
• MegaFon Retail JSC — Sales Manager / CRM Operator
• PJSC Rosseti North-West — Analytics & Monitoring
• Developed strong communication, conflict resolution, and analytical skills`
};

export default function AboutModal({ onClose }: { onClose: () => void }) {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div
            className="fixed inset-0 z-1001 flex justify-center items-center p-4 bg-black/80 backdrop-blur-3xl min-h-screen overflow-y-auto "
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0a0a0a] border border-white/20 w-full max-w-3xl rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(168,85,247,0.2)] h-[90vh] max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >

                <div className="w-full md:w-1/3 bg-white/5 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                    <div className="relative w-56 h-72 md:w-60 md:h-64 overflow-hidden border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-4 rounded-2xl">
                        <Image
                            fill
                            alt="Michael K. profile photo"
                            src='/meImg/prof.webp'
                            sizes="(max-width: 768px) 224px, 288px"
                            className="object-cover object-center"
                        />
                    </div>
                    
                    <h2 className="text-xl font-bold text-white font-mono text-center">Michael Katsion</h2>
                    <p className="text-purple-400 text-sm font-mono text-center mt-1">Frontend/Fullstack Developer</p>
                    <p className="text-gray-500 text-xs font-mono text-center mt-2">Vologda, Russia<br/>(Remote)</p>

                    <div className="mt-4 flex flex-col gap-2 text-xs font-mono">
                        <a href="https://t.me/M1g3L14Ka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            @M1g3L14Ka
                        </a>
                        <a href="https://github.com/M1g3l14Ka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col">
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-white text-sm font-mono hover:underline transition-colors"
                        >
                            CLOSE_TERMINAL
                        </button>
                    </div>
                    <div className="flex gap-4 mb-6 border-b border-white/10 pb-2 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-2 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
                                    activeTab === tab.id
                                    ? 'text-purple-500 border-b-2 border-purple-500'
                                    : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        style={{
                            WebkitOverflowScrolling: "touch"
                        }}>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-line"
                        >
                            {content[activeTab as keyof typeof content]}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
