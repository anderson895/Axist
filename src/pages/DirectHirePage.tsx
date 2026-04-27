import ProcessSteps, { type Step } from '../components/ProcessSteps'
import CTABanner from '../components/CTABanner'
import { UsersIcon, ClockIcon, ShieldCheck, DollarSign, HandshakeIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import HiringModelComparison from '../components/HiringModelComparison'

const features = [
  {
    icon: <UsersIcon />,
    title: 'Access Pre-Vetted Global Talent',
    desc: 'We tap into a global network of candidates fluent in English, professionally trained, and ready to contribute — no endless resume piles.',
  },
  {
    icon: <ClockIcon />,
    title: 'Faster Time to Hire',
    desc: 'We deliver high-quality candidates within days, not weeks. Our streamlined sourcing and vetting process helps you fill key roles faster.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Risk-Free Hiring',
    desc: 'Only pay when you make a hire. No upfront costs. Plus, every placement is backed by a 6 month guarantee for your peace of mind.',
  },
]

const pricingSteps = [
  { icon: <DollarSign size={24} />, title: 'Refundable Deposit and Search', desc: 'We charge a one-time, fully refundable deposit to kick off your search and introduce you to candidates. This amount is credited toward your final hiring fee.' },
  { icon: <HandshakeIcon size={24} />, title: 'Offer Signed', desc: 'When an offer is signed by your future team member, we charge a one time fee depending on how many hires you make.' },
  { icon: <ShieldCheck size={24} />, title: '6 month guarantee', desc: 'Each hire comes with a 6 month perfect-hire guarantee which includes a replacement hire if you are unhappy with the performance of your new team member.' },
  { icon: <UsersIcon size={24} />, title: 'Custom Plans', desc: 'We also offer custom plans where we handle compliance, equipment, training and more to help your team scale quickly without the up-front fees.' },
]

const steps: Step[] = [
  { num: '1', title: "Tell us which role(s) you'd like to hire", desc: "Schedule a quick call to discuss the roles you're hiring for. We'll align on target countries, salary expectations, and required skills. A $500 refundable deposit kicks off your search and is applied to your final invoice.", note: "Zero Risk: You pay nothing if you don't hire anyone." },
  { num: '2', title: 'Meet Our Team & Get matched with talent fast', desc: "Our recruiters will start sourcing and sharing vetted profiles with you. With your input, we'll find the right candidates, from sales talent in Latin America to developers in Eastern Europe or assistants in Sri Lanka. Last month, we placed 220 candidates, just 0.5% of those screened." },
  { num: '3', title: 'Interview Candidates & Make the Hire', desc: 'We send candidates for you to interview and gather feedback. We repeat this until we find the right match. We\'ll support you in salary negotiation and onboarding. Our goal is to excite candidates about your role and help you build your team fast.' },
  { num: '4', title: 'Support & Fees', desc: 'As your business grows, we help you scale efficiently by saving 70–80% on payroll costs compared to U.S. hires. Our one-time hiring fee ranges from 25–35% of the candidate\'s first-year salary, depending on how many hires you make.' },
  { num: '5', title: 'Hire Globally, Strategically', desc: "We've hired in 18+ countries: developers in Eastern Europe, accountants in South Africa, financial analysts in Egypt, support in Pakistan, assistants in the Philippines, and more. From Colombia to Portugal, we help you hire strategically based on talent availability and local costs." },
  { num: 'check', title: 'Start Hiring Right Now', desc: "Ready to build your global team? We'll guide you every step of the way — from role planning to onboarding. Get started today and see how fast you can scale with pre-vetted international talent.", note: "Zero Risk: You pay nothing if you don't hire anyone." },
]

const candidateAvatars = [3, 8, 15, 25]

export default function DirectHirePage() {
  return (
    <>
      {/* ──── Top Banner ────────────────────────── */}
      <section className="py-16 md:py-20 px-6 overflow-hidden section-dark-tint">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimateOnScroll variant="fade-right" duration={700}>
            <div>
              <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-5 py-1.5 rounded-full mb-6 backdrop-blur-md bg-white/10">
                Axis Direct Hire
              </span>
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-tight font-display">
                Hire Top Global Talent, Direct to Your Team
              </h1>
              <p className="text-white/90 text-xl font-semibold mb-4">
                Pre-vetted. Permanent. Risk-free.
              </p>
              <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-lg">
                Build a long-term team with full-time hires from 18+ countries. Save 70–80% on payroll vs. US equivalents — with a 6 month perfect-hire guarantee.
              </p>
              <button className="glass-button text-white px-8 py-3.5 rounded-full font-semibold text-sm">
                Start Hiring
              </button>
              <p className="text-white/35 text-sm mt-4 italic">
                Zero Risk: You pay nothing if you don't hire anyone.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Visual cards */}
          <AnimateOnScroll variant="fade-up" delay={150} duration={700}>
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md mx-auto space-y-5">
                {/* Vetted candidates card */}
                <div className="glass-card-dark rounded-2xl p-5">
                  <p className="text-sm font-semibold text-white/90 mb-3">Vetted Candidates Ready</p>
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
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white text-xs flex items-center justify-center font-bold border-2 border-white/30 shadow-sm">+220</span>
                  </div>
                </div>

                {/* Hire details card */}
                <div className="glass-card-dark rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Hire Snapshot</p>
                    <span className="text-white/40">•••</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-white/50 text-xs">Country</span>
                      <p className="font-bold text-white mt-0.5 flex items-center gap-1">
                        <span className="material-icons" style={{ fontSize: '16px' }}>public</span>
                        Philippines
                      </p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Role</span>
                      <p className="font-bold text-white mt-0.5">Developer</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Salary</span>
                      <p className="font-bold text-white mt-0.5">$2,500</p>
                    </div>
                  </div>
                </div>

                {/* Time-to-hire card */}
                <div className="glass-card-dark rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Time to Hire</p>
                    <p className="text-white font-bold text-2xl font-display">21–30 days</p>
                  </div>
                  <span className="glass-card rounded-xl px-3 py-2 text-white text-xs font-semibold">
                    6mo guarantee
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Features ──────────────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-display leading-tight drop-shadow-lg">
              What Axis Direct Hire Can Do For You
            </h2>
            <p className="text-white/80 mb-16 text-lg">
              Here's why companies choose us over traditional recruiters.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 100} duration={550}>
                <div className="glass-card-tinted rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="flex justify-center mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">{f.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <CTABanner />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Process ──────────────────────────── */}
      <ProcessSteps
        title="How Direct Hire works"
        subtitle="Hiring through Axis is simple. You tell us what you need, we send vetted candidates, and you hire the right fit. Fast, with zero risk."
        steps={steps}
      />

      {/* ──── Pricing breakdown ─────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md bg-white/10">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display drop-shadow-lg">
              Understanding Direct Hire Pricing
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-16 leading-relaxed">
              Pay only when you hire, no subscriptions, no retainers, no risk. Here's exactly what to expect when you work with Somewhere.
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
              Start Hiring
            </button>
            <p className="text-white/55 text-sm mt-4 italic">
              Zero Risk: You pay nothing if you don't hire anyone.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <HiringModelComparison highlight="direct" />
    </>
  )
}
