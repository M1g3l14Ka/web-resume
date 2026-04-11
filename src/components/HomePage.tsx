'use client'

import Link from "next/link"
import Image from "next/image"
import { IHeaderTitleBtns, IHeaderTiles} from "@/types"
import { BorderTrail } from "@/components/motion-primitives/border-trail"
import { motion } from "framer-motion"


interface HomePageProps {
    headerTitleBtns: IHeaderTitleBtns[];
    headerTiles: IHeaderTiles[];
}

export default function HomePage({ headerTitleBtns }:HomePageProps) {


    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col p-2 bg-[#050505] relative overflow-hidden min-h-screen"
        >
            <div className="flex flex-col p-2 z-10 w-auto h-full">
                <div className="flex-1 flex justify-center flex-col items-center md:m-24 w-auto">
                    <div>
                        <div className='relative w-56 h-72 md:w-72 md:h-96 rounded-2xl'>
                            <Image
                                fill
                                alt="Michael K. profile photo"
                                src='/meImg/prof.webp'
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
                    </div>

                    <div className="flex flex-col md:m-2 p-2 w-auto z-1000 items-center">
                        <div className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] flex justify-center items-center z-0 font-mono bg-clip-text 
                            text-transparent bg-linear-to-r from-orange-400 to-rose-600/70 w-auto leading-none text-center"
                        >
                            DEVELOPER
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-3 w-auto mt-6">
                            {headerTitleBtns.map((btn: IHeaderTitleBtns) => (
                                <Link href={`#${btn.id}`} key={btn.id}>
                                    <div className="flex justify-center items-center rounded-2xl border w-28 md:w-32 h-8 hover:bg-linear-120 from-orange-400
                                      to-rose-600 transition ease-in-out duration-300 bg-[#131212] hover:scale-110 cursor-pointer hover:border-none"
                                    >
                                        <button className="cursor-pointer text-xs md:text-base">
                                            {btn.label}
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
