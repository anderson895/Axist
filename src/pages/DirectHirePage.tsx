import ProcessSteps, { type Step } from '../components/ProcessSteps'
import CTABanner from '../components/CTABanner'
import { UsersIcon, ClockIcon, ShieldCheck } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

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

const steps: Step[] = [
  { num: '1', title: "Tell us which role(s) you'd like to hire", desc: "Schedule a quick call to discuss the roles you're hiring for. We'll align on target countries, salary expectations, and required skills. A $500 refundable deposit kicks off your search and is applied to your final invoice.", note: "Zero Risk: You pay nothing if you don't hire anyone." },
  { num: '2', title: 'Meet Our Team & Get matched with talent fast', desc: "Our recruiters will start sourcing and sharing vetted profiles with you. With your input, we'll find the right candidates, from sales talent in Latin America to developers in Eastern Europe or assistants in Sri Lanka. Last month, we placed 220 candidates, just 0.5% of those screened." },
  { num: '3', title: 'Interview Candidates & Make the Hire', desc: 'We send candidates for you to interview and gather feedback. We repeat this until we find the right match. We\'ll support you in salary negotiation and onboarding. Our goal is to excite candidates about your role and help you build your team fast.' },
  { num: '4', title: 'Support & Fees', desc: 'As your business grows, we help you scale efficiently by saving 70–80% on payroll costs compared to U.S. hires. Our one-time hiring fee ranges from 25–35% of the candidate\'s first-year salary, depending on how many hires you make.' },
  { num: '5', title: 'Hire Globally, Strategically', desc: "We've hired in 18+ countries: developers in Eastern Europe, accountants in South Africa, financial analysts in Egypt, support in Pakistan, assistants in the Philippines, and more. From Colombia to Portugal, we help you hire strategically based on talent availability and local costs." },
  { num: 'check', title: 'Start Hiring Right Now', desc: "Ready to build your global team? We'll guide you every step of the way — from role planning to onboarding. Get started today and see how fast you can scale with pre-vetted international talent.", note: "Zero Risk: You pay nothing if you don't hire anyone." },
]

export default function DirectHirePage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-5 py-1.5 rounded-full mb-6 backdrop-blur-md bg-white/10">
              Axis Direct Hire
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 font-display leading-tight drop-shadow-lg">
              What Axis Direct Hire Can Do For You
            </h1>
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
    </>
  )
}
