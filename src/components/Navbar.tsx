import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from './Icons'

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  const toggleMobileDropdown = (key: string) =>
    setMobileDropdown(prev => (prev === key ? null : key))
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Referral banner */}
      {/* <div className="bg-black text-white text-center py-2.5 px-4 text-sm border-b border-white/10">
        <span className="opacity-90 inline-flex items-center gap-2">
          Refer a client to Axis and we'll pay you $500! Click here to sign up.
          <span className="material-icons" style={{ fontSize: '16px' }}>east</span>
        </span>
        <button className="ml-3 bg-white text-black px-4 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
          Sign up
        </button>
      </div> */}

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/15 section-dark-tint backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2.5 text-white group">
            <span className="text-2xl tracking-tight font-display font-bold">Axis</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-white/55 group-hover:text-white/80 transition-colors">
              Embedded Ops
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products & Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown('products')}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="text-white/80 hover:text-white px-4 py-2 text-sm flex items-center gap-1 transition-colors">
                Services <ChevronDown />
              </button>
              {dropdown === 'products' && (
                <div className="glass-card absolute top-full left-0 rounded-xl py-2 w-52 animate-fade-in">
                  <Link
                    to="/direct-hire"
                    className="block px-5 py-2.5 text-white/80 hover:bg-white/15 hover:text-white text-sm transition-colors"
                  >
                    Direct Hire
                  </Link>
                  <Link
                    to="/talent-on-demand"
                    className="block px-5 py-2.5 text-white/80 hover:bg-white/15 hover:text-white text-sm transition-colors"
                  >
                    Talent On-Demand
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/roles"
              className={`px-4 py-2 text-sm transition-colors ${
                isActive('/roles') ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Roles we source
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-2 text-sm transition-colors ${
                isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Pricing
            </Link>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown('resources')}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="text-white/80 hover:text-white px-4 py-2 text-sm flex items-center gap-1 transition-colors">
                Resources <ChevronDown />
              </button>
              {dropdown === 'resources' && (
                <div className="glass-card absolute top-full right-0 rounded-xl py-2 w-60 animate-fade-in">
                  <Link
                    to="/hiring-philippines"
                    className="block px-5 py-2.5 text-white/80 hover:bg-white/15 hover:text-white text-sm transition-colors"
                  >
                    Hiring in the Philippines
                  </Link>
                  <Link
                    to="/savings"
                    className="block px-5 py-2.5 text-white/80 hover:bg-white/15 hover:text-white text-sm transition-colors"
                  >
                    How much you can save
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/find-a-job"
              className="glass-button ml-3 text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              Find a Job
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* Mobile full-page overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 section-dark-tint backdrop-blur-xl flex flex-col pt-20 pb-10 animate-fade-in overflow-y-auto">
          <div className="flex flex-col flex-1 px-6">

            {/* Products & Services accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobileDropdown('products')}
                className="flex items-center justify-between w-full py-4 group"
              >
                <span className={`text-base font-medium transition-colors ${mobileDropdown === 'products' ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                  Services
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition-all duration-300 ${mobileDropdown === 'products' ? 'rotate-180 text-white' : 'text-white/40 group-hover:text-white/80'}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'products' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col pb-3 pl-2 gap-0.5">
                  <Link
                    onClick={closeMobile} to="/direct-hire"
                    className={`py-2.5 px-3 rounded-lg text-sm transition-colors ${isActive('/direct-hire') ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    Direct Hire
                  </Link>
                  <Link
                    onClick={closeMobile} to="/talent-on-demand"
                    className={`py-2.5 px-3 rounded-lg text-sm transition-colors ${isActive('/talent-on-demand') ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    Talent On-Demand
                  </Link>
                </div>
              </div>
            </div>

            {/* Roles */}
            <Link
              onClick={closeMobile} to="/roles"
              className={`flex items-center justify-between py-4 border-b border-white/10 text-base font-medium transition-colors group ${isActive('/roles') ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              Roles we source
            </Link>

            {/* Pricing */}
            <Link
              onClick={closeMobile} to="/pricing"
              className={`flex items-center justify-between py-4 border-b border-white/10 text-base font-medium transition-colors group ${isActive('/pricing') ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              Pricing
            </Link>

            {/* Resources accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobileDropdown('resources')}
                className="flex items-center justify-between w-full py-4 group"
              >
                <span className={`text-base font-medium transition-colors ${mobileDropdown === 'resources' ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                  Resources
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition-all duration-300 ${mobileDropdown === 'resources' ? 'rotate-180 text-white' : 'text-white/40 group-hover:text-white/80'}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'resources' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col pb-3 pl-2 gap-0.5">
                  <Link
                    onClick={closeMobile} to="/hiring-philippines"
                    className={`py-2.5 px-3 rounded-lg text-sm transition-colors ${isActive('/hiring-philippines') ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    Hiring in the Philippines
                  </Link>
                  <Link
                    onClick={closeMobile} to="/savings"
                    className={`py-2.5 px-3 rounded-lg text-sm transition-colors ${isActive('/savings') ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    How much you can save
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* CTA at bottom */}
          <div className="px-6 mt-8">
            <Link
              onClick={closeMobile} to="/find-a-job"
              className="glass-button block w-full text-white text-sm font-semibold text-center py-3.5 rounded-2xl active:scale-95"
            >
              Find a Job
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
