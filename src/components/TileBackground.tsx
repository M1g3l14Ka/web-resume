'use client'

import Image from "next/image"
import { IHeaderTiles } from "@/types"
import { motion, useScroll, useTransform } from "framer-motion"
import { useSyncExternalStore } from "react"

interface TileBackgroundProps {
    headerTiles: IHeaderTiles[];
}

export default function TileBackground({ headerTiles }: TileBackgroundProps) {
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );

    const { scrollY } = useScroll();

    const yLeft = useTransform(scrollY, [0, 1000], [-250, 150])
    const yRight = useTransform(scrollY, [0, 1000], [-150, -150])

    // Фиксированный порядок — без shuffle, чтобы плитки были одинаковыми везде
    const fixedOrder = [...headerTiles, ...headerTiles]

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-12 rotate-[-15deg] scale-125 p-0 m-0 opacity-30 pointer-events-none w-[120vw] z-0"
        >
            {mounted && (
                fixedOrder.map((tile, index) => (
                    <motion.div
                        key={`tile-${index}`}
                        className="flex flex-col gap-6 will-change-transform"
                        style={{ y: index % 2 === 0 ? yLeft : yRight }}
                    >
                        <div className="flex justify-center items-center">
                            <Image
                                width={60}
                                height={60}
                                alt={tile.alt}
                                src={tile.src}
                                sizes="60px"
                                className="brightness-75 blur-[1px]"
                            />
                        </div>
                    </motion.div>
                ))
            )}
        </motion.div>
    )
}
