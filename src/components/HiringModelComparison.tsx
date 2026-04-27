import AnimateOnScroll from './AnimateOnScroll'

const comparisonRows = [
  { label: 'Hiring Model', direct: 'One-time hire', onDemand: 'Monthly support & infrastructure' },
  { label: 'Fee Structure', direct: 'A one time fee', onDemand: "The contractor's salary cost + our Somewhere service fee" },
  { label: 'Admin & Compliance', direct: 'You handle everything', onDemand: 'We handle compliance, payroll & more' },
  { label: 'IT & Equipment', direct: 'You provide and manage', onDemand: 'We provide and support' },
  { label: 'Best For', direct: 'Permanent roles with internal ops', onDemand: 'Pilot roles, temp projects, scaling fast' },
  { label: 'Support', direct: 'No ongoing support', onDemand: 'Includes ongoing support & replacements' },
  { label: 'Time to Hire', direct: '21-30 days', onDemand: '10-20 Days' },
  { label: 'Guarantee', direct: '6 Months Perfect Hire Guarantee, One free replacement', onDemand: 'Unlimited replacements within contract period' },
  { label: 'Buyout Option', direct: 'Not Applicable', onDemand: 'Yes (a % of year 1 salary)' },
]

interface Props {
  highlight: 'direct' | 'onDemand' | 'product'
}

const ACTIVE_BG = 'bg-gray-200/85 backdrop-blur-md'
const INACTIVE_BG = 'bg-white/10'

export default function HiringModelComparison({ highlight }: Props) {
  const directActive = highlight === 'direct'
  const onDemandActive = highlight === 'onDemand'
  const productActive = highlight === 'product'

  return (
    <section className="py-24 px-6 section-ambient">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variant="fade-up" className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-display drop-shadow-lg">
            Which Hiring Model<br className="hidden sm:block" /> Fits Your Team Best?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Compare our Direct Hire and On-Demand Talent services side by side to see which one aligns with your current goals and team structure.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={100} duration={600}>
          {/* Desktop table */}
          <div className="hidden sm:grid grid-cols-3 glass-card-tinted rounded-2xl overflow-hidden">
            {/* Header row */}
            <div
              className={`p-5 text-sm font-medium border-b border-white/15 ${
                productActive ? `${ACTIVE_BG} text-gray-900 font-bold shadow-xl` : `${INACTIVE_BG} text-white/85`
              }`}
            >
              Product comparison
            </div>
            <div
              className={`p-6 text-center text-2xl font-bold font-display border-b border-white/15 ${
                directActive ? `${ACTIVE_BG} text-gray-900 shadow-xl` : `${INACTIVE_BG} text-white/85`
              }`}
            >
              Direct Hire
            </div>
            <div
              className={`p-6 text-center text-2xl font-bold font-display border-b border-white/15 ${
                onDemandActive ? `${ACTIVE_BG} text-gray-900 shadow-xl` : `${INACTIVE_BG} text-white/85`
              }`}
            >
              Talent On-Demand
            </div>

            {comparisonRows.map((row, i) => {
              const isLast = i === comparisonRows.length - 1
              const border = isLast ? '' : 'border-b border-white/10'
              return (
                <div key={row.label} className="contents">
                  <div
                    className={`p-5 font-semibold text-sm ${border} ${
                      productActive ? `${ACTIVE_BG} text-gray-900` : `${INACTIVE_BG} text-white`
                    }`}
                  >
                    {row.label}
                  </div>
                  <div
                    className={`p-5 text-center text-sm ${border} ${
                      directActive ? `${ACTIVE_BG} text-gray-900 font-medium` : `${INACTIVE_BG} text-white/85`
                    }`}
                  >
                    {row.direct}
                  </div>
                  <div
                    className={`p-5 text-center text-sm ${border} ${
                      onDemandActive ? `${ACTIVE_BG} text-gray-900 font-medium` : `${INACTIVE_BG} text-white/85`
                    }`}
                  >
                    {row.onDemand}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.label} className="glass-card-tinted rounded-2xl p-5">
                <div className={`rounded-xl px-3 py-2 mb-4 inline-block ${productActive ? ACTIVE_BG + ' shadow-lg' : ''}`}>
                  <h3 className={`font-bold text-sm ${productActive ? 'text-gray-900' : 'text-white'}`}>{row.label}</h3>
                </div>
                <div className="space-y-3">
                  <div className={`rounded-xl p-3 ${directActive ? ACTIVE_BG + ' shadow-lg' : INACTIVE_BG}`}>
                    <p className={`text-xs mb-1 font-semibold tracking-wide ${directActive ? 'text-gray-700' : 'text-white/65'}`}>DIRECT HIRE</p>
                    <p className={directActive ? 'text-gray-900' : 'text-white/85'}>{row.direct}</p>
                  </div>
                  <div className={`rounded-xl p-3 ${onDemandActive ? ACTIVE_BG + ' shadow-lg' : INACTIVE_BG}`}>
                    <p className={`text-xs mb-1 font-semibold tracking-wide ${onDemandActive ? 'text-gray-700' : 'text-white/65'}`}>TALENT ON-DEMAND</p>
                    <p className={onDemandActive ? 'text-gray-900' : 'text-white/85'}>{row.onDemand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
