import { Link } from 'react-router-dom'
import ProcessSteps, { type Step } from '../components/ProcessSteps'
import RoleCarousel from '../components/RoleCarousel'
import { landingRoles } from '../data/roles'
import { CheckIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'


const steps: Step[] = [
  { num: '1', title: 'Align & Scope the Role', desc: 'We start with discovery and a focused strategy call to understand your business, workflows, and hiring objectives. From there, we define the role, expectations, and success metrics—so every candidate is aligned from day one.', note: "Zero-Risk Engagement — You only pay once you've made a successful hire." },
  { num: '2', title: 'Source & Curate Top Talent', desc: "Our team activates a global sourcing engine and rigorously vets candidates for skill, communication, and operational fit. You don't review hundreds of applicants—we deliver a curated shortlist built for performance." },
  { num: '3', title: 'Interview & Select with Confidence', desc: 'You meet only high-probability candidates already aligned with your needs. We guide the process, collect feedback, and refine quickly—so you can make the right hire without delays.' },
  { num: '4', title: 'Embed into Your Operations', desc: 'This is where AXIS is different. We support onboarding and ensure your hire is fully integrated into your tools, workflows, and team—so they operate like a true extension of your business.' },
  { num: '5', title: 'Scale with Ongoing Support', desc: "As your business grows, we help you expand your team with the same level of precision and consistency. Whether it's new roles, new regions, or specialized talent—we keep your operations moving forward." },
  { num: 'check', title: 'Start Building Your Team', desc: 'Ready to scale with embedded global talent? We guide you through every step—from role definition to full integration—so you can build a reliable, high-performing team without the complexity of traditional hiring. Get started today and see how quickly you can expand your operational capacity.', note: "Zero-Risk Engagement — You only pay once you've made a successful hire." },
]

const benefits = [
  'Reduce hiring costs by up to 70% without compromising quality',
  'Access experienced talent across operations, sales, support, and more',
  'Work with professionals aligned to your workflows, standards, and culture',
]

const wherewecomein = [
  { title: 'Embedded hiring model, not traditional outsourcing.', desc: 'We integrate talent directly into your systems and workflows.' },
  { title: 'Transparent, one-time engagement structure.', desc: 'No recurring placement fees or hidden costs.' },
  { title: 'Performance-backed placements.', desc: 'We stand behind every hire with a structured guarantee and ongoing support.' },
]

export default function LandingPage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden section-dark-tint">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(126,196,190,0.45) 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(196,154,181,0.40) 0%, transparent 70%)', animationDelay: '2s' }} />
        </div>
        <div className="max-w-4xl mx-auto text-center py-20 md:py-44 px-6 relative">
          <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-5 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            Embedded Global Workforce Solutions
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-7 font-display animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="whitespace-nowrap">Access Top Global Talent</span> — Embedded into Your Team While Reducing Payroll Costs by Up to 70%
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We help business owners build high-performing remote teams that scale operations without the overhead of local hiring.
          </p>
          <p className="text-white/40 text-sm italic animate-fade-in-up" style={{ animationDelay: '300ms' }}>Zero-Risk Engagement — You only pay once you've made a successful hire.</p>
        </div>
      </section>

      {/* ──── Process ──────────────────────────────────── */}
      <ProcessSteps
        title="Our Process"
        subtitle="Structured. Embedded. Built for Scale. We don't just help you hire—we integrate high-performing global talent directly into your operations, without the friction of traditional hiring."
        steps={steps}
      />

      {/* ──── Did you know? ──────────────────────────────── */}
      <section className="py-24 px-6 overflow-hidden section-ambient">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimateOnScroll variant="fade-right" duration={700}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-lg">
                Rethinking How Teams Are Built
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                High-performing companies are no longer limited by local hiring. With the right system, you can access skilled global professionals who operate as a seamless extension of your team—at a significantly more efficient cost structure.
              </p>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <AnimateOnScroll key={i} variant="fade-right" delay={i * 80} duration={500}>
                    <li className="flex items-start gap-3">
                      <span className="glass-card w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon />
                      </span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" duration={700} delay={150}>
            <div className="relative w-full">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden relative bg-gray-900">
                <img
                  src="https://picsum.photos/seed/axis-global-team/960/720?grayscale"
                  alt="Global remote team"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                <div className="glass-card absolute top-4 right-4 rounded-xl px-3 py-2 text-xs font-bold text-white">
                  Save up to 70%
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── That's where we come in ────────────── */}
      <section className="py-24 px-6 overflow-hidden section-ambient">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Image first on desktop */}
          <AnimateOnScroll variant="fade-up" duration={700} delay={150} className="md:order-1">
            <div className="relative w-full">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden relative bg-gray-900">
                <img
                  src="https://picsum.photos/seed/axis-headhunting-team/960/720?grayscale"
                  alt="Remote professional at work"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-right" duration={700} className="md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-lg leading-tight">
                This Is Where<br className="hidden sm:block" /> AXIS Comes In
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                We don't just help you find talent—we embed it into your operations. From sourcing and vetting to onboarding and integration, AXIS ensures every hire is aligned, reliable, and built for long-term performance.
              </p>
              <ul className="space-y-5">
                {wherewecomein.map((item, i) => (
                  <AnimateOnScroll key={i} variant="fade-right" delay={i * 80} duration={500}>
                    <li className="flex items-start gap-3">
                      <span className="glass-card w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckIcon />
                      </span>
                      <div>
                        <p className="text-white font-bold">{item.title}</p>
                        <p className="text-white/75 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Roles carousel ───────────────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="fade-up" className="text-center mb-14">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md bg-white/10">
              What You Can Unlock
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display drop-shadow-lg">
              Lower your costs by up to 70%
            </h2>
            <p className="text-white/80">The roles our clients rely on to run and scale their operations.</p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <RoleCarousel roles={landingRoles} />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200} className="text-center mt-12">
            <p className="text-white/70 text-sm mb-5 max-w-xl mx-auto">
              Don't see the exact role you need? We tailor every hire to your specific business requirements.
            </p>
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
