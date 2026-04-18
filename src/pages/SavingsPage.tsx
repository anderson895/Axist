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
      <section className="bg-brand-800 py-20 px-6 text-center">
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-display text-center">
              Side-by-Side Comparison
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} duration={600}>
            {/* Desktop table */}
            <div className="hidden sm:block rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 bg-brand-800 text-white text-sm font-semibold">
                <div className="p-4">Role</div>
                <div className="p-4 text-center">US Salary/mo</div>
                <div className="p-4 text-center">Global Salary/mo</div>
                <div className="p-4 text-center">Savings</div>
              </div>
              {savingsExamples.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 text-sm ${
                    i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100/60 transition-colors`}
                >
                  <div className="p-4 font-medium text-gray-800">{row.role}</div>
                  <div className="p-4 text-center text-gray-500">{row.us}</div>
                  <div className="p-4 text-center text-black font-semibold">{row.global}</div>
                  <div className="p-4 text-center">
                    <span className="bg-gray-100 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                      {row.savings}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {savingsExamples.map((row, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm">{row.role}</h3>
                    <span className="bg-gray-100 text-black text-xs font-bold px-2.5 py-1 rounded-full">{row.savings}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div>
                      <p className="text-gray-400 mb-0.5">US Salary/mo</p>
                      <p className="text-gray-500 font-medium">{row.us}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 mb-0.5">Global Salary/mo</p>
                      <p className="text-black font-semibold">{row.global}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">
              *Salaries are approximate averages and vary by experience and region.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Roles carousel ──────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="fade-up" className="text-center mb-14">
            <span className="inline-block border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              What's possible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-display">
              Lower your costs by up to 86%
            </h2>
            <p className="text-gray-500">
              Here are some of the roles we can{' '}
              <span className="underline decoration-black underline-offset-2">fill</span>{' '}
              with amazing people
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <RoleCarousel roles={savingsRoles} />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200} className="text-center mt-12">
            <Link
              to="/roles"
              className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
            >
              View All Roles
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
