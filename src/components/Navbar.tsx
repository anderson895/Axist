import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from './Icons'

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Referral banner */}
      

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-brand-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl tracking-tight font-display italic font-bold">
            Somewhere
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
                Products & Services <ChevronDown />
              </button>
              {dropdown === 'products' && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-2xl py-2 w-52 animate-fade-in border border-gray-100">
                  <Link
                    to="/direct-hire"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-brand-50 hover:text-brand-700 text-sm transition-colors"
                  >
                    Direct Hire
                  </Link>
                  <Link
                    to="/talent-on-demand"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-brand-50 hover:text-brand-700 text-sm transition-colors"
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
            <Link
              to="/blog"
              className={`px-4 py-2 text-sm transition-colors ${
                isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Blog
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
                <div className="absolute top-full right-0 bg-white rounded-xl shadow-2xl py-2 w-60 animate-fade-in border border-gray-100">
                  <Link
                    to="/hiring-philippines"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-brand-50 hover:text-brand-700 text-sm transition-colors"
                  >
                    Hiring in the Philippines
                  </Link>
                  <Link
                    to="/savings"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-brand-50 hover:text-brand-700 text-sm transition-colors"
                  >
                    How much you can save
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/find-a-job"
              className="ml-3 bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-teal-500/25"
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-brand-900 border-t border-white/10 px-6 py-5 space-y-1 animate-fade-in">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">Products & Services</p>
            <Link onClick={closeMobile} to="/direct-hire" className="block text-white/75 hover:text-white text-sm py-2 pl-3">
              Direct Hire
            </Link>
            <Link onClick={closeMobile} to="/talent-on-demand" className="block text-white/75 hover:text-white text-sm py-2 pl-3">
              Talent On-Demand
            </Link>
            <div className="border-t border-white/10 my-3" />
            <Link onClick={closeMobile} to="/roles" className="block text-white/75 hover:text-white text-sm py-2">
              Roles we source
            </Link>
            <Link onClick={closeMobile} to="/pricing" className="block text-white/75 hover:text-white text-sm py-2">
              Pricing
            </Link>
            <Link onClick={closeMobile} to="/blog" className="block text-white/75 hover:text-white text-sm py-2">
              Blog
            </Link>
            <div className="border-t border-white/10 my-3" />
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">Resources</p>
            <Link onClick={closeMobile} to="/hiring-philippines" className="block text-white/75 hover:text-white text-sm py-2 pl-3">
              Hiring in the Philippines
            </Link>
            <Link onClick={closeMobile} to="/savings" className="block text-white/75 hover:text-white text-sm py-2 pl-3">
              How much you can save
            </Link>
            <div className="border-t border-white/10 my-3" />
            <Link
              onClick={closeMobile}
              to="/find-a-job"
              className="block bg-teal-600 text-white text-sm px-5 py-2.5 rounded-full font-semibold text-center mt-3"
            >
              Find a Job
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
