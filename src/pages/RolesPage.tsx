import { useState } from 'react'
import { SearchIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

interface Role {
  title: string
  category: string
  desc: string
  savings: string
  salaries: { PH: string; LatAm: string; SA: string }
  image: string
}

const categories = ['All', 'Executive Support', 'Operations', 'Customer Experience', 'Sales', 'Marketing', 'Finance', 'Data', 'CRM & Admin', 'E-commerce', 'Project Coordination']

const allRoles: Role[] = [
  { title: 'Executive Assistants', category: 'Executive Support', desc: 'Keep your schedule, inbox, and priorities organized so you can focus on high-impact decisions.', savings: '70%', salaries: { PH: '$1,200', LatAm: '$1,600', SA: '$1,400' }, image: '/images/roles/executive-assistant.png' },
  { title: 'Operations Coordinators', category: 'Operations', desc: 'Ensure your day-to-day processes run smoothly and nothing falls through the cracks.', savings: '70%', salaries: { PH: '$1,400', LatAm: '$1,800', SA: '$1,600' }, image: '/images/roles/sales-manager.png' },
  { title: 'Customer Support Specialists', category: 'Customer Experience', desc: 'Deliver fast, reliable support that improves customer satisfaction and retention.', savings: '70%', salaries: { PH: '$1,100', LatAm: '$1,500', SA: '$1,300' }, image: '/images/roles/social-media-manager.png' },
  { title: 'Sales Development Representatives (SDRs)', category: 'Sales', desc: 'Qualify leads, manage outreach, and keep your pipeline consistently moving.', savings: '70%', salaries: { PH: '$1,300', LatAm: '$1,700', SA: '$1,500' }, image: '/images/roles/sales-development-rep.png' },
  { title: 'Marketing Assistants', category: 'Marketing', desc: 'Execute campaigns, manage content, and support your marketing engine without delays.', savings: '70%', salaries: { PH: '$1,200', LatAm: '$1,600', SA: '$1,400' }, image: '/images/roles/account-executive.png' },
  { title: 'Bookkeepers & Finance Support', category: 'Finance', desc: 'Maintain accurate financials, manage invoices, and keep your cash flow organized.', savings: '70%', salaries: { PH: '$1,400', LatAm: '$1,900', SA: '$1,600' }, image: '/images/roles/product-manager.png' },
  { title: 'Data & Reporting Analysts', category: 'Data', desc: 'Turn your data into clear insights so you can make smarter business decisions.', savings: '70%', salaries: { PH: '$1,500', LatAm: '$2,000', SA: '$1,700' }, image: '/images/roles/product-manager.png' },
  { title: 'CRM & Admin Support', category: 'CRM & Admin', desc: 'Keep your systems clean, updated, and functioning efficiently.', savings: '70%', salaries: { PH: '$1,200', LatAm: '$1,600', SA: '$1,400' }, image: '/images/roles/sales-manager.png' },
  { title: 'E-commerce Support', category: 'E-commerce', desc: 'Manage orders, product listings, and customer inquiries to keep your store running smoothly.', savings: '70%', salaries: { PH: '$1,200', LatAm: '$1,600', SA: '$1,400' }, image: '/images/roles/social-media-manager.png' },
  { title: 'Project Coordinators', category: 'Project Coordination', desc: 'Track tasks, align teams, and ensure projects are delivered on time.', savings: '70%', salaries: { PH: '$1,500', LatAm: '$2,000', SA: '$1,700' }, image: '/images/roles/account-executive.png' },
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
      <section className="section-dark-tint py-14 px-6">
        <AnimateOnScroll variant="fade-up" threshold={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display">Roles We Embed</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Find offshore talent built to support the way your business operates. AXIS sources professionals around the responsibilities your team actually needs covered—not just a job title.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Content */}
      <section className="py-12 px-6 section-ambient">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <AnimateOnScroll variant="fade-right" duration={600} className="md:w-64 flex-shrink-0">
            <aside className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center justify-between text-sm">
                  Search
                  {search && <button onClick={() => setSearch('')} className="text-white text-xs hover:underline">Clear</button>}
                </h3>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"><SearchIcon /></span>
                  <input
                    type="text"
                    placeholder="Search roles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="glass-card-tinted w-full pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center justify-between text-sm">
                  Category
                  {filter !== 'All' && <button onClick={() => setFilter('All')} className="text-white text-xs hover:underline">Clear</button>}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setFilter(c)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        filter === c
                          ? 'bg-white/25 text-white border-white/40 shadow-sm backdrop-blur-md'
                          : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
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
                <p className="text-sm text-white/60">
                  Showing {filtered.length} of {allRoles.length} roles
                </p>
                <select className="glass-card-tinted text-sm rounded-lg px-3 py-1.5 text-white/70 focus:outline-none">
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
                  <div className="glass-card-tinted rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-0.5 h-full">
                    <div className="h-44 relative overflow-hidden" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                      <img
                        src={role.image}
                        alt={role.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <span className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {role.savings} average savings
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-white/10 backdrop-blur-md border border-white/20 text-white/80 px-2.5 py-1 rounded-full font-medium">{role.category}</span>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-3 group-hover:text-white transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {role.desc}
                      </p>
                      <div className="space-y-2 text-sm border-t border-white/10 pt-4">
                        <div className="flex flex-wrap justify-between gap-x-2">
                          <span className="font-semibold text-white">Philippines Avg.</span>
                          <span className="text-white/60">{role.salaries.PH}/month</span>
                        </div>
                        <div className="flex flex-wrap justify-between gap-x-2">
                          <span className="font-semibold text-white">LatAm Avg.</span>
                          <span className="text-white/60">{role.salaries.LatAm}/month</span>
                        </div>
                        <div className="flex flex-wrap justify-between gap-x-2">
                          <span className="font-semibold text-white">South Africa Avg.</span>
                          <span className="text-white/60">{role.salaries.SA}/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {filtered.length === 0 && (
              <AnimateOnScroll variant="fade-in">
                <div className="text-center py-20">
                  <p className="text-white/50 text-lg">No roles match your search.</p>
                  <button onClick={() => { setFilter('All'); setSearch(''); }} className="text-white text-sm mt-2 hover:underline">Clear filters</button>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>

      {/* ──── Roles AXIS Can Help You Build Around ──────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 font-display drop-shadow-lg">
              Roles AXIS Can Help You Build Around
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              AXIS helps businesses hire offshore professionals for the roles that create real operational leverage—from executive support and customer operations to sales, marketing, finance, recruiting, administration, and project coordination.
            </p>
            <p className="text-white/65 leading-relaxed">
              Need a role that is not listed? AXIS can help define the scope, clarify success metrics, and source candidates based on your tools, workflows, communication needs, and performance expectations.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="zoom-in" delay={200}>
            <div className="mt-10">
              <button className="glass-button text-white px-8 py-3.5 rounded-full font-semibold text-sm">
                Start Building Your Team
              </button>
              <p className="text-white/55 text-sm mt-4 italic">
                Hire offshore talent matched to your operations, your standards, and your growth goals.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── FAQ ─────────────────────────────── */}
      <section className="py-24 px-6 section-dark-tint">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display drop-shadow-lg">
              Questions About Direct Hiring With AXIS?
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto">
              Here are the most common questions companies ask before building an embedded offshore team with AXIS.
            </p>
          </AnimateOnScroll>

          <div className="space-y-4">
            {[
              {
                q: 'What if the hire does not work out?',
                a: 'Every hiring engagement is designed to reduce risk through structured vetting, expectation alignment, and onboarding support. If a hire is not the right fit within the agreed replacement period, AXIS will help source another qualified candidate at no extra cost.',
              },
              {
                q: 'What types of roles can AXIS help us hire?',
                a: 'AXIS helps businesses hire offshore professionals across operations, executive support, customer service, sales support, marketing, finance, recruiting, administration, project coordination, and other business support roles. If you are not sure which role to hire first, we can help identify where offshore talent will create the most immediate operational leverage.',
              },
              {
                q: 'Who manages the employee after they are hired?',
                a: 'That depends on your hiring model. With Embedded Direct Hire, the team member works directly inside your business, and your team manages day-to-day responsibilities, tools, performance, and communication. Through Managed Direct Hire Plus, pricing may include a monthly manager cost.',
              },
              {
                q: 'How does AXIS pricing work?',
                a: 'AXIS offers simple, success-aligned pricing based on the hiring model you choose. For direct hire placements, the fee is typically tied to a successful hire. For managed offshore support, pricing may include monthly talent cost plus AXIS support and infrastructure. We will walk you through the right structure before any search begins, so there are no surprises.',
              },
              {
                q: 'How quickly can we hire offshore talent?',
                a: 'Timelines vary by role complexity, required skill set, compensation range, and interview speed. Many roles can move from search kickoff to final interviews within a few weeks when expectations are clear and feedback is timely.',
              },
              {
                q: 'Can AXIS help us decide which role to hire first?',
                a: 'Yes. Many clients come to AXIS knowing their team is stretched, but not knowing which role should come first. We help map your workload, identify bottlenecks, and recommend offshore roles that can create the fastest capacity relief.',
              },
              {
                q: 'Will the offshore hire work in our time zone?',
                a: 'AXIS can source candidates based on the schedule overlap your business needs. Some roles require full business-hour alignment, while others can succeed with partial overlap and clear deliverables.',
              },
              {
                q: 'How does AXIS vet candidates?',
                a: 'We evaluate candidates based on role experience, communication ability, reliability, work style, salary alignment, and fit with your operating environment. The goal is not just to find someone qualified—it is to find someone who can succeed inside your team.',
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 60} duration={500}>
                <details className="glass-card-dark rounded-2xl p-6 group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-bold text-white text-base md:text-lg pr-6">{item.q}</h3>
                    <span className="material-icons text-white/70 transition-transform group-open:rotate-180" style={{ fontSize: '24px' }}>
                      expand_more
                    </span>
                  </summary>
                  <p className="text-white/75 text-sm md:text-base leading-relaxed mt-4">
                    {item.a}
                  </p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
