'use client'

import { useEffect, useRef } from "react"

export default function CursorFollower() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const targetX = useRef(0)
    const targetY = useRef(0)
    const currentX = useRef(0)
    const currentY = useRef(0)
    const rafRef = useRef<number>(0)

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouchDevice) return

        document.body.style.cursor = 'none'

        const animate = () => {
            const ease = 0.2
            currentX.current += (targetX.current - currentX.current) * ease
            currentY.current += (targetY.current - currentY.current) * ease

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${currentX.current - 12}px, ${currentY.current - 12}px, 0)`
            }

            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        const moveCursor = (e: MouseEvent) => {
            targetX.current = e.clientX
            targetY.current = e.clientY
        }

        document.addEventListener('mousemove', moveCursor)

        return () => {
            cancelAnimationFrame(rafRef.current)
            document.removeEventListener('mousemove', moveCursor)
            document.body.style.cursor = 'default'
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
            style={{ fontSize: 24, lineHeight: 1 }}
        >
            🦊
        </div>
    )
}
