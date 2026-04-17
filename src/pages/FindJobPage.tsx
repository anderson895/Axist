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
      <section
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #0c3c2d, #0d4535)' }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-5 font-display">
          Find Your Next Remote Job
        </h1>
        <p className="text-white/55 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Join thousands of professionals working with top US companies remotely. Competitive salaries, flexible hours, and career growth.
        </p>
        <div className="max-w-xl mx-auto relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search roles, skills, or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-13 pr-6 py-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xl"
            style={{ paddingLeft: '3rem' }}
          />
        </div>
      </section>

      {/* ──── Job listings ──────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 mb-6">
            {filtered.length} open positions
          </p>

          <div className="space-y-4">
            {filtered.map((job, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group flex items-center justify-between hover:border-teal-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ['#1a6b5a', '#2d8b7a', '#0f766e', '#115e59', '#134e4a', '#167060', '#1b7a68', '#0d5f4f', '#19876f', '#1a6b5a'][i % 10]
                      }, #0a3325)`,
                    }}
                  >
                    {job.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-0.5">{job.location}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <span className="text-teal-700 font-semibold text-sm">{job.salary}</span>
                  <p className="text-gray-400 text-xs mt-1">{job.type}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No jobs match your search.</p>
              <button
                onClick={() => setSearch('')}
                className="text-teal-600 text-sm mt-2 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-brand-800 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors inline-flex items-center gap-2">
                Load more <span className="text-lg leading-none">+</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
