import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Star } from "lucide-react"
import { BlogPost } from "@/content/blogs"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blogs/${post.slug}`} 
      className="group block bg-background border-0 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-cyan-500/10 relative overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-border text-xs font-bold rounded-full">
          {post.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}m</span>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-xs font-medium text-foreground">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
            <span>Read</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </Link>
  )
}
