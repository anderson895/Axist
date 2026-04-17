import { GlobeIcon, DollarSign, HandshakeIcon } from '../components/Icons'

const benefits = [
  { icon: <GlobeIcon />, title: 'Global Reach', desc: 'Access talent in 18+ countries. From Latin America to South Africa and Southeast Asia.' },
  { icon: <DollarSign />, title: 'No Upfront Costs', desc: 'Pay a simple monthly rate per contractor. No deposits, no long-term commitments required.' },
  { icon: <HandshakeIcon />, title: 'Fully Managed', desc: 'We handle payroll, compliance, equipment, and HR — so you can focus on your business.' },
]

const candidateIcons = ['person', 'code', 'palette', 'badge']

export default function TalentOnDemandPage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(160deg, #000000 0%, #18181b 100%)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-5 leading-tight font-display">
              Hire Global Talent On&#8209;Demand
            </h1>
            <p className="text-white/90 text-xl font-semibold mb-4">
              Flexible. Fast. Fully managed.
            </p>
            <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-lg">
              Get highly skilled offshore contractors with payroll and compliance handled for you. Perfect for scaling up a team without the up-front cost or onboarding headache.
            </p>
            <button className="bg-white hover:bg-gray-200 text-black px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-white/10 text-sm">
              Get Started Today
            </button>
            <p className="text-white/35 text-sm mt-4 italic">
              Zero Risk: You pay nothing if you don't hire anyone.
            </p>
          </div>

          {/* Visual card */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md space-y-5">
              {/* Candidates card */}
              <div className="bg-white rounded-2xl p-5 shadow-2xl">
                <p className="text-sm font-semibold text-gray-800 mb-3">Candidates Available</p>
                <div className="flex -space-x-2">
                  {candidateIcons.map((name, i) => (
                    <span key={i} className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center border-2 border-white shadow-sm">
                      <span className="material-icons" style={{ fontSize: '20px' }}>{name}</span>
                    </span>
                  ))}
                  <span className="w-10 h-10 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold border-2 border-white shadow-sm">+42</span>
                </div>
              </div>

              {/* Contract card */}
              <div className="bg-white rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contract Details</p>
                  <span className="text-gray-300">•••</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs">Location</span>
                    <p className="font-bold text-gray-800 mt-0.5 flex items-center gap-1">
                      <span className="material-icons" style={{ fontSize: '16px' }}>public</span>
                      Brazil
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Team</span>
                    <p className="font-bold text-gray-800 mt-0.5">Design</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Compensation</span>
                    <p className="font-bold text-gray-800 mt-0.5">$3,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Benefits ──────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14 font-display">
            Why Talent On-Demand?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── How it works ──────────────────────── */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 font-display">How It Works</h2>
          <p className="text-white/50 mb-14 max-w-xl mx-auto">Three simple steps to build your on-demand global team.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Tell Us What You Need', desc: 'Share your requirements — role, skills, hours, and budget. We match you with pre-vetted contractors.' },
              { step: '02', title: 'Meet Your Team', desc: 'Interview top candidates and choose the best fit. We handle contracts, payroll, and compliance.' },
              { step: '03', title: 'Start Working', desc: 'Your contractor starts immediately. Scale up or down anytime with no long-term commitment.' },
            ].map((s, i) => (
              <div key={i} className="text-left border border-white/15 bg-white/5 rounded-2xl p-7">
                <span className="text-white text-3xl font-bold font-display">{s.step}</span>
                <h3 className="text-white font-bold text-lg mt-4 mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
