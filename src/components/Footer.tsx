import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, XIcon, LinkedInIcon } from './Icons'

interface FooterLink {
  label: string
  to: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const columns: FooterColumn[] = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About us', to: '/' },
      { label: 'Roles we source', to: '/roles' },
      { label: 'Contact', to: '/' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Direct Hire', to: '/direct-hire' },
      { label: 'Talent On-Demand', to: '/talent-on-demand' },
      { label: 'Axis EOR', to: '/' },
    ],
  },
  {
    title: 'Hire in',
    links: [
      { label: 'Latin America', to: '/hiring-philippines' },
      { label: 'South Africa', to: '/hiring-philippines' },
      { label: 'Philippines', to: '/hiring-philippines' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/' },
      { label: 'Terms of Use', to: '/' },
      { label: 'Promotional Terms and Conditions', to: '/' },
      { label: 'Consent Preferences', to: '/' },
    ],
  },
]

const socials = [
  { label: 'Facebook', icon: <FacebookIcon /> },
  { label: 'Instagram', icon: <InstagramIcon /> },
  { label: 'X', icon: <XIcon /> },
  { label: 'LinkedIn', icon: <LinkedInIcon /> },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-baseline gap-3 text-white">
            <span className="text-3xl tracking-tight font-display font-bold">Axis</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/55">
              Embedded Ops
            </span>
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4 text-white">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      to={link.to}
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Referrals */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Referrals</h4>
            <p className="text-white/55 hover:text-white text-sm transition-colors cursor-pointer">
              Refer a Candidate
            </p>
            <h4 className="font-semibold text-sm mb-4 mt-6">Reviews</h4>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Social</h4>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    className="text-white/55 hover:text-white text-sm flex items-center gap-2.5 transition-colors"
                  >
                    <span className="opacity-70">{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/35 gap-2">
          <span>© Copyright 2026 • Axis Embedded Ops, LLC</span>
          <span>Developed by the Axis Team</span>
        </div>
      </div>
    </footer>
  )
}
