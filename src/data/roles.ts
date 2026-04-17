/**
 * roles.ts — Central data source for all role cards across the site.
 *
 * HOW TO ADD IMAGES (when ready):
 *   1. Put your image file inside:  public/images/roles/
 *   2. Set the `image` field below:  image: '/images/roles/your-file.jpg'
 *   3. The carousel will automatically use it instead of the placeholder.
 *
 * FUTURE API INTEGRATION:
 *   When you have a backend/API ready, replace the static arrays below with
 *   an API fetch call. Example pattern (React Query / SWR / plain fetch):
 *
 *   // api/rolesApi.ts
 *   export async function fetchRoles(category: string): Promise<RoleCard[]> {
 *     const res = await fetch(`/api/roles?category=${category}`)
 *     return res.json()
 *   }
 *
 *   Then in any page:
 *   const { data: roles } = useQuery(['roles', 'landing'], () => fetchRoles('landing'))
 *
 *   The `RoleCard` type below is your API response shape — keep it in sync
 *   with your backend schema.
 */

import type { RoleCard } from '../components/RoleCarousel'

// ─── Landing Page ────────────────────────────────────────────────────────────
export const landingRoles: RoleCard[] = [
  {
    title: 'Executive Assistant',
    desc: 'Hire trusted, experienced remote executive assistants from the Philippines, Latin America, and more.',
    savings: '86%',
    image: '/images/roles/executive-assistant.png'
  },
  {
    title: 'Sales Development Rep (SDR)',
    desc: 'Qualifies leads for the sales team and drives pipeline growth across regions.',
    savings: '86%',
    image: undefined, // TODO: '/images/roles/sales-development-rep.jpg'
  },
  {
    title: 'Product Manager',
    desc: 'Hire elite remote product managers from the Philippines, Latin America, and South Africa.',
    savings: '86%',
    image: undefined, // TODO: '/images/roles/product-manager.jpg'
  },
  {
    title: 'Social Media Manager',
    desc: "Axis' expert team of global recruiters sources, vets, and connects business leaders.",
    savings: '86%',
    image: undefined, // TODO: '/images/roles/social-media-manager.jpg'
  },
  {
    title: 'Account Executive',
    desc: 'Hire experienced remote Account Executives from the Philippines, Latin America, and South Africa.',
    savings: '86%',
    image: undefined, // TODO: '/images/roles/account-executive.jpg'
  },
  {
    title: 'Sales Manager',
    desc: 'Hire trusted, experienced remote sales managers from the Philippines, Latin America.',
    savings: '82%',
    image: undefined, // TODO: '/images/roles/sales-manager.jpg'
  },
]

// ─── Hiring PH Page ───────────────────────────────────────────────────────────
export const hiringPHRoles: RoleCard[] = [
  {
    title: 'Executive Assistant',
    desc: 'Hire trusted, experienced remote executive assistants from the Philippines.',
    savings: '86%',
    price: '$1,200/mo',
    image: undefined, // TODO: '/images/roles/executive-assistant.jpg'
  },
  {
    title: 'Customer Support Rep',
    desc: 'Fluent English-speaking customer support professionals ready to delight your customers.',
    savings: '85%',
    price: '$1,000/mo',
    image: undefined, // TODO: '/images/roles/customer-support-rep.jpg'
  },
  {
    title: 'Sales Development Rep',
    desc: 'Qualifies leads and drives pipeline from the Philippines with US timezone overlap.',
    savings: '82%',
    price: '$1,300/mo',
    image: undefined, // TODO: '/images/roles/sales-development-rep.jpg'
  },
  {
    title: 'Full-Stack Developer',
    desc: 'Expert developers with world-class technical skills and strong communication.',
    savings: '70%',
    price: '$2,200/mo',
    image: undefined, // TODO: '/images/roles/full-stack-developer.jpg'
  },
  {
    title: 'Social Media Manager',
    desc: 'Creative social media managers who understand US audiences and platforms.',
    savings: '80%',
    price: '$1,400/mo',
    image: undefined, // TODO: '/images/roles/social-media-manager.jpg'
  },
  {
    title: 'Graphic Designer',
    desc: 'Talented designers skilled in modern tools — Figma, Adobe Suite, Canva, and more.',
    savings: '78%',
    price: '$1,200/mo',
    image: undefined, // TODO: '/images/roles/graphic-designer.jpg'
  },
]

// ─── Savings Page ─────────────────────────────────────────────────────────────
export const savingsRoles: RoleCard[] = [
  {
    title: 'Remote Draftsman',
    desc: 'Hire remote draftsmen for up to 75% less from the Philippines, Latin America, and South Africa.',
    savings: '75%',
    price: '$1,400/mo',
    image: undefined, // TODO: '/images/roles/remote-draftsman.jpg'
  },
  {
    title: 'Construction Estimator',
    desc: 'Hire remote construction estimators for up to 70% less from global talent pools.',
    savings: '70%',
    price: '$1,800/mo',
    image: undefined, // TODO: '/images/roles/construction-estimator.jpg'
  },
  {
    title: 'Remote Architect',
    desc: 'Hire remote architects for up to 72% less from the Philippines and Latin America.',
    savings: '72%',
    price: '$1,800/mo',
    image: undefined, // TODO: '/images/roles/remote-architect.jpg'
  },
  {
    title: 'Portfolio Manager',
    desc: 'Hire remote portfolio managers for up to 68% less from top global talent.',
    savings: '68%',
    price: '$2,200/mo',
    image: undefined, // TODO: '/images/roles/portfolio-manager.jpg'
  },
  {
    title: 'Tax Specialist',
    desc: 'Hire expert remote Tax Specialists from Philippines, Latin America, and South Africa.',
    savings: '74%',
    price: '$1,600/mo',
    image: undefined, // TODO: '/images/roles/tax-specialist.jpg'
  },
  {
    title: 'Bookkeeper',
    desc: 'Hire remote bookkeepers skilled in QuickBooks, Xero, and more for a fraction of US costs.',
    savings: '82%',
    price: '$1,100/mo',
    image: undefined, // TODO: '/images/roles/bookkeeper.jpg'
  },
]
