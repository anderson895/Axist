import { Link } from 'react-router-dom'
import ProcessSteps, { type Step } from '../components/ProcessSteps'
import RoleCarousel, { type RoleCard } from '../components/RoleCarousel'
import CTABanner from '../components/CTABanner'
import { CheckIcon } from '../components/Icons'

const roles: RoleCard[] = [
  { title: 'Executive Assistant', desc: 'Hire trusted, experienced remote executive assistants from the Philippines, Latin America, and more.', savings: '86%' },
  { title: 'Sales Development Rep (SDR)', desc: 'Qualifies leads for the sales team and drives pipeline growth across regions.', savings: '86%' },
  { title: 'Product Manager', desc: 'Hire elite remote product managers from the Philippines, Latin America, and South Africa.', savings: '86%' },
  { title: 'Social Media Manager', desc: "Axis' expert team of global recruiters sources, vets, and connects business leaders.", savings: '86%' },
  { title: 'Account Executive', desc: 'Hire experienced remote Account Executives from the Philippines, Latin America, and South Africa.', savings: '86%' },
  { title: 'Sales Manager', desc: 'Hire trusted, experienced remote sales managers from the Philippines, Latin America.', savings: '82%' },
]

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
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #000000 0%, #09090b 40%, #18181b 100%)' }}>
        {/* Ambient glows */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-4xl mx-auto text-center py-28 md:py-44 px-6 relative">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-7 font-display animate-fade-in-up">
            Hire the Top 1% of Global Talent and Save 80% on Payroll
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We've saved 4,000+ companies over $300 million in payroll and present candidates in 5 days.
          </p>
          <p className="text-white/40 text-sm italic">You Don't Pay If You Don't Hire</p>
        </div>
      </section>

      {/* ──── Security ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 font-display">
            Axis is Secure by Design
          </h2>
          <p className="text-gray-500 mb-14 max-w-xl mx-auto leading-relaxed">
            Thousands of customers trust Axis to process their data securely and reliably. Our robust security and privacy practices are deeply integrated into everything we do. Axis is fully SOC2, ISO27001, and GDPR compliant.
          </p>
          <div className="flex justify-center gap-10 md:gap-14 mb-12">
            {['SOC 2\nType II', 'ISO\n27001', 'GDPR\nCompliant'].map((badge) => (
              <div key={badge} className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border-[5px] border-gray-300 shadow-lg" style={{ background: 'linear-gradient(135deg, #000000, #3f3f46)' }}>
                  <span className="text-white text-xs font-bold text-center leading-tight whitespace-pre-line">
                    {badge}
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-300 rounded-full" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gray-300 rounded-full" />
              </div>
            ))}
          </div>
          <CTABanner />
        </div>
      </section>

      {/* ──── Did you know? ──────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Did you know?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              For as little as $12,000 per year, you can hire highly skilled, full-time remote employees who offer:
            </p>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative bg-gray-900">
              <img
                src="https://picsum.photos/seed/axis-global-team/960/720?grayscale"
                alt="Global remote team"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-lg text-xs font-bold text-black">
                From $12k/yr
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Process ──────────────────────────────────── */}
      <ProcessSteps
        title="Our Process"
        subtitle="Fast, supported, and flexible. We help you hire top global talent without the usual complexity."
        steps={steps}
      />

      {/* ──── Roles carousel ───────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              What's possible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-display">
              Lower your costs by up to 80%
            </h2>
            <p className="text-gray-500">Here are some of the roles we can fill with amazing people</p>
          </div>
          <RoleCarousel roles={roles} />
          <div className="text-center mt-12">
            <Link
              to="/roles"
              className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
            >
              View All Roles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
