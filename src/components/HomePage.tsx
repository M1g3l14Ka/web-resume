'use client'

import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { IHeaderTiles, ITimelineItem } from "@/types"
import { BorderTrail } from "@/components/motion-primitives/border-trail"
import TileBackground from "@/components/TileBackground"
import { ArrowRight, ExternalLink, Code2, ArrowLeft } from "lucide-react"

interface HomePageProps {
    headerTiles: IHeaderTiles[];
    projects: ITimelineItem[];
}

function ProjectCard({ project }: { project: ITimelineItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all ${
                project.isInProgress
                    ? 'opacity-60 grayscale hover:opacity-75 hover:grayscale-[50%]'
                    : 'hover:border-purple-500/30'
            }`}
        >
            <div className="relative h-48 bg-gray-800">
                {project.img && project.img !== '/' ? (
                    <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-600 font-mono">
                        {project.title}
                    </div>
                )}
                {project.isInProgress && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-sm font-mono backdrop-blur-sm">
                            In Progress
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm font-mono">{project.date}</span>
                    <span className="text-purple-400 text-sm font-mono">{project.category}</span>
                </div>
                <h3 className="font-mono text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {Array.isArray(project.subtitle) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.subtitle.slice(0, 3).map((tech: string) => (
                            <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-gray-400">
                                {tech}
                            </span>
                        ))}
                        {project.subtitle.length > 3 && (
                            <span className="px-2 py-1 text-xs font-mono text-gray-500">
                                +{project.subtitle.length - 3}
                            </span>
                        )}
                    </div>
                )}

                <div className="flex gap-3">
                    {project.link && project.link !== '/' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                        </a>
                    )}
                    {project.code && project.code !== '/' && (
                        <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-mono text-gray-400 hover:text-gray-300 transition-colors"
                        >
                            <Code2 className="w-4 h-4" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default function HomePage({ headerTiles, projects }: HomePageProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const updateScrollButtons = useCallback(() => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 5)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }, [])

    const scroll = useCallback((direction: 'left' | 'right') => {
        if (!scrollRef.current) return
        const amount = 340
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        })
        setTimeout(updateScrollButtons, 400)
    }, [updateScrollButtons])

    return (
        <div className="relative">
            <TileBackground headerTiles={headerTiles} />

            {/* Hero / Intro Section */}
            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl mb-8">
                        <Image
                            fill
                            alt="Michael K. profile photo"
                            src="/meImg/prof.webp"
                            sizes="(max-width: 768px) 224px, 288px"
                            className="object-cover object-center rounded-2xl"
                        />
                        <BorderTrail
                            style={{
                                boxShadow: '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                            }}
                            size={100}
                        />
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-mono bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-600/70 leading-none text-center">
                        DEVELOPER
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mt-6 text-center max-w-xl">
                        Building modern web applications with Next.js, React &amp; TypeScript
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-600 rounded-xl font-mono text-white hover:scale-105 transition-transform"
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-white hover:border-purple-500/30 hover:scale-105 transition-all"
                        >
                            About Me
                        </Link>
                    </div>
                </motion.div>

                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-gray-500 font-mono text-sm"
                        >
                            &darr; Scroll for projects &darr;
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Projects Section */}
            <section className="relative z-10 py-16">
                <div className="px-6 mb-8 flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-mono">
                        <span className="text-purple-500">#</span> Projects
                    </h2>

                    {!isMobile && (
                        <div className="flex gap-3">
                            <button
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                                    canScrollLeft
                                        ? 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-purple-500/30'
                                        : 'border-white/5 text-gray-700 cursor-not-allowed'
                                }`}
                                aria-label="Scroll left"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                                    canScrollRight
                                        ? 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-purple-500/30'
                                        : 'border-white/5 text-gray-700 cursor-not-allowed'
                                }`}
                                aria-label="Scroll right"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>

                {isMobile ? (
                    <div className="flex flex-col gap-6 px-6 max-w-lg mx-auto">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div
                        ref={scrollRef}
                        onScroll={updateScrollButtons}
                        className="overflow-x-auto scrollbar-hide"
                    >
                        <div className="flex gap-6 px-6 pb-6 w-max">
                            {projects.map((project) => (
                                <div key={project.id} className="w-80 md:w-96 flex-shrink-0">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* Footer hint */}
            <section className="relative z-10 py-16 text-center">
                <p className="text-gray-500 font-mono">
                    Want to know more? &rarr; <Link href="/about" className="text-purple-400 hover:underline">About Me</Link>
                </p>
            </section>
        </div>
    )
}
