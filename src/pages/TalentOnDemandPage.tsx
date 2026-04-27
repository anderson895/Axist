import { GlobeIcon, DollarSign, HandshakeIcon, ShieldCheck, UsersIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import HiringModelComparison from '../components/HiringModelComparison'

const benefits = [
  { icon: <GlobeIcon />, title: 'Global Reach', desc: 'Access talent in 18+ countries. From Latin America to South Africa and Southeast Asia.' },
  { icon: <DollarSign />, title: 'No Upfront Costs', desc: 'Pay a simple monthly rate per contractor. No deposits, no long-term commitments required.' },
  { icon: <HandshakeIcon />, title: 'Fully Managed', desc: 'We handle payroll, compliance, equipment, and HR — so you can focus on your business.' },
]

const pricingSteps = [
  { icon: <DollarSign size={24} />, title: 'Refundable Deposit and Search', desc: 'A deposit and signed MSA starts your search. The deposit is deducted from your first invoice.' },
  { icon: <HandshakeIcon size={24} />, title: 'Statement of Work Confirmed', desc: "Once the SOW and consultant offers are signed, we charge a monthly fee consisting of the consultant's salary + the Somewhere fee." },
  { icon: <ShieldCheck size={24} />, title: 'Performance Guarantee', desc: "Unlimited free replacements if you're not satisfied with the consultant's performance." },
  { icon: <UsersIcon size={24} />, title: 'Custom Plans', desc: 'Hiring multiple consultants? Contact us for custom pricing and volume discounts.' },
]

const candidateAvatars = [1, 5, 12, 32]

export default function TalentOnDemandPage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 overflow-hidden section-dark-tint">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimateOnScroll variant="fade-right" duration={700}>
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-tight font-display">
                Hire Global Talent On&#8209;Demand
              </h1>
              <p className="text-white/90 text-xl font-semibold mb-4">
                Flexible. Fast. Fully managed.
              </p>
              <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-lg">
                Get highly skilled offshore contractors with payroll and compliance handled for you. Perfect for scaling up a team without the up-front cost or onboarding headache.
              </p>
              <button className="glass-button text-white px-8 py-3.5 rounded-full font-semibold text-sm">
                Get Started Today
              </button>
              <p className="text-white/35 text-sm mt-4 italic">
                Zero Risk: You pay nothing if you don't hire anyone.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Visual card */}
          <AnimateOnScroll variant="fade-up" delay={150} duration={700}>
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md mx-auto space-y-5">
                {/* Candidates card */}
                <div className="glass-card-dark rounded-2xl p-5">
                  <p className="text-sm font-semibold text-white/90 mb-3">Candidates Available</p>
                  <div className="flex -space-x-2">
                    {candidateAvatars.map((n, i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/80?img=${n}`}
                        alt={`Candidate ${i + 1}`}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-sm bg-gray-100"
                        style={{ filter: 'grayscale(1)' }}
                      />
                    ))}
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white text-xs flex items-center justify-center font-bold border-2 border-white/30 shadow-sm">+42</span>
                  </div>
                </div>

                {/* Contract card */}
                <div className="glass-card-dark rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Contract Details</p>
                    <span className="text-white/40">•••</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-white/50 text-xs">Location</span>
                      <p className="font-bold text-white mt-0.5 flex items-center gap-1">
                        <span className="material-icons" style={{ fontSize: '16px' }}>public</span>
                        Brazil
                      </p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Team</span>
                      <p className="font-bold text-white mt-0.5">Design</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Compensation</span>
                      <p className="font-bold text-white mt-0.5">$3,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Benefits ──────────────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-14 font-display drop-shadow-lg">
              Why Talent On-Demand?
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 100} duration={550}>
                <div className="glass-card-tinted p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="flex justify-center mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ──── How it works ──────────────────────── */}
      <section className="relative section-dark-tint py-20 px-6 section-ambient-dark overflow-hidden">
        {/* Ambient color glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(126, 196, 190, 0.45), transparent 70%)' }} />
          <div className="absolute bottom-10 right-20 w-[28rem] h-[28rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(196, 154, 181, 0.40), transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(168, 143, 173, 0.35), transparent 70%)' }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display">How It Works</h2>
            <p className="text-white/50 mb-14 max-w-xl mx-auto">Three simple steps to build your on-demand global team.</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Tell Us What You Need', desc: 'Share your requirements — role, skills, hours, and budget. We match you with pre-vetted contractors.' },
              { step: '02', title: 'Meet Your Team', desc: 'Interview top candidates and choose the best fit. We handle contracts, payroll, and compliance.' },
              { step: '03', title: 'Start Working', desc: 'Your contractor starts immediately. Scale up or down anytime with no long-term commitment.' },
            ].map((s, i) => (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 100} duration={550}>
                <div className="glass-card-dark text-left rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                  <span className="text-white text-3xl font-bold font-display">{s.step}</span>
                  <h3 className="text-white font-bold text-lg mt-4 mb-3">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Pricing breakdown ─────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md bg-white/10">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display drop-shadow-lg">
              How Talent-On-Demand Pricing Works
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-16 leading-relaxed">
              Simple monthly pricing with no hidden costs.
            </p>
          </AnimateOnScroll>

          {/* Timeline */}
          <div className="hidden md:block relative mb-16">
            <div className="absolute top-6 left-[12%] right-[12%] h-0.5 bg-white/20" />
            <div className="grid grid-cols-4 gap-6">
              {pricingSteps.map((step, i) => (
                <AnimateOnScroll key={i} variant="fade-up" delay={i * 100} duration={500}>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white transition-transform duration-300 hover:scale-110 hover:shadow-md">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden space-y-6 mb-12">
            {pricingSteps.map((step, i) => (
              <AnimateOnScroll key={i} variant="fade-right" delay={i * 80} duration={500}>
                <div className="flex gap-4 text-left">
                  <div className="glass-card w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{step.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="zoom-in" delay={300}>
            <button className="glass-button text-white px-8 py-3.5 rounded-full font-semibold text-sm">
              Get Started
            </button>
            <p className="text-white/55 text-sm mt-4 italic">
              Zero Risk: You pay nothing if you don't hire anyone.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <HiringModelComparison highlight="onDemand" />
    </>
  )
}
