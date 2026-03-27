import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
        <Link href="/blog" className="text-sm font-bold text-primary mb-8 flex items-center hover:-translate-x-1 transition-transform">
          <span className="mr-1">←</span> Back to Blog
        </Link>
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight capitalize">
              {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive guide on how to successfully implement this strategy in your fitness center or boutique gym.
            </p>
          </div>
          <div className="prose prose-xl prose-primary dark:prose-invert max-w-none space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="text-3xl font-bold text-foreground">Key Strategies to Success</h2>
            <p>
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Understand your target audience and their unique needs.</li>
              <li>Implement modern management tools to automate repetitive tasks.</li>
              <li>Focus on building a community around your fitness center.</li>
              <li>Measure your progress regularly and adjust your strategy accordingly.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
