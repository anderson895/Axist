import ProcessSteps, { type Step } from '../components/ProcessSteps'
import CTABanner from '../components/CTABanner'
import { UsersIcon, ClockIcon, ShieldCheck, DollarSign, HandshakeIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import HiringModelComparison from '../components/HiringModelComparison'

const features = [
  {
    icon: <UsersIcon />,
    title: 'Talent Matched to Your Workflow',
    desc: 'We source global professionals around your actual tools, communication rhythms, responsibilities, and success metrics—not just a generic job description.',
  },
  {
    icon: <ClockIcon />,
    title: 'Speed Without Losing Fit',
    desc: 'From role clarity to candidate alignment, AXIS streamlines the hiring process so you can add meaningful support faster while keeping quality at the center.',
  },
  {
    icon: <ShieldCheck />,
    title: 'A Lower-Risk Way to Scale',
    desc: 'With structured vetting, clear expectations, and onboarding guidance, AXIS helps you make offshore hiring more predictable, more strategic, and easier to manage.',
  },
]

const pricingSteps = [
  { icon: <DollarSign size={24} />, title: 'Role Strategy & Search Kickoff', desc: 'We begin with a focused role strategy session to understand your hiring needs, responsibilities, workflow, compensation range, and success criteria. A refundable search deposit may be used to begin sourcing and is applied toward your final placement fee.' },
  { icon: <HandshakeIcon size={24} />, title: 'Hire Confirmed', desc: 'You only pay the placement fee once you select a candidate and the offer is accepted. The fee is based on the role, compensation level, and number of hires.' },
  { icon: <ShieldCheck size={24} />, title: 'Built-In Replacement Support', desc: 'Every AXIS placement is supported by a replacement window designed to reduce hiring risk. If the hire is not the right long-term fit within the agreed period, we help source a replacement.' },
  { icon: <UsersIcon size={24} />, title: 'Custom Growth Plans', desc: 'For businesses building multiple global roles, AXIS can create a custom hiring plan that supports role planning, sourcing, onboarding coordination, and team expansion.' },
]

const steps: Step[] = [
  { num: '1', title: 'Define the Role That Creates Leverage', desc: 'We start with a focused strategy call to understand your business, team structure, current bottlenecks, tools, workflows, and hiring priorities. Instead of filling a generic job title, we clarify what this person needs to own, how success will be measured, and what kind of global professional will create the most immediate operational impact.', note: "Zero-Risk Engagement — You only pay once you've made a successful hire." },
  { num: '2', title: 'Build a Targeted Offshore Talent Search', desc: 'Once the role is defined, AXIS begins sourcing candidates aligned with your required skills, communication standards, work schedule, experience level, and compensation range. We focus on candidates who are not only qualified on paper, but also capable of working inside your systems, team rhythm, and expectations.' },
  { num: '3', title: 'Meet Vetted Candidates and Choose the Right Fit', desc: 'We present aligned candidates for you to review and interview. You get to evaluate their skills, communication style, experience, and fit before making a decision. We help coordinate the interview process, gather feedback, and refine the search until the right person is identified.' },
  { num: '4', title: 'Align Offer, Expectations, and Onboarding', desc: 'Once you select a candidate, we support the offer process and help align expectations around compensation, work hours, responsibilities, tools, communication, and performance standards. This gives your new professional the clarity they need to start strong and integrate smoothly into your team.' },
  { num: '5', title: 'Scale Your Embedded Ops Team Strategically', desc: 'After your first hire is in place, AXIS can help identify additional roles that can be delegated, systemized, or expanded offshore—across operations, admin, customer service, sales support, marketing, finance, recruiting, or project coordination.' },
  { num: 'check', title: 'Start Building Your Embedded Global Team', desc: 'Ready to reduce workload, increase capacity, and give your team stronger operational support? AXIS Embedded Ops helps you hire offshore professionals matched to your business needs, integrated into your workflows, and positioned to contribute from day one.', note: "Zero-Risk Engagement — You only pay once you've made a successful hire." },
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
                AXIS Embedded Ops
              </span>
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-tight font-display">
                Scale Smarter with Embedded Offshore Talent from AXIS
              </h1>
              <p className="text-white/90 text-xl font-semibold mb-4">
                Find offshore talent built to support the way your business operates.
              </p>
              <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-lg">
                Our direct-hire model helps growing companies build reliable offshore teams without the complexity of traditional hiring. You tell us the role, skills, and support you need — we find vetted talent ready to integrate into your operations.
              </p>
              <button className="glass-button text-white px-8 py-3.5 rounded-full font-semibold text-sm">
                Start Hiring
              </button>
              <p className="text-white/35 text-sm mt-4 italic">
                Zero-Risk Engagement — You only pay once you've made a successful hire.
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
                      <p className="font-bold text-white mt-0.5">Project Manager</p>
                    </div>
                    <div>
                      <span className="text-white/50 text-xs">Fee Range</span>
                      <p className="font-bold text-white mt-0.5">$1.5k–$4.5k</p>
                    </div>
                  </div>
                </div>

                {/* Time-to-hire card */}
                <div className="glass-card-dark rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Time to Hire</p>
                    <p className="text-white font-bold text-2xl font-display">7–14 days</p>
                  </div>
                  <span className="glass-card rounded-xl px-3 py-2 text-white text-xs font-semibold">
                    Replacement support
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
              What AXIS Embedded Ops Can Do For Your Business
            </h2>
            <p className="text-white/80 mb-16 text-lg">
              Built for businesses that need dependable global talent, stronger execution, and a more efficient way to grow.
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
        title="How AXIS Embedded Ops Works"
        subtitle="Building a global team with AXIS is simple, strategic, and designed around your operations. You tell us where your team needs more capacity, we identify the right global talent, and you hire a professional who can plug into your business with confidence."
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
              Simple Pricing for Embedded Offshore Hiring
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-16 leading-relaxed">
              Transparent, success-aligned pricing designed to help you build offshore capacity without retainers, subscriptions, or unnecessary hiring risk.
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
              Start Hiring With AXIS
            </button>
            <p className="text-white/55 text-sm mt-4 italic">
              Zero-Risk Engagement — You only pay once you've made a successful hire.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <HiringModelComparison highlight="direct" />
    </>
  )
}
