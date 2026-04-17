import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from './Icons'

export interface RoleCard {
  title: string
  desc: string
  savings: string
  price?: string
}

interface RoleCarouselProps {
  roles: RoleCard[]
}

const GRADIENTS = [
  'linear-gradient(135deg, #1a6b5a 0%, #0c3c2d 100%)',
  'linear-gradient(135deg, #2d8b7a 0%, #0a3325 100%)',
  'linear-gradient(135deg, #0f766e 0%, #0c3c2d 100%)',
  'linear-gradient(135deg, #115e59 0%, #0a3325 100%)',
  'linear-gradient(135deg, #134e4a 0%, #0c3c2d 100%)',
  'linear-gradient(135deg, #167060 0%, #0a3325 100%)',
]

const RoleCarousel: React.FC<RoleCarouselProps> = ({ roles }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

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
            className="min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
          >
            <div
              className="relative h-40 overflow-hidden"
              style={{ background: GRADIENTS[i % GRADIENTS.length] }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center text-white/15 text-7xl font-bold font-display"
              >
                {role.title.charAt(0)}
              </div>
              <span className="absolute bottom-3 left-3 bg-white text-teal-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {role.savings} average savings
              </span>
              {role.price && (
                <span className="absolute top-3 right-3 bg-white/90 text-teal-800 text-xs font-bold px-2.5 py-1 rounded-full">
                  {role.price}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                {role.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{role.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scroll(-1)}
          className="w-10 h-10 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-teal-600 rounded-full transition-all" />
        </div>
        <button
          onClick={() => scroll(1)}
          className="w-10 h-10 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default RoleCarousel
