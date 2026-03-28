"use client"

import { useState, useMemo } from "react"
import { BlogHero } from "@/sections/blogs/blog-hero"
import { BlogCard } from "@/sections/blogs/blog-card"
import { BlogFilters } from "@/sections/blogs/blog-filters"
import { blogPosts } from "@/content/blogs"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      
      let matchesFilter = true
      if (activeFilter === "featured") {
        matchesFilter = post.featured
      } else if (activeFilter === "thisWeek") {
        const postDate = new Date(post.date)
        const today = new Date()
        const startOfWeek = new Date(today)
        startOfWeek.setDate(today.getDate() - today.getDay())
        startOfWeek.setHours(0, 0, 0, 0)
        matchesFilter = postDate >= startOfWeek
      }
      
      return matchesSearch && matchesFilter
    })
  }, [searchQuery, activeFilter])

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <BlogHero />
      
      <div className="flex-1 bg-gradient-to-b from-background via-background to-muted/20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <BlogFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onFilterChange={handleFilterChange}
              />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* All Posts */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-primary rounded-full" />
                    <h2 className="text-3xl font-black text-foreground tracking-tight">
                      {searchQuery !== "" ? "Search Results" : "All Articles"}
                    </h2>
                    {filteredPosts.length > 0 && (
                      <span className="text-lg font-normal text-muted-foreground">
                        ({filteredPosts.length})
                      </span>
                    )}
                  </div>
                </div>
                
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-6">
                      <div className="w-10 h-10 rounded bg-muted-foreground/20" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground">Try adjusting your search terms</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
