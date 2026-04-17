import React from 'react'
import { useInView } from '../hooks/useInView'

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'slide-up'

interface AnimateOnScrollProps {
  children: React.ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'zoom-in': {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  'slide-up': {
    hidden: 'opacity-0 translate-y-16',
    visible: 'opacity-100 translate-y-0',
  },
}

export default function AnimateOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold })
  const styles = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${styles.hidden} ${inView ? styles.visible : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
