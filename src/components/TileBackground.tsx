'use client'

import Image from "next/image"
import { IHeaderTiles } from "@/types"
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

    if (!mounted) return null;

    const columns = [...Array(16)].map(() => [...headerTiles, ...headerTiles]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div
                className="absolute"
                style={{
                    top: '-10%',
                    left: '-10%',
                    width: '120vw',
                    height: '120vh',
                    transform: 'rotate(-15deg) scale(1.25)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '0',
                    opacity: 0.3,
                }}
            >
                {columns.map((columnItems, colIndex) => (
                    <div
                        key={colIndex}
                        className="flex flex-col gap-6"
                    >
                        {columnItems.map((tile, index) => (
                            <div key={`${colIndex}-${index}`} className="flex justify-center items-center">
                                <Image
                                    width={60}
                                    height={60}
                                    alt={tile.alt}
                                    src={tile.src}
                                    sizes="60px"
                                    className="brightness-75 blur-[1px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
