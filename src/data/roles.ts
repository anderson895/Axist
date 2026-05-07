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
    title: 'Executive Assistants',
    desc: 'Keep your schedule, inbox, and priorities organized so you can focus on high-impact decisions.',
    savings: '70%',
    image: '/images/roles/executive-assistant.png',
  },
  {
    title: 'Operations Coordinators',
    desc: 'Ensure your day-to-day processes run smoothly and nothing falls through the cracks.',
    savings: '70%',
    image: '/images/roles/sales-manager.png',
  },
  {
    title: 'Customer Support Specialists',
    desc: 'Deliver fast, reliable support that improves customer satisfaction and retention.',
    savings: '70%',
    image: '/images/roles/social-media-manager.png',
  },
  {
    title: 'Sales Development Representatives (SDRs)',
    desc: 'Qualify leads, manage outreach, and keep your pipeline consistently moving.',
    savings: '70%',
    image: '/images/roles/sales-development-rep.png',
  },
  {
    title: 'Marketing Assistants',
    desc: 'Execute campaigns, manage content, and support your marketing engine without delays.',
    savings: '70%',
    image: '/images/roles/account-executive.png',
  },
  {
    title: 'Project Coordinators',
    desc: 'Track tasks, align teams, and ensure projects are delivered on time.',
    savings: '70%',
    image: '/images/roles/product-manager.png',
  },
]

// ─── Hiring PH Page ───────────────────────────────────────────────────────────
export const hiringPHRoles: RoleCard[] = [
  {
    title: 'Executive Assistant',
    desc: 'Hire trusted, experienced remote executive assistants from the Philippines, Latin America, and more.',
    savings: '86%',
    image: '/images/roles/executive-assistant.png',
  },
  {
    title: 'Sales Development Rep (SDR)',
    desc: 'Qualifies leads for the sales team and drives pipeline growth across regions.',
    savings: '86%',
    image: '/images/roles/sales-development-rep.png',
  },
  {
    title: 'Product Manager',
    desc: 'Hire elite remote product managers from the Philippines, Latin America, and South Africa.',
    savings: '86%',
    image: '/images/roles/product-manager.png',
  },
  {
    title: 'Social Media Manager',
    desc: "Axis' expert team of global recruiters sources, vets, and connects business leaders.",
    savings: '86%',
    image: '/images/roles/social-media-manager.png',
  },
  {
    title: 'Account Executive',
    desc: 'Hire experienced remote Account Executives from the Philippines, Latin America, and South Africa.',
    savings: '86%',
    image: '/images/roles/account-executive.png',
  },
  {
    title: 'Sales Manager',
    desc: 'Hire trusted, experienced remote sales managers from the Philippines, Latin America.',
    savings: '82%',
    image: '/images/roles/sales-manager.png',
  },
]

// ─── Savings Page ─────────────────────────────────────────────────────────────
export const savingsRoles: RoleCard[] = [
  {
    title: 'Executive Assistant',
    desc: 'Hire trusted, experienced remote executive assistants from the Philippines, Latin America, and more.',
    savings: '86%',
    image: '/images/roles/executive-assistant.png',
  },
  {
    title: 'Sales Development Rep (SDR)',
    desc: 'Qualifies leads for the sales team and drives pipeline growth across regions.',
    savings: '86%',
    image: '/images/roles/sales-development-rep.png',
  },
  {
    title: 'Product Manager',
    desc: 'Hire elite remote product managers from the Philippines, Latin America, and South Africa.',
    savings: '86%',
    image: '/images/roles/product-manager.png',
  },
  {
    title: 'Social Media Manager',
    desc: "Axis' expert team of global recruiters sources, vets, and connects business leaders.",
    savings: '86%',
    image: '/images/roles/social-media-manager.png',
  },
  {
    title: 'Account Executive',
    desc: 'Hire experienced remote Account Executives from the Philippines, Latin America, and South Africa.',
    savings: '86%',
    image: '/images/roles/account-executive.png',
  },
  {
    title: 'Sales Manager',
    desc: 'Hire trusted, experienced remote sales managers from the Philippines, Latin America.',
    savings: '82%',
    image: '/images/roles/sales-manager.png',
  },
]
