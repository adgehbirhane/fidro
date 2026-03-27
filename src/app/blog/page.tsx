import Link from "next/link"

const blogPosts = [
  { slug: "streamlining-gym-operations", title: "How to Streamline Your Gym Operations in 2024", date: "March 20, 2024" },
  { slug: "boosting-member-retention", title: "Top 10 Strategies for Boosting Member Retention", date: "March 15, 2024" },
  { slug: "future-of-fitness-tech", title: "The Future of Fitness Technology: What to Expect", date: "March 10, 2024" },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, strategies, and news from the world of fitness and gym management.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group p-8 rounded-3xl border bg-background hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
              <p className="text-sm text-primary font-bold mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors mb-4">{post.title}</h2>
              <p className="text-muted-foreground mb-6">Learn more about this topic and how it can help your fitness business succeed in the modern landscape.</p>
              <span className="text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">Read more <span className="ml-1">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
