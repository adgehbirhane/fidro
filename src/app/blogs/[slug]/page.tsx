import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowLeft, Share2, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogCard } from "@/sections/blogs/blog-card"
import { blogPosts } from "@/content/blogs"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Back Navigation */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-4">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Blog</span>
        </Link>
      </div>

      {/* Article */}
      <article className="flex-1">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero Image */}
            <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl overflow-hidden relative">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-6 left-6 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-6 right-6 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-border text-xs font-bold rounded-full">
                {post.category}
              </div>
            </div>

            {/* Article Header */}
            <div className="space-y-6">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}m read</span>
                </div>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.05] pb-6 border-b">
                {post.title}
              </h1>

            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Lead Paragraph */}
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                {post.excerpt}
              </p>
              
              {/* Dynamic Content Sections */}
              {post.content?.sections.map((section, index) => (
                <section key={index} className="space-y-6">
                  <h2 className="text-3xl font-black text-foreground mb-6 tracking-tight">{section.title}</h2>
                  
                  {section.type === 'list' && section.items ? (
                    <div className="bg-muted/30 rounded-2xl p-6 border">
                      <h3 className="font-bold text-foreground mb-4">Key Points:</h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : section.type === 'grid' && section.gridItems ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.gridItems.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                          <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 text-foreground leading-relaxed">
                      {section.content.map((paragraph, paraIndex) => (
                        <p key={paraIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

                          
              {/* Author */}
              <div className="flex items-center gap-4 pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="border-t pt-16 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="text-3xl font-black text-foreground tracking-tight">Related Articles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
