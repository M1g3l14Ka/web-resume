'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#050505]/30 border-b border-white/5"
        >
            {/* Logo */}
            <Link href="/" className="text-2xl font-mono text-gray-400 hover:text-white transition-colors">
                Michael<span className="text-purple-500">.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link key={item.href} href={item.href} className="relative group">
                            <span className={`font-mono text-sm uppercase tracking-wider transition-colors ${
                                isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}>
                                {item.label}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500"
                                />
                            )}
                        </Link>
                    )
                })}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-mono text-lg uppercase tracking-wider transition-colors ${
                                        isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
