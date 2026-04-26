import { Link } from 'react-router-dom'
import ProcessSteps, { type Step } from '../components/ProcessSteps'
import RoleCarousel from '../components/RoleCarousel'
import { landingRoles } from '../data/roles'
import CTABanner from '../components/CTABanner'
import { CheckIcon } from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'


const steps: Step[] = [
  { num: '1', title: 'Book a Call & Start Hiring', desc: "Tell us what roles you're hiring for in a quick intro call. We'll align on countries, salary ranges, and skill needs. A $500 refundable deposit secures your search and goes toward your final invoice.", note: "Zero Risk: You pay nothing if you don't hire anyone." },
  { num: '2', title: 'Meet Our Team & Get Matched Fast', desc: "Once your search kicks off, our recruiters start sharing carefully vetted candidates. With your input, we'll zero in on the right fit — whether that's sales talent in Latin America, developers in Eastern Europe, or assistants in Sri Lanka. Last month, we placed 220 candidates — just 0.5% of those screened." },
  { num: '3', title: 'Interview Candidates & Make the Hire', desc: "We'll send you top candidates to interview and collect your feedback after each round. This continues until we find the right match. We'll assist with salary negotiation, onboarding, and candidate engagement — so you can build your team quickly and confidently." },
  { num: '4', title: 'Ongoing Support to Help You Scale', desc: 'As your team grows, we help you scale efficiently, often saving 70–80% on payroll compared to U.S. hires. Need talent in a new region or with a specific skill set? Just say the word, we\'ll source and deliver top candidates globally.' },
  { num: '5', title: 'Hire Globally, Strategically', desc: "We've placed talent in 18+ countries — from developers in Eastern Europe to accountants in South Africa, finance pros in Egypt, support teams in Pakistan, and assistants in the Philippines. Whether it's Colombia or Portugal, we help you hire where talent is strong and costs make sense." },
  { num: 'check', title: 'Start Hiring Right Now', desc: "Ready to build your global team? We'll guide you every step of the way — from role scoping to onboarding. Kick things off today and see how fast you can scale with pre-vetted international talent.", note: "Zero Risk: You pay nothing if you don't hire anyone." },
]

const benefits = [
  'College-educated professionals',
  'Fluent English speakers',
  'Expertise across tech, finance, marketing & more',
  'Overlap with US time zones',
  'Dedicated, full-time commitment to your company',
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
            Global Talent Recruitment
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-7 font-display animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Hire the Top 1% of Global Talent and Save 80% on Payroll
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We've saved 4,000+ companies over $300 million in payroll and present candidates in 5 days.
          </p>
          <p className="text-white/40 text-sm italic animate-fade-in-up" style={{ animationDelay: '300ms' }}>You Don't Pay If You Don't Hire</p>
        </div>
      </section>

      {/* ──── Security ──────────────────────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-display drop-shadow-lg">
              Axis is Secure by Design
            </h2>
            <p className="text-white/80 mb-14 max-w-xl mx-auto leading-relaxed">
              Thousands of customers trust Axis to process their data securely and reliably. Our robust security and privacy practices are deeply integrated into everything we do. Axis is fully SOC2, ISO27001, and GDPR compliant.
            </p>
          </AnimateOnScroll>
          <div className="flex justify-center gap-6 md:gap-14 mb-12">
            {['SOC 2\nType II', 'ISO\n27001', 'GDPR\nCompliant'].map((badge, i) => (
              <AnimateOnScroll key={badge} variant="zoom-in" delay={i * 100} duration={500}>
                <div className="relative">
                  <div className="glass-card w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <span className="text-white text-xs font-bold text-center leading-tight whitespace-pre-line">
                      {badge}
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/60 backdrop-blur-md border border-white/70 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/60 backdrop-blur-md border border-white/70 rounded-full" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" delay={200}>
            <CTABanner />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Did you know? ──────────────────────────────── */}
      <section className="py-24 px-6 overflow-hidden section-ambient">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimateOnScroll variant="fade-right" duration={700}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-lg">
                Did you know?
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                For as little as $12,000 per year, you can hire highly skilled, full-time remote employees who offer:
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
                  From $12k/yr
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Process ──────────────────────────────────── */}
      <ProcessSteps
        title="Our Process"
        subtitle="Fast, supported, and flexible. We help you hire top global talent without the usual complexity."
        steps={steps}
      />

      {/* ──── Roles carousel ───────────────────────────── */}
      <section className="py-24 px-6 section-ambient">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="fade-up" className="text-center mb-14">
            <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md bg-white/10">
              What's possible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display drop-shadow-lg">
              Lower your costs by up to 80%
            </h2>
            <p className="text-white/80">Here are some of the roles we can fill with amazing people</p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <RoleCarousel roles={landingRoles} />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200} className="text-center mt-12">
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
