import { useState } from 'react'

interface BlogPost {
  title: string
  tag: string
  date: string
  excerpt: string
}

const posts: BlogPost[] = [
  { title: 'How to Hire Remote Workers in the Philippines', tag: 'Hiring', date: 'Apr 2, 2026', excerpt: 'A comprehensive guide to finding, vetting, and onboarding remote talent from the Philippines.' },
  { title: '5 Benefits of Outsourcing to Latin America', tag: 'Outsourcing', date: 'Mar 28, 2026', excerpt: 'Latin America is quickly becoming the go-to region for US companies looking to outsource.' },
  { title: 'The Ultimate Guide to Remote Team Management', tag: 'Management', date: 'Mar 15, 2026', excerpt: 'Learn the best practices for managing a distributed team across multiple time zones.' },
  { title: 'Why South Africa is the Next Big Talent Hub', tag: 'Hiring', date: 'Mar 10, 2026', excerpt: 'South Africa offers a unique combination of English fluency, education, and cost savings.' },
  { title: 'How to Save 80% on Your Next Hire', tag: 'Cost Savings', date: 'Mar 5, 2026', excerpt: 'A deep dive into the economics of global hiring and how companies are cutting costs.' },
  { title: 'E-commerce Virtual Assistants: A Complete Guide', tag: 'E-commerce', date: 'Feb 28, 2026', excerpt: 'Everything you need to know about hiring VAs for your e-commerce business.' },
  { title: 'Building a Global Engineering Team from Scratch', tag: 'Technology', date: 'Feb 20, 2026', excerpt: 'Step-by-step process for sourcing, interviewing, and onboarding remote developers.' },
  { title: 'The Real Cost of Hiring in the US vs. Globally', tag: 'Cost Savings', date: 'Feb 15, 2026', excerpt: 'A detailed comparison of employment costs across different markets.' },
]

const GRADIENTS = [
  'linear-gradient(135deg, #3f3f46, #09090b)',
  'linear-gradient(135deg, #52525b, #000000)',
  'linear-gradient(135deg, #27272a, #09090b)',
  'linear-gradient(135deg, #18181b, #000000)',
  'linear-gradient(135deg, #27272a, #09090b)',
  'linear-gradient(135deg, #3f3f46, #000000)',
  'linear-gradient(135deg, #52525b, #09090b)',
  'linear-gradient(135deg, #18181b, #000000)',
]

export default function BlogPage() {
  const [tagFilter, setTagFilter] = useState<string | null>(null)
  const allTags = [...new Set(posts.map((p) => p.tag))]
  const filtered = tagFilter ? posts.filter((p) => p.tag === tagFilter) : posts

  return (
    <>
      {/* Header */}
      <section className="bg-brand-800 py-14 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-display">Blog</h1>
          <p className="text-white/55">Insights on global hiring, remote teams, and cost savings</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setTagFilter(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                !tagFilter
                  ? 'bg-black text-white border-black'
                  : 'border-gray-200 text-gray-600 hover:border-gray-500 hover:text-black'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setTagFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  tagFilter === tag
                    ? 'bg-black text-white border-black'
                    : 'border-gray-200 text-gray-600 hover:border-gray-500 hover:text-black'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <article
                key={post.title}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
              >
                <div className="h-48" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                  <div className="h-full flex items-center justify-center text-white/10 text-7xl font-bold font-display">
                    {post.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs border border-gray-300 text-black px-3 py-1 rounded-full font-medium">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg group-hover:text-black transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="bg-brand-800 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors inline-flex items-center gap-2">
              Load More <span className="text-lg leading-none">+</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
