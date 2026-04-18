import { useState } from 'react'
import { SearchIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

interface Role {
  title: string
  category: string
  price: string
  savings: string
  salaries: { PH: string; LatAm: string; SA: string }
  image: string
}

const categories = ['All', 'Assistant', 'Sales', 'Technology', 'Marketing']

const allRoles: Role[] = [
  { title: 'Executive Assistant', category: 'Assistant', price: '$2,500–$5,000/mo', savings: '86%', salaries: { PH: '$1,200', LatAm: '$1,600', SA: '$1,400' }, image: '/images/roles/executive-assistant.png' },
  { title: 'Sales Development Rep (SDR)', category: 'Sales', price: '$3,000–$6,000/mo', savings: '86%', salaries: { PH: '$1,300', LatAm: '$1,700', SA: '$1,500' }, image: '/images/roles/sales-development-rep.png' },
  { title: 'Product Manager', category: 'Technology', price: '$4,500–$9,000/mo', savings: '86%', salaries: { PH: '$1,800', LatAm: '$2,400', SA: '$2,000' }, image: '/images/roles/product-manager.png' },
  { title: 'Social Media Manager', category: 'Marketing', price: '$3,500–$7,000/mo', savings: '86%', salaries: { PH: '$1,400', LatAm: '$1,800', SA: '$1,600' }, image: '/images/roles/social-media-manager.png' },
  { title: 'Account Executive', category: 'Sales', price: '$3,500–$7,000/mo', savings: '86%', salaries: { PH: '$1,500', LatAm: '$2,000', SA: '$1,700' }, image: '/images/roles/account-executive.png' },
  { title: 'Sales Manager', category: 'Sales', price: '$4,000–$8,000/mo', savings: '82%', salaries: { PH: '$1,600', LatAm: '$2,100', SA: '$1,800' }, image: '/images/roles/sales-manager.png' },
]

const GRADIENTS = [
  'linear-gradient(135deg, #3f3f46 0%, #09090b 100%)',
  'linear-gradient(135deg, #52525b 0%, #000000 100%)',
  'linear-gradient(135deg, #27272a 0%, #09090b 100%)',
  'linear-gradient(135deg, #18181b 0%, #000000 100%)',
  'linear-gradient(135deg, #27272a 0%, #09090b 100%)',
  'linear-gradient(135deg, #3f3f46 0%, #000000 100%)',
  'linear-gradient(135deg, #52525b 0%, #09090b 100%)',
  'linear-gradient(135deg, #52525b 0%, #000000 100%)',
  'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
  'linear-gradient(135deg, #3f3f46 0%, #000000 100%)',
]

export default function RolesPage() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allRoles.filter((r) => {
    const matchCategory = filter === 'All' || r.category === filter
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      {/* Header */}
      <section className="bg-brand-800 py-14 px-6">
        <AnimateOnScroll variant="fade-up" threshold={0.1}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-display">Roles We Source</h1>
            <p className="text-white/55">Find the perfect remote talent for your business</p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <AnimateOnScroll variant="fade-right" duration={600} className="md:w-64 flex-shrink-0">
            <aside className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between text-sm">
                  Search
                  {search && <button onClick={() => setSearch('')} className="text-black text-xs hover:underline">Clear</button>}
                </h3>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2"><SearchIcon /></span>
                  <input
                    type="text"
                    placeholder="Search roles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-black/15 bg-gray-50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between text-sm">
                  Category
                  {filter !== 'All' && <button onClick={() => setFilter('All')} className="text-black text-xs hover:underline">Clear</button>}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setFilter(c)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        filter === c
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'border-gray-200 text-gray-600 hover:border-gray-500 hover:text-black'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="flex-1">
            <AnimateOnScroll variant="fade-in" duration={400}>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Showing {filtered.length} of {allRoles.length} roles
                </p>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none">
                  <option>Sort by</option>
                  <option>Savings: High to Low</option>
                  <option>Savings: Low to High</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((role, i) => (
                <AnimateOnScroll key={role.title} variant="fade-up" delay={i * 60} duration={500} threshold={0.08}>
                  <div className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-0.5 h-full">
                    <div className="h-44 relative overflow-hidden" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                      <img
                        src={role.image}
                        alt={role.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <span className="absolute bottom-3 right-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {role.savings} average savings
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-gray-50 text-black px-2.5 py-1 rounded-full font-medium">{role.price}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{role.category}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-4 group-hover:text-black transition-colors">
                        {role.title}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex flex-wrap justify-between gap-x-2">
                          <span className="font-semibold text-black">Philippine Avg. Salary</span>
                          <span className="text-gray-500">{role.salaries.PH}/month</span>
                        </div>
                        <div className="flex flex-wrap justify-between gap-x-2">
                          <span className="font-semibold text-black">LatAm Avg. Salary</span>
                          <span className="text-gray-500">{role.salaries.LatAm}/month</span>
                        </div>
                        <div className="flex flex-wrap justify-between gap-x-2">
                          <span className="font-semibold text-black">South Africa Avg. Salary</span>
                          <span className="text-gray-500">{role.salaries.SA}/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {filtered.length > 0 && (
              <AnimateOnScroll variant="fade-up" delay={200}>
                <div className="text-center mt-12">
                  <button className="bg-brand-800 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors inline-flex items-center gap-2">
                    Load more <span className="text-lg leading-none">+</span>
                  </button>
                </div>
              </AnimateOnScroll>
            )}

            {filtered.length === 0 && (
              <AnimateOnScroll variant="fade-in">
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">No roles match your search.</p>
                  <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-black text-sm mt-2 hover:underline">Clear filters</button>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
