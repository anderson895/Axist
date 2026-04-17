import RoleCarousel from '../components/RoleCarousel'
import { hiringPHRoles } from '../data/roles'
import AnimateOnScroll from '../components/AnimateOnScroll'

const whyPhilippines = [
  { icon: 'record_voice_over', title: 'English Fluency', desc: 'The Philippines is the 3rd largest English-speaking country in the world.' },
  { icon: 'school', title: 'Highly Educated', desc: 'Over 500,000 college graduates enter the workforce annually.' },
  { icon: 'nightlight', title: 'US Timezone Overlap', desc: 'Filipino professionals are experienced working US hours and graveyard shifts.' },
  { icon: 'savings', title: 'Cost Savings', desc: 'Hire full-time employees for as little as $1,000/month with world-class quality.' },
  { icon: 'handshake', title: 'Cultural Alignment', desc: 'Strong Western cultural influence makes collaboration smooth and natural.' },
  { icon: 'trending_up', title: 'Proven Track Record', desc: 'The BPO industry in the Philippines generates over $30 billion annually.' },
]

export default function HiringPHPage() {
  return (
    <>
      {/* ──── Hero ──────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(160deg, #000000, #18181b)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll variant="fade-right" duration={700}>
            <div>
              <span className="inline-block border border-gray-400 text-white/80 text-xs font-semibold px-5 py-1.5 rounded-full mb-6">
                Hiring Service
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight font-display">
                Hire Amazing Remote Staff From{' '}
                <span className="underline decoration-white underline-offset-8 decoration-2">
                  Philippines
                </span>
              </h1>
              <p className="text-white/55 text-lg mb-8 leading-relaxed max-w-lg">
                Use Axis to find amazing staff from The Philippines for up to 80% less than US equivalents.
              </p>
              <p className="text-white/35 text-sm italic">
                Zero Risk: You pay nothing if you don't hire anyone.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150} duration={700}>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-900">
              <img
                src="https://picsum.photos/seed/philippines-manila/720/720?grayscale"
                alt="Philippines"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <p className="text-white/80 text-sm font-semibold">Top Hiring Destination</p>
                <p className="text-white/80 text-xs mt-1">4,000+ placements and counting</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ──── Why Philippines ──────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                Why Hire in the Philippines?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                The Philippines consistently ranks as one of the best countries for offshore hiring.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {whyPhilippines.map((item, i) => (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 80} duration={550} threshold={0.08}>
                <div className="bg-gray-50 rounded-2xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <span className="material-icons text-black mb-4 block" style={{ fontSize: '36px' }}>{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Roles ──────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="fade-up" className="text-center mb-14">
            <span className="inline-block border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              What's possible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-display">
              Lower your costs by up to 86%
            </h2>
            <p className="text-gray-500">Here are some of the roles we can fill with amazing people</p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <RoleCarousel roles={hiringPHRoles} />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
