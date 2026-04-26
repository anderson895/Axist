import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from './Icons'

export interface RoleCard {
  title: string
  desc: string
  savings: string
  price?: string
  /** Custom image path (e.g. '/images/roles/executive-assistant.jpg').
   *  If omitted, falls back to a grayscale placeholder. */
  image?: string
}

interface RoleCarouselProps {
  roles: RoleCard[]
}

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #3f3f46 0%, #000000 100%)',
  'linear-gradient(135deg, #52525b 0%, #09090b 100%)',
  'linear-gradient(135deg, #27272a 0%, #000000 100%)',
  'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
  'linear-gradient(135deg, #404040 0%, #000000 100%)',
  'linear-gradient(135deg, #1c1c1f 0%, #09090b 100%)',
]

const imageFor = (title: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(title)}/520/260?grayscale`

const RoleCarousel: React.FC<RoleCarouselProps> = ({ roles }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [thumb, setThumb] = useState({ width: 30, left: 0 })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateThumb = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    if (scrollWidth <= clientWidth) {
      setThumb({ width: 100, left: 0 })
      setAtStart(true)
      setAtEnd(true)
      return
    }
    const maxScroll = scrollWidth - clientWidth
    const widthPct = (clientWidth / scrollWidth) * 100
    const scrollPct = scrollLeft / maxScroll
    const leftPct = scrollPct * (100 - widthPct)
    setThumb({ width: widthPct, left: leftPct })
    setAtStart(scrollLeft <= 1)
    setAtEnd(scrollLeft >= maxScroll - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateThumb()
    el.addEventListener('scroll', updateThumb, { passive: true })
    window.addEventListener('resize', updateThumb)
    return () => {
      el.removeEventListener('scroll', updateThumb)
      window.removeEventListener('resize', updateThumb)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles.length])

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar scroll-smooth"
      >
        {roles.map((role, i) => (
          <div
            key={i}
            className="glass-card-tinted min-w-[260px] max-w-[260px] rounded-2xl overflow-hidden flex-shrink-0 hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
          >
            <div
              className="relative h-40 overflow-hidden"
              style={{ background: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length] }}
            >
              <img
                src={role.image ?? imageFor(role.title)}
                alt={role.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {role.savings} average savings
              </span>
              {role.price && (
                <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {role.price}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white mb-2 group-hover:text-white transition-colors">
                {role.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{role.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scroll(-1)}
          disabled={atStart}
          className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden relative">
          <div
            className="absolute h-full bg-white rounded-full transition-[left,width] duration-100 ease-out"
            style={{
              width: `${thumb.width}%`,
              left: `${thumb.left}%`,
            }}
          />
        </div>
        <button
          onClick={() => scroll(1)}
          disabled={atEnd}
          className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default RoleCarousel
