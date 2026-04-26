import { useState } from 'react'
import { SearchIcon } from '../components/Icons'

interface Job {
  title: string
  location: string
  salary: string
  type: string
  category: string
}

const jobs: Job[] = [
  { title: 'Executive Assistant', location: 'Remote – Philippines', salary: '$1,200–$1,800/mo', type: 'Full-time', category: 'Assistant' },
  { title: 'Full-Stack Developer', location: 'Remote – Latin America', salary: '$2,500–$4,000/mo', type: 'Full-time', category: 'Technology' },
  { title: 'Sales Development Rep', location: 'Remote – South Africa', salary: '$1,300–$2,000/mo', type: 'Full-time', category: 'Sales' },
  { title: 'Customer Support Specialist', location: 'Remote – Philippines', salary: '$1,000–$1,500/mo', type: 'Full-time', category: 'CSR' },
  { title: 'Social Media Manager', location: 'Remote – Latin America', salary: '$1,400–$2,200/mo', type: 'Full-time', category: 'Marketing' },
  { title: 'Graphic Designer', location: 'Remote – Philippines', salary: '$1,200–$1,800/mo', type: 'Full-time', category: 'Creative' },
  { title: 'Financial Analyst', location: 'Remote – South Africa', salary: '$1,800–$2,800/mo', type: 'Full-time', category: 'Finance' },
  { title: 'Construction Estimator', location: 'Remote – Philippines', salary: '$1,600–$2,400/mo', type: 'Full-time', category: 'Construction' },
  { title: 'Account Executive', location: 'Remote – Latin America', salary: '$1,500–$2,500/mo', type: 'Full-time', category: 'Sales' },
  { title: 'Remote Draftsman', location: 'Remote – Philippines', salary: '$1,200–$1,800/mo', type: 'Full-time', category: 'Operations' },
]

export default function FindJobPage() {
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(
    (j) =>
      !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase()) ||
      j.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="py-24 px-6 text-center section-dark-tint">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-5 font-display">
          Find Your Next Remote Job
        </h1>
        <p className="text-white/55 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Join thousands of professionals working with top US companies remotely. Competitive salaries, flexible hours, and career growth.
        </p>
        <div className="max-w-xl mx-auto relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search roles, skills, or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="glass-card-tinted w-full pl-13 pr-6 py-4 rounded-full text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 shadow-xl"
            style={{ paddingLeft: '3rem' }}
          />
        </div>
      </section>

      {/* ──── Job listings ──────────────────────── */}
      <section className="py-14 px-6 section-ambient">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-white/70 mb-6">
            {filtered.length} open positions
          </p>

          <div className="space-y-4">
            {filtered.map((job, i) => (
              <div
                key={i}
                className="glass-card-tinted rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={`https://picsum.photos/seed/${encodeURIComponent(job.title + job.location)}/96/96?grayscale`}
                      alt={job.title}
                      loading="lazy"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover flex-shrink-0 bg-gray-900"
                    />
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-white transition-colors truncate">
                        {job.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm mt-0.5 truncate">{job.location}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">{job.salary}</span>
                    <p className="text-white/55 text-xs mt-1">{job.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/55 text-lg">No jobs match your search.</p>
              <button
                onClick={() => setSearch('')}
                className="text-white text-sm mt-2 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
