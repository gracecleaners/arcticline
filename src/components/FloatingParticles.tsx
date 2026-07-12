'use client'

import { useEffect, useRef } from 'react'

interface FloatingParticlesProps {
  count?: number
}

export default function FloatingParticles({ count = 50 }: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 3 + 1
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 10
      const opacity = Math.random() * 0.5 + 0.1

      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(15, 119, 170, ${opacity});
        border-radius: 50%;
        animation: float ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
      `

      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  )
}