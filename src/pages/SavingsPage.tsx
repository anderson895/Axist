import { Link } from 'react-router-dom'
import RoleCarousel from '../components/RoleCarousel'
import { savingsRoles } from '../data/roles'
import AnimateOnScroll from '../components/AnimateOnScroll'

const savingsExamples = [
  { role: 'Executive Assistant', us: '$4,500', global: '$1,200', savings: '73%' },
  { role: 'Full-Stack Developer', us: '$8,500', global: '$2,500', savings: '71%' },
  { role: 'Sales Development Rep', us: '$5,000', global: '$1,400', savings: '72%' },
  { role: 'Customer Support', us: '$3,800', global: '$1,000', savings: '74%' },
  { role: 'Graphic Designer', us: '$5,200', global: '$1,300', savings: '75%' },
]

export default function SavingsPage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="section-dark-tint py-20 px-6 text-center">
        <AnimateOnScroll variant="fade-up" threshold={0.1}>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-5 font-display leading-tight">
              See How Much You Can Save
            </h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Companies using Axis save an average of 70–80% on payroll compared to US equivalents.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ──── Comparison table ─────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-display text-center drop-shadow-lg">
              Side-by-Side Comparison
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} duration={600}>
            {/* Desktop table */}
            <div className="glass-card-tinted hidden sm:block rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-black/70 backdrop-blur-md text-white text-sm font-semibold">
                <div className="p-4">Role</div>
                <div className="p-4 text-center">US Salary/mo</div>
                <div className="p-4 text-center">Global Salary/mo</div>
                <div className="p-4 text-center">Savings</div>
              </div>
              {savingsExamples.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 text-sm ${
                    i % 2 === 0 ? 'bg-white/0' : 'bg-white/20'
                  } hover:bg-white/30 transition-colors`}
                >
                  <div className="p-4 font-medium text-white/90">{row.role}</div>
                  <div className="p-4 text-center text-white/70">{row.us}</div>
                  <div className="p-4 text-center text-white font-semibold">{row.global}</div>
                  <div className="p-4 text-center">
                    <span className="bg-white/25 backdrop-blur-md border border-white/40 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {row.savings}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {savingsExamples.map((row, i) => (
                <div key={i} className="glass-card-tinted rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white text-sm">{row.role}</h3>
                    <span className="bg-white/25 backdrop-blur-md border border-white/40 text-white text-xs font-bold px-2.5 py-1 rounded-full">{row.savings}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div>
                      <p className="text-white/55 mb-0.5">US Salary/mo</p>
                      <p className="text-white/70 font-medium">{row.us}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/55 mb-0.5">Global Salary/mo</p>
                      <p className="text-white font-semibold">{row.global}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-white/55 text-xs mt-4">
              *Salaries are approximate averages and vary by experience and region.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Roles carousel ──────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="fade-up" className="text-center mb-14">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md bg-white/10">
              What's possible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display drop-shadow-lg">
              Lower your costs by up to 86%
            </h2>
            <p className="text-white/80">
              Here are some of the roles we can{' '}
              <span className="underline decoration-white underline-offset-2">fill</span>{' '}
              with amazing people
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <RoleCarousel roles={savingsRoles} />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200} className="text-center mt-12">
            <Link
              to="/roles"
              className="glass-button inline-block text-white px-8 py-3.5 rounded-full font-semibold text-sm"
            >
              View All Roles
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
