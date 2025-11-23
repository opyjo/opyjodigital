"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ComponentProps } from "react"

interface MagneticButtonProps extends ComponentProps<typeof Button> {
    children: React.ReactNode
    magneticStrength?: number
}

export function MagneticButton({
    children,
    magneticStrength = 0.3,
    className,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        setPosition({ x: x * magneticStrength, y: y * magneticStrength })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
            <Button
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={className}
                {...props}
            >
                {children}
            </Button>
        </motion.div>
    )
}
