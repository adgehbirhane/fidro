import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { blogPosts } from "@/content/blogs"
import { useState } from "react"

interface BlogFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onFilterChange?: (filter: string) => void
}

export function BlogFilters({ 
  searchQuery, 
  onSearchChange,
  onFilterChange
}: BlogFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  
  // Calculate statistics from blog data
  const totalArticles = blogPosts.length
  const featuredArticles = blogPosts.filter(post => post.featured).length
  
  // Calculate "This Week" - posts from the current week
  const thisWeekArticles = blogPosts.filter(post => {
    const postDate = new Date(post.date)
    const today = new Date()
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay())
    startOfWeek.setHours(0, 0, 0, 0)
    
    return postDate >= startOfWeek
  }).length

  const filterOptions = [
    { id: "all", label: "All Articles", count: totalArticles },
    { id: "featured", label: "Featured", count: featuredArticles },
    { id: "thisWeek", label: "This Week", count: thisWeekArticles }
  ]

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  return (
    <div className="sticky top-18 space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 h-14 rounded-2xl border-2 bg-background focus-visible:ring-primary/20 focus-visible:border-primary text-base placeholder:text-muted-foreground/60"
        />
      </div>
      
      {/* Filter Tabs */}
      <div className="bg-muted/30 rounded-2xl p-6 space-y-4 border">
        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">
          <Filter className="h-4 w-4" />
          <span>Filter By</span>
        </div>
        <div className="flex flex-col gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleFilterClick(option.id)}
              className={`
                flex justify-between items-center w-full p-3 rounded-xl transition-all duration-200
                ${activeFilter === option.id 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-muted/50 text-foreground'
                }
              `}
            >
              <span className="text-sm font-medium">{option.label}</span>
              <span className={`
                text-xs px-2 py-1 rounded-full font-semibold
                ${activeFilter === option.id 
                  ? 'bg-primary-foreground/20 text-primary-foreground' 
                  : 'bg-primary/10 text-primary'
                }
              `}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
