import { DollarSign, HandshakeIcon, ShieldCheck, UsersIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

const pricingSteps = [
  { icon: <DollarSign size={24} />, title: 'Refundable Deposit and Search', desc: 'We take a $500 deposit to begin a search and start meeting candidates. This deposit is deducted from your final recruiting fee.' },
  { icon: <HandshakeIcon size={24} />, title: 'Offer Signed', desc: 'When an offer is signed by your future team member, we charge a one time fee equal to 25–35% of the year 1 salary, depending on how many hires you make.' },
  { icon: <ShieldCheck size={24} />, title: '6 month guarantee', desc: 'Each hire comes with a 6 month perfect-hire guarantee which includes a replacement hire if you are unhappy with the performance of your new team member.' },
  { icon: <UsersIcon size={24} />, title: 'Custom Plans', desc: 'We also offer custom plans where we handle compliance, equipment, training and more to help your team scale quickly without the up-front fees.' },
]

const candidates = [
  { name: 'Anton', price: '$1,700', role: 'Executive Assistant' },
  { name: 'Dané', price: '$1,600', role: 'Sales Development Rep' },
  { name: 'Kris', price: '$1,900', role: 'Product Manager' },
  { name: 'Shaine', price: '$1,300', role: 'Social Media Manager' },
  { name: 'Chevonne', price: '$1,300', role: 'Customer Support' },
]

const GRADIENTS = [
  'linear-gradient(180deg, #3f3f46, #09090b)',
  'linear-gradient(180deg, #52525b, #000000)',
  'linear-gradient(180deg, #27272a, #09090b)',
  'linear-gradient(180deg, #18181b, #000000)',
  'linear-gradient(180deg, #3f3f46, #09090b)',
]

export default function PricingPage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="py-24 px-6 text-center section-dark-tint">
        <AnimateOnScroll variant="fade-up" threshold={0.1}>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto font-display">
            Last month we helped over 275 companies save 80% on hiring costs.
          </h1>
        </AnimateOnScroll>
      </section>

      {/* ──── Pricing breakdown ─────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md bg-white/10">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display drop-shadow-lg">
              How Direct Hire Pricing Works
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-16 leading-relaxed">
              Pay only when you hire — no subscriptions, no retainers, no risk. Here's exactly what to expect when you work with Axis.
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
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Talent showcase ──────────────────── */}
      <section className="relative section-dark-tint py-20 px-6 section-ambient-dark overflow-hidden">
        {/* Ambient color glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(126, 196, 190, 0.45), transparent 70%)' }} />
          <div className="absolute bottom-10 right-20 w-[28rem] h-[28rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(196, 154, 181, 0.40), transparent 70%)' }} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(168, 143, 173, 0.35), transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-14 font-display">
              Meet Our Talent
            </h2>
          </AnimateOnScroll>
          <div className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar">
            {candidates.map((c, i) => (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 80} duration={500}>
                <div
                  className="glass-card-dark min-w-[220px] rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${encodeURIComponent(c.name + c.role)}/440/448?grayscale`}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="p-5 text-white">
                    <p className="font-bold text-lg">{c.name}</p>
                    <p className="text-white/80 font-semibold text-lg">
                      {c.price} <span className="text-white/40 text-sm font-normal">/ month</span>
                    </p>
                    <p className="text-white/40 text-xs mt-1">{c.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" delay={400}>
            <p className="text-center text-white/35 text-sm mt-10 italic">
              Zero Risk: You pay nothing if you don't hire anyone.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
