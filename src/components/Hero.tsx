'use client'

import HireForm from "@/components/HireForm"
import AboutModal from "@/components/AboutMe"

import { ILinkBtns } from "@/types"

import { useState } from "react"
import Link from "next/link"

interface HeroProps {
    hireBtns: ILinkBtns[];
}

export default function Hero({ hireBtns }:HeroProps) {
    const [isHireOpen, setIsHireOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)

    return (
        <div className="p-4 md:m-6 flex flex-row justify-between items-center w-auto">
            <div>
                <Link href="#">
                    <h1 className="text-2xl md:text-4xl font-mono text-gray-600">Michael<span className="text-4xl font-bold text-purple-500">.</span></h1>
                </Link>
            </div>
            <div className="flex gap-4">
                <button
                    type="button"
                    className="font-mono font-bold text-lg md:text-2xl underline rounded-2xl px-4 py-1 md:w-32 hover:bg-linear-120 from-orange-400 to-rose-600/80 hover:scale-110 hover:border-none transition-all"
                    onClick={() => setIsAboutOpen(true)}
                >
                    About Me
                </button>
                {/* Кнопка Hire Me */}
                <button
                    type="button"
                    className="font-mono font-bold text-lg md:text-2xl underline rounded-2xl px-4 py-1 md:w-32 hover:bg-linear-120 from-orange-400 to-rose-600/80 hover:scale-110 hover:border-none transition-all"
                    onClick={() => setIsHireOpen(true)}
                >
                    Hire Me
                </button>
            </div>
            {isAboutOpen && (
                <AboutModal onClose={() => setIsAboutOpen(false)} />
            )}
            {/* Hire Me Modal */}
            {isHireOpen && (
                <div className="fixed inset-0 z-10000 flex items-center justify-center bg-[#050505] backdrop-blur-md p-4">
                    <div className="relative flex flex-col w-full max-w-2xl">
                        <HireForm
                            hireBtns={hireBtns}
                            toggleHireForm={() => setIsHireOpen(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    )

}