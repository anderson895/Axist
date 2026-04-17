import { Link } from 'react-router-dom'
import RoleCarousel, { type RoleCard } from '../components/RoleCarousel'

const roles: RoleCard[] = [
  { title: 'Remote Draftsman', desc: 'Hire remote draftsmen for up to 75% less from the Philippines, Latin America, and South Africa.', savings: '75%', price: '$1,400/mo' },
  { title: 'Construction Estimator', desc: 'Hire remote construction estimators for up to 70% less from global talent pools.', savings: '70%', price: '$1,800/mo' },
  { title: 'Remote Architect', desc: 'Hire remote architects for up to 72% less from the Philippines and Latin America.', savings: '72%', price: '$1,800/mo' },
  { title: 'Portfolio Manager', desc: 'Hire remote portfolio managers for up to 68% less from top global talent.', savings: '68%', price: '$2,200/mo' },
  { title: 'Tax Specialist', desc: 'Hire expert remote Tax Specialists from Philippines, Latin America, and South Africa.', savings: '74%', price: '$1,600/mo' },
  { title: 'Bookkeeper', desc: 'Hire remote bookkeepers skilled in QuickBooks, Xero, and more for a fraction of US costs.', savings: '82%', price: '$1,100/mo' },
]

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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-5 font-display leading-tight">
            See How Much You Can Save
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Companies using Somewhere save an average of 70–80% on payroll compared to US equivalents.
          </p>
        </div>
      </section>

      {/* ──── Comparison table ─────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-display text-center">
            Side-by-Side Comparison
          </h2>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-4 bg-brand-800 text-white text-sm font-semibold">
              <div className="p-4">Role</div>
              <div className="p-4 text-center">US Salary/mo</div>
              <div className="p-4 text-center">Global Salary/mo</div>
              <div className="p-4 text-center">Savings</div>
            </div>
            {/* Rows */}
            {savingsExamples.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 text-sm ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-teal-50/50 transition-colors`}
              >
                <div className="p-4 font-medium text-gray-800">{row.role}</div>
                <div className="p-4 text-center text-gray-500">{row.us}</div>
                <div className="p-4 text-center text-teal-700 font-semibold">{row.global}</div>
                <div className="p-4 text-center">
                  <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-1 rounded-full">
                    {row.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            *Salaries are approximate averages and vary by experience and region.
          </p>
        </div>
      </section>

      {/* ──── Roles carousel ──────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              What's possible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-display">
              Lower your costs by up to 86%
            </h2>
            <p className="text-gray-500">
              Here are some of the roles we can{' '}
              <span className="underline decoration-teal-500 underline-offset-2">fill</span>{' '}
              with amazing people
            </p>
          </div>
          <RoleCarousel roles={roles} />
          <div className="text-center mt-12">
            <Link
              to="/roles"
              className="inline-block bg-teal-700 hover:bg-teal-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
            >
              View All Roles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
